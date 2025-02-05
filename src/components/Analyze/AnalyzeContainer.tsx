import { AnalyzeCharts } from '@/components/Analyze/AnalyzeCharts'
import { AnalyzeList } from '@/components/Analyze/AnalyzeList'
import { AnalyzeChoice } from '@/components/Analyze/AnayzeChoice'
import { consumptionData } from '@/Mock/Mock'

export const AnalyzeContainer = () => {
	return (
		<div className='flex flex-col tablet:flex-row items-start gap-6 relative m-10 min-w-auto tablet:min-w-[320px] bg-white rounded-[3rem] shadow-white-box'>
			<div className='flex flex-col flex-1'>
				<AnalyzeChoice />
				<AnalyzeCharts consumptionData={consumptionData} />
			</div>
			<AnalyzeList consumptionData={consumptionData} />
		</div>
	)
}
