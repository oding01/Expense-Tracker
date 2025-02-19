import BaseField from '@/components/Input/components/BaseField'
import { IInputFormData } from '@/types/type'
import { addComma } from '@/utils/money'
import { useController } from 'react-hook-form'

interface IInputFieldProps {
	label: string
	unit?: string
	type?: string
	name: keyof IInputFormData
}

const InputField = ({ label, unit, type = 'text', name }: IInputFieldProps) => {
	const {
		field: { value, onChange },
		fieldState: { error },
	} = useController({
		name,
	})

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (name === 'amount') {
			const inputAmount = e.target.value.replace(/,/g, '')
			const regex = /^[0-9]{1,12}$/

			if (inputAmount === '' || regex.test(inputAmount)) {
				onChange(inputAmount === '' ? '' : addComma(Number(inputAmount)))
			}
		} else {
			const inputPlace = e.target.value
			const regex = /^[a-zA-Z0-9]{1,15}$/
			if (inputPlace === '' || regex.test(inputPlace)) {
				onChange(inputPlace)
			}
		}
	}

	return (
		<div className='mb-11'>
			<BaseField label={label} unit={unit}>
				<input
					type={type}
					value={value}
					onChange={handleChange}
					className='text-xl px-5 w-full h-16 rounded-[15px] focus:ring-2 focus:ring-inset focus:ring-[#5FB1FF] focus:outline-none bg-transparent'
				/>
			</BaseField>
			{error && <p className='text-red-500 text-sm mt-3'>{error.message}</p>}
		</div>
	)
}

export default InputField
