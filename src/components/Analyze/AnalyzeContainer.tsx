import { AnalyzeCharts } from '@/components/Analyze/AnalyzeCharts'
import { AnalyzeList } from '@/components/Analyze/AnalyzeList'
import { consumptionData } from '@/Mock/Mock'

export const AnalyzeContainer = () => {
	return (
		<div className='flex flex-col w-full h-full justify-center items-center flex-initial bg-white rounded-[3rem] shadow-[24px_24px_48px_#74a2cc99,inset_-24px_-24px_48px_#c5deff,inset_12px_12px_24px_#e3efff]'>
			<AnalyzeCharts consumptionData={consumptionData} />
			<AnalyzeList />
		</div>
	)
}
