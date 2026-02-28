import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        base: 'var(--color-bg)',
        text: 'var(--color-text)',
        mutedext: 'var(--color-muted-text)',
        border: 'var(--color-border)',
        accent: 'var(--color-accent)',
      },
      boxShadow: {
        glass: '0 10px 40px -16px rgba(15, 23, 42, 0.35)',
      },
      backdropBlur: {
        glass: '20px',
      },
      borderRadius: {
        glass: '1.25rem',
      },
    },
  },
  plugins: [],
} satisfies Config;
