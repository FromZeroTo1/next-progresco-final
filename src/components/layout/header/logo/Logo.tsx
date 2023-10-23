'use client'

import logo from '@/assets/images/global/logo.png'
import { SITE_NAME } from '@/constants/seo.constants'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import styles from './Logo.module.scss'

const Logo: FC = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ type: 'spring', bounce: 0.2 }}
		>
			<Link className={styles.logo} href="/">
				<Image src={logo} alt={`${SITE_NAME}`} priority quality={100} />
			</Link>
		</motion.div>
	)
}

export default Logo
