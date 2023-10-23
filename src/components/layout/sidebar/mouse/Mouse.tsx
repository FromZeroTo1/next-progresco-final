'use client'

import mouseBlackIcon from '@/assets/images/global/mouse-black.svg'
import mouseWhiteIcon from '@/assets/images/global/mouse-white.svg'
import { SITE_NAME } from '@/constants/seo.constants'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { FC } from 'react'
import styles from './Mouse.module.scss'
import { IMouse } from './interface/mouse.interface'

const Mouse: FC<IMouse> = ({ variant, mouseDelay }) => {
	const mouseIcon = variant === 'black' ? mouseBlackIcon : mouseWhiteIcon

	return (
		<motion.div
			className={styles.mouse}
			initial={{ opacity: 0, y: '100%' }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ type: 'spring', bounce: 0.2, delay: mouseDelay }}
		>
			<Image
				quality={100}
				priority
				width={20}
				height={140}
				src={mouseIcon}
				alt={`${SITE_NAME} Mouse`}
			/>
		</motion.div>
	)
}

export default Mouse
