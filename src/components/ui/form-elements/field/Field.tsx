'use client'

import cn from 'classnames'
import { forwardRef } from 'react'

import { SITE_NAME } from '@/constants/seo.constants'
import Image from 'next/image'
import { IMaskInput } from 'react-imask'
import styles from './Field.module.scss'
import { IField } from './interface/field.interface'

const Field = forwardRef<HTMLInputElement, IField>(
	(
		{
			placeholder,
			error,
			type = 'text',
			className,
			icon,
			isMask = false,
			mask,
			pattern = '',
			...rest
		},
		ref
	) => {
		return (
			<div className={cn(styles.field, className && className)}>
				<label>
					{isMask ? (
						<IMaskInput
							mask={mask}
							ref={ref}
							placeholder={placeholder}
							pattern={pattern}
							type={type}
							value={String(rest.value || '')}
							onChange={rest.onChange}
						/>
					) : (
						<input ref={ref} type={type} {...rest} placeholder={placeholder} />
					)}
					{icon && (
						<div className={styles.icon}>
							<Image
								priority
								quality={100}
								src={icon}
								alt={`${SITE_NAME} Icon`}
								width={0}
								height={0}
								sizes="100vw"
								style={{ width: '100%', height: '100%' }}
							/>
						</div>
					)}
				</label>
				{error && <div className={styles.error}>{error.message}</div>}
			</div>
		)
	}
)

export default Field
