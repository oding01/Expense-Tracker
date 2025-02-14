import * as React from 'react'

interface IBaseFieldProps {
	label: string
	unit?: string
	children: React.ReactNode
}

const BaseField = ({ label, unit, children }: IBaseFieldProps) => {
	return (
		<div className={`flex flex-col mb-11 ${label === '메모' && 'flex-1'}`}>
			{/* 라벨 영역 */}
			<div className='flex justify-between items-center mb-2'>
				<label className='text-2xl font-medium ml-0.5'>{label}</label>
				{unit && <label>({unit})</label>}
			</div>
			{/* 입력 content */}
			<div
				className={`relative flex rounded-[15px] w-full bg-[#F7F7F8] shadow-analyze-box tablet:flex-row flex-1`}
			>
				{children}
			</div>
		</div>
	)
}

export default BaseField
