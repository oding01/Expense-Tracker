import { useAnalyzeStore } from '@/components/store/AnalyzeStore'
import { chartColors } from '@/Mock/Mock'
import { analyzeCombinedDataType, analyzeDataType } from '@/types/type'
import { createContext } from 'react'

interface AnalyzeContextType {
	consumptionData?: analyzeDataType[]
	totalPrice?: number
	progressBarWidth?: string[]
	consumptionCombinedData?: analyzeCombinedDataType[]
	doughnutChartData?: ChartDataType[]
}

interface ChartDataType {
	id: string
	label: string
	value: number
	color: string
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

	const doughnutChartData: ChartDataType[] = consumptionCombinedData.map(
		(each, index) => ({
			id: each.category,
			label: each.category,
			value: each.price,
			color: chartColors[index % 4],
		}),
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
				doughnutChartData,
			}}
		>
			{children}
		</AnalyzeContext.Provider>
	)
}
