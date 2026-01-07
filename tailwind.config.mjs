/**@type {import ('tailwindcss').config}*/
export default {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#0A0A0A', // Premium Black
                accent: '#3FA9F5', // Neon Tusker Blue
                secondary: '#C5C6C7', // Titanium Silver
            },
            fontFamily: {
                inter: ['var(--font-inter)', 'sans-serif'],
                sora: ['var(--font-sora)', 'sans-serif'],
            },
            borderRadius: {
                '2xl': '1.5rem',
                '3xl': '2rem',
            },
            // Explicitly removing or overriding default shadows to be neutral only if needed
            boxShadow: {
                'sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
                'DEFAULT': '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)',
                'md': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)',
                'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)',
                'xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
                '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                'none': 'none',
            },
            // Removing all extended animations, keyframes, backgroundImages that were gradient/glow based
        },
    },
    plugins: [],
};