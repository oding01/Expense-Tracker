import { AnalyzeContext } from '@/components/Analyze/AnalyzeContext'
import { DatePick } from '@/utils/DatePick'
import { addComma } from '@/utils/money'
import { useContext, useEffect, useState } from 'react'
import totalPriceImage from '@/images/totalPrice.svg'
import { useQuery } from '@tanstack/react-query'
import { getSpendingData } from '@/api/api'

export const AnalyzeChoice = () => {
	const { totalPrice, setSpendingData } = useContext(AnalyzeContext)
	const [startDate, setStartDate] = useState(new Date())
	const [endDate, setEndDate] = useState(new Date())

	const { data: spendingDataInDB } = useQuery({
		queryKey: ['spending', startDate.toISOString(), endDate.toISOString()],
		queryFn: () => getSpendingData(startDate, endDate),
		staleTime: 60 * 1000,
	})

	const handleSetStartDate = (date: Date | null) => {
		if (!date) {
			alert('날짜를 선택해주세요')
			return
		}
		setStartDate(date)
	}

	const handleSetEndDate = (date: Date | null) => {
		if (!date) {
			alert('날짜를 선택해주세요')
			return
		}
		setEndDate(date)
	}

	useEffect(() => {
		setSpendingData(spendingDataInDB ?? [])
	}, [spendingDataInDB, setSpendingData])

	return (
		<div className='flex flex-initial flex-col tablet:flex-row gap-1 justify-start w-full tablet:gap-10 px-10'>
			<div className='relative flex-1 flex flex-col justify-start items-center bg-[#f6f6f7] rounded-[10px] shadow-analyze-box w-full h-full p-[20px]'>
				<div className='flex flex-row justify-between items-center flex-1 gap-2 w-full flex-wrap'>
					<div className='flex flex-3 flex-col ml-1 tablet:flex-1'>
						<label
							className='text-[#838383] text-sm font-medium tracking-wide mobile:text-base'
							htmlFor='시작일'
						>
							시작일
						</label>
						<DatePick
							selectedDate={startDate ?? new Date()}
							handleSelect={handleSetStartDate}
							textSize='text-lg'
							maxDate={endDate}
						/>
					</div>
					<div className='flex flex-col flex-2 justify-center tablet:flex-1 ml-1'>
						<div className='flex flex-col tablet:mr-1'>
							<label
								className='text-[#838383] text-sm font-medium tracking-wide mobile:text-base'
								htmlFor='종료일'
							>
								종료일
							</label>
							<DatePick
								selectedDate={endDate ?? new Date()}
								handleSelect={handleSetEndDate}
								textSize='text-lg'
								minDate={startDate}
							/>
						</div>
					</div>
				</div>
			</div>
			<div className='relative flex flex-1 flex-row justify-center items-center bg-[#f6f6f7] rounded-[10px] shadow-analyze-box w-full p-[20px]'>
				<div className='ml-1 flex flex-3 flex-col h-full justify-center tablet:flex-1'>
					<label
						className='text-[#838383] text-sm mobile:text-base font-medium tracking-wide'
						htmlFor='총 지출액'
					>
						총 지출액
					</label>
					<img src={totalPriceImage} className='w-[34px] h-[32px]'></img>
				</div>
				<div className='flex h-full items-center flex-2 justify-start tablet:flex-initial tablet:mr-1'>
					<div className='font-semibold text-lg mobile:text-2xl whitespace-nowrap'>
						{addComma(totalPrice ?? 0)}원
					</div>
				</div>
			</div>
		</div>
	)
}
