import { SolutionService } from '@/services/solution.service'
import { useQuery } from '@tanstack/react-query'

export const useSolutions = () => {
	const { data } = useQuery({
		queryKey: ['get solutions'],
		queryFn: () => SolutionService.getAll(),
	})

	return { solutions: data }
}
