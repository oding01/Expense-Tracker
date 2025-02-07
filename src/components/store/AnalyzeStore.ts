import { create } from 'zustand'
import { consumptionMockData } from '@/Mock/Mock'
import { analyzeDataType } from '@/types/type'

interface AnalyzeStoreType {
	consumptionData: analyzeDataType[]
}

export const useAnalyzeStore = create<AnalyzeStoreType>(() => ({
	consumptionData: consumptionMockData,
}))
