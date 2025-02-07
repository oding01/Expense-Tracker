import { create } from 'zustand'
import { consumptionMockData } from '@/Mock/Mock'
import { analyzeCombinedDataType, analyzeDataType } from '@/types/type'

interface AnalyzeStoreType {
	consumptionData: analyzeDataType[]
	consumptionCombinedData: analyzeCombinedDataType[]
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

export const useAnalyzeStore = create<AnalyzeStoreType>(() => ({
	//consumptionData DB에서 get해온 따끈따끈한 raw data여야 맞을 듯
	consumptionData: consumptionMockData,
	consumptionCombinedData: combiningData(consumptionMockData),
}))
