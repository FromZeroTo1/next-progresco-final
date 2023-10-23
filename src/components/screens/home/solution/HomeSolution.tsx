'use client'

import Sidebar from '@/components/layout/sidebar/Sidebar'
import Solutions from '@/components/templates/solutions/Solutions'
import Heading from '@/components/ui/heading/Heading'
import Section from '@/components/ui/section/Section'
import { useSolutions } from '@/hooks/queries/get/useSolutions'
import { FC } from 'react'
import styles from './HomeSolution.module.scss'
import { motion } from 'framer-motion'

const HomeSolution: FC = () => {
	const { solutions } = useSolutions()

	return (
		<Section paddingTop={true} id="Solutions">
			<div className={styles.wrapper}>
				<motion.div
					initial={{ opacity: 0, x: '-100%' }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ type: 'spring', bounce: 0.2, delay: .5 }}
					viewport={{ once: true }}
				>
					<Heading className={styles.heading} variant="gray">
						Наши решения подходят для
					</Heading>
				</motion.div>
				<div className={styles.fill}>
					<Solutions solutions={solutions || []} />
					<Sidebar
						pageVariant="gray"
						pageNumber={2}
						className={styles.sidebar}
						mouseVariant="black"
						mouseDelay={1}
						pageDelay={1}
					/>
				</div>
			</div>
		</Section>
	)
}

export default HomeSolution
