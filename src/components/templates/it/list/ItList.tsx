import { FC } from 'react'
import styles from './ItList.module.scss'
import ItItem from './item/ItItem'
import { ItList } from './interface/it.interface'

const ItList: FC<{ list: ItList }> = ({ list: { items } }) => {
	return (
		<ul className={styles.list}>
			{items.map((item, index) => (
				<ItItem key={index} item={item} />
			))}
		</ul>
	)
}

export default ItList
