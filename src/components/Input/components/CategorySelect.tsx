import { incomeCategories, spendingCategories } from '@/constants/categories'
import { ICategory, IInputFormData } from '@/types/type'
import {
	Listbox,
	ListboxButton,
	ListboxOption,
	ListboxOptions,
} from '@headlessui/react'
import { ChevronDown, CircleCheckBig } from 'lucide-react'
import { memo, useEffect } from 'react'
import { useController, useFormContext, useWatch } from 'react-hook-form'

interface ICategoryProps {
	name: 'category'
}

// 카테고리 선택 UI와 카테고리 목록 관리를 담당하는 컴포넌트
const CategorySelect = ({ name }: ICategoryProps) => {
	const { control } = useFormContext<IInputFormData>()
	const inputType = useWatch<IInputFormData>({ name: 'inputType', control })

	const {
		field: { value: selectedCategory, onChange },
	} = useController({
		name,
		control,
	})

	// inputType이 변경되면 해당하는 첫번째 카테고리로 자동 변경
	useEffect(() => {
		onChange(
			inputType === 'income' ? incomeCategories[0] : spendingCategories[0],
		)
	}, [inputType])

	// categories는 inputType에 따라 변경
	const categories: ICategory[] =
		inputType === 'income' ? incomeCategories : spendingCategories

	return (
		<div className='mb-11'>
			<div className='flex justify-between items-center mb-2'>
				<label className='text-2xl font-medium ml-0.5'>카테고리</label>
			</div>
			<div className='relative flex rounded-[15px] w-full h-16 bg-[#F7F7F8] shadow-analyze-box tablet:flex-row flex-1'>
				<Listbox value={selectedCategory} onChange={onChange}>
					<ListboxButton className='relative flex w-full items-center justify-between rounded-[15px] bg-transparent py-4 px-5 text-xl text-gray-900 focus:ring-2 focus:ring-[#5FB1FF] focus:ring-inset focus:outline-none'>
						<span className='text-xl'>{selectedCategory.name}</span>
						<ChevronDown className='h-5 w-5 text-gray-500' />
					</ListboxButton>
					<ListboxOptions
						anchor='bottom'
						transition
						className={`
            w-[var(--button-width)] rounded-xl border border-gray-200 bg-white p-1 [--anchor-gap:var(--spacing-1)] focus:outline-none
            transition duration-100 ease-in data-[leave]:data-[closed]:opacity-0 shadow-lg
          `}
					>
						{categories.map((category) => (
							<ListboxOption
								key={category.id}
								value={category}
								className='group flex cursor-default items-center gap-2 rounded-lg py-1.5 px-3 select-none data-[focus]:bg-[#daedff]'
							>
								{selectedCategory.id === category.id && (
									<CircleCheckBig size={16} />
								)}
								<div className='text-sm/6 text-gray-900'>{category.name}</div>
							</ListboxOption>
						))}
					</ListboxOptions>
				</Listbox>
			</div>
		</div>
	)
}

export default memo(CategorySelect)
