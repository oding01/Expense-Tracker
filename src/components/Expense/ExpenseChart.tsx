import { getSpendingData } from '@/api/api'
import { ExpenseDoughnutChart } from '@/components/Expense/ExpenseDoughnutChart'
import { dateToKorean } from '@/utils/dateToKorean'
import { useQuery } from '@tanstack/react-query'

const TODAY = new Date()
const firstDay = new Date(TODAY.getFullYear(), TODAY.getMonth(), 1)
const endDay = new Date(TODAY.getFullYear(), TODAY.getMonth(), TODAY.getDate())

const ExpenseChart = (): JSX.Element => {
	const { data: spendingData } = useQuery({
		queryKey: ['spending', dateToKorean(firstDay), dateToKorean(endDay)],
		queryFn: () => getSpendingData(firstDay, endDay),
		staleTime: 60 * 1000,
	})

	return (
		<div className='relative w-full h-[469px] bg-[#5fb1ff] rounded-[70px] shadow-blue-box'>
			<div className='flex flex-col w-full h-full items-center justify-center font-extrabold text-white text-3xl tracking-[0] leading-normal p-6'>
				<div>카테고리별 소비 차트</div>
				<div className='flex-initial w-full h-full min-w-[200px] min-h-[200px] aspect-square text-black bg-white rounded-[50px] shadow-[inset_4px_4px_8px_#00000040] text-base'>
					<ExpenseDoughnutChart spendingData={spendingData ?? []} />
				</div>
			</div>
		</div>
	)
}

export default ExpenseChart
