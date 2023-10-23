import { IMenu } from '../interface/menu.interface'

export const menu: IMenu = {
	items: [
		{
			title: 'Home',
			link: '/',
		},
		{
			title: 'Movies',
			link: '/movies',
		},
		{
			title: 'Discovery',
			link: '/genres',
		},
		{
			title: 'Trending now',
			link: '/trending',
		},
	],
}

export const userMenu: IMenu = {
	items: [],
}
