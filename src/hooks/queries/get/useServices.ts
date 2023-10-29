import { ServiceService } from '@/services/service.service'
import { useQuery } from '@tanstack/react-query'

export const useServices = () => {
	const { data } = useQuery({
		queryKey: ['get services'],
		queryFn: () => ServiceService.getAll(),
	})

	return { services: data }
}
