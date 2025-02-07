import { useAnalyzeStore } from '@/components/store/AnalyzeStore'
import { analyzeCombinedDataType, analyzeDataType } from '@/types/type'
import { createContext } from 'react'

interface AnalyzeContextType {
	consumptionData?: analyzeDataType[]
	totalPrice?: number
	progressBarWidth?: string[]
	consumptionCombinedData?: analyzeCombinedDataType[]
}

export const AnalyzeContext = createContext<AnalyzeContextType>({})

const calculateWidth = (
	consumptionData: analyzeDataType[],
	totalPrice: number,
) => {
	const width = consumptionData.map(
		(each) => `${(each.price / totalPrice) * 100}`,
	)
	return width
}

export const AnalyzeProvider = ({
	children,
}: {
	children: React.ReactNode
}) => {
	// Store에서 Data 꺼내와서 변수로 저장
	const consumptionData = useAnalyzeStore((state) => state.consumptionData)

	//Store에서 consumptionCombinedData 꺼내와서 변수로 저장
	const consumptionCombinedData = useAnalyzeStore(
		(state) => state.consumptionCombinedData,
	)

	const totalPrice = consumptionData.reduce(
		(total, each) => total + each.price,
		0,
	)

	const progressBarWidth = calculateWidth(consumptionData, totalPrice)
	return (
		<AnalyzeContext.Provider
			value={{
				consumptionData,
				totalPrice,
				progressBarWidth,
				consumptionCombinedData,
			}}
		>
			{children}
		</AnalyzeContext.Provider>
	)
}
