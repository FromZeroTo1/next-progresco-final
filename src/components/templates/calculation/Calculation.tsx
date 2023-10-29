import autograph from '@/assets/images/calculation/autograph.png'
import SubHeading from '@/components/ui/sub-heading/SubHeading'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import styles from './Calculation.module.scss'
import CalculationSteps from './steps/CalculationSteps'

const Calculation: FC = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.left}>
				<SubHeading className={styles.heading}>
					Пройдите короткий опрос и за 3 шага узнайте стоимость реализации
					проекта на Вашем предприятии
				</SubHeading>
				<CalculationSteps />
				<p className={styles.description}>
					Результаты опроса помогут рассчитать стоимость готового решения точнее
				</p>
				<button className={styles.btn}>Получить расчет</button>
			</div>
			<div className={styles.right}>
				<p className={styles.call}>
					Позвоните мне <br /> или напишите в WhatsApp и я лично проконсультирую
					Вас
				</p>
				<div className={styles.info}>
					<h4 className={styles.name}>
						Елизавета Белова
						<span>Руководитель проектов</span>
					</h4>
					<Image
						quality={100}
						priority
						draggable={false}
						width={167}
						height={116}
						src={autograph}
						alt="Елизавета Белова"
					/>
					<p className={styles.callMobile}>
						Позвоните мне <br /> или напишите в WhatsApp и я лично
						проконсультирую Вас
					</p>
					<Link
						href="https://wa.me/+79957991119"
						className={styles.questionMobile}
					>
						Задать вопрос
					</Link>
					<span className={styles.rank}>Руководитель проектов</span>
				</div>
				<Link href="https://wa.me/+79957991119" className={styles.question}>
					Задать вопрос
				</Link>
			</div>
		</div>
	)
}

export default Calculation
