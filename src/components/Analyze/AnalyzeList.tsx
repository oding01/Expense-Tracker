interface analyzeDataType {
	category: string
	detail: string
	price: number
	date: string
}

const color = ['#5fb1ff', '#fffc58', '#8fff5f', '#df0000']

export const AnalyzeList = ({
	consumptionData,
}: {
	consumptionData: analyzeDataType[]
}) => {
	return (
		<div className='flex flex-col w-full h-[500px] items-center flex-1'>
			<div className='relative flex flex-col justify-start items-center bg-[#f6f6f7] rounded-[10px] shadow-analyze-box w-full h-full tablet:p-[24px]'>
				<div className='font-semibold text-[#838383] text-2xl tracking-[0] leading-[normal] '>
					카테고리별 지출액
				</div>
				<div className='overscroll-y-auto overflow-hidden w-full h-full'>
					<ul className='flex flex-col flex-initial w-full h-full mt-5 gap-10 overflow-y-scroll'>
						{consumptionData.map((data, index) => (
							<>
								<li className='flex flex-col flex-initial text-black'>
									<div className='flex flex-1 justify-between'>
										<div className='text-[#675f5f] text-[26px] font-medium'>
											{data.category}
										</div>
										<div className='text-black text-2xl font-medium '>
											{data.price}
										</div>
									</div>
									<div className='flex-1 w-full h-[35px] bg-[#e8e8e8] rounded-[10px] shadow-analyze-chart'>
										<div
											className={`w-1/2 h-[35px] rounded-[10px] shadow-[4px_0px_16px_0px_rgba(0,0,0,0.20)]"`}
											style={{ backgroundColor: color[index % 4] }}
										/>
									</div>
								</li>
							</>
						))}
					</ul>
				</div>
			</div>
		</div>
	)
}
