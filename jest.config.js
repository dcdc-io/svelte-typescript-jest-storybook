module.exports = {
  transform: {
    '^.+\\.svelte$': 'svelte-jester',
    '^.+\\.js$': 'babel-jest',
  },
  moduleFileExtensions: ['js', 'ts', 'svelte'],
  preset: 'ts-jest',
  testEnvironment: 'node',
};