interface analyzeDataType {
	category: string
	detail: string
	price: number
	date: string
}

export const AnalyzeCharts = ({
	consumptionData,
}: {
	consumptionData: analyzeDataType[]
}) => {
	return (
		<div className='flex flex-col w-full items-center flex-1'>
			<div className='flex-1 font-extrabold text-black text-3xl tracking-[0] leading-normal'>
				Chart
			</div>
			<div className='flex-initial flex flex-col items-center bg-[#D7E8FF] rounded-[1.5rem] w-full mx-20 mb-[3rem] shadow-white-box'>
				<div className='min-h-[640px]'>차트</div>
			</div>
		</div>
	)
}
