export const AnalyzeChoice = () => {
	return (
		<div className='flex flex-initial flex-col tablet:flex-row gap-1 justify-start w-full tablet:gap-10 px-10'>
			<div className='relative flex-1 flex flex-col justify-start items-center bg-[#f6f6f7] rounded-[18px] shadow-analyze-box w-full h-full p-[20px]'>
				<div className='flex flex-col justify-between items-center tablet:flex-row flex-1 gap-2 w-full'>
					<div className='flex flex-1 flex-col'>
						<label
							className='text-[#838383] text-base font-medium tracking-wide'
							htmlFor='시작일'
						>
							시작일
						</label>
						<input
							type='date'
							className='text-2xl font-medium text-[#554a4a]'
							value='2025-01-01'
						/>
					</div>
					<div className='flex flex-col flex-1'>
						<label
							className='text-[#838383] text-base font-medium tracking-wide'
							htmlFor='종료일'
						>
							종료일
						</label>
						<input
							className='text-2xl font-medium text-[#554a4a]'
							type='date'
							value='2025-01-01'
						/>
					</div>
				</div>
			</div>
			<div className='relative flex flex-1 flex-row justify-start items-center bg-[#f6f6f7] rounded-[18px] shadow-analyze-box w-full h-full p-[20px]'>
				<div className='ml-3 flex flex-1 flex-col'>
					<label
						className='text-[#838383] text-base font-medium tracking-wide'
						htmlFor='총 지출액'
					>
						총 지출액
					</label>
					<img
						src='./src/images/totalPrice.svg'
						className='w-[34px] h-[32px]'
					></img>
				</div>
				<div className='flex justify-between mr-5'>
					<div className='font-semibold text-2xl'>1,000,000원</div>
				</div>
			</div>
		</div>
	)
}
