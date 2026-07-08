const { execSync } = require('child_process');
const fs = require('fs');

try {
  console.log("Running npm run build...");
  const output = execSync('npm run build', { encoding: 'utf8' });
  fs.writeFileSync('build_output.txt', output);
  console.log("Build succeeded. Output written.");
} catch (e) {
  console.log("Build failed. Writing error.");
  fs.writeFileSync('build_output.txt', e.stdout + '\n\nSTDERR:\n' + e.stderr);
}
