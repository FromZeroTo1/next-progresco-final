'use client'

import { QueryClient } from '@tanstack/query-core'
import { QueryClientProvider } from '@tanstack/react-query'
import { PropsWithChildren } from 'react'

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
		},
	},
})

export default function Providers({ children }: PropsWithChildren<unknown>) {
	return (
		<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
	)
}
