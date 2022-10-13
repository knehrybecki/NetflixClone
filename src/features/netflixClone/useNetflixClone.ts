import { useState } from 'react'

export const useNetflixClone = () => {
	const [isOpenStoryCards, setIsOpenStoryCards] = useState<null | number>(null)

	return {
		isOpenStoryCards,
		setIsOpenStoryCards,
	}
}
