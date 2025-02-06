import { AnalyzeCharts } from '@/components/Analyze/AnalyzeCharts'
import { AnalyzeList } from '@/components/Analyze/AnalyzeList'
import { AnalyzeChoice } from '@/components/Analyze/AnayzeChoice'
import { consumptionData } from '@/Mock/Mock'

export const AnalyzeContainer = () => {
	return (
		<div className='relative flex flex-col gap-6 m-10 min-w-auto tablet:min-w-[320px] tablet:flex-col bg-white rounded-[3rem] shadow-white-box pb-[68px]'>
			<AnalyzeChoice />
			<div className='flex flex-1 flex-col tablet:flex-row w-full justify-center items-center px-10 gap-10'>
				<AnalyzeCharts consumptionData={consumptionData} />
				<AnalyzeList consumptionData={consumptionData} />
			</div>
		</div>
	)
}
