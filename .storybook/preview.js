import { ThemeProvider } from '@emotion/react';
import theme from '../src/commons/style/themes';
import GlobalStyle from '../src/commons/style/GlobalStyle';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Story />
    </ThemeProvider>
  ),
];

export const parameters = {
  viewport: {
    viewports:INITIAL_VIEWPORTS,
    defaultViewport: 'iphone12'
  },
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};


// addParameters({
//   viewport: { viewports: customViewports },
// });