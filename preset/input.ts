const plugin = require('tailwindcss/plugin');

module.exports = plugin(function ({ addComponents, theme, config }) {
	const sm = `@media (min-width: ${theme('screens.sm', {})})`;
	const space = config('theme.space');
	const radius = config('theme.borderRadius');
	const shadow = config('theme.boxShadow');
	const fontSize = config('theme.fontSize');
	const fontWeight = config('theme.fontWeight');
	const outlineWidth = config('theme.outlineWidth');
	const colors = config('theme.colors');

	const component = {
		boxShadow: `var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) ${colors.gray['DEFAULT']}55`,
		appearance: 'none',
		backgroundColor: 'inherit',
		borderRadius: radius['sm'],
		fontWeight: fontWeight['normal'],
		fontSize: fontSize['sm'],
		'&[disabled]': {
			cursor: 'not-allowed',
			opacity: '0.6'
		},
		'&[readonly]': {
			'user-select': 'all'
		},
		'&::placeholder': {
			opacity: '0.75'
		},
		'&:hover': {},
		'&:focus': {
			outline: 'none'
		},
		'&:focus, &:active': {
			transition: '0.2s',
			boxShadow: `var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) ${colors.gray['DEFAULT']}66`
		},
		display: 'inline-flex',
		width: '100%',
		maxWidth: '100%',
		padding: `${space['2']} ${space['3.5']}`
	};

	addComponents({
		'.field': component,
		'.input': component,
		'.textarea': component
	});

	addComponents({
		'.label': {
			color: colors.gray['dark'],
			fontWeight: fontWeight['normal'],
			fontSize: fontSize['sm'],
			opacity: '0.75'
		}
	});
});
