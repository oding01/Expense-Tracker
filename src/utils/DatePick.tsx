import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { ko } from 'date-fns/locale'
import { forwardRef, useState } from 'react'
import { format } from 'date-fns'
import { Calendar } from 'lucide-react'

interface DatePickProps {
	selectedDate: Date
	minDate?: Date
	maxDate?: Date
	textSize?: string
	handleSelect: (date: Date | null) => void
	iconSize?: number
}

interface DateInputProps {
	onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
	selectedDate: Date
	textSize: string
	iconSize: number
}

const DateInput = forwardRef<HTMLButtonElement, DateInputProps>(
	({ onClick, selectedDate, textSize, iconSize }, ref) => {
		const formattedDate = selectedDate ? format(selectedDate, 'yyyy-MM-dd') : ''

		return (
			<button
				type='button'
				className={`hover:bg-gray-200 hover:duration-300 inline-flex ${textSize} items-center whitespace-nowrap gap-1`}
				onClick={onClick}
				ref={ref}
			>
				<Calendar width={iconSize} height={iconSize} />
				{formattedDate}
			</button>
		)
	},
)
DateInput.displayName = 'DateInput'

export const DatePick = ({
	selectedDate,
	minDate = new Date(0, 0),
	maxDate = new Date(),
	handleSelect,
	textSize = 'text-md',
	iconSize = 20,
}: DatePickProps) => {
	const [open, setOpen] = useState(false)

	const handleOnSelect = (date: Date | null) => {
		setOpen(false)
		handleSelect(date)
	}
	return (
		<DatePicker
			//이거 해야 타입 오류 안뜸
			icon={null}
			customInput={
				<DateInput
					onClick={() => setOpen(true)}
					selectedDate={selectedDate}
					textSize={textSize}
					iconSize={iconSize}
				/>
			}
			locale={ko}
			dateFormat='yyyy-MM-dd'
			//state를 넘길지 말지 고민 많이 했는데 넘기는게 맞는듯, 이거 아니면 오히려 복잡한데 결국 상태를 받아야함
			selected={selectedDate}
			open={open}
			minDate={minDate}
			maxDate={maxDate}
			onInputClick={() => setOpen(true)}
			onClickOutside={() => setOpen(false)}
			onSelect={handleOnSelect}
			shouldCloseOnSelect={true}
			closeOnScroll={true}
		/>
	)
}
