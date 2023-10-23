'use client'

import burgerImage from '@/assets/images/header/burger.png'
import { SITE_NAME } from '@/constants/seo.constants'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { FC } from 'react'
import styles from './Menu.module.scss'

const Menu: FC = () => {
	return (
		<div>
			<motion.button
				className={styles.button}
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ type: 'spring', bounce: 0.2 }}
			>
				<Image
					src={burgerImage}
					width={40}
					height={25}
					alt={`${SITE_NAME} Menu`}
				/>
			</motion.button>
		</div>
	)
}

export default Menu
