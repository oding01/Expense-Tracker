interface analyzeDataType {
	category: string
	detail: string
	price: number
	date: string
}

export const AnalyzeList = ({
	consumptionData,
}: {
	consumptionData: analyzeDataType[]
}) => {
	return (
		<div className='flex flex-col w-full h-full tablet:mt-[6rem] items-center justify-center font-extrabold text-white text-3xl tracking-[0] leading-normal]'>
			<div className='text-black mb-3'>List</div>
			{consumptionData.map((data) => (
				<>
					<div className='flex-initial text-[#51b1ff]'>{data.category}</div>
				</>
			))}
		</div>
	)
}
