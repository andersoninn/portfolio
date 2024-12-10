import type { Config } from 'tailwindcss';
import { nextui } from '@nextui-org/react';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        md: '640px',
        lg: '1024px',
        xl: '1240px'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'brand-blue100': '#0EA5E9',
        'brand-blueTitle': '#00008B',

        'brand-gray100': '#E8EBEC',
        'brand-gray200': '#C5C5C5',
        'brand-danger': '#F31260',

        'brand-patternBG': '#F5F5F5',
      },
    },
  },
  plugins: [nextui()],
};
export default config;
