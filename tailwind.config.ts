import type { Config } from 'tailwindcss'

const colors = require('tailwindcss/colors')
const plugin = require('tailwindcss/plugin')

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		fontFamily: {
			DMSans: ['var(--font-dm)'],
			Furore: ['var(--font-furore)'],
			Gilroy: ['var(--font-gilroy)'],
			Inter: ['var(--font-inter)'],
			Raleway: ['var(--font-raleway)'],
			Roboto: ['var(--font-roboto)'],
			Thicccboi: ['var(--font-thicccboi)'],
		},
		colors: {
			white: {
				default: '#FFFFFF',
				300: 'rgba(255, 255, 255, 0.1)',
			},
			transparent: colors.transparent,
			orange: {
				500: '#EE562F',
				300: '#EC6A49',
			},
			black: {
				default: colors.black,
				300: '#0C0C0C',
			},
			gray: {
				300: '#444444',
				400: '#353535',
				500: '#333333',
				600: 'rgba(255, 255, 255, .2)',
				700: 'rgba(41, 41, 41, .7)',
				800: '#292929',
			},
			blue: {
				300: '#D2E5F1',
				500: '#B5CFE4',
			},
		},
		extend: {
			spacing: {
				0.5: '0.12rem',
				layout: '2.75rem',
			},
			letterSpacing: {
				base: '2.4px',
			},
			fontSize: {
				small: '14px',
				base: '24px',
				lg: '54px',
				heading: '48px',
			},
			borderRadius: {
				small: '5px',
				base: '15px',
				lg: '20px',
			},
			transitionTimingFunction: {
				DEFAULT: 'ease-in-out',
			},
			transitionDuration: {
				DEFAULT: '200ms',
			},
			zIndex: {
				1: '1',
				2: '2',
				3: '3',
			},
			keyframes: {
				fade: {
					from: { opacity: '0' },
					to: { opacity: '1' },
				},
				scaleIn: {
					'0%': {
						opacity: '0',
						transform: 'scale(0.9)',
					},
					'50%': {
						opacity: '0.3',
					},
					'100%': {
						opacity: '1',
						transform: 'scale(1)',
					},
				},
			},
			animation: {
				fade: 'fade .5s ease-in-out',
				scaleIn: 'scaleIn .35s ease-in-out',
			},
		},
	},
	plugins: [
		plugin(
			({
				addUtilities,
				addComponents,
			}: {
				addUtilities: Function
				addComponents: Function
			}) => {
				addComponents({
					'.btn': {
						backgroundColor: '#EE562F',
						color: '#ffffff',
					},

					'.primary-btn': {
						fontSize: '14px',
						backgroundColor: '#EE562F',
						color: '#ffffff',
						letterSpacing: '1.4px',
						textTransform: 'uppercase',
						fontFamily: 'var(--font-furore)',
					},

					'.white-line': {
						position: 'relative',
						'&::before': {
							position: 'absolute',
							top: '0',
							left: '0',
							right: '0',
							background: '#ffffff',
							width: '100%',
							height: '1px',
							opacity: '0.4',
						},
					},

					'.black-line': {
						position: 'relative',
						'&::before': {
							position: 'absolute',
							top: '0',
							left: '0',
							right: '0',
							background: '#000000',
							width: '100%',
							height: '1px',
							opacity: '0.4',
						},
					},

					'.text-gradient': {
						backgroundColor: '#EE562F',
						background:
							'linear-gradient(to top right, #EE562F 0%, rgba(255, 255, 255, .2) 300%)',
						'-webkitBackgroundClip': 'text',
						'-webkitTextFillColor': 'transparent',
					},
				})

				addUtilities({
					'.outline-border-none': {
						outline: 'none',
						border: 'none',
					},

					'.flex-center-between': {
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'space-between',
					},

					'.image-like-bg': {
						position: 'absolute',
						zIndex: '-1',
						objectPosition: 'center',
						objectFit: 'cover',
						pointerEvents: 'none',
						width: '100%',
						height: '100%',
					},
				})
			}
		),
	],
}
export default config
