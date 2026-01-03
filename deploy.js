import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distFolder = path.join(__dirname, 'dist');

console.log('🚀 Starting deployment...');

if (!fs.existsSync(distFolder)) {
  console.error('❌ Error: dist folder not found.');
  console.error('👉 Run "npm run build" before deploying.');
  process.exit(1);
}

try {
  let remoteUrl;
  try {
    remoteUrl = execSync('git config --get remote.origin.url', { encoding: 'utf8' }).trim();
  } catch (e) {
    console.error('❌ Error: Could not determine remote origin URL.');
    process.exit(1);
  }

  console.log(`📦 Deploying to: ${remoteUrl}`);
  process.chdir(distFolder);

  // --- SPA ROUTING FIX FOR GITHUB PAGES ---
  // GitHub Pages creates a 404 for paths like /contact.
  // By copying index.html to 404.html, GitHub serves the React app instead of an error.
  // The React Router then takes over and renders the correct page.
  if (fs.existsSync('index.html')) {
    fs.copyFileSync('index.html', '404.html');
    console.log('✨ Generated 404.html to handle SPA routing (e.g. /contact)');
  }
  // ----------------------------------------

  if (fs.existsSync('.git')) {
    fs.rmSync('.git', { recursive: true, force: true });
  }

  execSync('git init');
  execSync('git checkout -B gh-pages');
  console.log('📄 Adding files...');
  execSync('git add -A');

  try {
    execSync('git config user.name "Deploy Bot"');
    execSync('git config user.email "deploy@taxheaven.com"');
  } catch (e) {}
  
  execSync('git commit -m "Deploy to GitHub Pages"');
  console.log('⬆️  Pushing to GitHub Pages...');
  execSync(`git push -f ${remoteUrl} gh-pages`);

  console.log('✅ Deployment successful!');
} catch (error) {
  console.error('❌ Deployment failed.');
  console.error(error.message);
  process.exit(1);
}