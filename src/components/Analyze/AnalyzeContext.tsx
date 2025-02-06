import { useAnalyzeStore } from '@/components/store/AnalyzeStore'
import { createContext } from 'react'

interface analyzeDataType {
	category: string
	detail: string
	price: number
	date: string
}

export const AnalyzeContext = createContext<analyzeDataType[]>([])

export const AnaylzeProvider = ({
	children,
}: {
	children: React.ReactNode
}) => {
	const consumptionData = useAnalyzeStore((state) => state.consumptionData)
	return (
		<AnalyzeContext.Provider value={consumptionData}>
			{children}
		</AnalyzeContext.Provider>
	)
}
