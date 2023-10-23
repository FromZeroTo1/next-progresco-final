import cn from 'classnames'
import { FC, PropsWithChildren } from 'react'
import styles from './Heading.module.scss'
import { IHeading } from './interface/heading.interface'

const Heading: FC<IHeading & PropsWithChildren> = ({
	variant,
	className,
	children,
}) => {
	return (
		<h2
			className={cn(
				styles.heading,
				{
					[styles.gray]: variant === 'gray',
					[styles.white]: variant === 'white',
				},
				className && className
			)}
		>
			{children}
		</h2>
	)
}

export default Heading
