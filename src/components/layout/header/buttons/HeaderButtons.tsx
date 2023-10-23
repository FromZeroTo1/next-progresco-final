'use client'

import rightArrow from '@/assets/images/icons/right-arrow.svg'
import { SITE_NAME } from '@/constants/seo.constants'
import cn from 'classnames'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { FC, useState } from 'react'
import styles from './HeaderButtons.module.scss'

const HeaderButtons: FC = () => {
	const [isShow, setIsShow] = useState(false)

	return (
		<>
			<motion.button
				className={cn(styles.action, {
					[styles.hidden]: isShow,
				})}
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				onClick={() => setIsShow(!isShow)}
			>
				Нажмите, чтобы получить консультацию и решения для Вашей задачи
				<Image
					quality={100}
					priority
					width={10}
					height={20}
					src={rightArrow}
					alt={`${SITE_NAME} Arrow`}
				/>
			</motion.button>
			<div
				className={cn(styles.animate, {
					[styles.animated]: isShow,
				})}
			>
				<button className={styles.button}>получить решение</button>
				<p className={styles.text}>
					Нажмите, чтобы получить решение и расчет стоимости
				</p>
			</div>
		</>
	)
}

export default HeaderButtons
