import type { Config } from 'tailwindcss';
const { nextui } = require('@nextui-org/react');

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'brand-blue100': '#0EA5E9',
        'brand-blue200': '#38BDF8',
        'brand-blueTitle': '#00008B',
        'brand-background': '#F5F5F5',
      },
      dropShadow: {
        brandShadow: '0 5px 5px rgba(14, 165, 233, 0.25)',
      },
    },
  },
  plugins: [nextui()],
};
export default config;
