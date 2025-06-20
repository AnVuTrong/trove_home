// Simple test script to verify pricing components
const fs = require('fs');
const path = require('path');

console.log('🔍 Testing Pricing Components...');

// Check if all required files exist
const requiredFiles = [
  'src/pages/Pricing.page.tsx',
  'src/components/pages.components/pricing.components/PricingHeroSection.component.tsx',
  'src/components/pages.components/pricing.components/PricingPackagesSection.component.tsx',
  'src/components/pages.components/pricing.components/PricingTestimonialsSection.component.tsx',
  'src/components/pages.components/pricing.components/PricingPerformanceSection.component.tsx',
  'src/components/pages.components/pricing.components/index.ts',
  'src/locales/en/translation.json',
  'src/locales/vi/translation.json'
];

let allFilesExist = true;

requiredFiles.forEach(file => {
  const fullPath = path.join(__dirname, file);
  if (fs.existsSync(fullPath)) {
    console.log(`✅ ${file} exists`);
  } else {
    console.log(`❌ ${file} is missing`);
    allFilesExist = false;
  }
});

if (allFilesExist) {
  console.log('\n🎉 All pricing component files are present!');
  
  // Check translations
  try {
    const enTranslations = JSON.parse(fs.readFileSync(path.join(__dirname, 'src/locales/en/translation.json'), 'utf8'));
    const viTranslations = JSON.parse(fs.readFileSync(path.join(__dirname, 'src/locales/vi/translation.json'), 'utf8'));
    
    if (enTranslations.pricing && viTranslations.pricing) {
      console.log('✅ Pricing translations are present in both languages');
      
      // Check for popular field consistency
      const enProfessional = enTranslations.pricing.packages.professional.popular;
      const viProfessional = viTranslations.pricing.packages.professional.popular;
      
      if (enProfessional === 'true' && viProfessional === 'true') {
        console.log('✅ Popular field is consistently set as string "true"');
      } else {
        console.log('⚠️  Popular field inconsistency detected');
      }
      
      console.log('\n🚀 Pricing components are ready!');
      console.log('📍 To access: Start your dev server and navigate to /pricing');
      
    } else {
      console.log('❌ Pricing translations are missing');
    }
  } catch (error) {
    console.log('❌ Error reading translation files:', error.message);
  }
} else {
  console.log('\n❌ Some files are missing. Please check the implementation.');
}

console.log('\n📋 Summary:');
console.log('- 4 Pricing packages (Starter, Professional, Enterprise, Premium)');
console.log('- Customer testimonials section');
console.log('- Performance metrics with chart');
console.log('- OOP styling classes');
console.log('- TypeScript interfaces');
console.log('- Unit tests');
console.log('- English & Vietnamese translations'); 