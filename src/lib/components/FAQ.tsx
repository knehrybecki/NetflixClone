import { AiOutlineClose, AiOutlinePlus } from 'react-icons/ai'

import { useNetflixClone } from 'features/netflixClone'
import { Dictionary } from 'lib/types'
import styled from 'styled-components'

type FAQProps = {
	T: Dictionary
	children: React.ReactNode
}

type FAQStateProps = {
	open: boolean
}

export const FAQ: React.FunctionComponent<FAQProps> = ({ T, children }) => {
	const { isOpenStoryCards, setIsOpenStoryCards } = useNetflixClone()

	return (
		<FAQContainer>
			<Title>{T.home.FAQ.title}</Title>
			<Card>
				<Questions>
					{T.home.FAQ.questions.map(({ answer, question }, index: number) => {
						return (
							<FaqList key={index}>
								<FaqItem>
									<ItemBox>
										<Button
											onClick={event => {
												setIsOpenStoryCards(isOpen => {
													return isOpen === index ? null : index
												})
											}}
										>
											<QuestionsText>{question}</QuestionsText>
											{isOpenStoryCards === index ? (
												<IconClose />
											) : (
												<IconOpen />
											)}
										</Button>
									</ItemBox>
									<AnswerContainer open={isOpenStoryCards === index}>
										<FaqAnswer>{answer}</FaqAnswer>
									</AnswerContainer>
								</FaqItem>
							</FaqList>
						)
					})}
				</Questions>
			</Card>
			{children}
		</FAQContainer>
	)
}

const FAQContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: #000;
	color: #fff;
	padding-top: 50px;
	padding-bottom: 100px;
	border-bottom: 10px solid #222;
`

const Title = styled.h1`
	font-size: 26px;

	@media (min-width: ${({ theme }) => theme.media.sm}px) {
		font-size: 40px;
		font-weight: 700;
	}

	@media (min-width: ${({ theme }) => theme.media.md}px) {
		font-size: 50px;
	}
`
const Card = styled.div`
	width: 100%;

	@media (min-width: ${({ theme }) => theme.media.xs}px) {
		width: 77%;
	}
	
	@media (min-width: ${({ theme }) => theme.media.md}px) {
		width: 65%;
		margin-bottom: 50px;
	}
	@media (min-width: ${({ theme }) => theme.media.lg}px) {
		width: 55%;
	}
`
const Questions = styled.div``
const FaqList = styled.ul``
const FaqItem = styled.li`
	font-size: 18px;
	margin: 10px 0;
`

const ItemBox = styled.div`
	background-color: #303030;
	margin-bottom: 2px;
	position: relative;
	padding: 15px;

	@media (min-width: ${({ theme }) => theme.media.sm}px) {
		padding: 25px 10px;
	}
`
const Button = styled.button`
	text-align: left;
	padding-left: 20px;
	position: relative;
	width: 100%;
`

const QuestionsText = styled.div`
	max-width: 85%;

	@media (min-width: ${({ theme }) => theme.media.sm}px) {
		font-size: 25px;
	}
`
const IconOpen = styled(AiOutlinePlus)`
	height: 25px;
	width: 25px;
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
	right: 20px;
`
const IconClose = styled(AiOutlineClose)`
	height: 25px;
	width: 25px;
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
	right: 20px;
`
const AnswerContainer = styled.div<FAQStateProps>`
	max-height: ${props => (props.open ? '1200px' : '0')};
	transition: max-height 0.25s cubic-bezier(0.5, 0, 0.1, 1);
	overflow: ${props => (props.open ? 'visible' : 'hidden')};
	background-color: #303030;
`
const FaqAnswer = styled.span`
	display: inline-block;
	padding: 20px;
	white-space: pre-line;
`
