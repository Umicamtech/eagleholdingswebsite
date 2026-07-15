const { execSync } = require('child_process');
const fs = require('fs');

try {
  const css = execSync('git show HEAD:src/components/Services/Services.module.css', { encoding: 'utf8' });
  fs.writeFileSync('old_css.txt', css);
  
  const js = execSync('git show HEAD:src/components/Services/Services.js', { encoding: 'utf8' });
  fs.writeFileSync('old_js.txt', js);
  console.log("Success");
} catch (e) {
  console.error(e.message);
}
