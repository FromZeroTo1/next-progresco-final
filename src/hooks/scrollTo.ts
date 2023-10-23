export const scrollTo = (target: string) => {
	let element = document.querySelector(target)
	element && element.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
