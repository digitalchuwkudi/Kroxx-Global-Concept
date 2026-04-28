const fs = require('fs');

let app = fs.readFileSync('src/App.tsx', 'utf8');

const heroOld = `<h1 className="text-[50px] sm:text-[70px] md:text-[85px] leading-[1.05] md:leading-[1.1] font-black text-white uppercase tracking-tighter mb-8 xl:whitespace-nowrap">
              Premium <br/>
              Gadget Sales & <br/>
              Repair in <br/>
              <span className="relative inline-block mt-4 text-white z-10">`;

const heroNew = `<h1 className="text-[50px] sm:text-[70px] md:text-[85px] leading-[1.05] md:leading-[1.1] font-black text-[#0b132b] uppercase tracking-tighter mb-8 xl:whitespace-nowrap">
              Premium <br/>
              Gadget Sales <br/>
              & Repair in <br/>
              <span className="relative inline-block mt-4 text-[#0b132b] z-10">`;

app = app.replace(heroOld, heroNew);

// Also let's fix the text "Experience lightning-fast service..." text from text-white to text-[#0b132b]
app = app.replace(
  '<p className="text-lg md:text-xl font-medium text-white mb-10 max-w-lg leading-relaxed mix-blend-color-burn">',
  '<p className="text-lg md:text-xl font-medium text-[#0b132b] mb-10 max-w-lg leading-relaxed">'
);


fs.writeFileSync('src/App.tsx', app);
console.log('Hero fixed!');
