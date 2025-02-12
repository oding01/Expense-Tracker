import { AnalyzeContext } from '@/components/Analyze/AnalyzeContext'
import { chartColors } from '@/Mock/Mock'
import { ChartDataType } from '@/types/type'
import { ResponsivePie } from '@nivo/pie'
import { useContext, useEffect, useState } from 'react'

export const DoughnutChart = () => {
	const { spendingData } = useContext(AnalyzeContext)
	const [animatedData, setAnimatedData] = useState<ChartDataType[]>([])

	const firstRow: ChartDataType[] = []
	const secondRow: ChartDataType[] = []

	if (!spendingData) return
	const chartData: ChartDataType[] = spendingData.map((each, idx) => {
		const eachChartData = {
			id: each.category_name,
			label: each.category_name,
			value: each.total_amount,
			color: chartColors[idx % chartColors.length],
		}
		if (spendingData.length >= 5 && idx <= spendingData.length / 2)
			firstRow.push(eachChartData)
		else secondRow.push(eachChartData)
		return eachChartData
	})
	//차트가 변해야 애니메이션이 출력됨, default값을 넣고 0.05초뒤 필요한 값을 넣음
	useEffect(() => {
		const initialData: ChartDataType[] = chartData?.map((data) => ({
			...data,
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
			margin={{ top: 10, right: 10, bottom: 50, left: 10 }}
			innerRadius={0.5}
			padAngle={0.7}
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
			legends={[
				{
					data: firstRow,
					anchor: 'bottom',
					direction: 'row',
					justify: false,
					translateX: 0,
					translateY: 30,
					itemsSpacing: 5,
					itemWidth: 55,
					itemHeight: 35,
					itemTextColor: '#999',
					itemDirection: 'left-to-right',
					itemOpacity: 1,
					symbolSize: 8,
					symbolShape: 'circle',
					effects: [
						{
							on: 'hover',
							style: {
								itemTextColor: '#000',
							},
						},
					],
				},
				{
					data: secondRow,
					anchor: 'bottom',
					direction: 'row',
					justify: false,
					translateX: 0,
					translateY: 60,
					itemsSpacing: 5,
					itemWidth: 55,
					itemHeight: 35,
					itemTextColor: '#999',
					itemDirection: 'left-to-right',
					itemOpacity: 1,
					symbolSize: 8,
					symbolShape: 'circle',
					effects: [
						{
							on: 'hover',
							style: {
								itemTextColor: '#000',
							},
						},
					],
				},
			]}
		/>
	)
}
