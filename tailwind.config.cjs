const { preset } = require(`./preset/index.ts`);

const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	presets: [preset],
	theme: {
		extend: {}
	},
	plugins: []
};

module.exports = config;
