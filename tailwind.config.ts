import containerQueries from '@tailwindcss/container-queries';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			"colors": {
				"pastel": {
					400: "#f9d445"
				},
				"toy-red": {
					400: "#ff0017"
				}
			}
		}
	},

	plugins: [typography, forms, containerQueries]
} satisfies Config;
