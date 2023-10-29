'use client'

import mailIcon from '@/assets/images/icons/mail.svg'
import phoneIcon from '@/assets/images/icons/phone.svg'
import worldIcon from '@/assets/images/icons/world.svg'
import { useContactForm } from '@/hooks/queries/mutate/useContactForm'
import { validEmail } from '@/utils/validations/email-validate'
import cn from 'classnames'
import Link from 'next/link'
import { FC, useEffect, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import Button from '../form-elements/button/Button'
import Field from '../form-elements/field/Field'
import styles from './ContactForm.module.scss'
import {
	IContactForm,
	IContactFormFields,
} from './interface/contact-form.interface'

const ContactForm: FC<IContactForm> = ({ isOpen, closeModal }) => {
	const {
		handleSubmit,
		register,
		control,
		formState: { errors },
		setValue,
	} = useForm<IContactFormFields>({
		mode: 'onChange',
	})

	const { onSubmit } = useContactForm(setValue)

	const [isModalOpen, setIsModalOpen] = useState(isOpen)

	const closePopup = () => {
		setIsModalOpen(false)
		closeModal()
	}

	useEffect(() => {
		setIsModalOpen(isOpen)
	}, [isOpen])

	const phoneMask = '+{7} (000) 000-00-00'

	return (
		<div
			className={cn(styles.contact, {
				[styles.show]: isModalOpen,
			})}
		>
			<div className={styles.wrapper}>
				<p className={styles.text}>
					<span>Заполните форму, </span> чтобы получить решение и улучшить
					показатели предприятия
				</p>
				<form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
					<Field
						{...register('fullName', {
							required: 'Обязательное поле',
						})}
						placeholder="Ваше ФИО"
						icon={worldIcon}
						error={errors.fullName}
					/>
					<Controller
						name="phone"
						control={control}
						rules={{
							required: 'Обязательное поле',
							minLength: {
								value: 18,
								message: 'Укажите корректный номер телефона',
							},
						}}
						render={({ field }) => (
							<Field
								placeholder="+7 (___) ___-__-__"
								icon={phoneIcon}
								error={errors.phone}
								isMask
								mask={phoneMask}
								{...field}
							/>
						)}
					/>
					<Field
						{...register('email', {
							required: 'Обязательное поле',
							pattern: {
								value: validEmail,
								message: 'Укажите корректный E-mail',
							},
						})}
						placeholder="Ваш Email"
						icon={mailIcon}
						error={errors.email}
					/>
					<Button className={styles.btn}>Оставить заявку</Button>
				</form>
				<p className={styles.privacy}>
					Я принимаю условия <Link href="">передачи информации</Link>
				</p>
			</div>
			<button className={styles.close} onClick={closePopup}>
				<span></span>
				<span></span>
			</button>
		</div>
	)
}

export default ContactForm
