'use client'

import backgroundImage from '@/assets/images/header/bg.png'
import heroImage from '@/assets/images/header/hero.png'
import Container from '@/components/ui/container/Container'
import { SITE_NAME } from '@/constants/seo.constants'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { FC } from 'react'
import Sidebar from '../sidebar/Sidebar'
import styles from './Header.module.scss'
import HeaderButtons from './buttons/HeaderButtons'
import HeaderInfo from './info/HeaderInfo'
import Logo from './logo/Logo'
import Menu from './menu/Menu'
import Social from './social/Social'
import { socialMenu } from './social/data/social.data'
import HeaderStatistics from './statistics/HeaderStatistics'

const Header: FC = () => {
	return (
		<header className={styles.header} id='Top'>
			<Image
				className={styles.background}
				src={backgroundImage}
				alt={`${SITE_NAME} Header`}
				quality={100}
				priority
			/>
			<Container>
				<div className={styles.wrapper}>
					<div className={styles.top}>
						<Logo />
						<div className={styles.right}>
							<Social social={socialMenu} />
							<Menu />
						</div>
					</div>
					<div className={styles.fill}>
						<HeaderInfo />
						<div className={styles.content}>
							<HeaderStatistics />
							<HeaderButtons />
						</div>
					</div>
					<motion.div
						className={styles.preview}
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{ delay: 1.5, duration: 0.5, bounce: 0.2 }}
					>
						<Image
							quality={100}
							priority
							width={0}
							height={0}
							sizes="100vw"
							style={{ width: '100%', height: '100%' }}
							src={heroImage}
							alt={`${SITE_NAME} Ян Маймин`}
						/>
						<div className={styles.hero}>
							<h2 className={styles.name}>Ян Маймин</h2>
							<p className={styles.position}>Технический директор PROGRESCO</p>
						</div>
					</motion.div>
					<Sidebar
						pageNumber={1}
						className={styles.sidebar}
						mouseDelay={2}
						pageDelay={2}
					/>
				</div>
			</Container>
		</header>
	)
}

export default Header
