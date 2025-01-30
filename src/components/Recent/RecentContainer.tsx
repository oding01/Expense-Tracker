import ConsumeList from '@/components/Recent/ConsumeList'
import MostRecent from '@/components/Recent/MostRecent'

export const RecentContainer = (): JSX.Element => {
	return (
		<div className='flex flex-wrap items-end gap-16 relative w-full'>
			<div className='relative flex-1 min-w-[350px]'>
				<MostRecent consumePlace='롯데백화점' />
			</div>
			<div className='relative flex-1 min-w-[350px]'>
				<ConsumeList />
			</div>
		</div>
	)
}
