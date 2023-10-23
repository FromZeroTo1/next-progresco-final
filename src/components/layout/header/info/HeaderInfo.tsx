'use client'

import { motion } from 'framer-motion'
import { FC } from 'react'
import styles from './HeaderInfo.module.scss'

const HeaderInfo: FC = () => {
	return (
		<motion.h1
			className={styles.info}
			initial={{ opacity: 0, x: '100%' }}
			animate={{ opacity: 1, x: 0 }}
			transition={{ type: 'spring', bounce: 0.2, delay: 0.6 }}
		>
			<span className={styles.orange}>Спроектируем и запустим</span> завод{' '}
			<span className={styles.orange}>под ключ</span> Или{' '}
			<span className={styles.orange}>оптимизируем</span> Ваше предприятие и{' '}
			<span className={styles.orange}>сделаем процессы управляемыми</span>
		</motion.h1>
	)
}

export default HeaderInfo
