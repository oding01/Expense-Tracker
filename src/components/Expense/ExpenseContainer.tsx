import CategoryChart from '@/components/Expense/CategoryChart'
import { Expense } from '@/components/Expense/Expense'

export const ExpenseContainer = (): JSX.Element => {
	return (
		<div className='flex flex-col tablet:flex-row items-start gap-16 relative w-full'>
			<div className='relative flex-1 min-w-[350px] w-full'>
				<Expense />
			</div>
			<div className='relative flex-1 min-w-[350px] w-full'>
				<CategoryChart />
			</div>
		</div>
	)
}
