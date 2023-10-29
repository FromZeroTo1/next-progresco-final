'use client'

import background from '@/assets/images/it/stats.png'
import ContactForm from '@/components/ui/contact-form/ContactForm'
import SubHeading from '@/components/ui/sub-heading/SubHeading'
import { SITE_NAME } from '@/constants/seo.constants'
import Image from 'next/image'
import { FC, useState } from 'react'
import styles from './It.module.scss'
import ItList from './list/ItList'
import { itList } from './list/data/it.data'
import ItMenu from './menu/ItMenu'
import { itMenu } from './menu/data/item-menu.data'
import ItPhone from './phone/ItPhone'
import ItQr from './qr/ItQr'

const It: FC = () => {
	const [isOpen, setIsOpen] = useState(false)

	const openModal = () => {
		setIsOpen(true)
	}

	const closeModal = () => {
		setIsOpen(false)
	}

	return (
		<div className={styles.wrapper}>
			<div className={styles.left}>
				<SubHeading className={styles.heading}>
					Мы создаем кросс-платформенное решение и программу (ERP + WMS + CRM)
					для учета и автоматизации бизнеса в производственной и складской
					сфере:
				</SubHeading>
				<ItList list={itList} />
				<button className={styles.btn} onClick={openModal}>
					Получить
				</button>
			</div>
			<div className={styles.right}>
				<div className={styles.background}>
					<Image
						quality={100}
						priority
						draggable={false}
						sizes="100vw"
						style={{ width: '100%', height: '100%' }}
						src={background}
						alt={`${SITE_NAME} Фоновая Статистика`}
					/>
				</div>
				<ItMenu menu={itMenu} />
				<ItQr />
				<ItPhone />
			</div>
			<ContactForm isOpen={isOpen} closeModal={closeModal} />
		</div>
	)
}

export default It
