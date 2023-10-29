import Footer from '@/components/layout/footer/Footer'
import Header from '@/components/layout/header/Header'
import { FC } from 'react'
import HomeIt from './it/HomeIt'
import HomeService from './service/HomeService'
import HomeSolution from './solution/HomeSolution'
import HomeTask from './task/HomeTask'
import HomeCalculation from './calculation/HomeCalculation'

const Home: FC = () => {
	return (
		<>
			<Header />
			<HomeSolution />
			<HomeTask />
			<HomeCalculation />
			<HomeService />
			<HomeIt />
			<Footer />
		</>
	)
}

export default Home
