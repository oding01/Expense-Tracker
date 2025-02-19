import { ICategory, IInputFormData } from '@/types/type'
import { dateToKorean } from '@/utils/dateToKorean'
import { Json } from 'supabase/database.types'
import supabase from 'supabase/supabase'

interface RequestValue {
	input_type: string
	category: Json
	amount: number
	place: string
	memo?: string
	date: string
}

const categoryToJson = (category: ICategory): Json => ({
	id: category.id,
	name: category.name,
	value: category.value,
})

export const insertData = async (input: IInputFormData) => {
	const requestData: RequestValue = {
		input_type: input.inputType,
		category: categoryToJson(input.category),
		amount: input.amount,
		place: input.place,
		memo: input.memo,
		date: input.date,
	}

	const { data, error } = await supabase
		.from('expense_list')
		.insert(requestData)

	if (error) {
		throw error
	} else {
		console.log('Data inserted Success: ', data)
	}
	return true
}

export const getSpendingData = async (startDate: Date, endDate: Date) => {
	const korStartDate = dateToKorean(startDate)
	const korEndDate = dateToKorean(endDate)
	let { data: category_spending_stats } = await supabase
		.from('category_spending_stats')
		.select('*')
		.gte('date', korStartDate)
		.lte('date', korEndDate)
	return category_spending_stats
}
