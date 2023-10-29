import { axiosClassic } from '@/api/interceptors'
import { getServicesUrl } from '@/config/api.config'
import { IService } from '@/shared/types/service.types'

export const ServiceService = {
	async getAll() {
		const result = await axiosClassic<IService[]>({
			url: getServicesUrl(''),
			method: 'GET',
		})

		return result.data
	},
}
