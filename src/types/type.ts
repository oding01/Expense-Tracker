export interface IInputFormData {
	inputType: 'income' | 'spending'
	amount: number
	place: string
	category: ICategory
	date: string
	memo?: string
}

export interface ICategory {
	id: number
	value: string
	name: string
}

export interface ChartDataType {
	id: string
	label: string
	value: number
	color: string
}

export interface SpendingDataInDBProps {
	category_id: number | null
	category_name: string
	date: string
	id: number
	total_amount: number
}
