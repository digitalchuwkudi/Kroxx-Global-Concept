const fs = require('fs');

let app = fs.readFileSync('src/App.tsx', 'utf8');

// 1. Navbar CTA
app = app.replace(
  /<a href={`tel:\$\{BRAND.phone.replace\(\/\\s\+\/g, ''\)}`} className="flex items-center gap-2 bg-\\[#0b132b\\] hover:bg-\\[#e93f45\\] hover:text-\\[#0b132b\\] text-white px-6 py-3 rounded-full font-bold text-sm transition-colors border-2 border-\\[#0b132b\\]">/,
  '<a href={`tel:${BRAND.phone.replace(/\\s+/g, \'\')}`} className="flex items-center gap-2 bg-[#0b132b] hover:bg-white hover:text-[#0b132b] text-white px-8 py-3.5 rounded-full font-black text-base uppercase tracking-wider transition-colors border-2 border-[#0b132b] shadow-md">'
);

// Navbar Icon
app = app.replace(
  /<Phone size={16} \/> <span>\{BRAND\.phoneFormatted\}<\/span>/,
  '<Phone size={20} className="text-[#e93f45]" /> <span>{BRAND.phoneFormatted}</span>'
);

// 2. Gradients replacement
app = app.replace(/const GRADIENT_BG = "bg-gradient-to-br from-\\[#0b132b\\] to-\\[#1e3a8a\\]";/g, 'const GRADIENT_BG = "bg-[#0b132b]";');

// 3. Hero Headline
app = app.replace(
  /<h1 className="text-\\[55px\\] sm:text-\\[70px\\] md:text-\\[85px\\] leading-tight md:leading-\\[1.1\\] font-black text-\\[#0b132b\\] uppercase tracking-tighter mb-8 xl:whitespace-nowrap">\s*Premium Gadget <br\/>\s*<span className="text-white">Sales & Repair<\/span> <br\/>\s*in <span className="relative inline-block mt-4 text-\\[#0b132b\\] z-10">/,
  `<h1 className="text-[55px] sm:text-[70px] md:text-[85px] leading-tight md:leading-[1.1] font-black text-white uppercase tracking-tighter mb-8 xl:whitespace-nowrap">
              Premium <br/>
              Gadget Sales & <br/>
              Repair in <br/>
              <span className="relative inline-block mt-4 text-white z-10">`
);

// 4. Hero AI Receptionist Button
app = app.replace(
  /className="bg-white text-\\[#0b132b\\] px-6 py-3 rounded-full font-bold text-base hover:bg-\\[#e93f45\\] transition-colors border-2 border-\\[#0b132b\\] flex items-center gap-3 w-full sm:w-auto justify-center shadow-lg"\s*>\s*AI Receptionist <Bot size={20}/,
  `className="bg-white text-[#0b132b] px-8 h-[68px] rounded-full font-black text-lg hover:bg-[#e93f45] transition-colors border-2 border-[#0b132b] flex items-center gap-3 w-full sm:w-auto justify-center shadow-lg uppercase"
                >
                  AI RECEPTIONIST <Bot size={24}`
);

// 5. Meet our Expert
// SectionHeading
app = app.replace(
  /<SectionHeading top="Meet Our Experts" title="Madudim Ikechukwu Kingsley" \/>/,
  '<SectionHeading top="Meet Our Expert" title="Madudim Ikechukwu Kingsley" />'
);

// Copy text replace
const expertOldCopyRegex = /<p className="text-2xl font-black text-\\[#60a5fa\\] mb-6 leading-snug drop-shadow-md">.*?Choose the masters\.<\/strong>\s*<\/p>/s;
const expertNewCopy = `<p className="text-2xl font-black text-[#60a5fa] mb-6 leading-snug drop-shadow-md">
              "We don't just fix devices; we engineer perfection. Your premium tech deserves premium care."
            </p>
            <p className="text-lg font-bold text-white mb-6 leading-relaxed">
              As the CEO & Master Technician, <span className="text-[#e93f45]">Madudim Ikechukwu Kingsley</span> brings over a decade of elite tech expertise right to the heart of Abuja. My mission is to restore your gadgets to factory-level perfection.
            </p>
            <p className="text-lg font-medium text-[#0b132b] mb-10 leading-relaxed bg-white p-6 rounded-2xl border-4 border-[#e93f45] shadow-[8px_8px_0px_0px_#e93f45] transform -rotate-1">
              Why settle for temporary fixes? From advanced logic board micro-soldering to flawless screen replacements, I specialize in top-tier restorations. Stop risking your expensive devices with guesswork—trust the real expert who guarantees surgical precision every single time. <strong>Your tech is my priority.</strong>
            </p>`;

app = app.replace(expertOldCopyRegex, expertNewCopy);

// 6. Skip the Queue -> Appointment section
app = app.replace(
  /<SectionHeading top="Skip the Queue" title="Book Premium Tech Care" align="center" \/>/,
  '<SectionHeading top="Skip the Queue" title="Book For Premium Service" align="center" />'
);
app = app.replace(
  /<h3 className="text-3xl font-black text-white uppercase tracking-tight">Fast Track<\/h3>/,
  '<h3 className="text-3xl font-black text-white uppercase tracking-tight">Fast Response</h3>'
);

app = app.replace(
  /<div className="w-16 h-16 rounded-full bg-\\[#e93f45\\] flex items-center justify-center border-4 border-\\[#0b132b\\]">/,
  '<div className="w-14 h-14 rounded-full bg-[#2563eb] flex items-center justify-center border-4 border-[#0b132b]">'
);

// 7. Footer 'Cooked by'
app = app.replace(
  /<div className="text-\\[#e93f45\\] font-black text-sm tracking-widest pl-4">Cooked by Digital Chukwudi<\/div>/,
  '<div className="text-white/60 font-medium text-xs tracking-wider pl-4">Cooked by Digital Chukwudi</div>'
);

fs.writeFileSync('src/App.tsx', app);
console.log("App.tsx fix 9 done");
