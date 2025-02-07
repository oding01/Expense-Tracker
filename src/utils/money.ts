export const addComma = (price: number | undefined): string | undefined => {
	let returnString = price?.toLocaleString('ko-KR')
	return returnString
}
