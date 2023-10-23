import cn from 'classnames'
import { FC, PropsWithChildren } from 'react'
import Container from '../container/Container'
import styles from './Section.module.scss'
import { ISection } from './interface/section.interface'

const Section: FC<ISection & PropsWithChildren> = ({
	children,
	variant = 'white',
	paddingTop = false,
	paddingBottom = false,
	className,
	id,
}) => {
	return (
		<section
			className={cn(
				styles.section,
				{
					[styles.gray]: variant === 'gray',
					[styles.white]: variant === 'white',
					[styles.top]: paddingTop,
					[styles.bottom]: paddingBottom,
				},
				className && className
			)}
			id={id && id}
		>
			<Container>{children}</Container>
		</section>
	)
}

export default Section
