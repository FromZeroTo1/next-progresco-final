'use client'

import Footer from '@/components/layout/footer/Footer'
import Header from '@/components/layout/header/Header'
import { FC } from 'react'
import HomeSolution from './solution/HomeSolution'
import HomeTask from './task/HomeTask'

const Home: FC = () => {
	return (
		<>
			<Header />
			<HomeSolution />
			<HomeTask />
			<Footer />
		</>
	)
}

export default Home
