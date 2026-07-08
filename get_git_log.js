const { execSync } = require('child_process');
try {
  const log = execSync('git log -p -n 3', { encoding: 'utf8' });
  console.log(log);
} catch (e) {
  console.error(e);
}
