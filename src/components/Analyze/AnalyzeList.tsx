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
		<div className='flex flex-col w-full h-[500px] items-center flex-1'>
			<div className='relative flex flex-col justify-start items-center bg-[#f6f6f7] rounded-[70px] shadow-analyze-box w-full h-full'>
				<ul className='flex-initial font-semibold text-[#838383] text-2xl tracking-[0] leading-[normal] mt-5'>
					카테고리별 지출액
					{consumptionData.map((data) => (
						<>
							<li className='flex-initial text-black'>{data.category}</li>
						</>
					))}
				</ul>
			</div>
		</div>
	)
}
