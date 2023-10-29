'use client'

import background from '@/assets/images/calculation/background.png'
import hero from '@/assets/images/calculation/hero.png'
import Sidebar from '@/components/layout/sidebar/Sidebar'
import Calculation from '@/components/templates/calculation/Calculation'
import Heading from '@/components/ui/heading/Heading'
import Section from '@/components/ui/section/Section'
import { SITE_NAME } from '@/constants/seo.constants'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { FC } from 'react'
import styles from './HomeCalculation.module.scss'

const HomeCalculation: FC = () => {
	return (
		<Section paddingTop={true} id="Calculation" className={styles.section}>
			<Image
				quality={100}
				priority
				fill
				src={background}
				alt={`${SITE_NAME} Фоновая картинка`}
			/>
			<div className={styles.wrapper}>
				<motion.div
					initial={{ opacity: 0, x: '-100%' }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ type: 'spring', bounce: 0.2, delay: 0.5 }}
					viewport={{ once: true }}
				>
					<Heading className={styles.heading} variant="gray">
						Расчет
					</Heading>
				</motion.div>
				<div className={styles.hero}>
					<Image
						quality={100}
						priority
						width={0}
						height={0}
						sizes="100vw"
						style={{ width: '100%', height: '100%' }}
						src={hero}
						alt={`${SITE_NAME} Елизавета Белова`}
					/>
				</div>
				<div className={styles.fill}>
					<Calculation />
					<Sidebar
						pageVariant="gray"
						pageNumber={4}
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

export default HomeCalculation
