const { fontFamily } = require('tailwindcss/defaultTheme');

const preset = {
	darkMode: 'class',
	theme: {
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			primary: {
				dark: '#074771',
				DEFAULT: '#176A98',
				light: '#2690C4'
			},
			gray: {
				light: '#F3F4F5',
				DEFAULT: '#878C91',
				dark: '#0E1721'
			}
		},
		fontFamily: {
			sans: ['Poppins', ...fontFamily.sans]
		},
		container: {
			center: true,
			screens: {
				'2xl': '768px'
			},
			padding: {
				DEFAULT: '0.5rem',
				lg: '0rem'
			}
		},
		extend: {
			borderColor: (theme) => ({
				DEFAULT: theme('colors.gray.light', 'currentColor')
			})
		}
	},
	variants: {
		extend: {}
	},
	plugins: [
		require('./hero.ts'),
		require('./buttons.ts')
		// require('./layout.cjs'),
		// require('./card.cjs'),
		// require('./forms.cjs'),
		// require('./font.cjs'),
		// require('./navbar.cjs')
	]
};

module.exports = {
	preset
};
