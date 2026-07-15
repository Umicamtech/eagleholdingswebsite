const { execSync } = require('child_process');
const fs = require('fs');

try {
  const log = execSync('git log --oneline -n 10', { encoding: 'utf8' });
  fs.writeFileSync('git_log.txt', log);
  
  const status = execSync('git status', { encoding: 'utf8' });
  fs.writeFileSync('git_status.txt', status);
} catch (e) {
  fs.writeFileSync('git_error.txt', e.toString());
}
