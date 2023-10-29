import { ISolution } from '@/shared/types/solution.types'
import { FC } from 'react'
import styles from './Solutions.module.scss'
import SolutionsItem from './item/SolutionsItem'

const Solutions: FC<{ solutions: ISolution[] }> = ({ solutions }) => {
	return (
		<div className={styles.solutions}>
			{solutions &&
				solutions.map((solution) => (
					<SolutionsItem key={solution.id} solution={solution} />
				))}
		</div>
	)
}

export default Solutions
