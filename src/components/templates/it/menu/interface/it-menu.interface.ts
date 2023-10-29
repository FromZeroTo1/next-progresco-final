export interface IItMenuItem {
	name: string
	onClick?: () => void
	items?: IItMenuItem[]
}

export interface IItMenu {
	items: IItMenuItem[]
}
