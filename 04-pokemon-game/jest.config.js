// module.exports = {
//   preset: '@vue/cli-plugin-unit-jest',
//   transform: {
//     '^.+\\.js$': 'babel-jest', 
//   },
// }

module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  transform: {
    '^.+\\.js$': 'babel-jest',
  },
  transformIgnorePatterns: [
    '/node_modules/(?!axios)',
  ],
};
