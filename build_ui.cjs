const fs = require('fs');

const content = `import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Smartphone, Laptop, Battery, Wrench, ShieldCheck, 
  Cpu, Zap, Phone, MapPin, Clock, ArrowRight, Menu, X,
  CheckCircle2, Star, CreditCard, CalendarDays, Mail, Sparkles, 
  AlertCircle, HardDrive, PhoneCall, ArrowUp, CheckCircle, PenTool
} from 'lucide-react';
import Chatbot from './Chatbot';

// Reusable animated section wrapper
const Section = ({ children, id, className = '' }) => (
  <section id={id} className={\`py-24 relative overflow-hidden \${className}\`}>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      {children}
    </div>
  </section>
);

const Logo = () => (
  <div className="flex flex-col select-none">
    <div className="flex items-baseline font-black italic tracking-tighter text-3xl">
      <span className="text-[#e93f45]">K</span>
      <span className="text-[#5580cc]">R</span>
    </div>
    <div className="text-[9px] font-bold tracking-[0.2em] text-slate-300 uppercase -mt-1">
      Kroxx Gadgets
    </div>
  </div>
);

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={\`fixed w-full z-50 transition-all duration-300 \${isScrolled ? 'bg-slate-950/90 backdrop-blur-md border-b border-slate-800 py-3' : 'bg-transparent py-5'}\`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <a href="#home" className="hover:opacity-80 transition-opacity">
            <Logo />
          </a>
          
          <div className="hidden lg:flex items-center space-x-8">
            {['Home', 'About Us', 'Services', 'Process', 'Reviews', 'Contact'].map((item) => (
              <a key={item} href={\`#\${item.toLowerCase().replace(' ', '-')}\`} className="text-sm font-medium text-slate-300 hover:text-[#5580cc] transition-colors">
                {item}
              </a>
            ))}
            <a href="tel:+2349054650886" className="group flex items-center gap-2 bg-gradient-to-r from-[#e93f45] to-[#c82e33] hover:from-[#c82e33] hover:to-[#a02024] text-white px-5 py-2.5 rounded-full font-bold text-sm transition-all duration-300 shadow-lg shadow-red-500/25">
              <Phone size={16} className="group-hover:animate-pulse" /> +234 905 465 0886
            </a>
          </div>

          <button 
            className="lg:hidden p-2 text-slate-300 hover:text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-slate-900 border-t border-slate-800 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-2 flex flex-col">
              {['Home', 'About Us', 'Services', 'Process', 'Reviews', 'Contact'].map((item) => (
                <a key={item} href={\`#\${item.toLowerCase().replace(' ', '-')}\`} onClick={() => setIsMobileMenuOpen(false)} className="block px-4 py-3 font-medium text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg transition-colors">
                  {item}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-950">
      {/* High-tech Background Elements */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 pointer-events-none"></div>
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#5580cc]/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-[#e93f45]/15 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/50 to-slate-950 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col lg:flex-row items-center gap-12 mt-8 lg:mt-12">
        
        <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8"
          >
            <span className="py-1.5 px-4 rounded-full bg-slate-800/50 text-slate-200 border border-slate-700/50 flex flex-row items-center gap-2 font-medium text-sm backdrop-blur-sm">
              <span className="relative flex h-2 w-2 mr-1">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#5580cc] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#5580cc]"></span>
              </span>
              Available 24 Hours
            </span>
            <span className="py-1.5 px-4 rounded-full bg-slate-800/50 text-slate-200 border border-slate-700/50 flex items-center gap-2 font-medium text-sm backdrop-blur-sm">
              <Star size={14} className="text-[#e93f45]" fill="currentColor" />
              Top Rated Techs
            </span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl lg:text-7xl font-black tracking-tight text-white mb-6 uppercase"
          >
            Top Tier Gadget <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e93f45] to-[#5580cc]">
              Sales & Repairs
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg lg:text-xl font-medium text-slate-400 mb-10 max-w-xl"
          >
            Experience premium diagnostics, absolute reliability, and fast turnaround for all your smartphones, laptops, and tech accessories.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <a href="#booking" className="group w-full sm:w-auto bg-[#e93f45] hover:bg-[#5580cc] text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 flex items-center justify-center gap-2">
              Book Repair <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#services" className="w-full sm:w-auto bg-slate-800 hover:bg-slate-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 flex items-center justify-center border border-slate-700">
              View Gadgets
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-12 flex flex-wrap items-center justify-center lg:justify-start gap-8 border-t border-slate-800 pt-8 w-full"
          >
            <div>
              <div className="text-3xl font-black text-white">10k+</div>
              <div className="text-[#5580cc] text-sm uppercase tracking-wider font-bold">Gadgets Fixed</div>
            </div>
            <div className="w-px h-10 bg-slate-800 hidden sm:block"></div>
            <div>
              <div className="text-3xl font-black text-white">99%</div>
              <div className="text-[#5580cc] text-sm uppercase tracking-wider font-bold">Success Rate</div>
            </div>
            <div className="w-px h-10 bg-slate-800 hidden sm:block"></div>
            <div>
              <div className="text-3xl font-black text-white">24/7</div>
              <div className="text-[#5580cc] text-sm uppercase tracking-wider font-bold">Support Ready</div>
            </div>
          </motion.div>
        </div>

        {/* Hero Graphic / 3D Layout */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.2 }}
          className="flex-1 w-full relative"
        >
          <div className="relative aspect-square max-w-[600px] mx-auto rounded-3xl overflow-hidden shadow-2xl shadow-[#e93f45]/20 border border-slate-800">
            <img src="https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&w=800&q=80" alt="Tech Repair Technician" className="object-cover w-full h-full mix-blend-lighten opacity-80" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
          </div>
          
          {/* Floating Badges */}
          <div className="absolute top-10 -left-6 sm:left-0 bg-slate-900 border border-slate-700 p-4 rounded-xl shadow-xl flex items-center gap-4 animate-bounce" style={{animationDuration: '3s'}}>
            <div className="bg-[#e93f45]/20 p-3 rounded-lg text-[#e93f45]">
              <Cpu size={24} />
            </div>
            <div className="hidden sm:block text-slate-200 font-bold">Advanced Diagnostics</div>
          </div>
          <div className="absolute bottom-20 -right-6 sm:right-0 bg-slate-900 border border-slate-700 p-4 rounded-xl shadow-xl flex items-center gap-4 transform translate-y-4 animate-bounce" style={{animationDuration: '4s', animationDelay: '1s'}}>
            <div className="bg-[#5580cc]/20 p-3 rounded-lg text-[#5580cc]">
              <ShieldCheck size={24} />
            </div>
            <div className="hidden sm:block text-slate-200 font-bold">Certified Parts</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const About = () => (
  <Section id="about-us" className="bg-slate-900 border-t border-b border-slate-800">
    <div className="grid lg:grid-cols-2 gap-16 items-center">
      <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
        <h2 className="text-[#5580cc] font-bold tracking-wider uppercase mb-4 flex items-center gap-2">
          <Zap size={20} /> The Tech Hub
        </h2>
        <h3 className="text-4xl lg:text-5xl font-black text-white mb-6 uppercase leading-tight">
          Restoring Life to Your Devices
        </h3>
        <p className="text-slate-400 text-lg mb-6 leading-relaxed">
          At Kroxx Gadgets, we are not just repairmen; we are tech enthusiasts dedicated to bringing your critical daily tools back to life. Whether it is a shattered screen, a failing battery, or a complex motherboard issue, our certified technicians approach every device with surgical precision.
        </p>
        <p className="text-slate-400 text-lg mb-8 leading-relaxed">
          Beyond repairs, we offer a curated selection of state-of-the-art smartphones, premium refurb laptops, and high-quality accessories to keep you connected in a fast-paced world.
        </p>
        <div className="grid grid-cols-2 gap-6">
          <div className="flex items-center gap-3">
            <CheckCircle2 className="text-[#e93f45]" size={24} />
            <span className="text-slate-200 font-semibold">Genuine Original Parts</span>
          </div>
          <div className="flex items-center gap-3">
            <CheckCircle2 className="text-[#e93f45]" size={24} />
            <span className="text-slate-200 font-semibold">90-Day Repair Warranty</span>
          </div>
          <div className="flex items-center gap-3">
            <CheckCircle2 className="text-[#5580cc]" size={24} />
            <span className="text-slate-200 font-semibold">Trained Technicians</span>
          </div>
          <div className="flex items-center gap-3">
            <CheckCircle2 className="text-[#5580cc]" size={24} />
            <span className="text-slate-200 font-semibold">Transparent Pricing</span>
          </div>
        </div>
      </motion.div>
      <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="grid grid-cols-2 gap-4">
        <img src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=400&q=80" alt="Diagnostic" className="rounded-2xl object-cover h-64 w-full shadow-lg border border-slate-700" />
        <img src="https://images.unsplash.com/photo-1601524909162-ae8725290836?auto=format&fit=crop&w=400&q=80" alt="Screen Repair" className="rounded-2xl object-cover h-64 w-full shadow-lg border border-slate-700 mt-8" />
      </motion.div>
    </div>
  </Section>
);

const Services = () => {
  const services = [
    { title: 'Screen Replacements', icon: <Smartphone size={32} />, desc: 'Flawless LCD, OLED, and glass replacements for all top brands.' },
    { title: 'Battery Specialists', icon: <Battery size={32} />, desc: 'Power restoration with original high-capacity batteries.' },
    { title: 'Hardware Diagnostics', icon: <Wrench size={32} />, desc: 'Deep dive internal testing, circuit cleaning, and component salvage.' },
    { title: 'Laptop Upgrades', icon: <HardDrive size={32} />, desc: 'RAM expansion, SSD swaps, and thermal paste reapplication.' },
    { title: 'Gadget Sales', icon: <Laptop size={32} />, desc: 'Premium selection of new and certified refurbished laptops and phones.' },
    { title: 'Premium Accessories', icon: <Zap size={32} />, desc: 'High-end chargers, protective cases, and tempered glass.' },
  ];

  return (
    <Section id="services" className="bg-slate-950">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-[#e93f45] font-bold tracking-wider uppercase mb-4">Our Expertise</h2>
        <h3 className="text-4xl lg:text-5xl font-black text-white uppercase leading-tight mb-6">Comprehensive Tech Solutions</h3>
        <p className="text-slate-400 text-lg">One-stop shop for everything your devices need to stay online and run faster.</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <motion.div 
            key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
            className="group bg-slate-900 border border-slate-800 hover:border-[#5580cc] p-8 rounded-2xl transition-all duration-300 hover:shadow-2xl hover:shadow-[#5580cc]/10"
          >
            <div className="bg-slate-800/50 w-16 h-16 rounded-xl flex items-center justify-center text-[#5580cc] group-hover:text-[#e93f45] group-hover:bg-[#e93f45]/10 mb-6 transition-colors">
              {s.icon}
            </div>
            <h4 className="text-xl font-bold text-white mb-3">{s.title}</h4>
            <p className="text-slate-400 leading-relaxed text-sm">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

const Process = () => {
  return (
    <Section id="process" className="bg-slate-900 border-t border-slate-800">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-[#5580cc] font-bold tracking-wider uppercase mb-4">How It Works</h2>
        <h3 className="text-4xl lg:text-5xl font-black text-white uppercase leading-tight">The Kroxx Repair Pipeline</h3>
      </div>
      
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          { step: "01", title: "Bring It In", desc: "Drop off your gadget or ship it to our central hub.", icon: <MapPin/> },
          { step: "02", title: "Free Diagnostic", desc: "We run deep tests to find the exact root cause.", icon: <AlertCircle/> },
          { step: "03", title: "Fast Repair", desc: "Expert fixing using genuine or premium OEM parts.", icon: <PenTool/> },
          { step: "04", title: "Return & Test", desc: "You inspect, we verify, you walk out happy.", icon: <CheckCircle/> }
        ].map((item, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative">
            <div className="text-5xl font-black text-slate-800/50 absolute -top-4 -left-4 z-0">{item.step}</div>
            <div className="bg-slate-950 border border-slate-800 p-8 rounded-xl relative z-10 hover:border-[#e93f45] transition-colors">
              <div className="text-[#5580cc] mb-4">{item.icon}</div>
              <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
              <p className="text-slate-400 text-sm">{item.desc}</p>
            </div>
            {i < 3 && <div className="hidden lg:block absolute top-1/2 -right-4 w-8 border-t-2 border-dashed border-slate-700 z-0"></div>}
          </motion.div>
        ))}
      </div>
    </Section>
  )
}

const Booking = () => (
  <Section id="booking" className="bg-slate-950 relative">
    <div className="absolute inset-0 bg-gradient-to-r from-[#e93f45]/10 to-[#5580cc]/10"></div>
    <div className="max-w-4xl mx-auto bg-slate-900 border border-slate-700/50 rounded-3xl p-8 lg:p-14 relative z-10 shadow-2xl">
      <div className="text-center mb-10">
        <h3 className="text-3xl lg:text-4xl font-black text-white uppercase mb-4">Device Acting Up?</h3>
        <p className="text-slate-300">Don't wait. Schedule a diagnostic or bring it directly to our tech center.</p>
      </div>
      
      <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert('Booking request sent successfully!'); }}>
        <div className="grid sm:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-300 uppercase">Your Name</label>
            <input type="text" className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#5580cc] focus:ring-1 focus:ring-[#5580cc]" placeholder="John Doe" required />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-300 uppercase">Phone Number</label>
            <input type="tel" className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#5580cc] focus:ring-1 focus:ring-[#5580cc]" placeholder="+234 905..." required />
          </div>
        </div>
        <div className="grid sm:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-300 uppercase">Device Type</label>
            <select className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#5580cc] appearance-none" required>
              <option value="">Select Device</option>
              <option value="phone">Smartphone</option>
              <option value="laptop">Laptop / PC</option>
              <option value="tablet">Tablet / iPad</option>
              <option value="accessories">Accessories / Other</option>
            </select>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-300 uppercase">Main Issue</label>
            <input type="text" className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#5580cc] focus:ring-1 focus:ring-[#5580cc]" placeholder="e.g. Broken Screen, Battery Life" required />
          </div>
        </div>
        <button type="submit" className="w-full bg-[#e93f45] hover:bg-[#c82e33] text-white font-bold text-lg py-4 rounded-lg transition-colors flex items-center justify-center gap-2 uppercase tracking-wide">
          <Wrench size={20} /> Request Service Appointment
        </button>
      </form>
    </div>
  </Section>
);

const Footer = () => (
  <footer id="contact" className="bg-slate-950 border-t border-slate-800 pt-20 pb-10">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-4 gap-12 mb-16">
        <div className="lg:col-span-1">
          <Logo />
          <p className="text-slate-500 mt-6 text-sm">
            Top tier gadget sales, advanced diagnostics, and precision repairs based in Abuja. We breathe life into tech.
          </p>
        </div>
        <div>
          <h4 className="text-white font-black uppercase mb-6 tracking-wide">Contact Details</h4>
          <ul className="space-y-4 text-slate-400">
            <li className="flex gap-3"><MapPin className="text-[#e93f45] shrink-0" size={20} /> Shop D26 Emab Plaza Wuse 2, Abuja</li>
            <li className="flex gap-3"><Phone className="text-[#e93f45] shrink-0" size={20} /> <a href="tel:+2349054650886" className="hover:text-white transition-colors">+234 905 465 0886</a></li>
            <li className="flex gap-3"><Mail className="text-[#e93f45] shrink-0" size={20} /> <a href="mailto:support@kroxxgadgets.com" className="hover:text-white transition-colors">support@kroxxgadgets.com</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-black uppercase mb-6 tracking-wide">Opening Hours</h4>
          <ul className="space-y-4 text-slate-400">
            <li className="flex justify-between border-b border-slate-800 pb-2"><span>Monday - Saturday</span> <span className="text-white">9am - 8pm</span></li>
            <li className="flex justify-between pt-2"><span>Sunday</span> <span className="text-[#e93f45]">Closed</span></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-black uppercase mb-6 tracking-wide">Connect</h4>
          <ul className="space-y-3 font-medium">
            <li><a href="https://x.com/iam_Kizzykroxx" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-[#5580cc] transition-colors">Twitter (X)</a></li>
            <li><a href="#" className="text-slate-400 hover:text-[#5580cc] transition-colors">Instagram</a></li>
            <li><a href="https://wa.me/2349054650886" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-[#5580cc] transition-colors">WhatsApp Hub</a></li>
          </ul>
        </div>
      </div>
      
      <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-slate-600 text-sm">
          &copy; {new Date().getFullYear()} Kroxx Gadgets. All rights reserved.
        </p>
        <p className="text-slate-600 text-sm flex gap-1">
          Designed for <span className="text-[#e93f45] font-bold">Performance</span>
        </p>
      </div>
    </div>
  </footer>
);

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const handleScroll = () => setIsVisible(window.scrollY > 300);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 left-8 z-[60] bg-[#e93f45] text-white p-3 rounded-full shadow-lg shadow-[#e93f45]/20 hover:bg-white hover:text-[#e93f45] transition-all duration-300"
        >
          <ArrowUp size={24} />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-[#e93f45]/30 selection:text-white">
      <ScrollToTop />
      <Navbar />
      <Chatbot />
      <main>
        <Hero />
        <About />
        <Services />
        <Process />
        <Booking />
      </main>
      <Footer />
    </div>
  );
}
`;
fs.writeFileSync('src/App.tsx', content);
console.log('Build completed');
