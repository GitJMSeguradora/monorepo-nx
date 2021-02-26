/* craco.config.js */
const path = require('path');

module.exports = {
  reactScriptsVersion: '@react-workspaces/react-scripts',
  webpack: {
    alias: {
      '@extrato': path.resolve(__dirname, '../../../src/')
    }
  },
  jest: {
    configure: {
      collectCoverageFrom: [
        'src/**/*.{js,jsx}',
        '!src/serviceWorker.js',
        '!src/**/index.js'
      ],
      coveragePathIgnorePatterns: [
        '<rootDir>/node_modules/',
        '<rootDir>/src/store',
        '<rootDir>/src/__tests__/',
        '<rootDir>/src/__mocks__/',
        '<rootDir>/src/config'
      ],
      moduleNameMapper: {
        '^@extrato(.*)': '<rootDir>/src$1'
      }
    }
  }
};
