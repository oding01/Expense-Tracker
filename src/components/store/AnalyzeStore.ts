import { SpendingDataInDBProps } from '@/types/type'
import { create } from 'zustand'

interface AnalyzeStore {
	spendingData: SpendingDataInDBProps[] | []
	actions: {
		setSpendingData: (spendingDataInDB: SpendingDataInDBProps[]) => void
	}
}

const descendingOrder = (spendingDataInDB: SpendingDataInDBProps[]) =>
	spendingDataInDB.sort((a, b) => b.total_amount - a.total_amount)

export const useAnalyzeStore = create<AnalyzeStore>((set) => ({
	spendingData: [],
	actions: {
		setSpendingData: (spendingDataInDB) => {
			set(() => ({
				spendingData: descendingOrder(spendingDataInDB),
			}))
		},
	},
}))
