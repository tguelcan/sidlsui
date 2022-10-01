const plugin = require('tailwindcss/plugin');

/**
 * Button Configuration
 * */
module.exports = plugin(function ({ addComponents, theme, config }) {
	const sm = `@media (min-width: ${theme('screens.sm', {})})`;
	const space = config('theme.space');
	const radius = config('theme.borderRadius');
	const shadow = config('theme.boxShadow');
	const fontSize = config('theme.fontSize');
	const fontWeight = config('theme.fontWeight');

	addComponents({
		'.hero': {
			backgroundColor: theme('colors.gray.dark'),
			color: theme('colors.gray.light'),
			padding: space['12'],
			fontWeight: fontWeight.bold,
			fontSize: fontSize['2xl'],
			[sm]: {
				padding: space['8']
			}
		},
		'.hero-light': {
			backgroundColor: theme('colors.gray.light'),
			color: theme('colors.dark')
		}
	});
});
