import localFont from 'next/font/local'

const DMSans = localFont({
	src: [
		{
			path: '../assets/fonts/DM-Sans/Medium/font.woff2',
			weight: '500',
		},
		{
			path: '../assets/fonts/DM-Sans/Bold/font.woff2',
			weight: '700',
		},
	],
	variable: '--font-dm',
})

const Furore = localFont({
	src: [
		{
			path: '../assets/fonts/Furore/Regular/font.woff2',
			weight: '400',
		},
	],
	variable: '--font-furore',
})

const Gilroy = localFont({
	src: [
		{
			path: '../assets/fonts/Gilroy/SemiBold/font.woff2',
			weight: '600',
		},
	],
	variable: '--font-gilroy',
})

const Inter = localFont({
	src: [
		{
			path: '../assets/fonts/Inter/Regular/font.woff2',
			weight: '400',
		},
		{
			path: '../assets/fonts/Inter/Medium/font.woff2',
			weight: '500',
		},
		{
			path: '../assets/fonts/Inter/SemiBold/font.woff2',
			weight: '600',
		},
	],
	variable: '--font-inter',
})

const Raleway = localFont({
	src: [
		{
			path: '../assets/fonts/Raleway/Regular/font.woff2',
			weight: '400',
		},
		{
			path: '../assets/fonts/Raleway/Medium/font.woff2',
			weight: '500',
		},
		{
			path: '../assets/fonts/Raleway/SemiBold/font.woff2',
			weight: '600',
		},
		{
			path: '../assets/fonts/Raleway/Bold/font.woff2',
			weight: '700',
		},
	],
	variable: '--font-raleway',
})

const Roboto = localFont({
	src: [
		{
			path: '../assets/fonts/Roboto/Regular/font.woff2',
			weight: '400',
		},
	],
	variable: '--font-roboto',
})

const Thicccboi = localFont({
	src: [
		{
			path: '../assets/fonts/THICCCBOI/Medium/font.woff2',
			weight: '500',
		},
	],
	variable: '--font-thicccboi',
})

export { DMSans, Furore, Gilroy, Inter, Raleway, Roboto, Thicccboi }
