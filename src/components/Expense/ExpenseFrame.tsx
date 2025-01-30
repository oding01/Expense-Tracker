interface ExpenseFrameProps {
	title: string // 총잔액, 수입, 지출 등의 제목
	amount: number // 금액
	type?: 'default' | 'income' | 'spending' // 타입에 따라 색상 변경
	className?: string // 선택적 외부 스타일링 (위치 등)
}

export const ExpenseFrame = ({
	title,
	amount,
	type = 'default',
	className = '',
}: ExpenseFrameProps): JSX.Element => {
	// 금액 포맷팅 함수(단위별로 ',' 추가 해줍니다.)
	const formatAmount = (
		amount: number,
		type: 'default' | 'income' | 'spending',
	) => {
		const formattedAmount = amount.toLocaleString('ko-KR')
		switch (type) {
			case 'income':
				return `+ ${formattedAmount}`
			case 'spending':
				return `- ${formattedAmount}`
			default:
				return formattedAmount
		}
	}

	// 타입에 따른 텍스트 색상
	const getTextColor = () => {
		switch (type) {
			case 'income':
				return 'text-[#09c200]'
			case 'spending':
				return 'text-[#df0000cc]'
			default:
				return 'text-black'
		}
	}

	return (
		<div
			className={`w-full h-36 bg-white rounded-[3rem] shadow-[24px_24px_48px_#74a2cc99,inset_-24px_-24px_48px_#c5deff,inset_12px_12px_24px_#e3efff] ${className}`}
		>
			<div className='flex flex-col w-full items-start gap-2 relative pt-3.5 pl-12'>
				<h2
					className={`relative w-full mt-[-1.00px] font-extrabold text-black text-2xl tracking-[0] leading-normal`}
				>
					{title}
				</h2>
				<p
					className={`relative w-full font-semibold ${getTextColor()} text-3xl tracking-[0] leading-normal`}
				>
					{formatAmount(amount, type)}
				</p>
			</div>
		</div>
	)
}
