const { spawnSync } = require('child_process');
const fs = require('fs');

const isWindows = process.platform === 'win32';
const npmCommand = isWindows ? 'npm.cmd' : 'npm';

const result = spawnSync(npmCommand, ['run', 'build'], { 
  stdio: 'pipe', 
  encoding: 'utf-8' 
});

fs.writeFileSync('build_log.txt', result.stdout + '\n\n=== STDERR ===\n\n' + result.stderr);
console.log('Done running npm run build. Status:', result.status);
