import { ChartDataType, SpendingDataInDBProps } from '@/types/type'
import { chartColors } from '@/utils/chartColors'
import { ResponsivePie } from '@nivo/pie'
import { useEffect, useState } from 'react'

interface ExpenseDoughnutChartProps {
	spendingData: SpendingDataInDBProps[] | undefined
}

export const ExpenseDoughnutChart = ({
	spendingData,
}: ExpenseDoughnutChartProps) => {
	const [animatedData, setAnimatedData] = useState<ChartDataType[]>([])

	if (!spendingData) return

	//차트가 변해야 애니메이션이 출력됨, default값을 넣고 0.05초뒤 필요한 값을 넣음
	useEffect(() => {
		const chartData: ChartDataType[] = spendingData.map((each, idx) => {
			return {
				id: each.category_name,
				label: each.category_name,
				value: each.total_amount,
				color: chartColors[idx % chartColors.length],
			}
		})
		const initialData: ChartDataType[] = chartData.map((eachChart) => ({
			...eachChart,
			value: 0,
		}))
		setAnimatedData(initialData)

		const timeoutId = setTimeout(() => {
			setAnimatedData(chartData)
		}, 50)

		return () => clearTimeout(timeoutId)
	}, [spendingData])

	return (
		<ResponsivePie
			data={animatedData}
			margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
			innerRadius={0.5}
			padAngle={0.7}
			valueFormat=' >-,'
			cornerRadius={3}
			colors={animatedData.map((each) => each.color)}
			activeOuterRadiusOffset={9}
			borderWidth={1}
			borderColor={{
				from: 'color',
				modifiers: [['darker', 0.2]],
			}}
			enableArcLinkLabels={false}
			arcLinkLabelsSkipAngle={10}
			arcLinkLabelsTextColor='#333333'
			arcLinkLabelsThickness={2}
			arcLinkLabelsColor={{ from: 'color' }}
			arcLabelsSkipAngle={17}
			arcLabelsTextColor={{
				from: 'color',
				modifiers: [['darker', 2]],
			}}
			animate={true}
		/>
	)
}
