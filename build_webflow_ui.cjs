const fs = require('fs');

const content = `import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Smartphone, Laptop, Battery, Wrench, ShieldCheck, 
  Cpu, Zap, Phone, MapPin, Clock, ArrowRight, Menu, X,
  CheckCircle2, Star, CreditCard, CalendarDays, Mail, Sparkles, 
  AlertCircle, HardDrive, PhoneCall, ArrowUp, ChevronDown, Quote,
  Facebook, Twitter, Instagram, Linkedin, MessageCircle, PenTool,
  ShoppingCart
} from 'lucide-react';
import Chatbot from './Chatbot';

// Brand Information
const BRAND = {
  phone: "+234 905 465 0886",
  phoneFormatted: "+234 905 465 0886",
  email: "support@kroxxgadgets.com",
  address: "Shop D26 Emab Plaza Wuse 2",
  city: "Abuja, FCT",
  hours: "Mon - Sat (9am - 8pm)",
  twitterUrl: "https://x.com/iam_Kizzykroxx",
  whatsappUrl: "https://wa.me/2349054650886",
};

// Global Icon Theme (One color)
const ICON_COLOR = "text-[#ffffff]"; 

// Webflow inspired styling classes
const SECTION_PADDING = "py-16 md:py-24";
const BENTO_CARD = "bg-[#0b132b] rounded-3xl p-8 md:p-10"; // Dark cards on Red/Light backgrounds
const RED_BG = "bg-[#e93f45]"; // Replacing cream with Red
const DARK_BG = "bg-[#0b132b]";
const LIGHT_BG = "bg-[#f8f9fa]";

const IconBox = ({ icon: Icon, className = "" }) => (
  <div className={\`w-14 h-14 rounded-full flex items-center justify-center bg-[#e93f45] \${className}\`}>
    <Icon className={ICON_COLOR} size={24} />
  </div>
);

const Logo = () => (
  <div className="flex flex-col select-none relative z-10 leading-none">
    <div className="flex items-baseline font-black italic tracking-tighter text-3xl md:text-3xl">
      <span className="text-[#0b132b] drop-shadow-sm">KR</span>
      <span className="text-white drop-shadow-sm">OXX</span>
    </div>
    <div className="text-[9px] font-bold tracking-[0.2em] text-[#0b132b] uppercase">
      Gadgets & Repairs
    </div>
  </div>
);

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Process', href: '#process' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="absolute w-full z-50 top-0 left-0 pt-6 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-[#e93f45] rounded-full px-6 py-4 flex justify-between items-center shadow-lg border-2 border-[#0b132b]">
          <a href="#home" className="hover:scale-105 transition-transform">
            <Logo />
          </a>
          
          <div className="hidden lg:flex items-center space-x-8 bg-[#0b132b] px-8 py-3 rounded-full">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-sm font-bold text-white hover:text-[#e93f45] transition-colors uppercase tracking-wide">
                {link.name}
              </a>
            ))}
          </div>

          <div className="hidden lg:flex items-center">
            <a href={\`tel:\${BRAND.phone.replace(/\\s+/g, '')}\`} className="flex items-center gap-2 bg-[#0b132b] hover:bg-white hover:text-[#0b132b] text-white px-6 py-3 rounded-full font-bold text-sm transition-colors border-2 border-[#0b132b]">
              <Phone size={16} /> <span>{BRAND.phoneFormatted}</span>
            </a>
          </div>

          <button 
            className="lg:hidden p-2 bg-[#0b132b] rounded-full text-white"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu size={24} />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-[100] bg-[#e93f45] flex flex-col p-6"
          >
            <div className="flex justify-between items-center mb-12">
              <Logo />
              <button onClick={() => setIsMobileMenuOpen(false)} className="p-3 bg-[#0b132b] rounded-full text-white">
                <X size={28} />
              </button>
            </div>
            <div className="flex flex-col gap-6 text-center">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} onClick={() => setIsMobileMenuOpen(false)} className="text-4xl font-black text-white hover:text-[#0b132b] uppercase tracking-tighter">
                  {link.name}
                </a>
              ))}
              <a href={\`tel:\${BRAND.phone.replace(/\\s+/g, '')}\`} onClick={() => setIsMobileMenuOpen(false)} className="mt-8 mx-auto flex items-center justify-center gap-3 bg-[#0b132b] text-white px-8 py-5 rounded-full font-bold text-xl w-full max-w-sm">
                <Phone size={24} /> Call Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Marquee = () => {
  return (
    <div className="bg-[#0b132b] py-4 border-y-2 border-[#e93f45] overflow-hidden flex whitespace-nowrap">
      <motion.div 
        animate={{ x: [0, -1000] }} 
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        className="flex items-center gap-8 font-black text-white text-xl md:text-2xl uppercase tracking-widest"
      >
        {Array(8).fill("FAST GADGET REPAIRS • ORIGINAL PARTS • PREMIUM DEVICE SALES • 90-DAY WARRANTY • ").map((text, i) => (
          <span key={i}>{text}</span>
        ))}
      </motion.div>
    </div>
  );
};

const Hero = () => {
  return (
    <header id="home" className={\`\${RED_BG} pt-40 md:pt-52 pb-16 min-h-screen flex flex-col justify-center\`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="flex flex-col items-start relative z-10">
            <div className="bg-white/20 border-2 border-[#0b132b] px-4 py-2 rounded-full flex items-center gap-2 mb-8">
              <span className="w-3 h-3 rounded-full bg-[#0b132b] animate-pulse"></span>
              <span className="font-bold text-[#0b132b] text-sm tracking-widest uppercase">Available 24 Hours</span>
            </div>
            
            <h1 className="text-[55px] sm:text-[70px] md:text-[85px] leading-[0.95] font-black text-[#0b132b] uppercase tracking-tighter mb-8">
              Premium <br/> Gadget <br/>
              <span className="text-white">Sales & Repair</span>
            </h1>
            
            <p className="text-lg md:text-xl font-medium text-white mb-10 max-w-lg leading-relaxed mix-blend-color-burn">
              Experience lightning-fast service, genuine parts, and absolute reliability for all your smartphones, laptops, and tech accessories.
            </p>
            
            <div className="flex flex-wrap gap-4 w-full sm:w-auto">
              <a href="#appointment" className="bg-[#0b132b] text-white px-8 py-5 rounded-full font-black text-lg hover:bg-white hover:text-[#0b132b] transition-colors border-2 border-[#0b132b] flex items-center gap-3 w-full sm:w-auto justify-center uppercase">
                Book a Repair <ArrowRight size={20} className={ICON_COLOR} />
              </a>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative w-full h-[500px] md:h-[600px] rounded-[3rem] overflow-hidden border-4 border-[#0b132b] bg-white">
            <img 
              src="https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&w=800&q=80" 
              alt="Technician repairing" 
              className="w-full h-full object-cover mix-blend-luminosity opacity-90"
            />
            {/* Badge Overlay */}
            <div className="absolute bottom-6 left-6 right-6 bg-[#e93f45] border-2 border-[#0b132b] rounded-3xl p-6 flex items-center justify-between shadow-2xl">
              <div>
                <div className="text-4xl font-black text-white">10k+</div>
                <div className="text-[#0b132b] font-bold text-sm tracking-widest uppercase">Fixed Gadgets</div>
              </div>
              <IconBox icon={Wrench} className="bg-[#0b132b]" />
            </div>
          </div>

        </div>
      </div>
    </header>
  );
};

const SectionHeading = ({ top, title, light = false }) => (
  <div className="mb-14">
    <div className={\`inline-block px-4 py-1 rounded-full border-2 \${light ? 'border-white text-white' : 'border-[#0b132b] text-[#0b132b]'} font-bold text-sm uppercase tracking-widest mb-4\`}>
      {top}
    </div>
    <h2 className={\`text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none \${light ? 'text-white' : 'text-[#0b132b]'}\`}>
      {title}
    </h2>
  </div>
);

const Services = () => {
  const items = [
    { title: 'Sales of Phones', icon: ShoppingCart, desc: 'Premium, new and refurbished devices including Apple, Samsung, Tecno, Xiaomi, and more top brands.' },
    { title: 'Screen Repairs', icon: Zap, desc: 'Fast, high-quality display replacements for top brands.' },
    { title: 'Diagnostics', icon: Wrench, desc: 'Thorough testing and cleaning of internal logic boards.' },
    { title: 'Battery Specialists', icon: Battery, desc: 'High-capacity, genuine battery installations to restore peak power.' },
    { title: 'Hardware Upgrades', icon: HardDrive, desc: 'Memory expansion, storage SSD swaps, and performance boosts.' },
    { title: 'Accessories', icon: Smartphone, desc: 'High-quality chargers, cases, screen protectors, and audio gear.' },
  ];

  return (
    <section id="services" className={\`\${SECTION_PADDING} \${LIGHT_BG}\`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading top="What We Do" title="Comprehensive Services" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((srv, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white border-4 border-[#0b132b] rounded-3xl p-8 hover:-translate-y-2 transition-transform duration-300 shadow-[8px_8px_0px_0px_#e93f45]"
            >
              <IconBox icon={srv.icon} className="mb-6 border-2 border-[#0b132b]" />
              <h3 className="text-2xl font-black text-[#0b132b] uppercase tracking-tight mb-3">{srv.title}</h3>
              <p className="text-slate-600 font-medium leading-relaxed">{srv.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className={\`\${SECTION_PADDING} \${RED_BG} border-y-4 border-[#0b132b]\`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          <div className="order-2 lg:order-1 relative">
            <div className="absolute inset-0 bg-[#0b132b] rounded-3xl translate-x-4 translate-y-4"></div>
            <img 
              src="https://images.unsplash.com/photo-1601524909162-ae8725290836?auto=format&fit=crop&w=800&q=80" 
              alt="Tech Center" 
              className="relative z-10 w-full h-[600px] object-cover rounded-3xl border-4 border-[#0b132b] grayscale mix-blend-multiply"
            />
            {/* Video button placeholder */}
            <div className="absolute inset-0 z-20 flex items-center justify-center">
              <div className="w-24 h-24 bg-[#e93f45] border-4 border-[#0b132b] rounded-full flex items-center justify-center animate-pulse">
                <div className="w-0 h-0 border-t-[12px] border-t-transparent border-l-[20px] border-l-white border-b-[12px] border-b-transparent ml-2"></div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <SectionHeading top="Inside Our Hub" title="The Premier Tech Center" />
            
            <p className="text-xl font-bold text-white mb-6 leading-relaxed">
              We are a team of experienced and certified tech experts dedicated to providing high-quality repair care in a welcoming, professional environment. 
            </p>
            <p className="text-lg font-medium text-[#0b132b] mb-10 leading-relaxed bg-white/20 p-6 rounded-2xl border-2 border-[#0b132b]">
              Our mission is to help you restore, upgrade, and purchase your essential daily tools using modern techniques and transparent pricing. From simple screen replacements to complex motherboard fixes, and premium phone sales, we handle it all.
            </p>
            
            <div className="flex flex-col gap-4 text-white font-black text-xl">
              <div className="flex items-center gap-4 bg-[#0b132b] p-4 rounded-full border-2 border-[#0b132b]">
                <IconBox icon={CheckCircle2} className="w-10 h-10 border-2 border-white" /> State-of-the-art diagnostic tools
              </div>
              <div className="flex items-center gap-4 bg-[#0b132b] p-4 rounded-full border-2 border-[#0b132b]">
                <IconBox icon={CheckCircle2} className="w-10 h-10 border-2 border-white" /> 90-Day Guarantee on Parts
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

const HowItWorks = () => {
  const steps = [
    { title: 'Bring Device In', desc: 'Visit our lab with your damaged hardware.', icon: MapPin },
    { title: 'Free Diagnostic', desc: 'We run deep tests to find the exact root cause.', icon: AlertCircle },
    { title: 'Repair Authorized', desc: 'Approve the transparent quote and we fix it.', icon: Wrench },
    { title: 'Test & Pickup', desc: 'You inspect, we verify, and you walk out happy.', icon: CheckCircle2 }
  ];

  return (
    <section id="process" className={\`\${SECTION_PADDING} \${DARK_BG}\`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading top="Working Process" title="Transparent Steps" light />
        
        <div className="grid md:grid-cols-4 gap-6">
          {steps.map((step, idx) => (
            <div key={idx} className="bg-white rounded-3xl p-8 relative border-4 border-[#e93f45]">
              <div className="absolute -top-6 -right-6 text-8xl font-black text-[#e93f45]/20 leading-none">0{idx + 1}</div>
              <IconBox icon={step.icon} className="mb-8 w-16 h-16 border-2 border-[#0b132b]" />
              <h4 className="text-2xl font-black text-[#0b132b] uppercase mb-4 leading-none">{step.title}</h4>
              <p className="text-slate-600 font-bold">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Appointment = () => {
  return (
    <section id="appointment" className={\`\${SECTION_PADDING} \${LIGHT_BG}\`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#e93f45] border-4 border-[#0b132b] rounded-[3rem] overflow-hidden flex flex-col lg:flex-row shadow-[12px_12px_0px_0px_#0b132b]">
          
          <div className="lg:w-1/2 p-10 md:p-16 border-b-4 lg:border-b-0 lg:border-r-4 border-[#0b132b]">
            <SectionHeading top="Skip The Queue" title="Book An Appointment" />
            <p className="text-white font-bold text-xl mb-12">
              Secure your slot and let our experts handle the rest. We prioritize scheduled diagnostics.
            </p>
            <div className="bg-[#0b132b] p-8 rounded-3xl border-2 border-white space-y-8">
              <div className="flex items-center gap-6">
                <IconBox icon={Phone} />
                <div>
                  <div className="text-white text-xs font-black tracking-widest uppercase">Call Us Directly</div>
                  <div className="text-2xl font-black text-[#e93f45]">{BRAND.phoneFormatted}</div>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <IconBox icon={MapPin} />
                <div>
                  <div className="text-white text-xs font-black tracking-widest uppercase">Our Location</div>
                  <div className="text-lg font-bold text-white">{BRAND.address}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 p-10 md:p-16 bg-white">
            <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert('Booking request sent successfully!'); }}>
              <div className="space-y-2">
                <label className="block text-xs font-black text-[#0b132b] uppercase tracking-widest">Full Name</label>
                <input type="text" className="w-full bg-[#f8f9fa] border-2 border-[#0b132b] rounded-xl px-5 py-4 focus:outline-none focus:border-[#e93f45] font-bold" placeholder="Your Name" required />
              </div>
              <div className="space-y-2">
                <label className="block text-xs font-black text-[#0b132b] uppercase tracking-widest">Phone Number</label>
                <input type="tel" className="w-full bg-[#f8f9fa] border-2 border-[#0b132b] rounded-xl px-5 py-4 focus:outline-none focus:border-[#e93f45] font-bold" placeholder="+234..." required />
              </div>
              <div className="space-y-2">
                <label className="block text-xs font-black text-[#0b132b] uppercase tracking-widest">Service Needed</label>
                <select className="w-full bg-[#f8f9fa] border-2 border-[#0b132b] rounded-xl px-5 py-4 focus:outline-none focus:border-[#e93f45] font-bold appearance-none" required>
                  <option value="">Select Service / Device</option>
                  <option value="buy_phone">Buy a Phone</option>
                  <option value="phone">Phone Repair</option>
                  <option value="laptop">Laptop / PC Repair</option>
                  <option value="other">Accessories / Other</option>
                </select>
              </div>
              <button type="submit" className="w-full bg-[#0b132b] hover:bg-[#e93f45] text-white font-black text-xl py-5 rounded-xl transition-colors uppercase tracking-widest border-2 border-[#0b132b] mt-4">
                Confirm Booking
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer id="contact" className={\`\${DARK_BG} pt-24 pb-8 border-t-4 border-[#e93f45]\`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          <div>
            <h2 className="text-[50px] md:text-[80px] font-black text-white leading-[0.9] uppercase tracking-tighter mb-8">
              Let's Fix <br/><span className="text-[#e93f45]">It Today.</span>
            </h2>
            <a href={\`tel:\${BRAND.phone.replace(/\\s+/g, '')}\`} className="inline-flex items-center gap-4 bg-[#e93f45] text-white px-8 py-5 rounded-full font-black text-2xl border-2 border-white hover:bg-white hover:text-[#0b132b] hover:border-[#0b132b] transition-all">
              <Phone size={28} className={ICON_COLOR} /> {BRAND.phoneFormatted}
            </a>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-10">
            <div className="space-y-6 text-white font-bold">
              <div className="text-[#e93f45] text-sm font-black uppercase tracking-widest">Location</div>
              <div className="flex gap-4">
                <MapPin className={ICON_COLOR} size={24} />
                <div>
                  <p>{BRAND.address}</p>
                  <p>{BRAND.city}</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Clock className={ICON_COLOR} size={24} />
                <p>{BRAND.hours}</p>
              </div>
            </div>
            
            <div className="space-y-6 text-white font-bold">
              <div className="text-[#e93f45] text-sm font-black uppercase tracking-widest">Connect</div>
              <div className="flex gap-4">
                <MessageCircle className={ICON_COLOR} size={24} />
                <a href={BRAND.whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-[#e93f45]">WhatsApp Us</a>
              </div>
              <div className="flex gap-4">
                <Mail className={ICON_COLOR} size={24} />
                <a href={\`mailto:\${BRAND.email}\`} className="hover:text-[#e93f45]">{BRAND.email}</a>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full h-1 bg-[#e93f45] mb-8"></div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <Logo />
          <div className="flex gap-4">
            <a href={BRAND.twitterUrl} className="w-12 h-12 rounded-full bg-white flex items-center justify-center hover:bg-[#e93f45] transition-colors border-2 border-[#0b132b]">
              <Twitter size={20} className="text-[#0b132b]" />
            </a>
            <a href="#" className="w-12 h-12 rounded-full bg-white flex items-center justify-center hover:bg-[#e93f45] transition-colors border-2 border-[#0b132b]">
              <Instagram size={20} className="text-[#0b132b]" />
            </a>
          </div>
        </div>
        
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-[#f8f9fa] font-sans selection:bg-[#0b132b] selection:text-[#e93f45]">
      <Navbar />
      <Chatbot />
      <main>
        <Hero />
        <Marquee />
        <Services />
        <About />
        <HowItWorks />
        <Appointment />
      </main>
      <Footer />
    </div>
  );
}
`;
fs.writeFileSync('src/App.tsx', content);
console.log('App.tsx rebuild complete with Webflow-style UI');
