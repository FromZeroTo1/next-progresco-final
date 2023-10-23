import { ISolution } from '@/shared/types/solution.types'
import cn from 'classnames'
import { FC } from 'react'
import styles from './Solutions.module.scss'
import SolutionsItem from './item/SolutionsItem'

const Solutions: FC<{ solutions: ISolution[] }> = ({ solutions }) => {
	return (
		<div className={cn(styles.solutions, 'black-line')}>
			{solutions &&
				solutions.map((solution) => (
					<SolutionsItem key={solution.id} solution={solution} />
				))}
		</div>
	)
}

export default Solutions
