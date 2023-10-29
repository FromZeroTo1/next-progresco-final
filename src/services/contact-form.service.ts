import { axiosClassic } from '@/api/interceptors'
import { IContactFormFields } from '@/components/ui/contact-form/interface/contact-form.interface'
import { getContactUrl } from '@/config/api.config'

export const ContactService = {
	async getAll() {
		return axiosClassic({
			url: getContactUrl(''),
			method: 'GET',
		})
	},

	async sendForm(data: IContactFormFields) {
		return axiosClassic({
			url: getContactUrl(''),
			method: 'POST',
			data,
		})
	},
}
