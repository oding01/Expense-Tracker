interface Place {
	consumePlace: string
}

const MostRecent = ({ consumePlace }: Place): JSX.Element => {
	return (
		<div className='flex flex-col w-full h-[341px] p-8 bg-white rounded-[3rem] shadow-[24px_24px_48px_#74a2cc99,inset_-24px_-24px_48px_#c5deff,inset_12px_12px_24px_#e3efff]'>
			<div className='pl-4 text-2xl text-black font-semibold relative mb-13'>
				당신은, 최근
			</div>

			<div className='flex flex-col items-center mb-auto'>
				<div className='flex flex-col text-4xl text-[#51b1ff] font-semibold text-center mb-12'>
					{consumePlace}
				</div>

				<div className='text-2xl text-black font-semibold !text-center'>
					에서
					<br />
					많이 소비하셨군요!
				</div>
			</div>
		</div>
	)
}

export default MostRecent
