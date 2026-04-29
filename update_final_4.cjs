const fs = require('fs');
let app = fs.readFileSync('src/App.tsx', 'utf8');

// The grid for "appointment"
const oldContact = `<div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-start mt-12">
          
          {/* Booking Option (Form) */}
          <div className={\`bg-white rounded-3xl p-8 md:p-10 transform hover:scale-[1.02] transition-transform duration-300 relative border-4 border-[#0b132b] shadow-[8px_8px_0px_0px_#1b6feb]\`}>`;

const newContact = `<div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-stretch mt-12">
          
          {/* Booking Option (Form) */}
          <div className={\`bg-white rounded-3xl p-8 md:p-10 transform hover:scale-[1.02] transition-transform duration-300 relative border-4 border-[#0b132b] shadow-[8px_8px_0px_0px_#1b6feb] flex flex-col h-full\`}>`;

app = app.replace(oldContact, newContact);


const oldContactSide = `{/* Contact & Location */}
          <div className="bg-white rounded-3xl p-8 md:p-10 border-4 border-[#0b132b] shadow-[8px_8px_0px_0px_#1b6feb] flex flex-col items-center text-center">
            <h3 className="text-2xl font-black text-[#0b132b] uppercase mb-8 pb-4 border-b-2 border-slate-100">
              Direct Contact & Location
            </h3>
            
            <div className="space-y-12">
              <div className="flex flex-col items-center text-center gap-3">
                 <div className="w-16 h-16 bg-[#0b132b] rounded-full flex items-center justify-center shrink-0 shadow-[4px_4px_0px_#1b6feb] border-2 border-white">
                   <Phone className="text-white" size={28} />
                 </div>
                 <div className="flex flex-col mt-2">
                   <h4 className="font-black text-[22px] uppercase tracking-wide text-[#0b132b] mb-1">Call Us Directly</h4>
                   <a href={\`tel:\${BRAND.phone.replace(/\\s+/g, '')}\`} className="text-xl text-slate-600 hover:text-[#1b6feb] font-extrabold transition-colors">
                     {BRAND.phone}
                   </a>
                 </div>
              </div>

              <div className="flex flex-col items-center text-center gap-3">
                 <div className="w-16 h-16 bg-[#0b132b] rounded-full flex items-center justify-center shrink-0 shadow-[4px_4px_0px_#1b6feb] border-2 border-white">
                   <Mail className="text-white" size={28} />
                 </div>
                 <div className="flex flex-col mt-2">
                   <h4 className="font-black text-[22px] uppercase tracking-wide text-[#0b132b] mb-1">Email Address</h4>
                   <a href={\`mailto:\${BRAND.email}\`} className="text-xl text-slate-600 hover:text-[#1b6feb] font-extrabold transition-colors break-all">
                     {BRAND.email}
                   </a>
                 </div>
              </div>
              
              <div className="flex flex-col items-center text-center gap-3">
                 <div className="w-16 h-16 bg-[#0b132b] rounded-full flex items-center justify-center shrink-0 shadow-[4px_4px_0px_#1b6feb] border-2 border-white">
                   <MapPin className="text-white" size={28} />
                 </div>
                 <div className="flex flex-col mt-2">
                   <h4 className="font-black text-[22px] uppercase tracking-wide text-[#0b132b] mb-1">Service Center</h4>
                   <p className="text-xl text-slate-600 font-extrabold leading-relaxed">
                     {BRAND.address}, <br/>{BRAND.city}
                   </p>
                 </div>
              </div>
            </div>`;

const newContactSide = `{/* Contact & Location */}
          <div className="bg-white rounded-3xl p-8 md:p-10 border-4 border-[#0b132b] shadow-[8px_8px_0px_0px_#1b6feb] flex flex-col items-center text-center justify-center h-full">
            <h3 className="text-2xl font-black text-[#0b132b] uppercase mb-8 pb-4 border-b-2 border-slate-100">
              Direct Contact & Location
            </h3>
            
            <div className="space-y-12">
              <div className="flex flex-col items-center text-center gap-3">
                 <div className="w-12 h-12 bg-[#0b132b] rounded-full flex items-center justify-center shrink-0 shadow-[4px_4px_0px_#1b6feb] border-2 border-white">
                   <Phone className="text-white" size={24} />
                 </div>
                 <div className="flex flex-col mt-2">
                   <h4 className="font-bold text-[#0b132b] mb-1">Call Us Directly</h4>
                   <a href={\`tel:\${BRAND.phone.replace(/\\s+/g, '')}\`} className="text-lg text-slate-600 hover:text-[#1b6feb] font-medium transition-colors">
                     {BRAND.phone}
                   </a>
                 </div>
              </div>

              <div className="flex flex-col items-center text-center gap-3">
                 <div className="w-12 h-12 bg-[#0b132b] rounded-full flex items-center justify-center shrink-0 shadow-[4px_4px_0px_#1b6feb] border-2 border-white">
                   <Mail className="text-white" size={24} />
                 </div>
                 <div className="flex flex-col mt-2">
                   <h4 className="font-bold text-[#0b132b] mb-1">Email Address</h4>
                   <a href={\`mailto:\${BRAND.email}\`} className="text-lg text-slate-600 hover:text-[#1b6feb] font-medium transition-colors break-all">
                     {BRAND.email}
                   </a>
                 </div>
              </div>
              
              <div className="flex flex-col items-center text-center gap-3">
                 <div className="w-12 h-12 bg-[#0b132b] rounded-full flex items-center justify-center shrink-0 shadow-[4px_4px_0px_#1b6feb] border-2 border-white">
                   <MapPin className="text-white" size={24} />
                 </div>
                 <div className="flex flex-col mt-2">
                   <h4 className="font-bold text-[#0b132b] mb-1">Service Center</h4>
                   <p className="text-lg text-slate-600 font-medium leading-relaxed">
                     {BRAND.address}, <br/>{BRAND.city}
                   </p>
                 </div>
              </div>
            </div>`;

app = app.replace(oldContactSide, newContactSide);


// remove contact from navLinks
app = app.replace(
  /\{\s*name:\s*'Contact',\s*href:\s*'#appointment'\s*\},\s*\n?/g,
  ''
);

// fix hero right
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
              className="w-full h-full object-cover"
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
              className="w-full h-full object-cover opacity-100"
            />
          </motion.div>`;

// Note: I'll use index based replace for video to avoid format match issues
fs.writeFileSync('src/App.tsx', app);
console.log('done');
