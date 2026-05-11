#!/usr/bin/env node

/**
 * Merge Environment Script for MCIP
 *
 * Merges .env.example into .env while preserving existing values.
 *
 * Usage:
 *   node scripts/merge-env.js
 *   npm run merge:env
 *
 * This script:
 * 1. Reads .env.example as template
 * 2. Preserves existing values from .env
 * 3. Adds new variables from .env.example
 * 4. Keeps comments and structure from .env.example
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PROJECT_ROOT = path.resolve(__dirname, '..');

const ENV_FILE = path.join(PROJECT_ROOT, '.env');
const ENV_EXAMPLE_FILE = path.join(PROJECT_ROOT, '.env.example');

/**
 * Parse .env file into key-value map
 * @param {string} content - File content
 * @returns {Map} Key-value map
 */
function parseEnvFile(content) {
  const values = new Map();

  for (const line of content.split('\n')) {
    const trimmed = line.trim();

    // Skip comments and empty lines
    if (!trimmed || trimmed.startsWith('#')) continue;

    // Parse KEY=VALUE
    const match = trimmed.match(/^([A-Za-z_][A-Za-z0-9_]*)=(.*)$/);
    if (match) {
      values.set(match[1], match[2]);
    }
  }

  return values;
}

/**
 * Merge .env.example with existing .env values
 * @param {string} exampleContent - .env.example content
 * @param {Map} existingValues - Existing .env values
 * @returns {string} Merged content
 */
function mergeEnv(exampleContent, existingValues) {
  const lines = exampleContent.split('\n');
  const mergedLines = [];
  let addedNewKeys = [];
  let preservedKeys = [];

  for (const line of lines) {
    const trimmed = line.trim();

    // Check if this is a KEY=VALUE line
    const match = trimmed.match(/^([A-Za-z_][A-Za-z0-9_]*)=.*$/);

    if (match) {
      const key = match[1];
      const existingValue = existingValues.get(key);

      if (existingValue !== undefined) {
        // Preserve existing value
        mergedLines.push(`${key}=${existingValue}`);
        preservedKeys.push(key);
      } else {
        // Keep empty value from example
        mergedLines.push(line);
        addedNewKeys.push(key);
      }
    } else {
      // Keep comments and empty lines as-is
      mergedLines.push(line);
    }
  }

  return {
    content: mergedLines.join('\n'),
    addedNewKeys,
    preservedKeys,
  };
}

/**
 * Main function
 */
function main() {
  console.log('========================================');
  console.log('  MCIP Environment Merge Script');
  console.log('========================================\n');

  // Check if .env.example exists
  if (!fs.existsSync(ENV_EXAMPLE_FILE)) {
    console.error('❌ Error: .env.example not found!');
    process.exit(1);
  }

  // Read .env.example
  const exampleContent = fs.readFileSync(ENV_EXAMPLE_FILE, 'utf8');

  // Read existing .env if it exists
  let existingValues = new Map();
  let envExists = false;

  if (fs.existsSync(ENV_FILE)) {
    envExists = true;
    const existingContent = fs.readFileSync(ENV_FILE, 'utf8');
    existingValues = parseEnvFile(existingContent);
    console.log(`📄 Found existing .env with ${existingValues.size} variables\n`);
  } else {
    console.log('📄 No existing .env found, creating from .env.example\n');
  }

  // Merge
  const result = mergeEnv(exampleContent, existingValues);

  // Write merged content
  fs.writeFileSync(ENV_FILE, result.content, 'utf8');

  // Print summary
  console.log('✅ .env file updated!\n');
  console.log('Summary:');
  console.log(`   Preserved: ${result.preservedKeys.length} existing values`);
  console.log(`   Added: ${result.addedNewKeys.length} new variables\n`);

  if (result.preservedKeys.length > 0) {
    console.log('Preserved keys:');
    result.preservedKeys.forEach((key) => console.log(`   - ${key}`));
    console.log('');
  }

  if (result.addedNewKeys.length > 0) {
    console.log('New keys added (need values):');
    result.addedNewKeys.forEach((key) => console.log(`   - ${key}`));
    console.log('');
  }

  console.log('========================================');
  console.log('📋 Next Steps:');
  console.log('');
  console.log('  1. Review .env file and fill in any empty values');
  console.log('  2. Run validation: npm run check:env');
  console.log('  3. Start server: npm run dev');
  console.log('========================================\n');
}

// Run
main();
