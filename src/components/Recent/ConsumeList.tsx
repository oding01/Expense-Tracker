import ConsumeItem from '@/components/Recent/ConsumeItem'

const ConsumeList = () => {
	const recentItems = [
		{ emoji: '🏪', place: 'CU', amount: 5000 },
		{ emoji: '🏬', place: '롯데백화점어찌고저찌고왈ㄹ라라랄', amount: 5000 },
		{ emoji: '🏬', place: '롯데백화점', amount: 70000 },
	]

	return (
		<div className='bg-[#5fb1ff] w-full h-[341px] rounded-[3rem] p-6 shadow-[0px_12px_24px_#389dff99,inset_-12px_-12px_24px_#0084ff,inset_6px_6px_12px_#49a6ff40]'>
			<div className='flex items-center gap-2 mb-5'>
				<div className='flex text-white font-semibold text-2xl pl-4 leading-normal'>
					최근 소비 내역
				</div>
			</div>
			<div className='flex-1 mt-4 space-y-3'>
				{recentItems.map((item, index) => (
					<ConsumeItem
						key={index}
						emoji={item.emoji}
						place={item.place}
						amount={item.amount}
					/>
				))}
			</div>
		</div>
	)
}

export default ConsumeList
