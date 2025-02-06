import { AnalyzeCharts } from '@/components/Analyze/AnalyzeCharts'
import { AnalyzeList } from '@/components/Analyze/AnalyzeList'
import { AnalyzeChoice } from '@/components/Analyze/AnayzeChoice'
import { consumptionData } from '@/Mock/Mock'
import { useEffect, useState } from 'react'

interface analyzeDataType {
	category: string
	detail: string
	price: number
	date: string
}

function calculateTotalPrice(consumptionData: analyzeDataType[]) {
	let totalPrice = 0
	consumptionData.map((each) => (totalPrice += each.price))
	return totalPrice
}

export const AnalyzeContainer = () => {
	const [totalPrice, setTotalPrice] = useState(0)

	useEffect(() => {
		setTotalPrice(calculateTotalPrice(consumptionData))
	}, [])

	return (
		<div className='relative flex flex-col gap-6 m-10 min-w-auto tablet:min-w-[320px] tablet:flex-col bg-white rounded-[3rem] shadow-white-box py-[68px]'>
			<div className='flex-initial text-[36px] pl-10 font-semibold text-black text-4xl tracking-[0] leading-[normal] whitespace-nowrap'>
				지출 분석
			</div>
			<AnalyzeChoice totalPrice={totalPrice} />
			<div className='flex flex-1 flex-col tablet:flex-row w-full justify-center items-center px-10 gap-10'>
				<AnalyzeCharts consumptionData={consumptionData} />
				<AnalyzeList consumptionData={consumptionData} />
			</div>
		</div>
	)
}
