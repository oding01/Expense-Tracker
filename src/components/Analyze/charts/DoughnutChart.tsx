import { AnalyzeContext } from '@/components/Analyze/AnalyzeContext'
import { chartColors } from '@/Mock/Mock'
import { ResponsivePie } from '@nivo/pie'
import { useContext, useEffect, useState } from 'react' // Import useEffect and useState

interface ChartDataType {
	id: string
	label: string
	value: number
	color: string
}

export const DoughnutChart = () => {
	const { doughnutChartData } = useContext(AnalyzeContext)
	const [animatedData, setAnimatedData] = useState<ChartDataType[]>([])

	//차트가 변해야 애니메이션이 출력됨, default값을 넣고 0.05초뒤 필요한 값을 넣음
	useEffect(() => {
		if (!doughnutChartData) return
		const initialData: ChartDataType[] = doughnutChartData.map((item) => ({
			...item,
			value: 0,
		}))
		setAnimatedData(initialData)

		const timeoutId = setTimeout(() => {
			setAnimatedData(doughnutChartData)
		}, 50)
		return () => clearTimeout(timeoutId)
	}, [doughnutChartData])

	if (animatedData.length === 0) {
		return null
	}
	return (
		<ResponsivePie
			data={animatedData}
			margin={{ top: 10, right: 10, bottom: 50, left: 10 }}
			innerRadius={0.5}
			padAngle={0.7}
			cornerRadius={3}
			colors={chartColors}
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
			motionConfig='slow'
			legends={[
				{
					anchor: 'bottom',
					direction: 'row',
					justify: false,
					translateX: 0,
					translateY: 30,
					itemsSpacing: 0,
					itemWidth: 55,
					itemHeight: 50,
					itemTextColor: '#999',
					itemDirection: 'left-to-right',
					itemOpacity: 1,
					symbolSize: 12,
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
