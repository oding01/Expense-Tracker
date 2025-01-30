import Container from '@/components/Container'
import { ExpenseContainer } from '@/components/Expense/ExpenseContainer'
import { RecentContainer } from '@/components/Recent/RecentContainer'

const Home = () => {
	return (
		<>
			<Container>
				<ExpenseContainer />
				<RecentContainer />
			</Container>
		</>
	)
}

export default Home
