const fs = require('fs');

let content = fs.readFileSync('src/App.tsx', 'utf8');

// 1. Add Bot icon
if (!content.includes('Bot,')) {
    content = content.replace('ShoppingCart', 'ShoppingCart, Bot');
}

// 2. Modify Logo: 
// - remove filter (brightness-0 invert) so it's not white
// - change text to 'KROXX Global Concept' (white text)
// - enlarge image
const oldLogo = `<div className="flex items-center gap-3 select-none relative z-10">
    <img src="https://i.ibb.co/Fqb7DbWQ/Screenshot-20251021-152959-Gallery-removebg-preview.png" alt="Kroxx Logo" className="w-10 h-10 md:w-14 md:h-14 object-contain brightness-0 invert" />
    <div className="flex flex-col leading-none pt-1">
      <span className="font-black italic tracking-tighter text-2xl md:text-3xl text-white drop-shadow-md">
        KROXX
      </span>
      <span className="text-[9px] font-bold tracking-[0.2em] text-white uppercase mt-1">
        Gadgets & Repairs
      </span>
    </div>
  </div>`;

const newLogo = `<div className="flex items-center gap-3 select-none relative z-10">
    <img src="https://i.ibb.co/Fqb7DbWQ/Screenshot-20251021-152959-Gallery-removebg-preview.png" alt="Kroxx Logo" className="w-14 h-14 md:w-20 md:h-20 object-contain" />
    <div className="flex flex-col leading-none pt-1">
      <span className="font-black italic tracking-tighter text-2xl md:text-3xl text-white drop-shadow-md">
        KROXX
      </span>
      <span className="text-[9px] font-bold tracking-[0.2em] text-white uppercase mt-1">
        Global Concept
      </span>
    </div>
  </div>`;
content = content.replace(oldLogo, newLogo);

// 3. Navbar Sticky
content = content.replace('<nav className="absolute w-full z-50 top-0 left-0', '<nav className="fixed w-full z-50 top-0 left-0');

// 4. Hero Headline
const oldHeadline = `<h1 className="text-[55px] sm:text-[70px] md:text-[85px] leading-[0.95] font-black text-[#0b132b] uppercase tracking-tighter mb-8">
              Premium <br/> Gadget <br/>
              <span className="text-white">Sales & Repair</span>
            </h1>`;

const newHeadline = `<h1 className="text-[55px] sm:text-[70px] md:text-[85px] leading-[0.95] font-black text-[#0b132b] uppercase tracking-tighter mb-8 xl:whitespace-nowrap">
              Premium Gadget <br/>
              <span className="text-white">Sales & Repair</span> <br/>
              <span className="relative inline-block mt-4 text-[#0b132b] z-10">
                in Abuja
                <svg className="absolute -inset-4 w-[calc(100%+32px)] h-[calc(100%+32px)] text-[#e93f45] -z-10" viewBox="0 0 200 100" preserveAspectRatio="none" style={{ filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.2))' }}>
                  <path d="M 10,50 C 10,15 190,15 190,50 C 190,85 10,85 15,50" fill="none" stroke="currentColor" strokeWidth="8" strokeLinecap="round" strokeDasharray="500" strokeDashoffset="0" />
                </svg>
              </span>
            </h1>`;
content = content.replace(oldHeadline, newHeadline);

// 5. Hero CTAs (AI Receptionist + urgent text under it + Bot icon)
const oldCtas = `<div className="flex flex-wrap gap-4 w-full sm:w-auto">
              <a href={BRAND.whatsappUrl} target="_blank" rel="noopener noreferrer" className="bg-[#0b132b] text-white px-8 py-5 rounded-full font-black text-lg hover:bg-[#e93f45] hover:text-[#0b132b] transition-colors border-2 border-[#0b132b] flex items-center gap-3 w-full sm:w-auto justify-center uppercase shadow-lg">
                WhatsApp Booking <ArrowRight size={20} className="text-current" />
              </a>
              <button 
                onClick={() => {
                   const evt = new CustomEvent('open-chat');
                   window.dispatchEvent(evt);
                }}
                className="bg-white text-[#0b132b] px-8 py-5 rounded-full font-black text-lg hover:bg-[#e93f45] hover:text-[#0b132b] transition-colors border-2 border-[#0b132b] flex items-center gap-3 w-full sm:w-auto justify-center uppercase shadow-lg"
              >
                AI Assistance <Sparkles size={20} className="text-current" />
              </button>
            </div>`;

const newCtas = `<div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 w-full sm:w-auto">
              <a href={BRAND.whatsappUrl} target="_blank" rel="noopener noreferrer" className="bg-[#0b132b] text-white px-8 h-[68px] rounded-full font-black text-lg hover:bg-[#e93f45] hover:text-[#0b132b] transition-colors border-2 border-[#0b132b] flex items-center gap-3 w-full sm:w-auto justify-center uppercase shadow-lg">
                WhatsApp Booking <ArrowRight size={20} className="text-current" />
              </a>
              <div className="flex flex-col items-center sm:items-start gap-2 w-full sm:w-auto">
                <button 
                  onClick={() => {
                     const evt = new CustomEvent('open-chat');
                     window.dispatchEvent(evt);
                  }}
                  className="bg-white text-[#0b132b] px-8 h-[68px] rounded-full font-black text-lg hover:bg-[#e93f45] hover:text-[#0b132b] transition-colors border-2 border-[#0b132b] flex items-center gap-3 w-full sm:w-auto justify-center uppercase shadow-lg"
                >
                  AI Receptionist <Bot size={24} className="text-current" />
                </button>
                <div className="text-white text-[11px] font-black tracking-widest uppercase px-3 py-1 bg-[#e93f45] rounded-full shadow-sm animate-pulse flex items-center gap-1 w-full justify-center sm:justify-start sm:w-auto">
                  <span className="w-1.5 h-1.5 bg-white rounded-full"></span> 
                  Skip the wait - instant answers!
                </div>
              </div>
            </div>`;
content = content.replace(oldCtas, newCtas);

// 6. Footer Updates 
// - Change WhatsApp Us to real number + hover red
// - email hover red
content = content.replace(/className="hover:text-\[#2563eb\]">WhatsApp Us/g, 'className="hover:text-[#e93f45] font-extrabold transition-colors">{BRAND.phoneFormatted}');
content = content.replace(/className="hover:text-\[#2563eb\]">\{BRAND.email\}/g, 'className="hover:text-[#e93f45] font-extrabold transition-colors">{BRAND.email}');

fs.writeFileSync('src/App.tsx', content);

// Chatbot UI: change the blue button to white background with blue icon
let chatbotContent = fs.readFileSync('src/Chatbot.tsx', 'utf8');

// The line currently reads:
// className={`fixed bottom-24 right-8 w-14 h-14 bg-blue-600 hover:bg-blue-700 text-[#1e3a8a] rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-105 z-50 ${isOpen ? 'hidden' : 'flex'}`}

chatbotContent = chatbotContent.replace(
  'bg-blue-600 hover:bg-blue-700 text-[#1e3a8a]',
  'bg-white hover:bg-slate-100 text-[#2563eb] border-2 border-[#2563eb] shadow-[0_0_20px_rgba(37,99,235,0.2)]'
);

// Ensuring icon is fully blue on white bg
chatbotContent = chatbotContent.replace('<MessageCircle size={28} />', '<MessageCircle size={30} strokeWidth={2.5} />');

fs.writeFileSync('src/Chatbot.tsx', chatbotContent);
console.log('App.tsx and Chatbot.tsx updated successfully');
