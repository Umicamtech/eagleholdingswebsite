const { execSync } = require('child_process');
try {
  console.log('Installing packages...');
  execSync('npm install react-google-recaptcha-v3 resend', { 
    stdio: 'inherit',
    cwd: 'c:\\vscode\\eagleholdingswebsite'
  });
  console.log('Done!');
} catch(e) {
  console.error('Error:', e.message);
}
