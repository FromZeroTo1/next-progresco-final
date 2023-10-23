'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import { ISocialItem } from '../interface/social.interface'
import styles from './SocialItem.module.scss'

const SocialItem: FC<{ item: ISocialItem }> = ({ item }) => {
	return (
		<motion.li
			className={styles.item}
			initial={{ opacity: 0}}
			whileInView={{ opacity: 1}}
			transition={{ type: 'spring', bounce: 0.2}}
		>
			<Link className={styles.link} href={item.link}>
				<Image
					src={item.icon.src}
					width={item.icon.width}
					height={item.icon.height}
					alt={item.icon.alt}
					priority
				/>
			</Link>
		</motion.li>
	)
}

export default SocialItem
