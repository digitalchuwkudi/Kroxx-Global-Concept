const fs = require('fs');

let app = fs.readFileSync('src/App.tsx', 'utf8');

// 1. We replace the Appointment component entirely so we can add state and form elements.
const newAppointmentCode = `const Appointment = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', service: 'Screen Replacement' });

  const handleBooking = (e) => {
    e.preventDefault();
    const text = \`Hello Kroxx Gadgets! I would like to book a VIP slot.%0A%0A*Name:* \${formData.name}%0A*Phone:* \${formData.phone}%0A*Service Required:* \${formData.service}\`;
    window.open(\`https://wa.me/2349054650886?text=\${text}\`, '_blank');
  };

  return (
    <section id="appointment" className={\`\${SECTION_PADDING} bg-[#f8f9fa] border-t-4 border-[#0b132b]\`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading top="Skip the Queue" title="Book Premium Tech Care" align="center" />
        
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-start mt-12">
          
          {/* Booking Option (Form) */}
          <div className={\`\${BENTO_CARD} transform hover:scale-[1.02] transition-transform duration-300 relative\`}>
             <div className="flex items-center gap-4 mb-8">
               <div className="w-16 h-16 rounded-full bg-[#e93f45] flex items-center justify-center border-4 border-[#0b132b]">
                 <Calendar className="text-white" size={32} />
               </div>
               <div>
                 <h3 className="text-3xl font-black text-white uppercase tracking-tight">Fast Track</h3>
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
                   <option value="Screen Replacement">Screen Replacement</option>
                   <option value="Logic Board Repair">Logic Board Repair</option>
                   <option value="Battery Replacement">Battery Replacement</option>
                   <option value="Data Recovery">Data Recovery</option>
                   <option value="Device Purchase">Device Purchase / Swap</option>
                   <option value="Other">Other Issues</option>
                 </select>
               </div>
               <button type="submit" className="w-full bg-[#2563eb] hover:bg-[#e93f45] text-white hover:text-[#0b132b] font-black text-lg py-5 rounded-xl transition-all uppercase tracking-widest border-2 border-transparent hover:border-[#0b132b] flex items-center justify-center gap-3 mt-4">
                 Book via WhatsApp <Send size={24} />
               </button>
             </form>
          </div>

          {/* Contact & Location */}
          <div className="bg-white rounded-3xl p-8 md:p-10 border-4 border-[#0b132b] shadow-[8px_8px_0px_0px_#2563eb]">
            <h3 className="text-2xl font-black text-[#0b132b] uppercase mb-8 pb-4 border-b-2 border-slate-100">
              Direct Contact & Location
            </h3>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                 <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center shrink-0 border border-blue-100">
                   <Phone className="text-[#2563eb]" size={24} />
                 </div>
                 <div>
                   <h4 className="font-bold text-[#0b132b] mb-1">Call Us Directly</h4>
                   <a href={\`tel:\${BRAND.phone.replace(/\\s+/g, '')}\`} className="text-lg text-slate-600 hover:text-[#2563eb] font-medium transition-colors">
                     {BRAND.phone}
                   </a>
                 </div>
              </div>

              <div className="flex items-start gap-4">
                 <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center shrink-0 border border-blue-100">
                   <Mail className="text-[#2563eb]" size={24} />
                 </div>
                 <div>
                   <h4 className="font-bold text-[#0b132b] mb-1">Email Address</h4>
                   <a href={\`mailto:\${BRAND.email}\`} className="text-lg text-slate-600 hover:text-[#2563eb] font-medium transition-colors break-all">
                     {BRAND.email}
                   </a>
                 </div>
              </div>
              
              <div className="flex items-start gap-4">
                 <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center shrink-0 border border-blue-100">
                   <MapPin className="text-[#2563eb]" size={24} />
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
            
            <a href={BRAND.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="mt-8 flex items-center gap-2 text-[#2563eb] font-bold hover:text-[#e93f45] transition-colors">
              Get Directions <ChevronRight size={20} />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};`;

const appointmentStart = app.indexOf('const Appointment = () => {');
const appointmentEnd = app.indexOf('const Footer = () => {');
if (appointmentStart !== -1 && appointmentEnd !== -1) {
  app = app.slice(0, appointmentStart) + newAppointmentCode + "\n\n" + app.slice(appointmentEnd);
}

fs.writeFileSync('src/App.tsx', app);
console.log('App.tsx Appointment Section Updated!');
