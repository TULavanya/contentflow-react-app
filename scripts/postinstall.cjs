// Post-install script to ensure Rollup native binaries are available
const { execSync } = require('child_process');
const { platform, arch } = require('os');
const fs = require('fs');
const path = require('path');

const platformArch = `${platform()}-${arch()}`;

// Only install Linux binary on Linux systems
if (platform() === 'linux' && arch() === 'x64') {
  const binaryPath = path.join(__dirname, '..', 'node_modules', '@rollup', 'rollup-linux-x64-gnu');
  
  if (!fs.existsSync(binaryPath)) {
    try {
      console.log('Installing Rollup native binary for Linux x64...');
      execSync('npm install --no-save @rollup/rollup-linux-x64-gnu@4.9.5', { 
        stdio: 'inherit',
        cwd: path.join(__dirname, '..')
      });
      console.log('✓ Rollup native binary installed successfully');
    } catch (error) {
      console.warn('⚠ Warning: Could not install Rollup native binary');
      console.warn('Attempting alternative installation...');
      try {
        execSync('npm install --no-save --legacy-peer-deps @rollup/rollup-linux-x64-gnu@4.9.5', { 
          stdio: 'inherit',
          cwd: path.join(__dirname, '..')
        });
      } catch (e) {
        console.error('Failed to install Rollup binary. Build may fail.');
      }
    }
  } else {
    console.log('✓ Rollup native binary already installed');
  }
} else {
  console.log(`Platform ${platformArch} - Rollup native binary not required for local development`);
}

