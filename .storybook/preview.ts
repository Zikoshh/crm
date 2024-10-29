import type { Preview } from '@storybook/react';
import './styles/reset.css';
import './fonts/Inter/inter.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
