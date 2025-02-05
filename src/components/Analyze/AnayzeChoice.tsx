export const AnalyzeChoice = () => {
	return (
		<div className='relative flex-1 min-w-auto tablet:min-w-[320px] w-full bg-white rounded-[3rem] shadow-white-box'>
			<div className='flex-initial flex gap-4 justify-center'>
				<div className='flex-initial flex flex-col justify-center text-'>
					<label className='flex-1' htmlFor='날짜'>
						날짜
					</label>
					<div className='flex flex-col tablet:flex-row flex-1'>
						{/* datepicker 사용 예정 */}
						<input type='date' />
						<input type='date' />
					</div>
				</div>
				<div className='text-center'>
					분류
					<div className='flex gap-2 justify-center'>
						<button className='flex-initial border-2 rounded-2xl p-0.5 text-sm'>
							카테고리
						</button>
						<button className='flex-initial border-2 rounded-2xl p-0.5 text-sm'>
							상세 목록
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}
