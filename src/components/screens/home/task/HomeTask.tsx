'use client'

import Sidebar from '@/components/layout/sidebar/Sidebar'
import Tasks from '@/components/templates/tasks/Tasks'
import Heading from '@/components/ui/heading/Heading'
import Section from '@/components/ui/section/Section'
import { useTasks } from '@/hooks/queries/get/useTasks'
import { motion } from 'framer-motion'
import { FC } from 'react'
import styles from './HomeTask.module.scss'

const HomeTask: FC = () => {
	const { tasks } = useTasks()

	return (
		<Section
			variant="gray"
			paddingTop={true}
			id="Tasks"
			className={styles.section}
		>
			<div className={styles.wrapper}>
				<motion.div
					initial={{ opacity: 0, x: '-100%' }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ type: 'spring', bounce: 0.2, delay: 0.5 }}
					viewport={{ once: true }}
				>
					<Heading className={styles.heading} variant="white">
						Какие задачи и проблемы мы решаем
					</Heading>
				</motion.div>
				<div className={styles.fill}>
					<Tasks tasks={tasks || []} />
					<Sidebar
						pageDelay={1}
						mouseDelay={1}
						pageNumber={3}
						className={styles.sidebar}
					/>
				</div>
			</div>
		</Section>
	)
}

export default HomeTask
