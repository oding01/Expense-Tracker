import { ReactNode } from 'react'

const Container = ({ children }: { children: ReactNode }): JSX.Element => {
	return (
		<div className='flex flex-col w-full items-start gap-10 relative'>
			{children}
		</div>
	)
}

export default Container
