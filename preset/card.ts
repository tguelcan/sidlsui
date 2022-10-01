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
	const colors = config('theme.colors');

	addComponents({
		'.card': {
			backgroundColor: colors['white'],
			padding: space['2'],
			borderWidth: '1px',
			borderRadius: radius['sm'],
			boxShadow: shadow['md'],
			[sm]: {
				padding: space['4']
			}
		},
		'.section': {
			backgroundColor: colors.gray['light'],
			color: 'var(--color-content)'
		}
	});
});
