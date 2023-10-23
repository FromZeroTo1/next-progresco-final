import Home from '@/components/screens/home/Home'
import { Metadata } from 'next'

export const metadata: Metadata = {
	description: 'Prisma Description',
}

export default function HomePage() {
	return <Home />
}
