/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				"hand": ['"Nanum Pen Script"', 'cursive'],
				"code": ['"code-saver"', 'sans-serif' ]
			},
			fontSize: {
				'10xl': '9rem',
				'11xl': '10rem',
				'12xl': '11rem',
			}
		},
	},
	daisyui: {
		themes: [
		  {
			mytheme: {	
			  "primary": "#e11d48",			  
			  "secondary": "#22d3ee",				  
			  "accent": "#c084fc",					  
			  "neutral": "#374151",					  
			  "base-100": "#f3f4f6",					  
			  "info": "#2dd4bf",					  
			  "success": "#a3e635",					  
			  "warning": "#facc15",					  
			  "error": "#b91c1c",
			},
		  },
		],
	  },
	plugins: [
		require('@tailwindcss/typography'),
        require("daisyui"),
	],
}
