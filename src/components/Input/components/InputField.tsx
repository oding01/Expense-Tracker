import { IInputFormData } from '@/types/type'
import * as React from 'react'
import { useFormContext } from 'react-hook-form'

interface IInputFieldProps
	extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
	label: string
	unit?: string
	type?: string
	tagName?: 'input' | 'textarea'
	name: keyof IInputFormData
}

const InputField = ({
	label,
	unit,
	type = 'text',
	tagName,
	name,
}: IInputFieldProps) => {
	const { register } = useFormContext<IInputFormData>()

	return (
		<div
			className={`flex flex-col mb-11 ${tagName === 'textarea' && 'flex-1'}`}
		>
			{/* 라벨 영역 */}
			<div className='flex justify-between items-center mb-2'>
				<label className='text-2xl font-medium ml-0.5'>{label}</label>
				{unit && <label>({unit})</label>}
			</div>
			<div
				className={`relative flex rounded-[15px] w-full bg-[#F7F7F8] shadow-analyze-box tablet:flex-row flex-1`}
			>
				{/* tagName에 따른 input, textarea 출력 */}
				{tagName === 'textarea' ? (
					<textarea
						className='text-xl px-5 py-5 w-full rounded-[15px] focus:ring-2 focus:ring-inset focus:ring-[#5FB1FF] focus:outline-none bg-transparent'
						{...register(name)}
					/>
				) : (
					<input
						type={type}
						className='text-xl px-5 w-full h-16 rounded-[15px] focus:ring-2 focus:ring-inset focus:ring-[#5FB1FF] focus:outline-none bg-transparent'
						{...register(name)}
					/>
				)}
			</div>
		</div>
	)
}

InputField.displayName = 'InputField'

export default InputField
