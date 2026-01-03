import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distFolder = path.join(__dirname, 'dist');

console.log('🚀 Starting deployment...');

// 1. Check if dist exists
if (!fs.existsSync(distFolder)) {
  console.error('❌ Error: dist folder not found.');
  console.error('👉 Run "npm run build" before deploying.');
  process.exit(1);
}

try {
  // 2. Get the remote URL
  // We try to get it from the root repo
  let remoteUrl;
  try {
    remoteUrl = execSync('git config --get remote.origin.url', { encoding: 'utf8' }).trim();
  } catch (e) {
    console.error('❌ Error: Could not determine remote origin URL. Are you in a git repo?');
    process.exit(1);
  }

  console.log(`📦 Deploying to: ${remoteUrl}`);
  
  // 3. Move to dist folder
  process.chdir(distFolder);

  // 4. Initialize temporary git repo
  // This "nuke and pave" approach avoids ENAMETOOLONG errors from gh-pages cleaning logic
  execSync('git init');
  execSync('git checkout -b main');
  
  // 5. Add all files
  console.log('📄 Adding files...');
  execSync('git add -A');

  // 6. Commit
  // Config user is needed for CI or fresh envs, safe to set locally for this temp repo
  try {
    execSync('git config user.name "Deploy Bot"');
    execSync('git config user.email "deploy@taxheaven.com"');
  } catch (e) { /* ignore if already set */ }
  
  execSync('git commit -m "Deploy to GitHub Pages"');

  // 7. Push
  console.log('⬆️  Pushing to GitHub Pages...');
  execSync(`git push -f ${remoteUrl} gh-pages`);

  console.log('✅ Deployment successful!');
  console.log('🌍 Your site should be live at your GitHub Pages URL shortly.');

} catch (error) {
  console.error('❌ Deployment failed.');
  console.error(error.message);
  process.exit(1);
}
