import { axiosClassic } from '@/api/interceptors'
import { getSolutionsUrl } from '@/config/api.config'
import { ISolution } from '@/shared/types/solution.types'

export const SolutionService = {
	async getAll() {
		const result = await axiosClassic<ISolution[]>({
			url: getSolutionsUrl(''),
			method: 'GET',
		})

		return result.data
	},
}
