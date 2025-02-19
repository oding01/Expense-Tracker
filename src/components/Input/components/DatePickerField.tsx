import BaseField from '@/components/Input/components/BaseField'
import { IInputFormData } from '@/types/type'
import { DatePick } from '@/utils/DatePick'
import { useController, useFormContext } from 'react-hook-form'

interface DatePickerFieldProps {
	label: string
	name: keyof IInputFormData
}

const DatePickerField = ({ label, name }: DatePickerFieldProps) => {
	const { control } = useFormContext<IInputFormData>()

	const {
		field: { value, onChange },
	} = useController({
		name,
		control,
	})

	const selectedDate = (() => {
		if (typeof value === 'string') {
			return new Date(value)
		}
		return new Date()
	})()

	const onSelect = (date: Date | null) => {
		if (!date) {
			alert('날짜를 선택해주세요.')
			return
		}
		onChange(date.toLocaleString('sv').slice(0, 10))
	}

	return (
		<div className='mb-11'>
			<BaseField label={label}>
				<div className='text-xl px-5 w-full h-16 rounded-[15px] focus:ring-2 focus:ring-inset focus:ring-[#5FB1FF] focus:outline-none bg-transparent flex items-center'>
					<div className='flex-1'>
						<DatePick selectedDate={selectedDate} handleSelect={onSelect} />
					</div>
				</div>
			</BaseField>
		</div>
	)
}

export default DatePickerField
