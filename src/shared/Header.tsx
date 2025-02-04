import { useState } from 'react'
import { Link, useLocation } from 'react-router'
import { Menu, X } from 'lucide-react'

const menuItems = [
	{ name: 'Home', to: '/' },
	{ name: 'Input', to: '/input' },
	{ name: 'Analyze', to: '/analyze' },
]

const Header = () => {
	const [isOpen, setIsOpen] = useState(false)
	const { pathname } = useLocation()

  {/* 현재 선택된 메뉴 강조하기 위한 함수 */}
	const isCurrent = (path: string) => {
		if (path === '/') {
			return pathname === '/'
		}
		return pathname.startsWith(path)
	}

	return (
		<header className='fixed top-0 z-50 w-full h-16 bg-white border-b border-gray-200'>
			<nav className='relative mx-auto px-4 py-3 w-full h-full'>
				<div className='flex w-full justify-between'>
					{/* 로고 영역 */}
					<Link to='/' className='flex shrink-0 items-center'>
						<span className='text-xl font-bold'>Logo</span>
					</Link>

					{/* 데스크탑 메뉴 (768px 미만에서 숨김) */}
					<div className='hidden md:flex gap-1 ml-auto'>
						{menuItems.map((menu) => (
							<Link
								key={menu.name}
								to={menu.to}
								className={`items-center px-6 py-3 text-sm font-medium
                  ${
										isCurrent(menu.to)
											? 'bg-indigo-50 border-indigo-500 text-indigo-700'
											: 'text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700'
									}`}
								aria-current={isCurrent(menu.to) ? 'page' : undefined}
							>
								{menu.name}
							</Link>
						))}
					</div>

					{/* 모바일 메뉴 버튼 (768px 이상에서 숨김) */}
					<div className='flex items-center md:hidden'>
						<button
							onClick={() => setIsOpen(!isOpen)}
							className='inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500'
							aria-label='Toggle menu'
						>
							{isOpen ? <X size={24} /> : <Menu size={24} />}
						</button>
					</div>
				</div>

				{/* 모바일 메뉴 (768px 이상에서 숨김) */}
				{isOpen && (
					<div className='absolute top-full left-0 w-full bg-white border-b border-gray-200 md:hidden'>
						<div className='space-y-1 pb-3 pt-2'>
							{menuItems.map((menu) => (
								<Link
									key={menu.name}
									to={menu.to}
									className={`block py-2 pl-3 pr-4 text-base font-medium
                    ${
											isCurrent(menu.to)
												? 'bg-indigo-50 border-indigo-500 text-indigo-700'
												: 'text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700'
										}`}
									onClick={() => setIsOpen(false)}
								>
									{menu.name}
								</Link>
							))}
						</div>
					</div>
				)}
			</nav>
		</header>
	)
}

export default Header
