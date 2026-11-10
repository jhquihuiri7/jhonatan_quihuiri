/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-poppins)', 'Segoe UI', 'Arial', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      colors: {
        // Portfolio palette
        night: {
          950: '#070A26',
          900: '#0E1340',
          800: '#151B4F',
        },
        lilac: {
          100: '#E6E7FF',
          200: '#C3C6E8',
          300: '#A9ACDA',
          400: '#9A9ECF',
        },
        brand: {
          purple: '#915EFF',
          violet: '#882AFA',
          pink: '#ED0762',
          rose: '#FF7FC3',
          'rose-soft': '#FF6FA8',
        },
        tag: {
          blue: '#5CC8FF',
          green: '#3FE0A0',
          pink: '#FF6FA8',
        },
        // shadcn/ui tokens (used by the toast)
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
      },
      keyframes: {
        'scroll-cue': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(16px)' },
        },
      },
      animation: {
        'scroll-cue': 'scroll-cue 1.6s ease-in-out infinite',
        'spin-slow': 'spin 40s linear infinite',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
