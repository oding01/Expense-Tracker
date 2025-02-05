export const AnalyzeChoice = () => {
	return (
		<div className='flex flex-initial tablet:flex-row gap-4 justify-start w-full'>
			<div className='flex-1 flex flex-col justify-center items-center min-w-[15rem] w-full'>
				<label className='flex-1' htmlFor='날짜'>
					날짜
				</label>
				<div className='flex flex-col tablet:flex-row flex-1 border-2 p-1 rounded-3xl'>
					{/* datepicker 사용 예정 */}
					<input type='date' />
					<input type='date' />
				</div>
			</div>
			<div className='flex flex-col flex-1 items-center text-center min-w-[15rem]'>
				<label className='flex-1' htmlFor='날짜'>
					분류
				</label>
				<div className='flex gap-2 justify-center border-2 p-1 rounded-3xl'>
					<button className='flex-initial rounded-2xl p-0.5 text-sm'>
						카테고리
					</button>
					<button className='flex-initial rounded-2xl p-0.5 text-sm'>
						장소
					</button>
				</div>
			</div>
		</div>
	)
}
