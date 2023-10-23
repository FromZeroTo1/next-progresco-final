'use client'

import statisticsImage from '@/assets/images/header/statistics.svg'
import { SITE_NAME } from '@/constants/seo.constants'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { FC } from 'react'
import styles from './HeaderStatistics.module.scss'

const HeaderStatistics: FC = () => {
	return (
		<motion.div
			className={styles.statistics}
			initial={{ opacity: 0, x: '-100%' }}
			animate={{ opacity: 1, x: 0 }}
			transition={{ type: 'spring', bounce: 0.2, delay: .6 }}
			
		>
			<Image
				src={statisticsImage}
				width={100}
				height={95}
				alt={`${SITE_NAME} Statistics`}
				priority
			/>
			<p className={styles.text}>
				А Вы увеличиваете прибыль, пропускную срособность и надежность
				технологических процессов предприятия
			</p>
		</motion.div>
	)
}

export default HeaderStatistics
