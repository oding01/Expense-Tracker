import { ICategory } from '@/types/type'

export const incomeCategories: ICategory[] = [
	{ id: 1, value: 'salary', name: '급여' },
	{ id: 2, value: 'bonus', name: '보너스' },
	{ id: 3, value: 'investment', name: '투자수익' },
	// ...
]

export const spendingCategories: ICategory[] = [
	{ id: 1, value: 'food', name: '식비' },
	{ id: 2, value: 'transportation', name: '교통비' },
	{ id: 3, value: 'shopping', name: '쇼핑' },
	{ id: 4, value: 'life', name: '생활비' },
	// ...
]
