import { en, en_PL } from 'lib/locale'
import { SET_LANGUAGE } from 'lib/reducers'
import { store } from 'lib/reducers/redux'
import { LanguageLabel, LanguagesTranslation } from 'lib/types'

import styled from 'styled-components'

type HeaderChangeLanguageProps = {
	children: React.ReactNode
}

export const HeaderChangeLanguages: React.FunctionComponent<
	HeaderChangeLanguageProps
> = ({ children }) => {
	const selectedLanguage = store.getState().language.name

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
			<SelectContainer>
				<Select
					value={selectedLanguage}
					onChange={event => {
						if (event.target.value === LanguagesTranslation.English) {
							store.dispatch(setLanguage(LanguagesTranslation.English))
							localStorage.setItem(
								'language',
								JSON.stringify({
									dictionary: en,
									name: LanguagesTranslation.English,
								})
							)
							location.href = '/en/'
							window.history.pushState(null, '', '/en/')
						}

						if (event.target.value === LanguagesTranslation.Polish) {
							store.dispatch(setLanguage(LanguagesTranslation.Polish))
							localStorage.setItem(
								'language',
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
					<Option value={LanguagesTranslation.English}>
						{LanguageLabel.English}
					</Option>
					<Option value={LanguagesTranslation.Polish}>{LanguageLabel.Polish}</Option>
				</Select>
			</SelectContainer>
			{children}
		</Container>
	)
}

const Container = styled.div`
	display: flex;
	margin-right: 15px;
	column-gap: 12px;


	@media (min-width: ${({ theme }) => theme.media.sm}px) {
		column-gap: 30px;
		margin: 10px 25px 0 0;
	}
`

const SelectContainer = styled.div`
	position: relative;

	::before {
		font: var(--fa-font-solid);
		content: '\f0ac';
		color: #fff;
		font-size: 12px;
		position: absolute;
		transform: translate(50%, 60%);

		@media (min-width: ${({ theme }) => theme.media.sm}px) {
			transform: translate(55%, 80%);
		}
		@media (min-width: ${({ theme }) => theme.media.md}px) {
			transform: translate(60%, 110%);
		}
	}

	::after {
		font: var(--fa-font-solid);
		content: '\f0d7';
		color: #fff;
		position: absolute;
		padding-left: 5px;
		font-size: 17px;
		transform: translate(-25px, 30%);

		@media (min-width: ${({ theme }) => theme.media.sm}px) {
			transform: translate(-22px, 60%);
		}
	}
`

const Select = styled.select`
	appearance: none;
	background: transparent;
	font-size: ${({ theme }) => theme.homePage.fontSize};
	color: ${({ theme }) => theme.homePage.colors.typography};
	padding-left: 25px;
	width: 105px;
	height: 29px;
	border: 1px solid #fff;

	@media (min-width: ${({ theme }) => theme.media.sm}px) {
		height: 35px;
	}
`
const Option = styled.option`
	background-color: #808080;
	color: ${({ theme }) => theme.homePage.colors.typography};
	border-bottom: none;
`
