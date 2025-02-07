export interface analyzeDataType {
	category: string
	detail: string
	price: number
	date: string
}

export interface IInputFormData {
	inputType: 'income' | 'spending'
	amount: number
	place: string
	category: ICategory
	date: string
	memo: string
}

export interface ICategory {
	id: number
	value: string
	name: string
}

export interface analyzeCombinedDataType {
	id: number
	category: string
	price: number
}
