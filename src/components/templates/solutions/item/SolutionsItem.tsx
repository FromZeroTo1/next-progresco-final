'use client'

import solutionBg from '@/assets/images/solutions/background.svg'
import { SITE_NAME } from '@/constants/seo.constants'
import { ISolution } from '@/shared/types/solution.types'
import Image from 'next/image'
import { FC } from 'react'
import styles from './SolutionsItem.module.scss'
import { motion } from 'framer-motion'

const SolutionsItem: FC<{ solution: ISolution }> = ({ solution }) => {
	return (
		<motion.div
			className={styles.solution}
			initial={{ opacity: 0}}
			whileInView={{ opacity: 1}}
			transition={{ type: 'spring', bounce: 0.2}}
		>
			<div className={styles.thumbnail}>
				<div className={styles.background}>
					<Image
						quality={100}
						priority
						width={0}
						height={0}
						sizes="100vw"
						style={{ width: '100%', height: '100%' }}
						src={solutionBg}
						alt={`${SITE_NAME} ${solution.name}`}
					/>
				</div>
				<div className={styles.preview}>
					<Image
						priority
						quality={100}
						width={90}
						height={90}
						src={solution.image}
						alt={`${SITE_NAME} ${solution.name}`}
					/>
				</div>
			</div>
			<h3 className={styles.name}>{solution.name}</h3>
		</motion.div>
	)
}

export default SolutionsItem
