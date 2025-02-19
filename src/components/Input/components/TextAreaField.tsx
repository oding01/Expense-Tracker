import BaseField from '@/components/Input/components/BaseField'
import { IInputFormData } from '@/types/type'
import { useFormContext } from 'react-hook-form'

interface TextAreaFieldProps {
	label: string
	name: keyof IInputFormData
}

const TextAreaField = ({ label, name }: TextAreaFieldProps) => {
	const { register } = useFormContext<IInputFormData>()
	return (
		<BaseField label={label}>
			<textarea
				className='text-xl px-5 py-5 w-full rounded-[15px] focus:ring-2 focus:ring-inset focus:ring-[#5FB1FF] focus:outline-none bg-transparent mb-11'
				{...register(name)}
			/>
		</BaseField>
	)
}

export default TextAreaField
