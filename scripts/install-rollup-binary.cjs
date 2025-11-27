// Pre-build script to ensure Rollup native binary is available
const { execSync } = require('child_process');
const { platform, arch } = require('os');
const fs = require('fs');
const path = require('path');

console.log(`\n🔍 Checking Rollup native binary for ${platform()}-${arch()}...\n`);

// Only needed on Linux x64
if (platform() === 'linux' && arch() === 'x64') {
  const binaryPackage = '@rollup/rollup-linux-x64-gnu';
  const binaryPath = path.join(__dirname, '..', 'node_modules', '@rollup', 'rollup-linux-x64-gnu');
  
  if (!fs.existsSync(binaryPath)) {
    console.log(`⚙️  Installing ${binaryPackage} for Linux build environment...\n`);
    
    try {
      // Try direct installation
      execSync(`npm install --no-save --no-package-lock ${binaryPackage}@4.9.5`, { 
        stdio: 'inherit',
        cwd: path.join(__dirname, '..'),
        env: { ...process.env, NODE_ENV: 'development' }
      });
      console.log('\n✅ Rollup native binary installed successfully!\n');
    } catch (error) {
      console.warn('\n⚠️  First attempt failed. Trying with legacy-peer-deps...\n');
      try {
        execSync(`npm install --no-save --no-package-lock --legacy-peer-deps ${binaryPackage}@4.9.5`, { 
          stdio: 'inherit',
          cwd: path.join(__dirname, '..')
        });
        console.log('\n✅ Rollup native binary installed successfully!\n');
      } catch (e) {
        console.error('\n❌ Failed to install Rollup native binary.');
        console.error('The build may fail. Please contact support.\n');
        process.exit(1);
      }
    }
  } else {
    console.log('✅ Rollup native binary already present.\n');
  }
} else {
  console.log(`ℹ️  Platform ${platform()}-${arch()} uses Rollup fallback (no native binary needed).\n`);
}

