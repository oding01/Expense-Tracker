import { AnalyzeCharts } from '@/components/Analyze/AnalyzeCharts'
import { AnalyzeList } from '@/components/Analyze/AnalyzeList'
import { consumptionData } from '@/Mock/Mock'

export const AnalyzeContainer = () => {
	return (
		<div className='flex flex-col tablet:flex-row items-start gap-6 relative w-full mt-10'>
			<div className='relative flex-1 min-w-auto tablet:min-w-[320px] w-full bg-white rounded-[3rem] shadow-white-box'>
				<AnalyzeCharts consumptionData={consumptionData} />
			</div>
			<AnalyzeList />
		</div>
	)
}
