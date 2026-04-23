const fs = require('fs');

let content = fs.readFileSync('src/App.tsx', 'utf8');

// 1. Logo Replacement
const oldLogo = `const Logo = () => (
  <div className="flex flex-col select-none relative z-10 leading-none">
    <div className="flex items-baseline font-black italic tracking-tighter text-3xl md:text-3xl">
      <span className="text-[#0b132b] drop-shadow-sm">KR</span>
      <span className="text-white drop-shadow-sm">OXX</span>
    </div>
    <div className="text-[9px] font-bold tracking-[0.2em] text-[#0b132b] uppercase">
      Gadgets & Repairs
    </div>
  </div>
);`;

// The logo text should be white and next to the image
const newLogo = `const Logo = () => (
  <div className="flex items-center gap-3 select-none relative z-10">
    <img src="https://i.ibb.co/Fqb7DbWQ/Screenshot-20251021-152959-Gallery-removebg-preview.png" alt="Kroxx Logo" className="w-10 h-10 md:w-14 md:h-14 object-contain brightness-0 invert" />
    <div className="flex flex-col leading-none pt-1">
      <span className="font-black italic tracking-tighter text-2xl md:text-3xl text-white drop-shadow-md">
        KROXX
      </span>
      <span className="text-[9px] font-bold tracking-[0.2em] text-white uppercase mt-1">
        Gadgets & Repairs
      </span>
    </div>
  </div>
);`;
content = content.replace(oldLogo, newLogo);

// 2. Hero CTA Buttons Update
const oldHeroCtaArea = `<div className="flex flex-wrap gap-4 w-full sm:w-auto">
              <a href="#appointment" className="bg-[#0b132b] text-white px-8 py-5 rounded-full font-black text-lg hover:bg-white hover:text-[#0b132b] transition-colors border-2 border-[#0b132b] flex items-center gap-3 w-full sm:w-auto justify-center uppercase">
                Book a Repair <ArrowRight size={20} className={ICON_COLOR} />
              </a>
            </div>`;

const newHeroCtaArea = `<div className="flex flex-wrap gap-4 w-full sm:w-auto">
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
content = content.replace(oldHeroCtaArea, newHeroCtaArea);

// 3. Global Hover Styles Update (hover to red color bg, text stays blue)
// We'll replace standard hover styles for links and buttons to turn RED (#e93f45) background, and BLUE text (#0b132b or #2563eb depending on element)

// Navbar links
content = content.replace(/hover:text-\[#2563eb\] transition-colors/g, "hover:bg-[#e93f45] hover:text-[#0b132b] px-3 py-1 -ml-3 rounded-full transition-colors");

// Phone headers and buttons that were hover:bg-white
content = content.replace(/hover:bg-white hover:text-\[#0b132b\]/g, "hover:bg-[#e93f45] hover:text-[#0b132b]");

// Mobile menu texts
content = content.replace(/hover:text-\[#0b132b\] uppercase/g, "hover:bg-[#e93f45] hover:text-[#0b132b] px-4 py-2 rounded-full uppercase");

// Footer phone button
content = content.replace(/hover:border-\[#0b132b\]/g, "hover:border-[#0b132b]");

// Footer social links
content = content.replace(/hover:bg-\[#e93f45\]/g, "hover:bg-[#e93f45]"); // already red, but verify text
content = content.replace(/hover:bg-\[#2563eb\]/g, "hover:bg-[#e93f45] hover:text-[#0b132b]"); 

// Form button
content = content.replace(/bg-\[#0b132b\] hover:bg-\[#2563eb\]/g, "bg-[#0b132b] hover:bg-[#e93f45] hover:text-[#0b132b]");

fs.writeFileSync('src/App.tsx', content);
