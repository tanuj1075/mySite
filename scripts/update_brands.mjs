import fs from 'fs';
let content = fs.readFileSync('src/data/footwearCatalog.ts', 'utf8');
content = content.replace(
  /'CROCS',\r?\n\];/,
  "'CROCS',\n  'RED TAPE',\n  'CLARKS',\n];"
);
fs.writeFileSync('src/data/footwearCatalog.ts', content, 'utf8');
console.log('Brands updated successfully.');
