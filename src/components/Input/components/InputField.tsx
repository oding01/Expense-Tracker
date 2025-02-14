import BaseField from '@/components/Input/components/BaseField'
import { IInputFormData } from '@/types/type'
import { useFormContext } from 'react-hook-form'

interface IInputFieldProps {
	label: string
	unit?: string
	type?: string
	name: keyof IInputFormData
}

const InputField = ({ label, unit, type = 'text', name }: IInputFieldProps) => {
	const { register } = useFormContext<IInputFormData>()

	return (
		<BaseField label={label} unit={unit}>
			<input
				type={type}
				className='text-xl px-5 w-full h-16 rounded-[15px] focus:ring-2 focus:ring-inset focus:ring-[#5FB1FF] focus:outline-none bg-transparent'
				{...register(name)}
			/>
		</BaseField>
	)
}

export default InputField
