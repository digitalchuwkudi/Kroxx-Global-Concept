const fs = require('fs');
let app = fs.readFileSync('src/App.tsx', 'utf8');

// remove 10k fixed gadgets and badge from video section
const oldVideoBlock = /<motion\.div\s+initial=\{\{.*?id="services"/s;

const match = app.match(/(<motion\.div.*?<\/motion\.div>).*?(<\/div>\s*<\/div>\s*<\/header>\s*const Services)/s);

if (match && match[1]) {
  const newVideoBlock = `<motion.div 
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ duration: 0.8, ease: "easeOut" }}
             className="relative w-full h-[500px] md:h-[600px] rounded-[3rem] overflow-hidden shadow-2xl bg-[#0b132b]"
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
          app = app.replace(match[1], newVideoBlock);
}

fs.writeFileSync('src/App.tsx', app);
console.log('done video replace');
