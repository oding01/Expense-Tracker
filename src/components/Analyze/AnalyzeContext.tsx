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
	startDate?: Date
	endDate?: Date
	handleSetStartDate: (date: Date | null) => void
	handleSetEndDate: (date: Date | null) => void
}

interface ChartDataType {
	id: string
	label: string
	value: number
	color: string
}

export const AnalyzeContext = createContext<AnalyzeContextType>({
	handleSetStartDate: () => {},
	handleSetEndDate: () => {},
})

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
	const startDate = useAnalyzeStore((state) => state.startDate)
	const endDate = useAnalyzeStore((state) => state.endDate)

	//Store에서 consumptionCombinedData 꺼내와서 변수로 저장
	const consumptionCombinedData = useAnalyzeStore(
		(state) => state.consumptionCombinedData,
	)

	const doughnutChartData: ChartDataType[] = consumptionCombinedData.map(
		(each, index) => ({
			id: each.category,
			label: each.category,
			value: each.price,
			color: chartColors[index % chartColors.length],
		}),
	)

	const totalPrice = consumptionData.reduce(
		(total, each) => total + each.price,
		0,
	)

	const { setStartDate, setEndDate } = useAnalyzeStore((state) => state.actions)

	const handleSetStartDate = (date: Date | null) => {
		if (!date) {
			alert('날짜를 선택해주세요')
			return
		}
		setStartDate(date)
	}

	const handleSetEndDate = (date: Date | null) => {
		if (!date) {
			alert('날짜를 선택해주세요')
			return
		}
		setEndDate(date)
	}

	const progressBarWidth = calculateWidth(consumptionData, totalPrice)
	return (
		<AnalyzeContext.Provider
			value={{
				consumptionData,
				totalPrice,
				progressBarWidth,
				consumptionCombinedData,
				doughnutChartData,
				startDate,
				endDate,
				handleSetStartDate,
				handleSetEndDate,
			}}
		>
			{children}
		</AnalyzeContext.Provider>
	)
}
