import consIcon from '@/assets/images/tasks/cons.svg'
import evenNameBg from '@/assets/images/tasks/even-title.png'
import oddNameBg from '@/assets/images/tasks/odd-title.png'
import prosIcon from '@/assets/images/tasks/pros.svg'
import { SITE_NAME } from '@/constants/seo.constants'
import { motion, useAnimation } from 'framer-motion'
import Image from 'next/image'
import { FC, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import styles from './TasksItem.module.scss'
import { ITaskBlockItem } from './interface/task.interface'

const TasksItem: FC<ITaskBlockItem> = ({ task, index }) => {
	const isEven = index % 2 === 0
	const nameBg = isEven ? oddNameBg : evenNameBg

	const { ref, inView } = useInView({
		threshold: 0.4,
	})
	const animation = useAnimation()

	useEffect(() => {
		if (inView) {
			animation.start({
				opacity: 1,
				transform: 'matrix(1, 0, 0, 1, 0, 0)',
			})
		}
		if (!inView) {
			animation.start({
				opacity: 0,
				transform: 'matrix(0.75, 0, 0, 0.75, 0, 0)',
			})
		}
	}, [inView])

	return (
		<motion.div ref={ref} className={styles.task} animate={animation}>
			<div className={styles.preview}>
				<Image
					quality={100}
					priority
					width={0}
					height={0}
					fill
					sizes="100vw"
					objectFit="contain"
					src={task.image}
					alt={`${SITE_NAME} ${task.name}`}
				/>
			</div>
			<div className={styles.fill}>
				<div className={styles.rectangle}>
					<h3 className={styles.name}>
						{task.name}
						<Image
							quality={100}
							priority
							width={0}
							height={0}
							fill
							sizes="100vw"
							style={{ width: '100%', height: '100%' }}
							src={nameBg}
							alt={`${SITE_NAME} ${task.name}`}
						/>
					</h3>
				</div>

				<div className={styles.info}>
					<p className={styles.cons}>
						<Image
							priority
							width={31}
							height={31}
							src={consIcon}
							alt={`${SITE_NAME} Cons`}
						/>
						{task.cons}
					</p>
					<p className={styles.pros}>
						<Image
							priority
							width={31}
							height={31}
							src={prosIcon}
							alt={`${SITE_NAME} Pros`}
						/>
						{task.pros}
					</p>
					<a className={styles.btn} href="#">
						Получить
					</a>
				</div>
			</div>
		</motion.div>
	)
}

export default TasksItem
