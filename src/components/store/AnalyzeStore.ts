import { create } from 'zustand'
import { consumptionMockData } from '@/Mock/Mock'
import { analyzeCombinedDataType, analyzeDataType } from '@/types/type'

interface AnalyzeState {
	consumptionData: analyzeDataType[]
	consumptionCombinedData: analyzeCombinedDataType[]
	startDate: Date
	endDate: Date
}

interface AnalyzeActions {
	actions: {
		setStartDate: (date: Date) => void
		setEndDate: (date: Date) => void
	}
}

// 카테고리별 뭉치고 가격 합산
const combiningData = (
	consumptionData: analyzeDataType[],
): analyzeCombinedDataType[] => {
	let id = 0
	const consumptionCombinedData = Object.values(
		consumptionData.reduce<Record<string, analyzeCombinedDataType>>(
			(acc, item) => {
				if (!acc[item.category]) {
					acc[item.category] = {
						id: id++,
						category: item.category,
						price: item.price,
					}
				} else {
					acc[item.category].price += item.price
				}
				return acc
			},
			{},
		),
	)
	return consumptionCombinedData.sort((a, b) => b.price - a.price)
}

type AnalyzeStore = AnalyzeState & AnalyzeActions

export const useAnalyzeStore = create<AnalyzeStore>((set) => ({
	consumptionData: consumptionMockData,
	consumptionCombinedData: combiningData(consumptionMockData),
	startDate: new Date(),
	endDate: new Date(),
	actions: {
		setStartDate: (date: Date) => {
			set(() => ({ startDate: date }))
		},
		setEndDate: (date: Date) => {
			set(() => ({ endDate: date }))
		},
	},
}))
