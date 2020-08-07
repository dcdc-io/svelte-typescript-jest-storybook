module.exports = {
  transform: {
    '^.+\\.svelte$': ['svelte-jester', { "preprocess": true}],
    '^.+\\.js$': 'babel-jest',
  },
  moduleFileExtensions: ['js', 'ts', 'svelte'],
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
};