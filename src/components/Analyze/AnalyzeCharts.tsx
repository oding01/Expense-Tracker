import { AnalyzeDoughnutChart } from '@/components/Analyze/charts/AnalyzeDoughnutChart'

export const AnalyzeCharts = () => {
	return (
		<div className='flex flex-col mobile:h-[500px] items-center flex-1 h-[500px] overflow-hidden w-full'>
			<div className='flex flex-col justify-start items-center bg-[#f6f6f7] rounded-[10px] shadow-analyze-box w-full h-full'>
				<div className='flex-1 font-semibold text-[#838383] text-2xl tracking-[0] leading-[normal] mt-5'>
					카테고리별 차트
				</div>
				<div className='flex-initial w-full h-full min-w-[200px] min-h-[200px] aspect-square overflow-x-scroll'>
					<AnalyzeDoughnutChart />
				</div>
			</div>
		</div>
	)
}
