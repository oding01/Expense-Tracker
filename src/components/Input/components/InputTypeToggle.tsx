import { IInputFormData } from '@/types/type'
import { useController, useFormContext } from 'react-hook-form'

interface ITypeToggleProps {
	name: 'inputType'
}

// 수입/지출 토글 UI와 그에 따른 카테고리 업데이트 로직을 담당하는 컴포넌트
const InputTypeToggle = ({ name }: ITypeToggleProps) => {
	const { control } = useFormContext<IInputFormData>()

	const {
		field: { value: inputType, onChange },
	} = useController({
		name,
		control,
	})

	return (
		<div className='relative flex rounded-[70px] w-60 h-20 bg-[#F7F7F8] shadow-analyze-box tablet:flex-row flex-1 mb-11 p-2'>
			<div className='flex w-full'>
				<div
					className={`flex-1 flex justify-center items-center cursor-pointer rounded-[70px] transition-all duration-200 ${
						inputType === 'income' ? 'bg-[#5FB1FF] text-white' : ''
					}`}
				>
					<label
						className='text-2xl font-medium tracking-wide py-6 px-4 cursor-pointer'
						onClick={() => onChange('income')}
					>
						수입
					</label>
				</div>
				<div
					className={`flex-1 flex justify-center items-center cursor-pointer rounded-[70px] transition-all duration-200 ${
						inputType === 'spending' ? 'bg-[#ff5638] text-white' : ''
					}`}
				>
					<label
						className='text-2xl font-medium tracking-wide py-6 px-4 cursor-pointer'
						onClick={() => onChange('spending')}
					>
						지출
					</label>
				</div>
			</div>
		</div>
	)
}

export default InputTypeToggle
