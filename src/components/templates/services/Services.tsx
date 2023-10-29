import { IService } from '@/shared/types/service.types'
import { FC } from 'react'
import styles from './Services.module.scss'
import ServicesItem from './item/ServicesItem'

const Services: FC<{ services: IService[] }> = ({ services }) => {
	return (
		<div className={styles.services}>
			{services &&
				services.map((service, index) => (
					<ServicesItem key={service.id} service={service} count={index + 1} />
				))}
		</div>
	)
}

export default Services
