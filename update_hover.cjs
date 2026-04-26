const fs = require('fs');

['src/App.tsx', 'src/Chatbot.tsx'].forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  content = content.replace(/hover:text-\\[#0b132b\\]/g, 'hover:text-[#2563eb]');
  fs.writeFileSync(file, content);
});

console.log('Hover colors updated.');
