const { execSync } = require('child_process');
const fs = require('fs');

try {
  console.log("Running next lint...");
  const output = execSync('npx next lint', { encoding: 'utf8' });
  fs.writeFileSync('lint_output.txt', output);
  console.log("Lint succeeded. Output written.");
} catch (e) {
  console.log("Lint failed. Writing error.");
  fs.writeFileSync('lint_output.txt', e.stdout + '\n\nSTDERR:\n' + e.stderr);
}
