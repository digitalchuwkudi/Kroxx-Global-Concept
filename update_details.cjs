const fs = require('fs');

let appContent = fs.readFileSync('src/App.tsx', 'utf8');

const replacements = [
  // Phone numbers
  ['+229 01 92 20 66 12', '+234 905 465 0886'],
  ['+2290192206612', '+2349054650886'],
  
  // Addresses (if any exist in App.tsx)
  ['123 Medical Plaza, Suite 400, New York, NY 10001', 'Shop D26 Emab Plaza Wuse 2, Abuja'],
  ['123 Tech Avenue, Downtown District', 'Shop D26 Emab Plaza Wuse 2, Abuja'],
  
  // Update Services array in App.tsx to include Accessories
  [
    `{ title: 'Diagnostics & Maintenance', icon: <Wrench size={32} className="text-red-600" />, desc: 'Thorough diagnostics and cleaning of internal components.' }`,
    `{ title: 'Sales of Phone Accessories', icon: <Smartphone size={32} className="text-red-600" />, desc: 'High-quality chargers, cases, screen protectors, and more.' },\n    { title: 'Diagnostics & Maintenance', icon: <Wrench size={32} className="text-red-600" />, desc: 'Thorough diagnostics and cleaning of internal components.' }`
  ]
];

for (const [find, replace] of replacements) {
    if (find) {
       appContent = appContent.split(find).join(replace);
    }
}

// Let's also check for any Twitter/X icons and text like "@"
appContent = appContent.replace(/@\w+/g, '@iam_Kizzykroxx');
appContent = appContent.replace(/"#"\s*className="text-slate-300.*twitter/ig, '"https://x.com/iam_Kizzykroxx" target="_blank" className="text-slate-300');

fs.writeFileSync('src/App.tsx', appContent);

let clientConfig = fs.readFileSync('src/clientConfig.ts', 'utf8');

const configReplacements = [
  ['+229 01 92 20 66 12', '+234 905 465 0886'],
  ['123 Tech Avenue, Downtown District', 'Shop D26 Emab Plaza Wuse 2, Abuja'],
  ['Phone and Laptop Sales, Screen Repairs', 'Sales of Phone & Laptop, Repairs of Phone & Laptop, Sales of Phone Accessories, Screen Repairs']
];

for (const [find, replace] of configReplacements) {
    if (find) {
       clientConfig = clientConfig.split(find).join(replace);
    }
}

fs.writeFileSync('src/clientConfig.ts', clientConfig);

console.log('Updates applied.');
