/** @type {import('tailwindcss').Config} */
// Global re-skin: black + indigo → forest-ink + forest-green + cream.
// We remap the `indigo`, `purple`, `pink`, and `yellow` scales to a single
// forest-green family so the hundreds of `bg-indigo-*` / `from-purple-*` /
// `text-pink-*` / `bg-yellow-*` utilities already in the markup all resolve
// to the new brand. Card shapes / layouts stay exactly as they are.
const forest = {
    50: '#EEF7F1',
    100: '#D8EEDF',
    200: '#ADDAC0',
    300: '#7EC4A0',
    400: '#4FAE80',
    500: '#1FA86F', // primary-soft — the "alive" green
    600: '#0E5A3E', // primary
    700: '#0A4432', // primary-hover
    800: '#083528',
    900: '#0B1812', // ink
    950: '#070F0B',
};

const cream = {
    50: '#FAF7F0',
    100: '#F4EFE3',
    200: '#EEE7D2',
    300: '#E5DABC',
    400: '#D4C08A',
    500: '#C2A85F',
};

export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
            },
            colors: {
                // Remap Tailwind's built-in `black` to forest ink so every
                // `bg-black` / `from-black` / `text-black` utility already in
                // the markup (58+ occurrences across 29 files) re-skins with
                // zero component edits.
                black: '#0B1812',
                background: '#0B1812', // forest ink (was #000)
                foreground: '#EEF2EE', // cream-on-dark (was #fff)
                border: 'rgba(238, 242, 238, 0.1)',
                muted: {
                    DEFAULT: '#5C6B65',
                    foreground: '#9CB2A3',
                },
                accent: {
                    DEFAULT: '#1FA86F', // forest-green primary-soft
                    foreground: '#ffffff',
                },
                primary: {
                    DEFAULT: '#1FA86F',
                    50: forest[50],
                    100: forest[100],
                    200: forest[200],
                    300: forest[300],
                    400: forest[400],
                    500: forest[500],
                    600: forest[600],
                    700: forest[700],
                    800: forest[800],
                    900: forest[900],
                    950: forest[950],
                },
                // Remap every indigo/purple/pink/violet/blue/sky utility to
                // the forest scale so existing markup re-skins without touching
                // a single component.
                indigo: forest,
                purple: forest,
                violet: forest,
                fuchsia: forest,
                pink: forest,
                rose: forest,
                blue: forest,
                sky: forest,
                cyan: forest,
                emerald: forest,
                // Yellow + amber → warm cream (keeps the "highlight" role).
                yellow: cream,
                amber: cream,
                // Brand palette (use directly when you want unambiguous naming).
                forest,
                cream,
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
                'hero-glow': 'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(31, 168, 111, 0.35), transparent)',
            },
            animation: {
                'spin-slow': 'spin 20s linear infinite',
                'marquee-left': 'marquee-left linear infinite',
                'marquee-right': 'marquee-right linear infinite',
            },
            keyframes: {
                'marquee-left': {
                    '0%': { transform: 'translateX(0)' },
                    '100%': { transform: 'translateX(-50%)' },
                },
                'marquee-right': {
                    '0%': { transform: 'translateX(-50%)' },
                    '100%': { transform: 'translateX(0)' },
                },
            },
            typography: {
                DEFAULT: {
                    css: {
                        maxWidth: '65ch',
                        color: 'inherit',
                    },
                },
            },
        },
    },
    plugins: [],
}
