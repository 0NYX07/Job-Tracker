import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const srcDir = path.join(__dirname, 'src');

function cleanFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  const original = content;

  // 1. Strip JSX comments
  content = content.replace(/\{\s*\/\*[\s\S]*?\*\/\s*\}/g, '');
  
  // 2. Strip block comments
  content = content.replace(/\/\*[\s\S]*?\*\//g, '');

  // 3. Strip full-line comments starting with //
  content = content.replace(/^[ \t]*\/\/.*$/gm, '');

  // 4. Strip inline comments starting with // (be careful with URLs)
  content = content.replace(/[ \t]+\/\/.*$/gm, '');

  // Clean up excessive newlines caused by comment stripping
  content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
  content = content.replace(/^\s*\n/g, ''); // Fix first line if it became empty

  if (original !== content) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Cleaned:', filePath);
  }
}

function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDirectory(fullPath);
    } else if (/\.(js|jsx|css)$/.test(file)) {
      cleanFile(fullPath);
    }
  }
}

processDirectory(srcDir);
console.log('Finished removing comments');
