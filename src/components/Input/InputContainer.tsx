import CategorySelect from '@/components/Input/components/CategorySelect'
import InputField from '@/components/Input/components/InputField'
import InputForm from '@/components/Input/components/InputForm'
import InputTypeToggle from '@/components/Input/components/InputTypeToggle'
import { incomeCategories } from '@/constants/categories'
import { IInputFormData } from '@/types/type'
import { FormProvider, useForm } from 'react-hook-form'

const InputContainer = () => {
	const methods = useForm<IInputFormData>({
		defaultValues: {
			inputType: 'income',
			amount: 0,
			place: '',
			category: incomeCategories[0],
			date: new Date().toLocaleString('sv').slice(0, 10),
			memo: '',
		},
	})
	return (
		<FormProvider {...methods}>
			<div className='relative flex flex-col gap-6 w-full min-w-auto tablet:min-w-[320px] tablet:flex-col bg-gray-50 rounded-[3rem] shadow-2xl'>
				<InputForm>
					<InputTypeToggle name='inputType' />

					<div className='flex flex-col w-full h-full gap-14 tablet:flex-row'>
						<div className='flex flex-col flex-1'>
							<InputField
								type='number'
								label='사용 금액'
								unit='원'
								name='amount'
							/>
							<InputField label='사용처' name='place' />
							<CategorySelect name='category' />
						</div>
						<div className='flex flex-col flex-1'>
							<InputField label='사용한 날짜' type='date' name='date' />
							<InputField label='메모' tagName='textarea' name='memo' />
						</div>
					</div>
				</InputForm>
			</div>
		</FormProvider>
	)
}

export default InputContainer
