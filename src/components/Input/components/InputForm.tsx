import { insertData } from '@/api/api'
import { IInputFormData } from '@/types/type'
import { useMutation } from '@tanstack/react-query'
import * as React from 'react'
import { SubmitHandler, useFormContext } from 'react-hook-form'

// 폼 레이아웃과 컴포넌트 조합만을 담당하는 컨테이너 컴포넌트
const InputForm = ({ children }: { children: React.ReactNode }) => {
	const { handleSubmit } = useFormContext<IInputFormData>()

	const { mutate, isPending } = useMutation({
		mutationFn: insertData,
		onSuccess: () => {
			alert('저장이 완료되었습니다.')
		},
		onError: () => {
			alert('저장에 실패하였습니다. 다시 시도해주세요.')
		},
	})

	const onSubmit: SubmitHandler<IInputFormData> = (data) => {
		mutate(data)
	}

	return (
		<div className='pt-[40px] pb-[60px] px-10'>
			<h2 className='text-black text-4xl font-semibold mb-10'>
				수입 및 지출 입력하기
			</h2>
			<form onSubmit={handleSubmit(onSubmit)} className='h-full'>
				{children}
				<button
					type='submit'
					className='flex items-center justify-center w-36 h-16 rounded-2xl text-2xl tracking-wide shadow-submit-button bg-[#5FB1FF] text-white float-right
				cursor-pointer hover:bg-blue-400 active:shadow-inner active:translate-y-0.5 active:bg-blue-400 transition-all duration-150'
				>
					{isPending ? '저장중' : '확인'}
				</button>
			</form>
		</div>
	)
}

export default InputForm
