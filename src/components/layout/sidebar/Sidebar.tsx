'use client'

import cn from 'classnames'
import { FC } from 'react'
import styles from './Sidebar.module.scss'
import { ISidebar } from './interface/sidebar.interface'
import Mouse from './mouse/Mouse'
import Page from './page/Page'
import { pageItems } from './page/data/page.data'

const Sidebar: FC<ISidebar> = ({
	mouseVariant = 'light',
	pageNumber,
	className,
	pageVariant = 'white',
	pageDelay,
	mouseDelay
}) => {
	return (
		<div className={cn(styles.sidebar, className && className)}>
			<div className={styles.wrapper}>
				<Page variant={pageVariant} pageNumber={pageNumber} pageItems={pageItems} pageDelay={pageDelay} />
				<Mouse variant={mouseVariant} mouseDelay={mouseDelay} />
			</div>
		</div>
	)
}

export default Sidebar
