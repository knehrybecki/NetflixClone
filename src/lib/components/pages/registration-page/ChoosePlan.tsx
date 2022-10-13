import { RoutePath } from 'lib/config'
import { RootState } from 'lib/reducers'
import {
	AnimationRegister,
	createAccoutTypes,
	Dictionary,
	StepsNumber,
} from 'lib/types'
import { AiOutlineCheck } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Transition } from 'semantic-ui-react'
import styled from 'styled-components'

type ChoosePlanProps = {
	T: Dictionary
}
export const ChoosePlan: React.FunctionComponent<ChoosePlanProps> = ({ T }) => {
	const createAccount = useSelector((state: RootState) => state.createAccount)
	const { animation, steps } = createAccount

	const dispatch = useDispatch()

	const { ANIMATION, STEPS } = createAccoutTypes

	const { planForm } = RoutePath

	dispatch({ type: ANIMATION, payload: true })
	dispatch({ type: STEPS, payload: StepsNumber.STEP_TWO })

	const ChoosePlanSteps = () => {
		if (steps === StepsNumber.STEP_TWO) {
			return (
				<Transition
					transitionOnMount
					visible={animation && steps === StepsNumber.STEP_TWO}
					animation={
						animation ? AnimationRegister.flyLeft : AnimationRegister.flyRight
					}
					duration={AnimationRegister.druation}
				>
					<StepsContainer>
						<StepLogo />
						<StepNumber>
							{T.signUp.step} <b>{steps}</b> {T.signUp.of}{' '}
							<b>{StepsNumber.STEP_THREE}</b>
						</StepNumber>
						<StepTitle>{T.signUp.choosePlan.stepTitle}</StepTitle>
						<CheckBody>
							<CheckGroup>
								<CheckMark>
									{' '}
									<CheckIcon />
									<CheckText> {T.signUp.choosePlan.checkMarkFirst}</CheckText>
								</CheckMark>
								<CheckMark>
									<CheckIcon />
									<CheckText>{T.signUp.choosePlan.checkMarkSecond}</CheckText>
								</CheckMark>
								<CheckMark>
									<CheckIcon />
									<CheckText>{T.signUp.choosePlan.checkMarkThird}</CheckText>
								</CheckMark>
							</CheckGroup>
						</CheckBody>
						<Link to={planForm}>
							<Button onClick={() => {}}>{T.signUp.buttonNext}</Button>
						</Link>
					</StepsContainer>
				</Transition>
			)
		}
	}

	return <>{ChoosePlanSteps()}</>
}

const StepsContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	text-align: left;
	margin: 120px auto 170px auto;
	width: 75%;

	@media (min-width: ${({ theme }) => theme.media.sm}px) {
		width: 40%;
	}
	@media (min-width: ${({ theme }) => theme.media.md}px) {
		width: 30%;
	}
	@media (min-width: ${({ theme }) => theme.media.lg}px) {
		width: 20%;
	}
`
const StepLogo = styled.div`
	background: url('https://assets.nflxext.com/ffe/siteui/acquisition/simplicity/Checkmark.png')
		no-repeat 50% 50%;
	width: 50px;
	height: 50px;
	background-size: 50px;
	margin-bottom: 15px;
	@media (min-width: ${({ theme }) => theme.media.sm}px) {
		width: auto;
	}
`
const StepNumber = styled.div`
	font-size: ${({ theme }) => theme.createAccount.fontSize.stepNumber};
	padding-top: 10px;

	@media (min-width: ${({ theme }) => theme.media.sm}px) {
		text-align: center;
	}
`
const StepTitle = styled.div`
	font-size: ${({ theme }) => theme.createAccount.fontSize.title};
	font-weight: 700;
	line-height: 1.3;
	padding-bottom: 20px;
	word-spacing: 3px;

	@media (min-width: ${({ theme }) => theme.media.sm}px) {
		text-align: center;
	}
`
const Button = styled.button`
	margin-top: 20px;
	height: 65px;
	width: 100%;
	border-radius: 5px;
	font-size: ${({ theme }) => theme.createAccount.fontSize.button};
	background: ${({ theme }) => theme.createAccount.colors.buttonBackground};
	color: ${({ theme }) => theme.createAccount.colors.buttonTypography};
`
const CheckBody = styled.div``
const CheckGroup = styled.ul`
	list-style: none;
	display: flex;
	flex-direction: column;
	row-gap: 15px;
`
const CheckMark = styled.li`
	display: flex;
`
const CheckIcon = styled(AiOutlineCheck)`
	display: inline-block;
	width: 26px;
	height: 26px;
	color: #ff0000;
	margin-right: 10px;
`
const CheckText = styled.span`
	font-size: ${({ theme }) => theme.createAccount.fontSize.subTitle};
	font-weight: 400;
	line-height: 1.3;
	padding-bottom: 10px;
	word-spacing: 3px;
`
