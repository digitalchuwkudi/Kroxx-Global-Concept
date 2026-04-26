const fs = require('fs');

let chat = fs.readFileSync('src/Chatbot.tsx', 'utf8');

const oldBtn = `<div className={\`fixed bottom-24 right-8 z-50 flex flex-col items-center gap-2 \${isOpen ? 'hidden' : 'flex'}\`}>
        <div className="bg-white/90 backdrop-blur-sm border-2 border-transparent shadow-lg px-4 py-1.5 rounded-full pointer-events-none transform -translate-y-1">
          <span className="text-[#3b82f6] font-black text-xs md:text-[13px] uppercase tracking-widest drop-shadow-sm leading-none whitespace-nowrap">
            Need Help?
          </span>
        </div>
        <div className="relative">
          {/* Radar Pulse Effect */}
          <div className="absolute inset-0 bg-[#2563eb] rounded-full animate-ping opacity-60"></div>
          
          <button
            onClick={() => setIsOpen(true)}
            className="relative w-14 h-14 bg-white hover:bg-[#e93f45] hover:text-[#0b132b] text-[#2563eb] border-2 border-[#2563eb] shadow-lg rounded-full flex items-center justify-center transition-transform hover:scale-110 z-10"
            aria-label="Open Chat"
          >
            <MessageCircle size={30} strokeWidth={2.5} />
          </button>
        </div>
      </div>`;

const newBtn = `<div className={\`fixed bottom-20 right-6 z-50 flex items-center gap-3 \${isOpen ? 'hidden' : 'flex'}\`}>
        <div className="bg-[#60a5fa] border-2 border-[#1e3a8a] shadow-lg px-4 py-2 rounded-full pointer-events-none transform animate-pulse">
          <span className="text-white font-black text-[13px] uppercase tracking-widest leading-none whitespace-nowrap">
            Need Help?
          </span>
        </div>
        <div className="relative">
          {/* Radar Pulse Effect */}
          <div className="absolute inset-0 bg-[#3b82f6] rounded-full animate-ping opacity-75"></div>
          
          <button
            onClick={() => setIsOpen(true)}
            className="relative w-16 h-16 bg-[#2563eb] hover:bg-[#e93f45] hover:text-[#0b132b] text-white border-4 border-[#0b132b] shadow-xl rounded-full flex items-center justify-center transition-transform hover:scale-110 z-10"
            aria-label="Open Chat"
          >
            <MessageCircle size={32} strokeWidth={2.5} />
          </button>
        </div>
      </div>`;

if (chat.includes('Need Help?')) {
   // Replace via strings specifically so we don't depend on exact spacing everywhere if it fails
   let replaced = chat.replace(oldBtn, newBtn);
   if (replaced === chat) {
      // Regex fallback
      replaced = chat.replace(/<div className={\`fixed bottom-24 right-8 z-50.*?<\/div>\s*<\/div>\s*<\/div>/s, newBtn);
   }
   fs.writeFileSync('src/Chatbot.tsx', replaced);
   console.log("Chatbot updated!");
}
