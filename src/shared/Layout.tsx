import Header from '@/shared/Header'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Outlet } from 'react-router'

const queryClient = new QueryClient()

const Layout = () => {
	return (
		<div className='flex flex-col min-h-screen min-w-full items-center relative'>
			<Header />
			{/* flex-1로 Header를 제외한 남은 영역 채우기 */}
			<div className='w-full pt-16 flex-1'>
				<QueryClientProvider client={queryClient}>
					<Outlet />
				</QueryClientProvider>
			</div>
		</div>
	)
}

export default Layout
