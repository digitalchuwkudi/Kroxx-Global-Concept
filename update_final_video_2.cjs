const fs = require('fs');
let app = fs.readFileSync('src/App.tsx', 'utf8');

const oldVideo = `<motion.div 
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ duration: 0.8, ease: "easeOut" }}
             className="relative w-full h-[500px] md:h-[600px] rounded-[3rem] overflow-hidden shadow-2xl bg-[#1b6feb]"
          >
            <video 
              src="https://res.cloudinary.com/dx41voszq/video/upload/v1777436411/Transform_broken_phone_to_repaired_202604282107_c9fvlt.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover opacity-80 blur-[3px]"
            />
            {/* Gradient Overlay left to right */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#1b6feb] via-[#1b6feb]/20 to-transparent pointer-events-none" />
            
            {/* Soft Badge Overlay */}
            <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md rounded-3xl p-6 flex items-center justify-between shadow-[0_8px_30px_rgba(0,0,0,0.12)]">
              <div>
                <div className="text-4xl font-black text-[#1b6feb]">10k+</div>
                <div className="text-[#0b132b] font-bold text-sm tracking-widest uppercase mt-1">Fixed Gadgets</div>
              </div>
              <div className="w-14 h-14 rounded-full flex items-center justify-center shrink-0 bg-[#1b6feb] text-white shadow-lg">
                <Wrench size={24} />
              </div>
            </div>
          </motion.div>`;

const newVideo = `          <motion.div 
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ duration: 0.8, ease: "easeOut" }}
             className="relative w-full h-[500px] md:h-[600px] rounded-[3rem] overflow-hidden shadow-2xl bg-black"
          >
            <video 
              src="https://res.cloudinary.com/dx41voszq/video/upload/v1777440712/Transform_animation_broken_repai__202604282230_lad5pw.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            />
          </motion.div>`;

// Fallback regex if precise match fails:
app = app.replace(oldVideo, newVideo);
if(!app.includes(newVideo)) {
   app = app.replace(/<motion\.div\s+initial=\{\{\s*opacity:\s*0\s*\}\}\s+animate=\{\{\s*opacity:\s*1\s*\}\}\s+transition=[\s\S]*?<\/motion\.div>/, newVideo);
}

fs.writeFileSync('src/App.tsx', app);
console.log('done video replacement');
