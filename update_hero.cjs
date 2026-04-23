const fs = require('fs');

let appContent = fs.readFileSync('src/App.tsx', 'utf8');

// Replace Navbar text logic
appContent = appContent.replace(/text-\[\#f0f9ff\]/g, 'text-blue-950');
appContent = appContent.replace(/\$\{isScrolled \? 'text-slate-900' : 'text-blue-950'\}/g, 'text-blue-950');

// Replace Mobile Menu button logic
appContent = appContent.replace(/\$\{isScrolled \? 'text-slate-900 bg-\[\#f0f9ff\]' : 'text-blue-950 bg-white\/20'\}/g, 'text-blue-900 hover:bg-slate-100');

const heroStart = appContent.indexOf('const Hero = () => {');
const nextSection = appContent.indexOf('const About = () => {');

const newHero = `const Hero = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-gradient-to-br from-sky-100 to-blue-200">
      {/* Abstract Background Decoration */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-blue-300/30 blur-3xl mix-blend-multiply pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-sky-300/30 blur-3xl mix-blend-multiply pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center">
        <div className="max-w-[1200px] w-full flex flex-col items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center gap-2 mb-6"
          >
            <span className="py-1.5 px-4 rounded-full bg-white/60 text-blue-900 backdrop-blur-sm shadow-sm flex items-center gap-2 font-bold text-sm border border-blue-200">
              <Sparkles size={16} className="text-red-600" />
              Available 24 hours
            </span>
            <div className="hidden sm:flex items-center gap-1 py-1.5 px-4 rounded-full bg-white/60 backdrop-blur-sm text-blue-900 font-semibold text-sm shadow-sm border border-blue-200">
              <Star size={14} className="text-red-600" fill="currentColor" />
              4.9/5 Google Reviews
            </div>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[56px] sm:text-[60px] md:text-[75px] font-bold font-anton tracking-tight text-blue-700 mb-6 leading-[1.1] text-center"
          >
            Top Tier Gadget Sales & Repairs
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-[24px] font-normal font-poppins text-blue-800 mb-10 leading-relaxed text-center max-w-2xl"
          >
            Experience premium service and absolute <span className="relative inline-block text-blue-900 font-semibold">Reliability<svg className="absolute w-full h-3 -bottom-1 left-0 text-red-600" viewBox="0 0 100 20" preserveAspectRatio="none"><path d="M0 15 Q 50 0 100 15" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/></svg></span>.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row justify-center gap-4 w-full sm:w-auto"
          >
            <a href="#booking" className="w-full sm:w-auto bg-blue-600 hover:bg-red-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-xl shadow-blue-600/20 hover:shadow-red-600/30 flex items-center justify-center gap-2 whitespace-nowrap">
              Book an Appointment <ArrowRight size={20} />
            </a>
            <a href="tel:+2349054650886" className="w-full sm:w-auto bg-white hover:bg-red-600 hover:text-white text-blue-700 hover:border-transparent px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg flex items-center justify-center gap-2 backdrop-blur-md border border-blue-200 whitespace-nowrap">
              Call Us Today <PhoneCall size={20} />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-16 pt-10 w-full relative"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[70%] h-px bg-blue-300"></div>
            
            <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="flex items-center gap-4">
                <div className="flex -space-x-4">
                  <img className="w-12 h-12 rounded-full border-2 border-white object-cover shadow-sm" src="https://i.ibb.co/XxLfCYjH/Whisk-56e9e320a2c6bdbb23843a93e41d6c52dr.jpg" alt="Patient" referrerPolicy="no-referrer" />
                  <img className="w-12 h-12 rounded-full border-2 border-white object-cover shadow-sm" src="https://i.ibb.co/Zw0CYmJ/Whisk-7311e51747f028790b04356abe002894eg.png" alt="Patient" referrerPolicy="no-referrer" />
                  <img className="w-12 h-12 rounded-full border-2 border-white object-cover shadow-sm" src="https://i.ibb.co/0VcB2WKD/Whisk-c64509d6960356493544616d08d2d7bddr.jpg" alt="Patient" referrerPolicy="no-referrer" />
                  <img className="w-12 h-12 rounded-full border-2 border-white object-cover shadow-sm" src="https://i.ibb.co/TB2ngfdT/Whisk-f3336bf086e4adf9ac24d6e6de47e2a7dr.jpg" alt="Patient" referrerPolicy="no-referrer" />
                </div>
                <div className="text-left">
                  <div className="text-blue-900 font-bold text-xl">10,000+</div>
                  <div className="text-red-600 text-sm font-medium uppercase tracking-wider">Happy Customers</div>
                </div>
              </div>

              <div className="flex flex-wrap justify-center gap-6 lg:gap-10 text-blue-800">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="text-red-600" size={20} />
                  <span className="font-medium">Certified Techs</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="text-red-600" size={20} />
                  <span className="font-medium">Modern Tech</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="text-red-600" size={20} />
                  <span className="font-medium">Top Rated Service</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="text-red-600" size={20} />
                  <span className="font-medium">Fast Repair</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

`;

appContent = appContent.slice(0, heroStart) + newHero + appContent.slice(nextSection);

fs.writeFileSync('src/App.tsx', appContent);
console.log('Update successful');
