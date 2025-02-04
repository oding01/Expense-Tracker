interface analyzeDataType {
	category: string
	detail: string
	price: number
	date: string
}

export const AnalyzeCharts = ({
	consumptionData,
}: {
	consumptionData: analyzeDataType[]
}) => {
	return (
		<div className='flex-initial'>
			<div>
				{consumptionData.map((data) => (
					<>
						<div className='flex-initial'>{data.category}</div>
					</>
				))}
			</div>
		</div>
	)
}
