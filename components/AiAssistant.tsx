import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";
import { ChatMessage } from '../types';

export const AiAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Hello. I am the digital assistant for Nasir Uddin Nayon. How can I help you learn more about his tax consultancy services today?', timestamp: new Date() }
  ]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSendMessage = async () => {
    if (!inputText.trim() || isLoading) return;

    const userMsg: ChatMessage = { role: 'user', text: inputText, timestamp: new Date() };
    setMessages(prev => [...prev, userMsg]);
    setInputText('');
    setIsLoading(true);

    try {
      if (!process.env.API_KEY) {
        throw new Error("API Key not configured");
      }

      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: [
          {
            role: 'user',
            parts: [{ text: `You are the digital assistant for "Nasir Uddin Nayon", a specialized Tax Consultant Lawyer operating under the brand "Tax Heaven Valley".
            Your tone is professional, respectful, personal, and formal.
            
            Key Information:
            - Nasir specializes in Tax Controversy, International Tax, and Estate Planning.
            - He operates personally, providing one-on-one service (not a large firm).
            - He is based in Dhaka but serves clients globally.
            
            Your goal is to briefly answer questions about Nasir's services and encourage the user to schedule a personal consultation via the contact form.
            
            Strict Rules:
            1. Do NOT give specific legal or tax advice.
            2. If asked for advice, refer them to schedule a consultation with Nasir.
            3. Keep responses under 50 words.
            4. Refer to him as "Mr. Nayon" or "Nasir".
            
            User Query: ${inputText}` }]
          }
        ]
      });

      const text = response.text || "I apologize, but I am unable to process your request at this moment. Please leave a message in the contact form.";
      
      setMessages(prev => [...prev, { role: 'model', text: text, timestamp: new Date() }]);
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { 
        role: 'model', 
        text: "I am currently offline. Please use the contact form to reach Nasir directly.", 
        timestamp: new Date() 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end font-sans">
      {isOpen && (
        <div className="bg-paper-50 rounded-lg shadow-2xl w-[90vw] md:w-96 mb-4 border border-lawyer-green/20 overflow-hidden flex flex-col animate-fade-in-up ring-1 ring-black/5" style={{ maxHeight: '500px', height: '60vh' }}>
          {/* Header */}
          <div className="bg-lawyer-green p-4 flex justify-between items-center border-b border-lawyer-darkGreen">
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 rounded-full bg-gold-500 animate-pulse"></div>
              <div>
                 <h3 className="text-paper-50 font-serif font-bold text-sm">Nasir's Assistant</h3>
                 <p className="text-paper-200 text-[10px] uppercase tracking-wider">Tax Heaven Valley</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-paper-200 hover:text-white transition-colors">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div className="flex-grow overflow-y-auto p-4 bg-paper-100 space-y-4 scrollbar-thin">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div 
                  className={`max-w-[85%] p-3 text-sm leading-relaxed shadow-sm ${
                    msg.role === 'user' 
                      ? 'bg-lawyer-green text-paper-50 rounded-lg rounded-tr-none' 
                      : 'bg-white border border-lawyer-green/10 text-lawyer-darkGreen rounded-lg rounded-tl-none'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white border border-lawyer-green/10 p-4 rounded-lg rounded-tl-none shadow-sm flex space-x-1">
                  <div className="w-1.5 h-1.5 bg-lawyer-green rounded-full animate-bounce"></div>
                  <div className="w-1.5 h-1.5 bg-lawyer-green rounded-full animate-bounce delay-75"></div>
                  <div className="w-1.5 h-1.5 bg-lawyer-green rounded-full animate-bounce delay-150"></div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 bg-white border-t border-paper-200">
            <div className="flex space-x-2">
              <input 
                type="text" 
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Type your question..."
                className="flex-grow px-4 py-2 border border-paper-200 rounded-md text-sm focus:outline-none focus:border-lawyer-green focus:ring-1 focus:ring-lawyer-green transition-all bg-paper-50"
              />
              <button 
                onClick={handleSendMessage}
                disabled={isLoading}
                className="bg-lawyer-green text-paper-50 p-2.5 rounded-md hover:bg-gold-600 transition-colors disabled:opacity-50 shadow-md"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-lawyer-green hover:bg-gold-600 text-paper-50 p-4 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 group flex items-center justify-center border-2 border-paper-50/20"
      >
        {isOpen ? (
           <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
           </svg>
        ) : (
          <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        )}
      </button>
    </div>
  );
};