import { Expense } from '@/components/Expense/Expense'
import ExpenseChart from '@/components/Expense/ExpenseChart'

export const ExpenseContainer = (): JSX.Element => {
	return (
		<div className='flex flex-col tablet:flex-row items-start gap-6 relative w-full'>
			<div className='relative flex-1 min-w-auto tablet:min-w-[320px] w-full'>
				<Expense />
			</div>
			<div className='relative flex-1 min-w-auto tablet:min-w-[320px] w-full '>
				<ExpenseChart />
			</div>
		</div>
	)
}
