import { useEffect, useState, useContext } from 'react'
import { AnalyzeContext } from '@/components/Analyze/AnalyzeContext'
import { addComma } from '@/utils/money'
import { chartColors } from '@/Mock/Mock'

interface widthType {
	[key: number]: string
}

export const AnalyzeList = () => {
	const { progressBarWidth, consumptionCombinedData } =
		useContext(AnalyzeContext)

	const [animatedWidth, setAnimatedWidth] = useState<widthType>({})

	//width 기존에 0 걸어놓고, 필요한 width로 변경해서 transition 출력
	useEffect(() => {
		if (!progressBarWidth || !consumptionCombinedData) return
		const updatedWidths = Object.fromEntries(
			consumptionCombinedData.map((each) => [
				each.id,
				`${progressBarWidth[each.id] ?? 0}%`,
			]),
		)
		setAnimatedWidth(updatedWidths)
	}, [consumptionCombinedData, progressBarWidth])

	return (
		<div className='flex flex-col w-full h-[500px] items-center flex-1'>
			<div className='relative flex flex-col justify-start items-center bg-[#f6f6f7] rounded-[10px] shadow-analyze-box w-full h-full tablet:p-[24px]'>
				<div className='font-semibold text-[#838383] text-2xl tracking-[0] leading-[normal] mt-5'>
					카테고리별 지출액
				</div>
				<div className='overscroll-y-auto overflow-hidden w-full h-full px-[20px]'>
					<ul className='flex flex-col flex-initial w-full h-full mt-5 gap-10 overflow-y-scroll pb-10'>
						{consumptionCombinedData?.map((data) => (
							<li
								key={data.id}
								className='flex flex-col flex-initial text-black'
							>
								<div className='flex flex-1 justify-between'>
									<div className='text-[#675f5f] text-[26px] font-medium'>
										{data.category}
									</div>
									<div className='text-black text-2xl font-medium flex items-center'>
										{addComma(data.price)}
									</div>
								</div>
								<div className='flex-1 w-full h-[35px] bg-[#e8e8e8] rounded-[10px] shadow-analyze-chart'>
									<div
										className='h-[35px] rounded-[10px] shadow-analyze-progress-bar transition-[width] duration-400 ease-in-out'
										style={{
											width: animatedWidth[data.id] || '0%',
											backgroundColor:
												chartColors[data.id % chartColors.length],
										}}
									/>
								</div>
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	)
}
