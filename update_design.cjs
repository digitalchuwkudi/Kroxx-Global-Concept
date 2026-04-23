const fs = require('fs');

try {
  let content = fs.readFileSync('src/App.tsx', 'utf8');

  // 1. Color replacements: Change red (#e93f45) to blue (#2563eb)
  content = content.replace(/#e93f45/g, '#2563eb');
  content = content.replace(/RED_BG/g, 'BLUE_BG');

  // 2. Service Description Update
  content = content.replace(/'Sales of Phones'/g, "'Sales of Phones & Laptops'");
  content = content.replace(/Apple, Samsung, Tecno, Xiaomi, and more top brands\./g, "Apple, HP, Samsung, Dell, Lenovo, Tecno, and more top brands.");

  // 3. Appointment Form Update
  content = content.replace(/>Buy a Phone</g, ">Buy a Phone / Laptop<");
  content = content.replace(/"buy_phone"/g, '"buy_device"');

  // 4. Navbar Links Update
  if (!content.includes("{ name: 'Reviews', href: '#reviews' }")) {
    content = content.replace(
      /{ name: 'Process', href: '#process' },/,
      "{ name: 'Process', href: '#process' },\n    { name: 'Reviews', href: '#reviews' },"
    );
  }

  // 5. Add Reviews Component
  const reviewsStr = `
const Reviews = () => {
  const reviews = [
    { name: "John Doe", text: "Incredible service. They fixed my MacBook's dead logic board in two days when others told me to buy a new one.", role: "Local Guide" },
    { name: "Sarah Williams", text: "Got a screen replacement for my iPhone. It looks crisp and perfect. The techs were very professional.", role: "Verified Customer" },
    { name: "Michael O.", text: "Best gadget shop! Transparent pricing and my laptop runs faster than ever thanks to the SSD upgrade.", role: "Verified Customer" }
  ];

  return (
    <section id="reviews" className={\`\${SECTION_PADDING} \${LIGHT_BG}\`}>
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
              className="bg-white border-4 border-[#0b132b] rounded-3xl p-8 hover:-translate-y-2 transition-transform duration-300 shadow-[8px_8px_0px_0px_#2563eb]"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => <Star key={i} size={24} className="text-[#2563eb]" fill="currentColor" />)}
              </div>
              <p className="text-lg font-bold text-[#0b132b] mb-8 leading-relaxed">"{review.text}"</p>
              <div>
                <h4 className="text-lg font-black text-[#0b132b] uppercase tracking-wide">{review.name}</h4>
                <p className="text-slate-500 font-bold">{review.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
`;

  // Insert the reviews component if it hasn't been added yet
  if (!content.includes('const Reviews = () => {')) {
    content = content.replace('const Appointment = () => {', reviewsStr + '\nconst Appointment = () => {');
  }

  // 6. Inject Reviews component into the main App layout
  if (!content.includes('<Reviews />')) {
    content = content.replace('<HowItWorks />', '<HowItWorks />\n        <Reviews />');
  }

  // Handle potential lingering instances of replacing 'cream with Red' comment to 'cream with Blue'
  content = content.replace(/Replacing cream with Red/g, 'Replacing cream with Blue');

  fs.writeFileSync('src/App.tsx', content);
  console.log("App.tsx has been successfully updated with blue colors and reviews section.");
} catch (error) {
  console.error("Error updating App.tsx:", error);
}
