import { useAnalyzeStore } from '@/components/store/AnalyzeStore'
import { SpendingDataInDBProps } from '@/types/type'
import { createContext } from 'react'

interface AnalyzeContextType {
	totalPrice?: number
	progressBarWidth?: { [k: string]: string }
	spendingData?: SpendingDataInDBProps[]
	setSpendingData: (spendingDataInDB: SpendingDataInDBProps[]) => void
}

export const AnalyzeContext = createContext<AnalyzeContextType>({
	setSpendingData: () => {},
})

const calculateWidth = (
	spendingData: SpendingDataInDBProps[],
	totalPrice: number,
) => {
	const width = Object.fromEntries(
		spendingData.map((each) => [
			each.id,
			`${(each.total_amount / totalPrice) * 100}`,
		]),
	)
	return width
}

export const AnalyzeProvider = ({
	children,
}: {
	children: React.ReactNode
}) => {
	const spendingData = useAnalyzeStore((state) => state.spendingData)
	const setSpendingData = useAnalyzeStore(
		(state) => state.actions.setSpendingData,
	)

	const totalPrice = spendingData.reduce(
		(total, each) => total + each.total_amount,
		0,
	)

	const progressBarWidth = calculateWidth(spendingData, totalPrice)

	return (
		<AnalyzeContext.Provider
			value={{
				spendingData,
				totalPrice,
				progressBarWidth,
				setSpendingData,
			}}
		>
			{children}
		</AnalyzeContext.Provider>
	)
}
