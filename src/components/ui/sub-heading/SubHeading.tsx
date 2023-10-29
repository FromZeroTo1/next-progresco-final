import cn from 'classnames'
import { FC, PropsWithChildren } from 'react'
import styles from './SubHeading.module.scss'
import { ISubHeading } from './interface/sub-heading.interface'

const SubHeading: FC<PropsWithChildren<ISubHeading>> = ({
	children,
	className,
}) => {
	return (
		<h3 className={cn(styles.heading, className && className)}>{children}</h3>
	)
}

export default SubHeading
