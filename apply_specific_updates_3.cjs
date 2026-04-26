const fs = require('fs');

let appContent = fs.readFileSync('src/App.tsx', 'utf8');

appContent = appContent.replace(/const BLUE_BG = "bg-\\[#2563eb\\]";/, 'const BLUE_BG = "bg-[#2563eb]";\nconst GRADIENT_BG = "bg-gradient-to-br from-[#0b132b] via-[#2563eb] to-[#0ea5e9]";');
appContent = appContent.replace(/className={\`\\\${BLUE_BG} pt-40 md:pt-52/g, 'className={`${GRADIENT_BG} pt-40 md:pt-52');
appContent = appContent.replace(/\\\${SECTION_PADDING} \\\${BLUE_BG}/g, '${SECTION_PADDING} ${GRADIENT_BG}');
appContent = appContent.replace(/className={\`\\\${DARK_BG} pt-24 pb-8/g, 'className={`${GRADIENT_BG} pt-24 pb-8');

appContent = appContent.replace(/<nav className="absolute w-full z-50 top-0 left-0 pt-6 px-4 md:px-8">/, '<nav className="fixed w-full z-50 top-0 left-0 pt-6 px-4 md:px-8">');

const oldFooterSig = `<div className="bg-[#e93f45] text-[#0b132b] px-6 py-2 rounded-full font-black uppercase tracking-widest border-2 border-[#0b132b] shadow-md">
            Cooked by Digital Chukwudi
          </div>`;
const newFooterSig = `<div className="text-[#e93f45] font-black text-xs uppercase tracking-widest">
            Cooked by Digital Chukwudi
          </div>`;
appContent = appContent.replace(oldFooterSig, newFooterSig);

appContent = appContent.replace(/text-\\[#2563eb\\]\\/20/g, 'text-[#e93f45]/20');

appContent = appContent.replace(/FAST GADGET REPAIRS • ORIGINAL PARTS • PREMIUM DEVICE SALES • 90-DAY WARRANTY • /g, 'FAST GADGET REPAIRS • ORIGINAL PARTS • PREMIUM DEVICE SALES • 90-DAY WARRANTY • NATIONWIDE COURIER & SHIPPING • FAST DELIVERY • ');

const oldExpertContent = `<p className="text-xl font-bold text-white mb-6 leading-relaxed">
              Led by Master Technician Madudim Ikechukwu Kingsley, we bring over 10 years of elite expertise to every repair.
            </p>
            <p className="text-lg font-medium text-[#0b132b] mb-10 leading-relaxed bg-white/20 p-6 rounded-2xl border-2 border-[#0b132b]">
              Specializing in Apple and Samsung products, Kingsley and his team deliver unparalleled precision and care. With a decade of hands-on experience mastering complex logic board repairs and screen restorations, you can trust that your devices are in the safest hands in Abuja.
            </p>`;
const newExpertContent = `<p className="text-xl font-bold text-white mb-6 leading-relaxed">
              Leading a dedicated team of certified professionals, we bring over a decade of elite tech expertise to every device we touch.
            </p>
            <p className="text-lg font-medium text-[#0b132b] mb-10 leading-relaxed bg-white/20 p-6 rounded-2xl border-2 border-[#0b132b]">
              We specialize in top-tier gadget restorations, from integrating advanced logic board diagnostics with precision hardware fixes, to seamless screen replacements and critical data recovery. Plus, with our fast nationwide courier and shipping service, premium tech care is always within your reach.
            </p>`;
appContent = appContent.replace(oldExpertContent, newExpertContent);
appContent = appContent.replace(/title="Madudim Ikechukwu Kingsley"/, 'title="Master Technicians"');

const oldHeroCTA = `<button 
                onClick={() => {
                   const evt = new CustomEvent('open-chat');
                   window.dispatchEvent(evt);
                }}
                className="bg-white text-[#0b132b] px-8 py-5 rounded-full font-black text-lg hover:bg-[#e93f45] hover:text-[#0b132b] transition-colors border-2 border-[#0b132b] flex items-center gap-3 w-full sm:w-auto justify-center uppercase shadow-lg"
              >
                AI Assistance <Sparkles size={20} className="text-current" />
              </button>`;
const newHeroCTA = `<div className="flex flex-col sm:items-center w-full sm:w-auto gap-2 mt-4 sm:mt-0">
              <button 
                onClick={() => {
                   const evt = new CustomEvent('open-chat');
                   window.dispatchEvent(evt);
                }}
                className="bg-white text-[#0b132b] px-8 py-5 rounded-full font-black text-lg hover:bg-[#e93f45] hover:text-[#0b132b] transition-colors border-2 border-[#0b132b] flex items-center gap-3 w-full w-auto justify-center uppercase shadow-lg"
              >
                AI Receptionist <PhoneCall size={20} className="text-current" />
              </button>
              <span className="text-[#e93f45] text-xs font-bold uppercase tracking-widest sm:ml-0 bg-white/90 px-3 py-1 rounded-full border border-[#0b132b] text-center w-auto self-center lg:self-start">
                Online 24/7 • Instant Reply
              </span>
            </div>`;
appContent = appContent.replace(oldHeroCTA, newHeroCTA);

fs.writeFileSync('src/App.tsx', appContent);

let chatContent = fs.readFileSync('src/Chatbot.tsx', 'utf8');

const oldChatBtn = `<button
        onClick={() => setIsOpen(true)}
        className={\`fixed bottom-24 right-8 w-14 h-14 bg-white hover:bg-slate-100 text-[#2563eb] border-2 border-[#2563eb] shadow-[0_0_20px_rgba(37,99,235,0.2)] rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-105 z-50 \${isOpen ? 'hidden' : 'flex'}\`}
        aria-label="Open Chat"
        title="click if you need help"
      >
        <MessageCircle size={30} strokeWidth={2.5} />
      </button>`;
const newChatBtn = `<div className={\`fixed bottom-24 right-8 z-50 flex items-center gap-3 \${isOpen ? 'hidden' : 'flex'}\`}>
        <div className="bg-white border-2 border-[#2563eb] px-4 py-2 rounded-full shadow-lg">
          <span className="text-[#3b82f6] font-black text-[13px] uppercase tracking-widest">
            Need Help?
          </span>
        </div>
        <button
          onClick={() => setIsOpen(true)}
          className="w-14 h-14 bg-white hover:bg-[#e93f45] hover:text-[#0b132b] text-[white] bg-[#2563eb] border-2 border-[#2563eb] shadow-lg rounded-full flex items-center justify-center transition-transform hover:scale-105"
          aria-label="Open Chat"
        >
          <MessageCircle size={30} strokeWidth={2.5} />
        </button>
      </div>`;
      
chatContent = chatContent.replace(oldChatBtn, newChatBtn);
fs.writeFileSync('src/Chatbot.tsx', chatContent);

console.log("Updates applied successfully.");
