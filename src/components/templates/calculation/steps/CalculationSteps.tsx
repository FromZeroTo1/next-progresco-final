'use client'

import firstStepBg from '@/assets/images/calculation/first-step.svg'
import secondStepBg from '@/assets/images/calculation/second-step.svg'
import { SITE_NAME } from '@/constants/seo.constants'
import cn from 'classnames'
import Image from 'next/image'
import { FC, useState } from 'react'
import styles from './CalculationSteps.module.scss'

const CalculationSteps: FC = () => {
	const [activeStep, setActiveStep] = useState(1)

	const handleStepClick = (step: number) => {
		setActiveStep(step)
	}

	return (
		<div className={styles.steps}>
			<button
				className={cn(styles.step, {
					[styles.active]: activeStep === 1,
				})}
				onClick={() => handleStepClick(1)}
			>
				01
				<Image
					src={firstStepBg}
					priority
					width={70}
					height={13}
					alt={`${SITE_NAME} Шаг`}
				/>
			</button>
			<button
				className={cn(styles.step, {
					[styles.active]: activeStep === 2,
				})}
				onClick={() => handleStepClick(2)}
			>
				02
				<Image
					src={secondStepBg}
					priority
					width={70}
					height={13}
					alt={`${SITE_NAME} Шаг`}
				/>
			</button>
			<button
				className={cn(styles.step, {
					[styles.active]: activeStep === 3,
				})}
				onClick={() => handleStepClick(3)}
			>
				03
			</button>
		</div>
	)
}

export default CalculationSteps
