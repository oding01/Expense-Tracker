import Header from '@/shared/Header'
import { Outlet } from 'react-router'

const Layout = () => {
	return (
		<div className='flex flex-col w-full items-center relative'>
			<Header />
			<Outlet />
		</div>
	)
}

export default Layout
