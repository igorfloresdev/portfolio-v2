import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  daisyui: {
    themes: [
      {
        idev: {
          primary: '#ec8209',
          secondary: '#6b21a8',
          accent: '#1e3a8a',
          neutral: '#1f2937',
          'base-100': '#11100E',
          info: '#1d4ed8',
          success: '#15803d',
          warning: '#a16207',
          error: '#991b1b',
        },
      },
    ],
  },
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [require('daisyui')],
}
export default config
