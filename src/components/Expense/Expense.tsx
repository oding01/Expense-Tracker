import { ExpenseFrame } from '@/components/Expense/ExpenseFrame'

export const Expense = (): JSX.Element => {
	return (
		<div className='w-full flex flex-col gap-4'>
			<ExpenseFrame title='총 잔액' amount={1980000} type='default' />
			<ExpenseFrame title='이번 달 수입' amount={2000000} type='income' />
			<ExpenseFrame title='이번 달 지출' amount={70000} type='spending' />
		</div>
	)
}
