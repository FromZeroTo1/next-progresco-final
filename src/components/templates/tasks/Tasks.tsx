import { ITask } from '@/shared/types/task.types'
import { FC } from 'react'
import styles from './Tasks.module.scss'
import TasksItem from './item/TasksItem'

const Tasks: FC<{ tasks: ITask[] }> = ({ tasks }) => {
	return (
		<div className={styles.tasks}>
			{tasks &&
				tasks.map((task, index) => (
					<TasksItem key={task.id} task={task} index={index} />
				))}
		</div>
	)
}

export default Tasks
