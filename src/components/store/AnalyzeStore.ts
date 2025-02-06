import { create } from 'zustand'
import { consumptionMockData } from '@/Mock/Mock'

interface analyzeDataType {
	category: string
	detail: string
	price: number
	date: string
}

interface AnalyzeStoreType {
	consumptionData: analyzeDataType[]
}

export const useAnalyzeStore = create<AnalyzeStoreType>(() => ({
	consumptionData: consumptionMockData,
}))
