const fs = require('fs');

let appContent = fs.readFileSync('src/App.tsx', 'utf8');

const navStart = appContent.indexOf('const Navbar = () => {');
const heroStart = appContent.indexOf('const Hero = () => {');
const aboutStart = appContent.indexOf('const About = () => {');

const newNavAndHero = `const Navbar = () => {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={\`fixed w-full z-50 transition-all duration-300 \${isScrolled ? 'bg-blue-950/95 backdrop-blur-md shadow-lg py-3' : 'bg-blue-900 py-4 shadow-md'}\`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center text-sky-300">
              <Smartphone size={24} />
            </div>
            <span className="font-heading font-bold text-2xl tracking-tight text-white">
              Kroxx Gadgets
            </span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-4 lg:space-x-8">
            <a href="#home" className="text-sm lg:text-base font-medium hover:text-sky-400 transition-colors text-slate-200">Home</a>
            <a href="#about" className="text-sm lg:text-base font-medium hover:text-sky-400 transition-colors text-slate-200">About Us</a>
            <a href="#services" className="text-sm lg:text-base font-medium hover:text-sky-400 transition-colors text-slate-200">Services</a>
            <a href="#results" className="text-sm lg:text-base font-medium hover:text-sky-400 transition-colors text-slate-200">Results</a>
            <a href="#testimonials" className="text-sm lg:text-base font-medium hover:text-sky-400 transition-colors text-slate-200">Reviews</a>
            <a href="#contact" className="text-sm lg:text-base font-medium hover:text-sky-400 transition-colors text-slate-200">Contact Us</a>
            <a href="tel:+2349054650886" className="text-base lg:text-lg font-bold hover:text-sky-400 transition-colors flex items-center gap-2 whitespace-nowrap text-white">
              <Phone size={20} /> +234 905 465 0886
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2 rounded-lg backdrop-blur-sm text-white hover:bg-white/10 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-blue-900 border-t border-blue-800 shadow-xl overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1 flex flex-col">
              <a href="#home" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-3 text-base font-medium text-slate-200 hover:text-sky-400 hover:bg-blue-800/50 rounded-lg">Home</a>
              <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-3 text-base font-medium text-slate-200 hover:text-sky-400 hover:bg-blue-800/50 rounded-lg">About Us</a>
              <a href="#services" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-3 text-base font-medium text-slate-200 hover:text-sky-400 hover:bg-blue-800/50 rounded-lg">Services</a>
              <a href="#results" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-3 text-base font-medium text-slate-200 hover:text-sky-400 hover:bg-blue-800/50 rounded-lg">Results</a>
              <a href="#testimonials" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-3 text-base font-medium text-slate-200 hover:text-sky-400 hover:bg-blue-800/50 rounded-lg">Reviews</a>
              <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-3 text-base font-medium text-slate-200 hover:text-sky-400 hover:bg-blue-800/50 rounded-lg">Contact Us</a>
              <a href="tel:+2349054650886" onClick={() => setIsMobileMenuOpen(false)} className="mt-4 w-full bg-sky-500 hover:bg-sky-400 transition-all duration-300 text-blue-950 px-6 py-3 rounded-full text-lg font-bold flex items-center justify-center gap-2 shadow-lg whitespace-nowrap">
                <Phone size={20} /> +234 905 465 0886
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-gradient-to-br from-blue-950 via-sky-800 to-sky-400">
      {/* Abstract Background Decoration */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] rounded-full bg-sky-300/20 blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[500px] h-[500px] rounded-full bg-blue-400/20 blur-[80px] pointer-events-none"></div>
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center mt-8 lg:mt-12">
        <div className="max-w-[1200px] w-full flex flex-col items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center gap-2 mb-6"
          >
            <span className="py-1.5 px-4 rounded-full bg-white/10 text-white backdrop-blur-md shadow-lg flex items-center gap-2 font-bold text-sm border border-white/20">
              <Sparkles size={16} className="text-sky-300" />
              Available 24 hours
            </span>
            <div className="hidden sm:flex items-center gap-1 py-1.5 px-4 rounded-full bg-white/10 backdrop-blur-md text-white font-semibold text-sm shadow-lg border border-white/20">
              <Star size={14} className="text-yellow-400" fill="currentColor" />
              4.9/5 Google Reviews
            </div>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[56px] sm:text-[60px] md:text-[75px] font-bold font-anton tracking-tight text-white mb-6 leading-[1.1] text-center drop-shadow-md"
          >
            Top Tier Gadget Sales & Repairs
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-[20px] lg:text-[24px] font-normal font-poppins text-sky-100 mb-10 leading-relaxed text-center max-w-2xl drop-shadow-sm"
          >
            Experience premium service and absolute <span className="relative inline-block text-white font-semibold">Reliability<svg className="absolute w-full h-3 -bottom-1 left-0 text-sky-400" viewBox="0 0 100 20" preserveAspectRatio="none"><path d="M0 15 Q 50 0 100 15" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/></svg></span>.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row justify-center gap-4 w-full sm:w-auto"
          >
            <a href="#booking" className="w-full sm:w-auto bg-blue-600 hover:bg-red-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-xl flex items-center justify-center gap-2 whitespace-nowrap">
              Book an Appointment <ArrowRight size={20} />
            </a>
            <a href="tel:+2349054650886" className="w-full sm:w-auto bg-white/10 hover:bg-sky-500 hover:text-white text-white hover:border-transparent px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg flex items-center justify-center gap-2 backdrop-blur-md border border-white/20 whitespace-nowrap">
              Call Us Today <PhoneCall size={20} />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-16 pt-10 w-full relative"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-px bg-white/20"></div>
            
            <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="flex items-center justify-center gap-4">
                <div className="flex -space-x-4">
                  <img className="w-12 h-12 rounded-full border-2 border-blue-900 object-cover shadow-md" src="https://i.ibb.co/XxLfCYjH/Whisk-56e9e320a2c6bdbb23843a93e41d6c52dr.jpg" alt="Customer" referrerPolicy="no-referrer" />
                  <img className="w-12 h-12 rounded-full border-2 border-blue-900 object-cover shadow-md" src="https://i.ibb.co/Zw0CYmJ/Whisk-7311e51747f028790b04356abe002894eg.png" alt="Customer" referrerPolicy="no-referrer" />
                  <img className="w-12 h-12 rounded-full border-2 border-blue-900 object-cover shadow-md" src="https://i.ibb.co/0VcB2WKD/Whisk-c64509d6960356493544616d08d2d7bddr.jpg" alt="Customer" referrerPolicy="no-referrer" />
                  <img className="w-12 h-12 rounded-full border-2 border-blue-900 object-cover shadow-md" src="https://i.ibb.co/TB2ngfdT/Whisk-f3336bf086e4adf9ac24d6e6de47e2a7dr.jpg" alt="Customer" referrerPolicy="no-referrer" />
                </div>
                <div className="text-left">
                  <div className="text-white font-bold text-xl drop-shadow-md">10,000+</div>
                  <div className="text-sky-300 text-sm font-medium uppercase tracking-wider drop-shadow-md">Happy Customers</div>
                </div>
              </div>

              <div className="flex flex-wrap justify-center gap-6 lg:gap-10 text-white">
                <div className="flex items-center gap-2 drop-shadow-md">
                  <Wrench className="text-sky-400" size={24} />
                  <span className="font-medium text-lg">Certified Techs</span>
                </div>
                <div className="flex items-center gap-2 drop-shadow-md">
                  <Cpu className="text-sky-400" size={24} />
                  <span className="font-medium text-lg">Modern Tech</span>
                </div>
                <div className="flex items-center gap-2 drop-shadow-md">
                  <ShieldCheck className="text-sky-400" size={24} />
                  <span className="font-medium text-lg">Top Rated Service</span>
                </div>
                <div className="flex items-center gap-2 drop-shadow-md">
                  <Zap className="text-sky-400" size={24} />
                  <span className="font-medium text-lg">Fast Repair</span>
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

appContent = appContent.slice(0, navStart) + newNavAndHero + appContent.slice(aboutStart);

fs.writeFileSync('src/App.tsx', appContent);
console.log('Successfully updated component!');
