module.exports = {
    purge: [
        './_includes/**/*.html',
        './_layouts/**/*.html',
        './_posts/*.md',
        './*.html',
    ],
    darkMode: false,
    theme: {
        extend: {
            fontFamily: {
                logo: ['Familjen Grotesk'],
            }
        },
    },
    variants: {},
    plugins: [
        require('@tailwindcss/typography'),
    ],
}