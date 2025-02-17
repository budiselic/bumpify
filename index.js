#!/usr/bin/env node

const fs = require('fs');
const { execSync } = require('child_process');
const path = require('path');

// Get the project root directory
const projectRoot = process.cwd();
const packageJsonPath = path.join(projectRoot, 'package.json');
const versionJsonPath = path.join(projectRoot, 'public', 'version.json');

// Get command-line arguments (patch, minor, major)
const versionType = process.argv[3];

if (!['patch', 'minor', 'major'].includes(versionType)) {
  console.error('❌ Please use: patch, minor, or major');
  process.exit(1);
}

try {
  // 🔥 Step 1: Check if Git has uncommitted changes
  const status = execSync('git status --porcelain').toString().trim();
  if (status) {
    console.error('❌ Git working directory is not clean. Commit or stash your changes first.');
    process.exit(1);
  }

  // 🔥 Step 2: Bump version in package.json
  execSync(`npm version ${versionType} --no-git-tag-version`, { stdio: 'inherit' });

  // 🔥 Step 3: Get the updated version
  const { version } = require(packageJsonPath);

  // 🔥 Step 4: Ensure public directory exists
  if (!fs.existsSync(path.dirname(versionJsonPath))) {
    fs.mkdirSync(path.dirname(versionJsonPath), { recursive: true });
  }

  // 🔥 Step 5: Update version.json
  fs.writeFileSync(versionJsonPath, JSON.stringify({ version }, null, 2));

  console.log(`✅ version.json updated to version ${version}`);

  // 🔥 Step 6: Commit and tag the new version
  execSync('git add package.json public/version.json', { stdio: 'inherit' });
  execSync(`git commit -m "Bump version to ${version}"`, { stdio: 'inherit' });
  execSync(`git tag v${version}`, { stdio: 'inherit' });

  console.log('🚀 Version updated and committed!');
} catch (error) {
  console.error('❌ Error updating version:', error);
}
