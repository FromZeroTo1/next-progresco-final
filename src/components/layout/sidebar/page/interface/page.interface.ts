export interface IPageItem {
	name: string
	link: string
	pageNumber: number
}

export interface IPage {
	variant: string
	pageNumber: number
	pageItems: IPageItem[]
	pageDelay: number
}
