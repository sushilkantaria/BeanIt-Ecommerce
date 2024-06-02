// module.exports = {
//     "env": {
//         "browser": true,
//         "es2021": true
//     },
//     "extends": [
//         "eslint:recommended",
//         "plugin:@typescript-eslint/recommended",
//         "plugin:react/recommended"
//     ],
//     "overrides": [
//         {
//             "env": {
//                 "node": true
//             },
//             "files": [
//                 ".eslintrc.{js,cjs}"
//             ],
//             "parserOptions": {
//                 "sourceType": "script"
//             }
//         }
//     ],
//     "parser": "@typescript-eslint/parser",
//     "parserOptions": {
//         "ecmaVersion": "latest",
//         "sourceType": "module"
//     },
//     "plugins": [
//         "@typescript-eslint",
//         "react"
//     ],
//     "rules": {
//         'react/prop-types': 'off', // Optional: Disable prop-types validation if not needed
//   },
//   settings: {
//     react: {
//       version: 'detect', // Automatically detect the React version
//     },
//     },
// }


module.exports = {
    parser: '@babel/eslint-parser', // Use babel-eslint parser
    extends: ['eslint:recommended', 'plugin:react/recommended'],
    plugins: ['react'],
    settings: {
      react: {
        version: 'detect', // Automatically detect React version
      },
    },
  };
  