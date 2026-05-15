/** @type {import('tailwindcss').Config} */
import typography from "@tailwindcss/typography";

export default {
  content: ['./src/**/*.{astro,html,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#13110D',
        'bg-secondary': '#1C1814',
        fg: '#D8CFB8',
        muted: '#909078',
        accent: '#7A8E5C',
        accent2: '#5A6E40',
        border: '#2A2620',
        hover: '#1E1A14',
      },
      fontFamily: {
        heading: ["'Hahmlet', serif", 'system-ui', 'sans-serif'],
        body: ["'Hahmlet', serif", 'system-ui', 'sans-serif'],
        mono: ["'Courier Prime', monospace", 'ui-monospace', 'monospace'],
      },
      maxWidth: {
        prose: '720px',
        wide: '1100px',
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            '--tw-prose-body': '#D8CFB8',
            '--tw-prose-headings': '#D8CFB8',
            '--tw-prose-links': '#7A8E5C',
            '--tw-prose-bold': '#7A8E5C',
            '--tw-prose-quotes': '#909078',
            '--tw-prose-quote-borders': '#7A8E5C',
            '--tw-prose-code': '#7A8E5C',
            '--tw-prose-borders': '#2A2620',
            maxWidth: '720px',
            fontSize: '1.05rem',
            lineHeight: '1.85',
            'h1, h2, h3, h4': {
              fontFamily: 'var(--font-heading)',
              fontWeight: '700',
              letterSpacing: '-0.01em',
            },
            h2: {
              borderBottom: '1px solid #2A2620',
              paddingBottom: '0.5rem',
              marginTop: '3rem',
            },
            blockquote: {
              background: '#1E1A14',
              borderRadius: '0 8px 8px 0',
              padding: '0.8rem 1.2rem',
              fontStyle: 'italic',
            },
            img: {
              borderRadius: '12px',
              boxShadow: '0 6px 24px rgba(0,0,0,0.12)',
              margin: '2rem auto',
            },
            code: {
              background: '#1E1A14',
              padding: '0.15rem 0.45rem',
              borderRadius: '4px',
              border: '1px solid #2A2620',
              fontWeight: '500',
            },
            'code::before': { content: '""' },
            'code::after': { content: '""' },
          },
        },
      }),
    },
  },
  plugins: [typography],
};
