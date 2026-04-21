const fs = require('fs');
const path = 'src/app/features/negotiations/pages/client-follow-up copy/components/main-content/main-content.html';
const content = fs.readFileSync(path, 'utf8');
const lines = content.split('\n');

let depth = 0;
let startLine = 101;
let endLine = 2627;

console.log(`Auditing ${path} from line ${startLine} to ${endLine}...`);

for (let i = startLine - 1; i < endLine - 1; i++) {
    const line = lines[i];
    if (!line) continue;
    
    // Count opening divs that are NOT self-closing
    // Simple but mostly effective for this file
    const opens = (line.match(/<div(\s|>)/g) || []).length;
    const closes = (line.match(/<\/div>/g) || []).length;
    
    depth += opens;
    depth -= closes;
    
    if (depth < 0) {
        console.log(`ERROR: Depth went below 0 at line ${i + 1}: ${line.trim()}`);
        depth = 0; // reset to avoid cascaded errors
    }
}

console.log(`FINAL DEPTH before line ${endLine}: ${depth}`);
