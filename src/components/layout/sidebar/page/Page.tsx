import { scrollTo } from '@/utils/scrollTo'
import cn from 'classnames'
import { motion } from 'framer-motion'
import { FC, useMemo } from 'react'
import styles from './Page.module.scss'
import { IPage } from './interface/page.interface'

type OpacityValues = {
	[key: number]: number[]
}

const maxLinks = 3

const Page: FC<IPage> = ({ pageNumber, pageItems, variant, pageDelay }) => {
	const calculateOpacity = (index: number, endIndex: number): number => {
		const opacityValues: OpacityValues = {
			4: [0, 0.8, 0.5, 0.2],
			5: [0.8, 0, 0.8, 0.5, 0.2],
			6: [0.5, 0.8, 0, 0.8, 0.5, 0.2],
			7: [0.2, 0.5, 0.8, 0, 0.8, 0.5, 0.2],
			8: [0.2, 0.5, 0.8, 0, 0.8, 0.5, 0.2],
			9: [0.2, 0.5, 0.8, 0, 0.8, 0.5, 0.2],
		}
		return opacityValues[endIndex][index]
	}

	const pageContent = useMemo(() => {
		if (pageNumber <= 0 || pageNumber > pageItems.length) {
			return null
		}

		const startIndex = Math.max(1, pageNumber - maxLinks)
		const endIndex = Math.min(pageItems.length, pageNumber + maxLinks)

		return pageItems.slice(startIndex - 1, endIndex).map((page, index) => {
			const pageIndex = startIndex + index
			const opacity = calculateOpacity(index, endIndex)

			const isCurrentPage = pageIndex === pageNumber

			return isCurrentPage ? (
				<>
					<li key={page.pageNumber} className={styles.current}>
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
				</>
			) : (
				<li
					key={page.pageNumber}
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
		})
	}, [pageNumber, pageItems, variant])

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
