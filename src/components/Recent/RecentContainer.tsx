import ConsumeList from '@/components/Recent/ConsumeList'
import MostRecent from '@/components/Recent/MostRecent'

export const RecentContainer = (): JSX.Element => {
	return (
		<div className='flex flex-col tablet:flex-row items-end gap-6 relative w-full'>
			<div className='relative flex-1 min-w-auto w-full tablet:min-w-[320px]'>
				<MostRecent consumePlace='롯데백화점' />
			</div>
			<div className='relative flex-1 min-w-auto w-full tablet:min-w-[320px]'>
				<ConsumeList />
			</div>
		</div>
	)
}
