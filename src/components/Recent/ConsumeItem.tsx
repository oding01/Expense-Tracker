// 이모지와 지출 장소, 가격 인터페이스
interface ConsumeItemProps {
	emoji: string
	place: string
	amount: number
}

const ConsumeItem = ({ emoji, place, amount }: ConsumeItemProps) => {
	return (
		<div className='w-full h-14 bg-white rounded-[20px] shadow-[inset_4px_4px_8px_#00000040] '>
			<div className='flex h-full items-center justify-between'>
				<div className='flex items-center gap-3 min-w-0 flex-1'>
					<span className='flex-shrink-0 text-black text-2xl whitespace-nowrap leading-normal pl-6'>
						{emoji}
					</span>
					<span className='flex-1 min-w-40 max-w-2xs font-semibold text-black text-2xl overflow-hidden truncate leading-normal'>
						{place}
					</span>
				</div>
				<div className='flex items-center gap-1 flex-shrink-0'>
					<span className='min-w-0 !text-right font-semibold text-[#df0000cc] text-2xl leading-normal'>
						- {amount.toLocaleString()}
					</span>
					<span className='flex-shrink-0 font-medium text-black text-xl mr-6'>
						원
					</span>
				</div>
			</div>
		</div>
	)
}

export default ConsumeItem
