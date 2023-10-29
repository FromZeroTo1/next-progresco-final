import { FC } from 'react'
import styles from '../It.module.scss'
import { IItMenu } from './interface/it-menu.interface'
import ItMenuItem from './item/ItMenuItem'

const ItMenu: FC<{ menu: IItMenu }> = ({ menu: { items } }) => {
	return (
		<div className={styles.menu}>
			<ul className={styles.list}>
				{items.map((item, index) => (
					<ItMenuItem key={index} item={item} />
				))}
			</ul>
		</div>
	)
}

export default ItMenu
