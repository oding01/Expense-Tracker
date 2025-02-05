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
		<div className='flex flex-1 flex-col w-full items-center'>
			<div className='flex-1 font-extrabold text-black text-3xl tracking-[0] leading-normal'>
				List
			</div>
			<ul className='flex-initial flex flex-col items-center bg-[#D7E8FF] rounded-[1.5rem] w-full min-h-[620px] mb-[3rem] shadow-white-box'>
				{consumptionData.map((data) => (
					<>
						<li className='flex-initial text-black'>{data.category}</li>
					</>
				))}
			</ul>
		</div>
	)
}
