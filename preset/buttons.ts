const plugin = require('tailwindcss/plugin');

const withOpacity =
	(variable) =>
	({ opacityValue }) => {
		if (opacityValue === undefined) {
			return `rgb(var(${variable}))`;
		}
		return `rgba(var(${variable}),${opacityValue})`;
	};

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
	const alpha = config('theme');

	addComponents({
		'.btn': {
			backgroundColor: theme('colors.gray.light'),
			color: theme('colors.gray.dark'),
			display: 'inline-flex',
			alignItems: 'center',
			padding: `${space['2']} ${space['3']}`,
			fontWeight: fontWeight.bold,
			'&:hover': {
				//	transition: 'all 0.2s',
				// backgroundColor: theme('colors.gray.dark'),
				background: withOpacity('--bg-button-muted')
			}
		}
	});
});
