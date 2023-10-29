import qr from '@/assets/images/it/qr.svg'
import { SITE_NAME } from '@/constants/seo.constants'
import Image from 'next/image'
import { FC } from 'react'
import styles from '../It.module.scss'

const ItQr: FC = () => {
	return (
		<div className={styles.qr}>
			<div className={styles.qrIcon}>
				<Image
					quality={100}
					priority
					draggable={false}
					sizes="100vw"
					style={{ width: '100%', height: '100%' }}
					src={qr}
					alt={`${SITE_NAME} QR код`}
				/>
			</div>
			<p className={styles.qrText}>
				Отсканируйте этот QR-код в мобильном приложении для подключения к базе
			</p>
			<p className={styles.qrMobileText}>
				Отсканируйте этот QR-код для подключения к базе
			</p>
		</div>
	)
}

export default ItQr
