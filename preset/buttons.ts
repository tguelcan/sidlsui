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
		'.btn': {
			backgroundColor: colors.gray['light'],
			color: colors.gray['dark'],
			display: 'inline-flex',
			flexDirection: 'row',
			flexWrap: 'nowrap',
			alignItems: 'center',
			justifyContent: 'center',
			padding: `${space['2']} ${space['3.5']}`,
			fontWeight: fontWeight['normal'],
			fontSize: fontSize['sm'],
			transition: '0.3s',
			borderRadius: radius['sm'],
			textTransform: 'uppercase',
			'&:hover, &:focus': {
				outlineWidth: outlineWidth['0px'],
				transition: '0.3s',
				'&:not([disabled]):not(.field)': {
					filter: 'brightness(95%)'
				}
			},
			'&:focus, &:active': {
				boxShadow: `var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) ${colors.gray['light']}AA`
			},
			'&[disabled]': {
				opacity: '0.6',
				cursor: 'not-allowed'
			},
			'&.primary': {
				backgroundColor: colors.primary['DEFAULT'],
				color: colors.gray['light'],
				'&:focus, &:active': {
					boxShadow: `var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) ${colors.primary['DEFAULT']}33`
				},
				'&:hover, &:focus': {
					outlineWidth: outlineWidth['0px'],
					transition: '0.3s',
					'&:not([disabled]):not(.field)': {
						filter: 'brightness(120%)'
					}
				}
			},
			'&.solid': {
				backgroundColor: 'transparent',
				color: 'currentColor',
				'&:hover, &:focus': {
					color: colors.primary['light'],
					transition: '0.3s'
				},
				'&:focus, &:active': {
					boxShadow: `var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) transparent`
				}
			}
		}
	});
});
