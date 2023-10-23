import { axiosClassic } from '@/api/interceptors'
import { getTasksUrl } from '@/config/api.config'
import { ITask } from '@/shared/types/task.types'

export const TaskService = {
	async getAll() {
		const result = await axiosClassic.get<ITask[]>(getTasksUrl(''))

		return result.data
	},
}
