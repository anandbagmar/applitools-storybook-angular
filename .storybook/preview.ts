import type { Preview } from '@storybook/angular';
import { setCompodocJson } from '@storybook/addon-docs/angular';
import docJson from '../documentation.json';

setCompodocJson(docJson);

// Global: reduce motion/animations for deterministic snapshots
const disableAnimations = `
  * { transition: none !important; animation: none !important; }
`;

const preview: Preview = {
  decorators: [
    (story) => {
      const styleId = 'reduce-motion-global-style';
      if (
        typeof document !== 'undefined' &&
        !document.getElementById(styleId)
      ) {
        const style = document.createElement('style');
        style.id = styleId;
        style.innerHTML = disableAnimations;
        document.head.appendChild(style);
      }
      return story();
    },
  ],
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
