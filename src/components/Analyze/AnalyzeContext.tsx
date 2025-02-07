import { useAnalyzeStore } from '@/components/store/AnalyzeStore'
import { analyzeDataType } from '@/types/type'
import { createContext } from 'react'

interface AnalyzeContextType {
	consumptionData?: analyzeDataType[]
	totalPrice?: number
}

export const AnalyzeContext = createContext<AnalyzeContextType>({})

function calculateTotalPrice(consumptionData: analyzeDataType[]) {
	let totalPrice = 0
	consumptionData.map((each) => (totalPrice += each.price))
	return totalPrice
}

export const AnalyzeProvider = ({
	children,
}: {
	children: React.ReactNode
}) => {
	const consumptionData = useAnalyzeStore((state) => state.consumptionData)

	const totalPrice = calculateTotalPrice(consumptionData)
	return (
		<AnalyzeContext.Provider value={{ consumptionData, totalPrice }}>
			{children}
		</AnalyzeContext.Provider>
	)
}
