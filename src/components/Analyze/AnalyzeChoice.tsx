import { AnalyzeContext } from '@/components/Analyze/AnalyzeContext'
import { addComma } from '@/utils/money'
import { useContext } from 'react'

export const AnalyzeChoice = () => {
	const { totalPrice } = useContext(AnalyzeContext)
	return (
		<div className='flex flex-initial flex-col tablet:flex-row gap-1 justify-start w-full tablet:gap-10 px-10'>
			<div className='relative flex-1 flex flex-col justify-start items-center bg-[#f6f6f7] rounded-[10px] shadow-analyze-box w-full h-full p-[20px]'>
				<div className='flex flex-col justify-between items-center analyzechoice:flex-row flex-1 gap-2 w-full'>
					<div className='flex flex-1 flex-col'>
						<label
							className='text-[#838383] text-sm font-medium tracking-wide mobile:text-base'
							htmlFor='시작일'
						>
							시작일
						</label>
						<input
							type='date'
							className='text-lg mobile:text-2xl font-medium text-[#554a4a]'
							value='2025-01-01'
						/>
					</div>
					<div className='flex flex-col flex-1'>
						<label
							className='text-[#838383] text-sm font-medium tracking-wide mobile:text-base'
							htmlFor='종료일'
						>
							종료일
						</label>
						<input
							className='text-lg mobile:text-2xl font-medium text-[#554a4a] '
							type='date'
							value='2025-01-01'
						/>
					</div>
				</div>
			</div>
			<div className='relative flex flex-1 flex-row justify-center items-center bg-[#f6f6f7] rounded-[10px] shadow-analyze-box w-full h-[160px] analyzechoice:h-full p-[20px]'>
				<div className='ml-3 flex flex-1 flex-col h-full justify-center'>
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
				<div className='flex justify-between mr-5 h-full items-center'>
					<div className='font-semibold text-lg mobile:text-2xl'>
						{addComma(totalPrice ?? 0)}원
					</div>
				</div>
			</div>
		</div>
	)
}
