import { SITE_NAME } from '@/constants/seo.constants'
import { ISocial } from '../interface/social.interface'

import phone from '@/assets/images/header/phone.svg'
import telegram from '@/assets/images/header/telegram.svg'
import whatsapp from '@/assets/images/header/whatsapp.svg'
import youtube from '@/assets/images/header/youtube.svg'

export const socialMenu: ISocial = {
	items: [
		{
			icon: {
				width: 40,
				height: 40,
				src: phone,
				alt: `${SITE_NAME} Phone`,
			},
			link: '/phone',
		},
		{
			icon: {
				width: 40,
				height: 40,
				src: whatsapp,
				alt: `${SITE_NAME} Whatsapp`,
			},
			link: '/whatsapp',
		},
		{
			icon: {
				width: 40,
				height: 40,
				src: telegram,
				alt: `${SITE_NAME} Telegram`,
			},
			link: '/Telegram',
		},
		{
			icon: {
				width: 40,
				height: 40,
				src: youtube,
				alt: `${SITE_NAME} Youtube`,
			},
			link: '/Youtube',
		},
	],
}
