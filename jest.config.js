const {defaults} = require('jest-config');

module.exports = {
  verbose: true,
  preset: 'ts-jest',
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx'],
  testEnvironment: 'jsdom',
};