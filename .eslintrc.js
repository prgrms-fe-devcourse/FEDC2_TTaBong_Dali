module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    'airbnb',
    'eslint:recommended',
    'plugin:import/errors', // 설치한 경우
    'plugin:import/warnings', // 설치한 경우
    'plugin:prettier/recommended',
  ],
  rules: {
    'linebreak-style': 0,
    'import/prefer-default-export': 0,
    'import/extensions': 0,
    'no-use-before-define': 0,
    'import/no-unresolved': 0,
    'react/react-in-jsx-scope': 0,
    'import/no-extraneous-dependencies': 0, // 테스트 또는 개발환경을 구성하는 파일에서는 devDependency 사용을 허용
    'no-shadow': 0,
    'react/prop-types': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'no-nested-ternary': 0,
    'no-underscore-dangle': 0,
    'no-unused-vars': 0,
    'react/function-component-definition': 0, // 화살표 함수 사용
    'react/forbid-prop-types': 0, // PropTypes.array,object,any 가능하게
    'react/require-default-props': 0,
  },
  overrides: [
    {
      files: ['*.stories.js', '*.stories.jsx'],
      rules: {
        'react/jsx-props-no-spreading': 0,
      },
    },
  ],
};
