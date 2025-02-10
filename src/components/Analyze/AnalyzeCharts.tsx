import { AnalyzeContext } from '@/components/Analyze/AnalyzeContext'
import { useContext } from 'react'
import { DoughnutChart } from '@/components/Analyze/charts/DoughnutChart'

export const AnalyzeCharts = () => {
	const { doughnutChartData } = useContext(AnalyzeContext)
	return (
		<div className='flex flex-col w-full h-[500px] items-center flex-1'>
			<div className='relative flex flex-col justify-start items-center bg-[#f6f6f7] rounded-[10px] shadow-analyze-box w-full h-full'>
				<div className='flex-1 font-semibold text-[#838383] text-2xl tracking-[0] leading-[normal] mt-5'>
					카테고리별 차트
				</div>
				<DoughnutChart doughnutChartData={doughnutChartData ?? []} />
			</div>
		</div>
	)
}
