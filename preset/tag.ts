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
	const outlineWidth = config('theme.outlineWidth');
	const colors = config('theme.colors');

	addComponents({
		'.tag': {
			backgroundColor: colors.gray['light'],
			color: colors.gray['dark'],
			display: 'inline-flex',
			alignItems: 'center',
			verticalAlign: 'middle',
			justifyContent: 'center',
			padding: space['1'] + ' ' + space['2'],
			fontSize: fontSize['xs'],
			borderRadius: radius['sm'],
			userSelect: 'none',
			'&.primary': {
				backgroundColor: colors.primary['dark'],
				color: colors.gray['light']
			}
		}
	});
});
