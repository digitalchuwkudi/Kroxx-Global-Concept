import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Smartphone, Laptop, Battery, Wrench, ShieldCheck, 
  Cpu, Zap, Phone, MapPin, Clock, ArrowRight, Menu, X,
  CheckCircle2, Star, CreditCard, CalendarDays, Calendar, Mail, Sparkles, 
  AlertCircle, HardDrive, PhoneCall, ArrowUp, ChevronDown, Quote,
  Facebook, Twitter, Instagram, Linkedin, MessageCircle, PenTool,
  ShoppingCart, Bot, Send, ChevronRight
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
  googleMapsUrl: "https://maps.google.com/?q=Emab+Plaza+Wuse+2+Abuja",
};

// Global Icon Theme (One color)
const ICON_COLOR = "text-[#ffffff]"; 

// Webflow inspired styling classes
const SECTION_PADDING = "py-16 md:py-24";
const BENTO_CARD = "bg-[#0b132b] rounded-3xl p-8 md:p-10"; // Dark cards on Red/Light backgrounds
const BLUE_BG = "bg-[#1b6feb]"; // Replacing cream with Blue
const GRADIENT_BG = "bg-[#1b6feb]";
const DARK_BG = "bg-[#1b6feb]";
const LIGHT_BG = "bg-[#f8f9fa]";

const IconBox = ({ icon: Icon, className = "" }) => (
  <div className={`w-14 h-14 rounded-full flex items-center justify-center bg-[#1b6feb] ${className}`}>
    <Icon className={ICON_COLOR} size={24} />
  </div>
);

const Logo = () => (
  <div className="flex items-center gap-3 select-none relative z-10">
    <img src="https://i.ibb.co/Fqb7DbWQ/Screenshot-20251021-152959-Gallery-removebg-preview.png" alt="Kroxx Logo" className="w-16 h-16 md:w-24 md:h-24 object-contain" />
    <div className="flex flex-col leading-none pt-1">
      <span className="font-black italic tracking-tighter text-2xl md:text-3xl text-white drop-shadow-md">
        KROXX
      </span>
      <span className="text-[9px] sm:text-[10px] font-bold tracking-[0.2em] text-white uppercase mt-1">
        Global Concept
      </span>
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
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed w-full z-50 top-0 left-0 pt-3 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="bg-[#1b6feb] rounded-full px-5 py-2 flex justify-between items-center shadow-lg border-2 border-[#0b132b]">
          <a href="#home" className="hover:scale-105 transition-transform">
            <Logo />
          </a>
          
          <div className="hidden lg:flex items-center space-x-8 bg-[#0b132b] px-8 py-3 rounded-full">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-sm font-bold text-white hover:bg-[#e93f45] hover:text-[#0b132b] px-3 py-1 -ml-3 rounded-full transition-colors uppercase tracking-wide">
                {link.name}
              </a>
            ))}
          </div>

          <div className="hidden lg:flex items-center">
            <a href={`tel:${BRAND.phone.replace(/\s+/g, '')}`} className="flex items-center justify-center gap-2 bg-[#0b132b] hover:bg-white hover:text-[#0b132b] text-white px-8 py-4 rounded-full font-black text-lg transition-colors border-2 border-[#0b132b] shadow-md uppercase tracking-wider">
              <Phone size={24} className="text-[#60a5fa] animate-pulse" /> <span>{BRAND.phoneFormatted}</span>
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
            className="fixed inset-0 z-[100] bg-[#1b6feb] flex flex-col p-6"
          >
            <div className="flex justify-between items-center mb-12">
              <Logo />
              <button onClick={() => setIsMobileMenuOpen(false)} className="p-3 bg-[#0b132b] rounded-full text-white">
                <X size={28} />
              </button>
            </div>
            <div className="flex flex-col gap-6 text-center">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} onClick={() => setIsMobileMenuOpen(false)} className="text-4xl font-black text-white hover:bg-[#e93f45] hover:text-[#0b132b] px-4 py-2 rounded-full uppercase tracking-tighter">
                  {link.name}
                </a>
              ))}
              <a href={`tel:${BRAND.phone.replace(/\s+/g, '')}`} onClick={() => setIsMobileMenuOpen(false)} className="mt-8 mx-auto flex items-center justify-center gap-2 bg-[#0b132b] hover:bg-white hover:text-[#0b132b] text-white px-8 py-4 rounded-full font-black text-lg transition-colors border-2 border-[#0b132b] shadow-md uppercase tracking-wider w-full max-w-sm">
                <Phone size={24} className="text-[#60a5fa] animate-pulse" /> <span>Call Now</span>
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
    <div className="bg-[#0b132b] py-4 border-y-2 border-[#1b6feb] overflow-hidden flex whitespace-nowrap">
      <motion.div 
        animate={{ x: [0, -1000] }} 
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        className="flex items-center gap-8 font-black text-white text-xl md:text-2xl uppercase tracking-widest"
      >
        {Array(8).fill("FAST GADGET REPAIRS • ORIGINAL PARTS • PREMIUM DEVICE SALES • 90-DAY WARRANTY • NATIONWIDE COURIER & SHIPPING • FAST DELIVERY • ").map((text, i) => (
          <span key={i}>{text}</span>
        ))}
      </motion.div>
    </div>
  );
};

const Hero = () => {
  return (
    <header id="home" className={`${GRADIENT_BG} pt-48 md:pt-60 pb-16 min-h-screen flex flex-col justify-center`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left relative z-10">
            <div className="bg-[#0b132b] border-2 border-[#0b132b] px-4 py-2 rounded-full flex items-center gap-2 mb-8">
              <span className="w-3 h-3 rounded-full bg-white animate-pulse"></span>
              <span className="font-bold text-white text-sm tracking-widest">Available 24 Hours</span>
            </div>
            
            <h1 className="text-[50px] sm:text-[70px] md:text-[85px] leading-[1.05] md:leading-[1.1] font-black text-white uppercase tracking-tighter mb-8 xl:whitespace-nowrap">
              Premium <br/>
              Gadget Sales <br/>
              & Repair in <br/>
              <span className="relative inline-block mt-4 text-white z-10">
                Abuja
                <svg className="absolute -inset-6 w-[calc(100%+48px)] h-[calc(100%+48px)] text-[#e93f45] -z-10" viewBox="0 0 200 80" preserveAspectRatio="none" style={{ filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.1))' }}>
                  <path d="M25,40 C25,12 175,12 175,40 C175,68 20,68 20,40 C20,32 50,18 90,18" fill="none" stroke="currentColor" strokeWidth="8" strokeLinecap="round" style={{ transform: 'rotate(-4deg)', transformOrigin: 'center' }} />
                </svg>
              </span>
            </h1>
            
            <p className="text-lg md:text-xl font-medium text-white/90 mb-10 max-w-lg leading-relaxed">
              Experience lightning-fast service, genuine parts, and absolute reliability for all your smartphones, laptops, and tech accessories.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 w-full sm:w-auto">
              <a href={BRAND.whatsappUrl} target="_blank" rel="noopener noreferrer" className="bg-[#0b132b] text-white px-8 h-[68px] rounded-full font-black text-lg hover:bg-[#e93f45] hover:text-[#0b132b] transition-colors border-2 border-[#0b132b] flex items-center gap-3 w-full sm:w-auto justify-center uppercase shadow-lg">
                Chat on Whatsapp <ArrowRight size={20} className="text-current" />
              </a>
              <div className="flex flex-col items-center sm:items-start gap-2 w-full sm:w-auto">
                <button 
                  onClick={() => {
                     const evt = new CustomEvent('open-chat');
                     window.dispatchEvent(evt);
                  }}
                  className="flex items-center justify-center gap-2 bg-[#0b132b] hover:bg-white hover:text-[#0b132b] text-white px-8 py-4 rounded-full font-black text-lg transition-colors border-2 border-[#0b132b] shadow-md uppercase tracking-wider w-full sm:w-auto"
                >
                  AI RECEPTIONIST <Bot size={24} className="text-current" />
                </button>
                <div className="text-white text-xs font-bold tracking-widest px-3 py-1 bg-[#e93f45] rounded-full shadow-sm animate-pulse flex items-center gap-1 w-full justify-center lg:justify-end sm:w-auto lg:pr-4">
                  <span className="w-1.5 h-1.5 bg-white rounded-full"></span> 
                  Skip the wait - instant answers!
                </div>
              </div>
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
            <div className="absolute bottom-6 left-6 right-6 bg-white border-2 border-[#0b132b] rounded-3xl p-6 flex items-center justify-between shadow-2xl animate-[bounce_4s_ease-in-out_infinite]">
              <div>
                <div className="text-4xl font-black text-[#1b6feb]">10k+</div>
                <div className="text-[#0b132b] font-bold text-sm tracking-widest uppercase">Fixed Gadgets</div>
              </div>
              <IconBox icon={Wrench} className="bg-[#1b6feb] text-white border border-[#1b6feb]" />
            </div>
          </div>

        </div>
      </div>
    </header>
  );
};

const SectionHeading = ({ top, title, light = false, align = "left" }: any) => (
  <div className={`mb-14 ${align === "center" ? "flex flex-col items-center text-center" : ""}`}>
    <div className={`inline-block px-4 py-1 rounded-full border-2 ${light ? 'border-white text-white' : 'border-[#0b132b] text-[#0b132b]'} font-bold text-sm uppercase tracking-widest mb-4`}>
      {top}
    </div>
    <h2 className={`text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none ${light ? 'text-white' : 'text-[#0b132b]'}`}>
      {title}
    </h2>
  </div>
);


const WhyChooseUs = () => {
  const points = [
    { title: "Elite Mastery", desc: "No guesswork. Our certified engineers deliver surgical-level precision on every device." },
    { title: "OEM Original Parts", desc: "We never compromise on components—only genuine, factory-grade parts are used." },
    { title: "Express Repair", desc: "Over 80% of our device restorations are completed flawlessly in under 2 hours." },
    { title: "Data Security Guard", desc: "Your personal files, photos, and passwords remain strictly private during any repair." },
  ];
  return (
    <section className={`${SECTION_PADDING} bg-white border-y-4 border-[#0b132b]`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading top="Why Choose Us" title="The Kroxx Advantage" align="center" />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {points.map((pt, i) => (
            <div key={i} className={`bg-white rounded-3xl p-8 border-4 border-[#0b132b] shadow-[8px_8px_0px_0px_#1b6feb] hover:-translate-y-2 transition-transform duration-300`}>
               <h3 className="text-2xl font-black text-[#0b132b] uppercase tracking-tight mb-3">{pt.title}</h3>
               <p className="text-slate-600 font-medium leading-relaxed">{pt.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const items = [
    { title: 'Sales of Phones & Laptops', icon: ShoppingCart, desc: 'Premium, new and refurbished devices including Apple, HP, Samsung, Dell, Lenovo, Tecno, and more top brands.' },
    { title: 'Screen Repairs', icon: Zap, desc: 'Fast, high-quality display replacements for top brands.' },
    { title: 'Diagnostics', icon: Wrench, desc: 'Thorough testing and cleaning of internal logic boards.' },
    { title: 'Battery Specialists', icon: Battery, desc: 'High-capacity, genuine battery installations to restore peak power.' },
    { title: 'Hardware Upgrades', icon: HardDrive, desc: 'Memory expansion, storage SSD swaps, and performance boosts.' },
    { title: 'Accessories', icon: Smartphone, desc: 'High-quality chargers, cases, screen protectors, and audio gear.' },
  ];

  return (
    <section id="services" className={`${SECTION_PADDING} ${LIGHT_BG}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading top="What We Do" title="Comprehensive Services" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((srv, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white border-4 border-[#0b132b] rounded-3xl p-8 hover:-translate-y-2 transition-transform duration-300 shadow-[8px_8px_0px_0px_#1b6feb]"
            >
              <IconBox icon={srv.icon} className="bg-[#0b132b] text-white mb-6 border-2 border-[#0b132b]" />
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
    <section id="about" className={`${SECTION_PADDING} ${GRADIENT_BG} border-y-4 border-[#0b132b]`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          <div className="order-2 lg:order-1 relative">
            <div className="absolute inset-0 bg-[#0b132b] rounded-3xl translate-x-4 translate-y-4"></div>
            <img 
              src="https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&w=800&q=80" 
              alt="Master Technician" 
              className="relative z-10 w-full h-[600px] object-cover rounded-3xl border-4 border-[#0b132b] grayscale mix-blend-multiply"
            />
          </div>

          <div className="order-1 lg:order-2">
            <SectionHeading top="Meet Our Expert" title="Madudim Ikechukwu Kingsley" light />
            
            <p className="text-xl font-black text-[#0b132b] mb-6 leading-relaxed tracking-widest uppercase">
              Lead Technician & Founder
            </p>
            <p className="text-3xl font-black text-white mb-8 leading-tight drop-shadow-sm">
              “Every device we handle matters — because we know how important it is to you.”
            </p>
            <p className="text-lg font-medium text-white/90 mb-6 leading-relaxed">
              With over 10 years of hands-on experience, Kingsley leads a team focused on sales of phone and laptop gadgets, precision repairs, honest diagnostics, and long-term solutions — not temporary fixes.
            </p>
            <p className="text-lg font-medium text-white/90 mb-10 leading-relaxed">
              From screen replacements to advanced board repairs and data recovery, we make sure your device is restored properly, the first time.
            </p>
            
            <div className="flex flex-col gap-4 text-white font-black text-xl">
              <div className="flex items-center gap-4">
                <div className="bg-[#0b132b] rounded-full p-1"><CheckCircle2 className="text-white" size={24} /></div> No guesswork
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-[#0b132b] rounded-full p-1"><CheckCircle2 className="text-white" size={24} /></div> Clear communication
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-[#0b132b] rounded-full p-1"><CheckCircle2 className="text-white" size={24} /></div> Results you can rely on
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
    { title: 'Call or Bring Device In', desc: 'Visit our shop and meet with specialist.', icon: MapPin },
    { title: 'Free Diagnostic', desc: 'We run deep tests to find the exact root cause.', icon: AlertCircle },
    { title: 'Repair Authorized', desc: 'Approve the transparent quote and we fix it.', icon: Wrench },
    { title: 'Test & Pickup', desc: 'You inspect, we verify, and you walk out happy.', icon: CheckCircle2 }
  ];

  return (
    <section id="process" className={`${SECTION_PADDING} ${DARK_BG}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading top="Working Process" title="Transparent Steps" light />
        
        <div className="grid md:grid-cols-4 gap-6">
          {steps.map((step, idx) => (
            <div key={idx} className="bg-white rounded-3xl p-8 relative border-4 border-[#1b6feb]">
              <div className="absolute -top-6 -right-6 text-8xl font-black text-[#e93f45]/20 leading-none">0{idx + 1}</div>
              <IconBox icon={step.icon} className="bg-[#0b132b] text-white mb-8 w-16 h-16 border-2 border-[#0b132b]" />
              <h4 className="text-2xl font-black text-[#0b132b] uppercase mb-4 leading-none">{step.title}</h4>
              <p className="text-slate-600 font-bold">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


const Reviews = () => {
  const reviews = [
    { name: "John Mbakwe", text: "Incredible service. They fixed my MacBook's dead logic board in two days when others told me to buy a new one.", role: "Local Guide", img: "https://i.ibb.co/6RcPkqDT/Whisk-0e5aeb8b87067858cb54852578eae9eadr.jpg" },
    { name: "Sarah Haasan", text: "Got a screen replacement for my iPhone. It looks crisp and perfect. The techs were very professional.", role: "Verified Customer", img: "https://i.ibb.co/k2bh19Sn/Whisk-be27d2c09edd75ea95c43bd8e442c7d6dr.jpg" },
    { name: "Tosin Olubayo", text: "Best gadget shop! Transparent pricing and my laptop runs faster than ever thanks to the SSD upgrade.", role: "Verified Customer", img: "https://i.ibb.co/DHm39nLh/Whisk-23fb0058bcefc8b9b07442d1828f2609dr.jpg" }
  ];

  return (
    <section id="reviews" className={`${SECTION_PADDING} ${LIGHT_BG}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading top="Testimonials" title="What Clients Say" />
        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((review, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white border-4 border-[#0b132b] rounded-3xl p-8 hover:-translate-y-2 transition-transform duration-300 shadow-[8px_8px_0px_0px_#1b6feb]"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => <Star key={i} size={24} className="text-[#1b6feb]" fill="currentColor" />)}
              </div>
              <p className="text-lg font-bold text-[#0b132b] mb-8 leading-relaxed">"{review.text}"</p>
              <div className="flex justify-between items-end">
                <div>
                  <h4 className="text-lg font-black text-[#0b132b] uppercase tracking-wide">{review.name}</h4>
                  <p className="text-slate-500 font-bold">{review.role}</p>
                </div>
                <div className="w-16 h-16 bg-slate-200 rounded-xl overflow-hidden border-2 border-[#0b132b] shrink-0">
                  <img src={review.img} className="w-full h-full object-cover grayscale" alt={review.name} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Appointment = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', service: 'Screen Replacement' });

  const handleBooking = (e) => {
    e.preventDefault();
    const text = `Hello Kroxx Gadgets! I would like to book a VIP slot.%0A%0A*Name:* ${formData.name}%0A*Phone:* ${formData.phone}%0A*Service Required:* ${formData.service}`;
    window.open(`https://wa.me/2349054650886?text=${text}`, '_blank');
  };

  return (
    <section id="appointment" className={`${SECTION_PADDING} bg-[#f8f9fa] border-t-4 border-[#0b132b]`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading top="Skip the Queue" title="Book For Premium Service" align="center" />
        
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-start mt-12">
          
          {/* Booking Option (Form) */}
          <div className={`bg-[#1b6feb] rounded-3xl p-8 md:p-10 transform hover:scale-[1.02] transition-transform duration-300 relative`}>
             <div className="flex items-center gap-4 mb-8">
               <IconBox icon={Calendar} className="bg-[#0b132b] text-white border-4 border-[#0b132b]" />
               <div>
                 <h3 className="text-3xl font-black text-white uppercase tracking-tight">Fast Response</h3>
                 <p className="text-[#60a5fa] font-bold">Secure your priority slot now</p>
               </div>
             </div>
             
             <form onSubmit={handleBooking} className="space-y-4">
               <div>
                 <input 
                   type="text" 
                   required
                   value={formData.name}
                   onChange={e => setFormData({...formData, name: e.target.value})}
                   placeholder="Your Name" 
                   className="w-full bg-white/10 text-white placeholder:text-slate-400 px-6 py-4 rounded-xl border-2 border-transparent focus:border-[#e93f45] focus:outline-none font-medium"
                 />
               </div>
               <div>
                 <input 
                   type="tel" 
                   required
                   value={formData.phone}
                   onChange={e => setFormData({...formData, phone: e.target.value})}
                   placeholder="WhatsApp Number" 
                   className="w-full bg-white/10 text-white placeholder:text-slate-400 px-6 py-4 rounded-xl border-2 border-transparent focus:border-[#e93f45] focus:outline-none font-medium"
                 />
               </div>
               <div>
                 <select 
                   required
                   value={formData.service}
                   onChange={e => setFormData({...formData, service: e.target.value})}
                   className="w-full bg-[#1e293b] text-white px-6 py-4 rounded-xl border-2 border-transparent focus:border-[#e93f45] focus:outline-none font-medium appearance-none"
                 >
                   <option value="Sales of Phones & Laptops">Sales of Phones & Laptops</option>
                   <option value="Screen Repairs">Screen Repairs</option>
                   <option value="Diagnostics & Hardware Repairs">Diagnostics & Hardware Repairs</option>
                   <option value="Battery Replacement">Battery Replacement</option>
                   <option value="Hardware Upgrades & Accessories">Hardware Upgrades & Accessories</option>
                   <option value="Other Issues">Other Issues</option>
                 </select>
               </div>
               <button type="submit" className="flex items-center justify-center gap-2 bg-[#0b132b] hover:bg-white hover:text-[#0b132b] text-white w-full py-5 rounded-full font-black text-lg transition-colors border-2 border-[#0b132b] shadow-md uppercase tracking-wider mt-4">
                 BOOK ON WHATSAPP <Send size={24} />
               </button>
             </form>
          </div>

          {/* Contact & Location */}
          <div className="bg-white rounded-3xl p-8 md:p-10 border-4 border-[#0b132b] shadow-[8px_8px_0px_0px_#1b6feb]">
            <h3 className="text-2xl font-black text-[#0b132b] uppercase mb-8 pb-4 border-b-2 border-slate-100">
              Direct Contact & Location
            </h3>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                 <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center shrink-0 border border-blue-100">
                   <Phone className="text-[#1b6feb]" size={24} />
                 </div>
                 <div>
                   <h4 className="font-bold text-[#0b132b] mb-1">Call Us Directly</h4>
                   <a href={`tel:${BRAND.phone.replace(/\s+/g, '')}`} className="text-lg text-slate-600 hover:text-[#1b6feb] font-medium transition-colors">
                     {BRAND.phone}
                   </a>
                 </div>
              </div>

              <div className="flex items-start gap-4">
                 <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center shrink-0 border border-blue-100">
                   <Mail className="text-[#1b6feb]" size={24} />
                 </div>
                 <div>
                   <h4 className="font-bold text-[#0b132b] mb-1">Email Address</h4>
                   <a href={`mailto:${BRAND.email}`} className="text-lg text-slate-600 hover:text-[#1b6feb] font-medium transition-colors break-all">
                     {BRAND.email}
                   </a>
                 </div>
              </div>
              
              <div className="flex items-start gap-4">
                 <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center shrink-0 border border-blue-100">
                   <MapPin className="text-[#1b6feb]" size={24} />
                 </div>
                 <div>
                   <h4 className="font-bold text-[#0b132b] mb-1">Service Center</h4>
                   <p className="text-lg text-slate-600 font-medium leading-relaxed">
                     {BRAND.address}
                     <br/>
                     {BRAND.city}
                   </p>
                 </div>
              </div>
            </div>
            
            <a href={BRAND.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="mt-8 flex items-center gap-2 text-[#1b6feb] font-bold hover:text-[#e93f45] transition-colors">
              Get Directions <ChevronRight size={20} />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer id="contact" className={`${GRADIENT_BG} pt-24 pb-8 border-t-4 border-[#1b6feb]`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          <div>
            <h2 className="text-[50px] md:text-[80px] font-black text-white leading-[0.9] uppercase tracking-tighter mb-8">
              Let's Fix <br/><span className="text-[#1b6feb]">It Today.</span>
            </h2>
            <a href={`tel:${BRAND.phone.replace(/\s+/g, '')}`} className="inline-flex items-center justify-center gap-2 bg-[#0b132b] hover:bg-white hover:text-[#0b132b] text-white px-8 py-4 rounded-full font-black text-lg transition-colors border-2 border-[#0b132b] shadow-md uppercase tracking-wider w-fit">
              <Phone size={24} className="text-[#60a5fa] animate-pulse" /> <span>{BRAND.phoneFormatted}</span>
            </a>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-10">
            <div className="space-y-6 text-white font-bold">
              <div className="text-[#1b6feb] text-sm font-black uppercase tracking-widest">Location</div>
              <div className="flex gap-4">
                <MapPin className="text-[#1b6feb]" size={24} />
                <div>
                  <p>{BRAND.address}</p>
                  <p>{BRAND.city}</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Clock className="text-[#1b6feb]" size={24} />
                <p>{BRAND.hours}</p>
              </div>
            </div>
            
            <div className="space-y-6 text-white font-bold">
              <div className="text-[#1b6feb] text-sm font-black uppercase tracking-widest">Connect</div>
              <div className="flex gap-4">
                <MessageCircle className="text-[#1b6feb]" size={24} />
                <a href={BRAND.whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-[#e93f45] font-extrabold transition-colors">{BRAND.phoneFormatted}</a>
              </div>
              <div className="flex gap-4">
                <Mail className="text-[#1b6feb]" size={24} />
                <a href={`mailto:${BRAND.email}`} className="hover:text-[#e93f45] font-extrabold transition-colors">{BRAND.email}</a>
              </div>
              <div className="flex gap-4 pt-4">
                <a href={BRAND.twitterUrl} className="w-12 h-12 rounded-full bg-white flex items-center justify-center hover:bg-[#e93f45] hover:text-[#0b132b] transition-colors border-2 border-[#0b132b]">
                  <Twitter size={20} className="text-[#0b132b]" />
                </a>
                <a href="#" className="w-12 h-12 rounded-full bg-white flex items-center justify-center hover:bg-[#e93f45] hover:text-[#0b132b] transition-colors border-2 border-[#0b132b]">
                  <Instagram size={20} className="text-[#0b132b]" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full h-1 bg-[#1b6feb] mb-8"></div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mt-4">
          <Logo />
          <div className="text-white text-[10px] tracking-wider px-3 py-1 bg-[#0b132b] rounded-full">Cooked by Digital Chukwudi</div>
        </div>
        
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-[#f8f9fa] font-sans selection:bg-[#0b132b] selection:text-[#1b6feb]">
      <Navbar />
      <Chatbot />
      <main>
        <Hero />
        <Marquee />
        <Services />
        <About />
        <WhyChooseUs />
        <HowItWorks />
        <Reviews />
        <Appointment />
      </main>
      <Footer />
    </div>
  );
}
