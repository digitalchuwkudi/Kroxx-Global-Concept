const fs = require('fs');
fs.copyFileSync('src/App.tsx', 'raw_app.tsx');
console.log('copied');
