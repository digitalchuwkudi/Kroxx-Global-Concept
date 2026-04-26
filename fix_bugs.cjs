const fs = require('fs');
let app = fs.readFileSync('src/App.tsx', 'utf8');

// 1. Add ChevronRight import
app = app.replace(
  'ShoppingCart, Bot, Send',
  'ShoppingCart, Bot, Send, ChevronRight'
);

// 2. Add googleMapsUrl to BRAND
app = app.replace(
  'whatsappUrl: "https://wa.me/2349054650886"',
  'whatsappUrl: "https://wa.me/2349054650886",\n  googleMapsUrl: "https://maps.google.com/?q=Emab+Plaza+Wuse+2+Abuja"'
);

// 3. Update SectionHeading to accept align
app = app.replace(
  'const SectionHeading = ({ top, title, light = false }) => (\\n  <div className="mb-14">',
  'const SectionHeading = ({ top, title, light = false, align = "left" }: any) => (\\n  <div className={`mb-14 ${align === "center" ? "flex flex-col items-center text-center" : ""}`}>'
);

// Fallback if newline is different
if (!app.includes('align === "center"')) {
   app = app.replace(
     /const SectionHeading = \(\{ top, title, light = false \}\) => \(\s*<div className="mb-14">/,
     'const SectionHeading = ({ top, title, light = false, align = "left" }: any) => (\\n  <div className={`mb-14 ${align === "center" ? "flex flex-col items-center text-center" : ""}`}>'
   );
}

fs.writeFileSync('src/App.tsx', app);
console.log('App.tsx Fixed!');
