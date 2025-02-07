// import { AnalyzeContext } from '@/components/Analyze/\bAnalyzeContext'
// import { useContext } from 'react'

export const AnalyzeCharts = () => {
	// const consumptionData = useContext(AnalyzeContext)
	return (
		<div className='flex flex-col w-full h-[500px] items-center flex-1'>
			<div className='relative flex flex-col justify-start items-center bg-[#f6f6f7] rounded-[10px] shadow-analyze-box w-full h-full'>
				<div className='flex-1 font-semibold text-[#838383] text-2xl tracking-[0] leading-[normal] mt-5'>
					카테고리별 차트
				</div>
				<div className='flex-1 w-full h-full flex justify-center'>차트</div>
			</div>
		</div>
	)
}
