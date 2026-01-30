/**
 * Jest configuration for the project.
 */
module.exports = {
  preset: 'ts-jest', // Use ts-jest preset for TypeScript support
  testEnvironment: 'jsdom', // Use jsdom for testing React components
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'], // Supported file extensions
  testMatch: [
    '**/__tests__/**/*.+(ts|tsx|js)',
    '**/?(*.)+(spec|test).+(ts|tsx|js)',
  ], // Test file patterns
  testPathIgnorePatterns: ['src/components/ui/', '.next/', 'e2e/'], // Directories to ignore for tests
  transform: {
    '^.+\.(ts|tsx)$': 'ts-jest', // Transform TypeScript files
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'], // Setup file for additional configurations
  collectCoverage: true, // Enable coverage collection
  coverageDirectory: '<rootDir>/coverage', // Coverage output directory
  coverageReporters: ['text', 'lcov'], // Coverage report formats
  coveragePathIgnorePatterns: [
    'src/components/ui/',
    '.next/',
    'e2e/',
    'src/lib/',
  ], // Directories to ignore in coverage
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.json', // Path to TypeScript config
    },
  },
};
