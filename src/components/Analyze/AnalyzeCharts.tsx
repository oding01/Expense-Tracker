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
		<div className='relative flex-1 min-w-auto tablet:min-w-[320px] w-full bg-[#51b1ff] rounded-[3rem] shadow-blue-box'>
			<div className='flex flex-col w-full h-full items-center justify-center font-extrabold text-white text-3xl tracking-[0] leading-normal]'>
				<div>Charts</div>
				<div className='min-h-96'></div>
			</div>
		</div>
	)
}
