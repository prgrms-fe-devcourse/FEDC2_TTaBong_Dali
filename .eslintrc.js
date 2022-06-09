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
    'jsx-a11y/control-has-associated-label': 'off',
    'no-nested-ternary': 0,
    'no-underscore-dangle': 0, // db에서 자주 사용되는 property가 _id이므로 언더스코어를 쓸 수 밖에 없다.
    'no-unused-vars': 0, // 개발에 너무 방해돼서... 나중에 다시 조정할게요..!
    'react/function-component-definition': 0, // react component는 화살표 함수로 하는 것으로!
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
