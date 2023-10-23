import { TaskService } from '@/services/task.service'
import { useQuery } from '@tanstack/react-query'

export const useTasks = () => {
	const { data } = useQuery({
		queryKey: ['get tasks'],
		queryFn: () => TaskService.getAll(),
	})

	return { tasks: data }
}
