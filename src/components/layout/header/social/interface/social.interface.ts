interface ISocialIcon {
	width: number
	height: number
	src: string
	alt: string
}

export interface ISocialItem {
	icon: ISocialIcon
	link: string
}

export interface ISocial {
	items: ISocialItem[]
}
