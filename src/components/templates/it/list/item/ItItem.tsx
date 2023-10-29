import icon from '@/assets/images/it/complete.svg'
import Image from 'next/image'
import { FC } from 'react'
import { ItItem } from '../interface/it.interface'
import styles from './ItItem.module.scss'

const ItItem: FC<{ item: ItItem }> = ({ item }) => {
	return (
		<li className={styles.item}>
			<Image
				src={icon}
				priority
				width={20}
				height={20}
				alt={item.description}
			/>
			{item.description}
		</li>
	)
}

export default ItItem
