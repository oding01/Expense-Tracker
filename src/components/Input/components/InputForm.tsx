import { IInputFormData } from '@/types/type'
import * as React from 'react'
import { SubmitHandler, useFormContext } from 'react-hook-form'

// 폼 레이아웃과 컴포넌트 조합만을 담당하는 컨테이너 컴포넌트
const InputForm = ({ children }: { children: React.ReactNode }) => {
	const { handleSubmit } = useFormContext<IInputFormData>()

	const onSubmit: SubmitHandler<IInputFormData> = (data) => {
		console.log(data)
	}

	return (
		<div className='pt-[50px] pb-[80px] px-10'>
			<h2 className='text-black text-4xl font-semibold mb-10'>
				수입 및 지출 입력하기
			</h2>
			<form onSubmit={handleSubmit(onSubmit)}>{children}</form>
		</div>
	)
}

export default InputForm
