import { ICategory } from '@/types/type'

export const incomeCategories: ICategory[] = [
	{ id: 1, value: 'salary', name: '급여' },
	{ id: 2, value: 'business', name: '사업 수입' },
	{ id: 3, value: 'allowance', name: '용돈' },
	{ id: 4, value: 'finance', name: '투자 수입' },
	{ id: 5, value: 'other', name: '기타 수입' },
	// ...
]

export const spendingCategories: ICategory[] = [
	{ id: 1, value: 'food', name: '식비' },
	{ id: 2, value: 'transportation', name: '교통비' },
	{ id: 3, value: 'shopping', name: '쇼핑' },
	{ id: 4, value: 'life', name: '생활비' },
	{ id: 5, value: 'cafe', name: '카페/간식' },
	{ id: 6, value: 'play', name: '술/유흥' },
	{ id: 7, value: 'medical', name: '의료/건강' },
	{ id: 8, value: 'finance', name: '금융' },
	{ id: 9, value: 'leisure', name: '여가비' },
	{ id: 10, value: 'education', name: '교육/학습' },
	{ id: 11, value: 'other', name: '기타 지출' },
	// ...
]
