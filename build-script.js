const { execSync } = require('child_process');
const fs = require('fs');

try {
  const output = execSync('npm run build', { encoding: 'utf-8', stdio: 'pipe' });
  fs.writeFileSync('build_output.txt', output);
  console.log('Build succeeded');
} catch (error) {
  fs.writeFileSync('build_output.txt', error.stdout + '\n\n' + error.stderr);
  console.log('Build failed, output saved');
}
