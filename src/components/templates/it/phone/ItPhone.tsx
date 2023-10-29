import phone from '@/assets/images/it/phone-second.png'
import { SITE_NAME } from '@/constants/seo.constants'
import Image from 'next/image'
import { FC } from 'react'
import styles from '../It.module.scss'

const ItPhone: FC = () => {
	return (
		<div className={styles.phone}>
			<Image
				quality={100}
				priority
				draggable={false}
				sizes="100vw"
				style={{ width: '100%', height: '100%' }}
				src={phone}
				alt={`${SITE_NAME} Статистика`}
			/>
			{/* <ul className={styles.stats}>
				<li className={styles.stat}></li>
				<li className={styles.stat}></li>
				<li className={styles.stat}></li>
				<li className={styles.stat}></li>
				<li className={styles.stat}></li>
				<li className={styles.stat}></li>
				<li className={styles.stat}></li>
				<li className={styles.stat}></li>
				<li className={styles.stat}></li>
				<li className={styles.stat}></li>
				<li className={styles.stat}></li>
				<li className={styles.stat}></li>
			</ul>
			<ul className={styles.circles}>
				<li className={styles.circle}></li>
				<li className={styles.circle}></li>
				<li className={styles.circle}></li>
			</ul> */}
		</div>
	)
}

export default ItPhone
