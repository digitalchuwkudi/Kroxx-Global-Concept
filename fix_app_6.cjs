const fs = require('fs');
let app = fs.readFileSync('src/App.tsx', 'utf8');

// Gradients
app = app.replace(
  /const GRADIENT_BG = "bg-gradient-to-br from-\\[#0b132b\\][^\"]*";/g,
  'const GRADIENT_BG = "bg-gradient-to-br from-[#0b132b] to-[#1e3a8a]";'
);

app = app.replace(/bg-\\[#e0f2fe\\] border-y-4/g, 'bg-gradient-to-b from-[#e0f2fe] to-[#bae6fd] border-y-4');

// Meet Our Expert Text
app = app.replace(/title="Master Technicians"/g, 'title="Madudim Ikechukwu Kingsley"');

const oE = `<p className="text-xl font-bold text-white mb-6 leading-relaxed">
              Leading a dedicated team of certified professionals, we bring over a decade of elite tech expertise to every device we touch.
            </p>
            <p className="text-lg font-medium text-[#0b132b] mb-10 leading-relaxed bg-white/20 p-6 rounded-2xl border-2 border-[#0b132b]">
              We specialize in top-tier gadget restorations, from integrating advanced logic board diagnostics with precision hardware fixes, to seamless screen replacements and critical data recovery. Plus, with our fast nationwide courier and shipping service, premium tech care is always within your reach.
            </p>`;
const oE2 = `<p className="text-xl font-bold text-white mb-6 leading-relaxed">
              Led by CEO & Master Technician Madudim Ikechukwu Kingsley, our certified experts transform broken gadgets into pristine machines.
            </p>
            <p className="text-lg font-medium text-[#0b132b] mb-10 leading-relaxed bg-white/20 p-6 rounded-2xl border-2 border-[#0b132b]">
              Why settle for temporary fixes when you can get elite-level restorations? From complex logic board micro-soldering to flawless screen replacements, we ensure every repair meets global standards. With fast nationwide shipping, the best device care in Abuja is brought right to your doorstep. Don't risk your premium tech—trust the real experts.
            </p>`;
const nE = `<p className="text-2xl font-black text-[#60a5fa] mb-6 leading-snug drop-shadow-md">
              "Your device isn't just broken—it's waiting to be reborn. We don't just fix; we engineer perfection."
            </p>
            <p className="text-lg font-bold text-white mb-8 leading-relaxed">
              Led by CEO & Master Technician <span className="text-[#e93f45]">Madudim Ikechukwu Kingsley</span>, our certified squad brings over a decade of elite, global-standard expertise straight to Abuja.
            </p>
            <p className="text-lg font-medium text-[#0b132b] mb-10 leading-relaxed bg-white/90 p-6 rounded-2xl border-4 border-[#e93f45] shadow-[8px_8px_0px_0px_#e93f45] transform -rotate-1">
              Why settle for guesswork when you can have guaranteed, surgical-level precision? Whether it's advanced logic board micro-soldering, seamless screen restoration, or critical data recovery—we bring dead gadgets back to life. <strong>Don't compromise on your premium tech. Choose the masters.</strong>
            </p>`;
if (app.includes(oE)) {
  app = app.replace(oE, nE);
} else if (app.includes(oE2)) {
  app = app.replace(oE2, nE);
}

// Casing on 'cooked by'
app = app.replace(
  /<div className="text-\\[#e93f45\\] font-black text-sm tracking-widest pl-4">\s*Cooked by Digital Chukwudi\s*<\/div>/g,
  '<div className="text-[#e93f45] font-bold text-sm tracking-widest pl-4">Cooked by Digital Chukwudi</div>'
);
if (app.includes('tracking-widest pl-4">\n            Cooked by Digital Chukwudi')) {
   app = app.replace('tracking-widest pl-4">\n            Cooked by Digital Chukwudi\n          </div>', 'tracking-widest pl-4">Cooked by Digital Chukwudi</div>');
}

fs.writeFileSync('src/App.tsx', app);
