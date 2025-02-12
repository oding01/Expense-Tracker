import { AnalyzeContext } from '@/components/Analyze/AnalyzeContext'
import { DatePick } from '@/utils/DatePick'
import { addComma } from '@/utils/money'
import { useContext } from 'react'

export const AnalyzeChoice = () => {
	const {
		totalPrice,
		startDate,
		endDate,
		handleSetStartDate,
		handleSetEndDate,
	} = useContext(AnalyzeContext)

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
					<img
						src='./src/images/totalPrice.svg'
						className='w-[34px] h-[32px]'
					></img>
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
