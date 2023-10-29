import { motion } from 'framer-motion'
import Image from 'next/image'
import { FC } from 'react'
import styles from './ServicesItem.module.scss'
import { IServiceItem } from './interface/service-item.interface'

const ServicesItem: FC<IServiceItem> = ({ service, count }) => {
	return (
		<motion.div
			className={styles.service}
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ type: 'spring', bounce: 0.2 }}
		>
			<div className={styles.top}>
				<div className={styles.icon}>
					<Image
						priority
						draggable={false}
						src={service.image}
						fill
						alt={service.name}
					/>
				</div>
				<div className={styles.count}>{count < 10 ? `0${count}` : count}</div>
			</div>
			<div className={styles.fill}>
				<h3 className={styles.name}>{service.name}</h3>
				{service.description && (
					<div className={styles.description}>{service.description}</div>
				)}
				{service.mobileDescription ? (
					<div
						className={styles.descriptionMobile}
						dangerouslySetInnerHTML={{ __html: service.mobileDescription }}
					></div>
				) : (
					service.description && (
						<div
							className={styles.descriptionMobile}
							dangerouslySetInnerHTML={{ __html: service.description }}
						/>
					)
				)}
			</div>
			<button className={styles.btn}>Заказать</button>
		</motion.div>
	)
}

export default ServicesItem
