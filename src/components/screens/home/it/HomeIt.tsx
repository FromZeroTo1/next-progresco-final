import Sidebar from '@/components/layout/sidebar/Sidebar'
import It from '@/components/templates/it/It'
import Heading from '@/components/ui/heading/Heading'
import Section from '@/components/ui/section/Section'
import { FC } from 'react'
import styles from './HomeIt.module.scss'

const HomeIt: FC = () => {
	return (
		<Section paddingTop={true} id="It" className={styles.section}>
			<div className={styles.wrapper}>
				<Heading className={styles.heading} variant="gray">
					IT-решение
				</Heading>
				<div className={styles.fill}>
					<It />
					<Sidebar
						mouseVariant='black'
						pageVariant="gray"
						pageDelay={1}
						mouseDelay={1}
						pageNumber={6}
						className={styles.sidebar}
					/>
				</div>
			</div>
		</Section>
	)
}

export default HomeIt
