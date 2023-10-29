'use client'

import Sidebar from '@/components/layout/sidebar/Sidebar'
import Services from '@/components/templates/services/Services'
import Heading from '@/components/ui/heading/Heading'
import Section from '@/components/ui/section/Section'
import { useServices } from '@/hooks/queries/get/useServices'
import { motion } from 'framer-motion'
import { FC } from 'react'
import styles from './HomeService.module.scss'

const HomeService: FC = () => {
	const { services } = useServices()

	return (
		<Section
			variant="gray"
			paddingTop={true}
			paddingBottom={true}
			id="Services"
			className={styles.section}
		>
			<div className={styles.wrapper}>
				<motion.div
					initial={{ opacity: 0, x: '-100%' }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ type: 'spring', bounce: 0.2, delay: 0.5 }}
					viewport={{ once: true }}
					className={styles.heading}
				>
					<Heading variant="white">
						Услуги
					</Heading>
				</motion.div>
				<div className={styles.fill}>
					<Services services={services || []} />
					<Sidebar
						pageDelay={1}
						mouseDelay={1}
						pageNumber={5}
						className={styles.sidebar}
					/>
				</div>
			</div>
		</Section>
	)
}

export default HomeService
