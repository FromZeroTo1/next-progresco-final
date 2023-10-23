import '@/assets/styles/global.scss'
import Footer from '@/components/layout/footer/Footer'
import Header from '@/components/layout/header/Header'
import { getSiteUrl } from '@/config/url.config'
import { SITE_NAME } from '@/constants/seo.constants'
import {
	DMSans,
	Furore,
	Gilroy,
	Inter,
	Raleway,
	Roboto,
	Thicccboi,
} from '@/fonts/fonts'
import Providers from '@/providers/Providers'
import type { Metadata } from 'next'
import { PropsWithChildren } from 'react'


export const metadata: Metadata = {
	icons: {
		icon: '/favicon.svg',
	},
	title: {
		absolute: SITE_NAME,
		template: `%s | ${SITE_NAME}`,
	},
	metadataBase: new URL(getSiteUrl()),
	openGraph: {
		type: 'website',
		siteName: SITE_NAME,
		emails: ['info@progresco.com'],
	},
}

export default function Layout({ children }: PropsWithChildren<unknown>) {
	return (
		<html lang="en">
			<body
				className={`${DMSans.variable} ${Furore.variable} ${Gilroy.variable} ${Inter.variable} ${Raleway.variable} ${Roboto.variable} ${Thicccboi.variable}`}
			>
				<Providers>
					<div>
						{children}
					</div>
				</Providers>
			</body>
		</html>
	)
}
