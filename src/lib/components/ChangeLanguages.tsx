import { en, en_PL } from 'lib/locale'
import { SET_LANGUAGE } from 'lib/reducers'
import { store } from 'lib/reducers/redux'
import { LanguageLabel, LanguagesTranslation, LocalStorage } from 'lib/types'
import { useDispatch } from 'react-redux'

import styled from 'styled-components'

type ChangeLanguagesProps = {
	registration?: boolean
}

type SelectorProps = {
	registration?: boolean
}

export const ChangeLanguages: React.FunctionComponent<ChangeLanguagesProps> = ({
	registration,
}) => {
	const selectedLanguage = store.getState().language.name
	const dispatch = useDispatch()

	const setLanguage = (language: LanguagesTranslation) => {
		return {
			type: SET_LANGUAGE,
			payload: {
				dictionary: language === LanguagesTranslation.English ? en : en_PL,
				name:
					language === LanguagesTranslation.English
						? LanguagesTranslation.English
						: LanguagesTranslation.Polish,
			},
		}
	}

	return (
		<Container>
			<SelectContainer registration={registration}>
				<Select
					registration={registration}
					value={selectedLanguage}
					onChange={event => {
						if (event.target.value === LanguagesTranslation.English) {
							dispatch(setLanguage(LanguagesTranslation.English))
							localStorage.setItem(
								LocalStorage.Language,
								JSON.stringify({
									dictionary: en,
									name: LanguagesTranslation.English,
								})
							)
							location.href = '/en/'
							window.history.pushState(null, '', '/en/')
						}

						if (event.target.value === LanguagesTranslation.Polish) {
							dispatch(setLanguage(LanguagesTranslation.Polish))
							localStorage.setItem(
								LocalStorage.Language,
								JSON.stringify({
									dictionary: en_PL,
									name: LanguagesTranslation.Polish,
								})
							)
							location.href = '/en_PL/'
							window.history.pushState(null, '', '/en_PL/')
						}
					}}
				>
					<Option
						registration={registration}
						value={LanguagesTranslation.English}
					>
						{LanguageLabel.English}
					</Option>
					<Option
						registration={registration}
						value={LanguagesTranslation.Polish}
					>
						{LanguageLabel.Polish}
					</Option>
				</Select>
			</SelectContainer>
		</Container>
	)
}

const Container = styled.div`
	display: flex;
	margin-right: 15px;
	column-gap: 10px;

	@media (min-width: ${({ theme }) => theme.media.md}px) {
		column-gap: 30px;
	}
`

const SelectContainer = styled.div<SelectorProps>`
	position: relative;

	::before {
		font: var(--fa-font-solid);
		content: '\f0ac';
		color: ${({ registration }) => (registration ? '#757575;' : '#000')};
		font-size: 15px;
		position: absolute;
		transform: translate(100%, 110%);

		@media (min-width: ${({ theme }) => theme.media.sm}px) {
			transform: translate(100%, 110%);
		}
		@media (min-width: ${({ theme }) => theme.media.md}px) {
			transform: translate(100%, 110%);
		}
	}

	::after {
		font: var(--fa-font-solid);
		content: '\f0d7';
		color: ${({ registration }) => (registration ? '#757575;' : '#000')};
		position: absolute;
		font-size: 17px;
		transform: translate(-25px, 90%);

		@media (min-width: ${({ theme }) => theme.media.sm}px) {
			transform: translate(-20px, 90%);
		}
	}
`
const Option = styled.option<SelectorProps>`
	background-color: ${({ registration }) => (registration ? '#000' : '#fff')};
	color: ${({ registration }) => (registration ? '#757575' : '#000')};
	border-bottom: none;
	height: 80px;
	margin-right: 20px;
	font-size: 20px;
	width: 100px;
`

const Select = styled.select<SelectorProps>`
	appearance: none;
	background: transparent;
	font-size: ${({ theme }) => theme.homePage.fontSize};
	color: ${({ registration }) => (registration ? '#757575;' : '#000')};
	padding-left: 40px;
	width: 140px;
	height: 50px;
	border: 1px solid #333;
	font-size: 20px;

	:focus {
		background-color: #090f0939;
	}

	@media (min-width: ${({ theme }) => theme.media.sm}px) {
	}
`
