export interface IContactForm {
	isOpen: boolean
	closeModal: () => void
}

export interface IContactFormFields {
	fullName: string
	phone: string
	email: string
}
