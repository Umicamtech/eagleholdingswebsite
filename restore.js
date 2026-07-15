const { execSync } = require('child_process');

console.log('Reverting layout and design system changes...');

const filesToRevert = [
  'src/components/Header/Header.js',
  'src/components/Header/Header.module.css',
  'src/components/Hero/Hero.module.css',
  'src/components/Services/Services.module.css',
  'src/components/Footer/Footer.module.css',
  'src/app/contact/contact.module.css',
  'src/app/globals.css'
];

try {
  execSync(`git checkout HEAD -- ${filesToRevert.join(' ')}`, { stdio: 'inherit' });
  console.log('\n✅ Successfully restored the original design system!');
  console.log('The build fixes in next.config.mjs and page.js were kept intact.');
  console.log('\nPlease let the AI know once this is done so it can apply ONLY the targeted mobile nav fix.');
} catch (error) {
  console.error('\n❌ Failed to restore files. You may need to manually revert the CSS files using your source control tab in VS Code.');
}
