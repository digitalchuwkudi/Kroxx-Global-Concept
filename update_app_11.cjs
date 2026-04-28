const fs = require('fs');

let app = fs.readFileSync('src/App.tsx', 'utf8');

// 1. Navbar
app = app.replace(
  /<a href={`tel:\$\{BRAND.phone.replace\(\/\\s\+\/g, ''\)}`} className="flex items-center gap-2 bg-\\[#0b132b\\] hover:bg-\\[#e93f45\\] hover:text-\\[#0b132b\\] text-white px-6 py-3 rounded-full font-bold text-sm transition-colors border-2 border-\\[#0b132b\\]">/,
  '<a href={`tel:${BRAND.phone.replace(/\\s+/g, \'\')}`} className="flex items-center gap-2 bg-[#0b132b] hover:bg-white hover:text-[#0b132b] text-white px-8 py-4 rounded-full font-black text-base transition-colors border-2 border-[#0b132b] shadow-md">'
);
app = app.replace(
  /<Phone size=\{16\} \/>/g,
  '<Phone size={20} className="text-[#60a5fa] animate-pulse" />'
);

// 2. Gradients -> Light
app = app.replace(/const GRADIENT_BG = "bg-\\[#0b132b\\]";/g, 'const GRADIENT_BG = "bg-[#e0f2fe]";');
app = app.replace(/const DARK_BG = "bg-\\[#0b132b\\]";/g, 'const DARK_BG = "bg-[#e0f2fe]";');

// 3. Hero layout
app = app.replace(
  /<h1 className="text-\\[50px\\] sm:text-\\[70px\\] md:text-\\[85px\\] leading-\\[1.05\\] md:leading-\\[1.1\\] font-black text-white uppercase tracking-tighter mb-8 xl:whitespace-nowrap">\s*Premium <br\/>\s*Gadget Sales & <br\/>\s*Repair in <br\/>\s*<span className="relative inline-block mt-4 text-white z-10">/,
  `<h1 className="text-[50px] sm:text-[70px] md:text-[85px] leading-[1.05] md:leading-[1.1] font-black text-[#0b132b] uppercase tracking-tighter mb-8 xl:whitespace-nowrap">
              Premium <br/>
              Gadget Sales <br/>
              & Repair in <br/>
              <span className="relative inline-block mt-4 text-[#0b132b] z-10">`
);

app = app.replace(
  /<p className="text-lg md:text-xl font-medium text-white mb-10 max-w-lg leading-relaxed mix-blend-color-burn">/g,
  '<p className="text-lg md:text-xl font-medium text-[#0b132b] mb-10 max-w-lg leading-relaxed">'
);

// Hero Button
app = app.replace(
  /className="bg-white text-\\[#0b132b\\] px-6 py-3 rounded-full font-bold text-base hover:bg-\\[#e93f45\\] transition-colors border-2 border-\\[#0b132b\\] flex items-center gap-3 w-full sm:w-auto justify-center shadow-lg"/g,
  'className="bg-white text-[#0b132b] px-8 py-0 h-[68px] rounded-full font-black text-lg hover:bg-[#e93f45] transition-colors border-2 border-[#0b132b] flex items-center gap-3 w-full sm:w-auto justify-center shadow-lg uppercase"'
);
app = app.replace(
  /AI Receptionist <Bot size=\{20\} className="text-current" \/>/g,
  'AI RECEPTIONIST <Bot size={24} className="text-current" />'
);

// 4. Meet Our Expert
app = app.replace(
  /className="absolute inset-0 bg-\\[#0b132b\\] rounded-3xl translate-x-4 translate-y-4/g,
  'className="absolute inset-0 bg-[#2563eb] rounded-3xl translate-x-4 translate-y-4' // make Drop shadow blue so it contrast on light blue
);

const expertOld = /<SectionHeading top="Meet Our Expert" title="Madudim Ikechukwu Kingsley" \/>.*?90-Day Guarantee on Parts\s*<\/div>\s*<\/div>/s;

const expertNew = `<SectionHeading top="Meet Our Expert" title="Madudim Ikechukwu Kingsley" />
            
            <p className="text-xl font-black text-[#e93f45] mb-6 leading-relaxed tracking-widest uppercase">
              Lead Technician & Founder
            </p>
            <p className="text-2xl font-black text-[#2563eb] mb-8 leading-snug drop-shadow-sm">
              “Every device we handle matters — because we know how important it is to you.”
            </p>
            <p className="text-lg font-bold text-[#0b132b] mb-6 leading-relaxed">
              With over 10 years of hands-on experience, Kingsley leads a team focused on sales of phone and laptop gadgets, precision repairs, honest diagnostics, and long-term solutions — not temporary fixes.
            </p>
            <p className="text-lg font-bold text-[#0b132b] mb-10 leading-relaxed bg-white/60 p-6 rounded-2xl border-4 border-[#2563eb]">
              From screen replacements to advanced board repairs and data recovery, we make sure your device is restored properly, the first time.
            </p>
            
            <div className="flex flex-col gap-4 text-[#0b132b] font-black text-xl">
              <div className="flex items-center gap-4 bg-white p-4 rounded-full border-2 border-[#0b132b]">
                <IconBox icon={CheckCircle2} className="w-10 h-10 border-2 border-white" /> No guesswork
              </div>
              <div className="flex items-center gap-4 bg-white p-4 rounded-full border-2 border-[#0b132b]">
                <IconBox icon={CheckCircle2} className="w-10 h-10 border-2 border-white" /> Clear communication
              </div>
              <div className="flex items-center gap-4 bg-white p-4 rounded-full border-2 border-[#0b132b]">
                <IconBox icon={CheckCircle2} className="w-10 h-10 border-2 border-white" /> Results you can rely on
              </div>
            </div>`;

app = app.replace(expertOld, expertNew);

// 5. App Return (adding WhyChooseUs)
if (!app.includes('<WhyChooseUs />')) {
  app = app.replace(
    /<About \/>\s*<HowItWorks \/>/,
    '<About />\n        <WhyChooseUs />\n        <HowItWorks />'
  );
}

// 6. Footer Dark Texts
const footerOld1 = /<h2 className="text-\\[50px\\] md:text-\\[80px\\] font-black text-white leading-\\[0.9\\] uppercase tracking-tighter mb-8">/g;
app = app.replace(footerOld1, '<h2 className="text-[50px] md:text-[80px] font-black text-[#0b132b] leading-[0.9] uppercase tracking-tighter mb-8">');

const footerOld2 = /<div className="space-y-6 text-white font-bold">/g;
app = app.replace(footerOld2, '<div className="space-y-6 text-[#0b132b] font-bold">');

const footerOld3 = /<div className="text-\\[#e93f45\\] font-black text-sm tracking-widest pl-4">Cooked by Digital Chukwudi<\/div>/g;
app = app.replace(footerOld3, '<div className="text-white text-[10px] sm:text-[11px] font-bold tracking-widest px-4 py-2 bg-[#0b132b] rounded-full">Cooked by Digital Chukwudi</div>');

const footerOld4 = /<div className="text-white\/60 font-medium text-xs tracking-wider pl-4">Cooked by Digital Chukwudi<\/div>/g;
app = app.replace(footerOld4, '<div className="text-white text-[10px] sm:text-[11px] font-bold tracking-widest px-4 py-2 bg-[#0b132b] rounded-full">Cooked by Digital Chukwudi</div>');


// 7. Icon Colors inside footer links / contact:
app = app.replace(
  /const ICON_COLOR = "text-\\[#ffffff\\]";/g,
  'const ICON_COLOR = "text-[#e93f45]";'
);

// 8. Fix HowItWorks to not overlap
app = app.replace(/<SectionHeading top="Working Process" title="Transparent Steps" light \/>/g, '<SectionHeading top="Working Process" title="Transparent Steps" />');

// 9. Fix Appointment Background to avoid identical blocks
app = app.replace(/bg-\\[#f8f9fa\\] border-t-4 border-\\[#0b132b\\]/g, 'bg-[#e0f2fe] border-t-4 border-[#0b132b]');

fs.writeFileSync('src/App.tsx', app);
console.log("App.tsx Updated Pass 11!");
