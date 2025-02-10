import { AnalyzeCharts } from '@/components/Analyze/AnalyzeCharts'
import { AnalyzeList } from '@/components/Analyze/AnalyzeList'
import { AnalyzeChoice } from '@/components/Analyze/AnalyzeChoice'
import { AnalyzeProvider } from '@/components/Analyze/AnalyzeContext'

export const AnalyzeContainer = () => {
	return (
		<div className='relative flex flex-col gap-6 m-10 min-w-auto tablet:min-w-[320px] tablet:flex-col bg-gray-50 rounded-[3rem] shadow-2xl py-[50px]'>
			<div className='flex-initial text-[36px] pl-10 font-semibold text-black text-4xl tracking-[0] leading-[normal] whitespace-nowrap'>
				지출 분석
			</div>
			<AnalyzeProvider>
				<AnalyzeChoice />
				<div
					className='flex flex-1 flex-col tablet:flex-row w-full justify-center items-center px-10 gap-10 min-h-[500px] h-full overflow-auto '
				>
					<AnalyzeCharts />
					<AnalyzeList />
				</div>
			</AnalyzeProvider>
		</div>
	)
}
