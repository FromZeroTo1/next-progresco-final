'use client'

import cn from 'classnames'
import { FC, useState } from 'react'
import styles from '../../It.module.scss'
import { IItMenuItem } from '../interface/it-menu.interface'

const ItMenuItem: FC<{ item: IItMenuItem }> = ({ item }) => {
	const [isOpen, setIsOpen] = useState(true)

	return (
		<li className={styles.item}>
			{item.items ? (
				<>
					<button onClick={() => setIsOpen(isOpen)}>
						<span>{item.name}</span>
						<div className={styles.arrow}>
							<span></span>
							<span></span>
						</div>
					</button>
					<ul
						className={cn(styles.subList, {
							[styles.active]: isOpen,
						})}
					>
						{item.items.map((subItem, index) => (
							<ItMenuItem key={index} item={subItem} />
						))}
					</ul>
				</>
			) : (
				<span>{item.name}</span>
			)}
		</li>
	)
}

export default ItMenuItem
