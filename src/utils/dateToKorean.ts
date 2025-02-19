export const dateToKorean = (date: Date): string =>
	date.toLocaleString('sv').slice(0, 10)
