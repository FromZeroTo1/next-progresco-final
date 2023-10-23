'use client'

import { scrollTo } from '@/hooks/scrollTo'
import cn from 'classnames'
import { motion } from 'framer-motion'
import { FC, useMemo } from 'react'
import styles from './Page.module.scss'
import { IPage } from './interface/page.interface'

const maxLinks = 3

const Page: FC<IPage> = ({ pageNumber, pageItems, variant, pageDelay }) => {
	const pageContent = useMemo(() => {
		let opacityValues: number[] = []
		let opacity: number = 0

		if (pageNumber <= 0 || pageNumber > pageItems.length) {
			return null
		}

		const startIndex = Math.max(1, pageNumber - maxLinks)
		const endIndex = Math.min(pageItems.length, pageNumber + maxLinks)

		return pageItems.slice(startIndex - 1, endIndex).map((page, index) => {
			const pageIndex = startIndex + index
			if (endIndex === 4) {
				opacityValues = [0, 0.8, 0.5, 0.2]
				opacity = opacityValues[index % 4]
			} else if (endIndex === 5) {
				opacityValues = [0.8, 0, 0.8, 0.5, 0.2]
				opacity = opacityValues[index % 5]
			} else if (endIndex === 6) {
				opacityValues = [0.5, 0.8, 0, 0.8, 0.5, 0.2]
				opacity = opacityValues[index % 6]
			} else if (endIndex === 7) {
				opacityValues = [0.2, 0.5, 0.8, 0, 0.8, 0.5, 0.2]
				opacity = opacityValues[index % 6]
			}
			if (pageIndex === pageNumber) {
				return (
					<li key={pageIndex} className={styles.current}>
						{page.pageNumber < 10 ? '0' + page.pageNumber : page.pageNumber}{' '}
						<span
							className={cn({
								[styles.gray]: variant === 'gray',
								[styles.white]: variant === 'white',
							})}
						>
							{page.name}
						</span>
					</li>
				)
			} else {
				return (
					<li
						key={pageIndex}
						className={cn(styles.item, {
							[styles.gray]: variant === 'gray',
							[styles.white]: variant === 'white',
						})}
					>
						<button className={styles.link} onClick={() => scrollTo(page.link)}>
							<span style={{ opacity: opacity }}></span>
						</button>
					</li>
				)
			}
		})
	}, [pageNumber, pageItems])

	if (!pageContent) {
		return null
	}

	return (
		<motion.div
			className={styles.page}
			initial={{ opacity: 0, x: '100%' }}
			whileInView={{ opacity: 1, x: 0 }}
			transition={{ type: 'spring', bounce: 0.2, delay: pageDelay }}
		>
			<ul className={styles.list}>{pageContent}</ul>
		</motion.div>
	)
}

export default Page
