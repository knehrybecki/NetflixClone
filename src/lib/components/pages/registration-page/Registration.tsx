import { RoutePath } from 'lib/config'
import { RootState } from 'lib/reducers'
import {
	AnimationRegister,
	createAccoutTypes,
	Dictionary,
	FormProps,
	StepsNumber,
} from 'lib/types'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Transition } from 'semantic-ui-react'
import styled from 'styled-components'

type CreateAccountProps = {
	T: Dictionary
}

export const Registration: React.FunctionComponent<CreateAccountProps> = ({ T }) => {
	const imageDevicesSrc =
		'https://assets.nflxext.com/ffe/siteui/acquisition/simplicity/Devices.png'

	const createAccount = useSelector((state: RootState) => state.createAccount)

	const dispatch = useDispatch()

	const { steps } = createAccount

	const { ANIMATION } = createAccoutTypes

	const { registrationForm } = RoutePath

	useEffect(() => {
		dispatch({ type: ANIMATION, payload: false })
	}, [])
	
	return (
		<>
			<CreateAccountContainer>
				<Transition
					transitionOnMount
					animation={AnimationRegister.fade}
					duration={AnimationRegister.druation}
				>
					<ImgDevices src={imageDevicesSrc} />
				</Transition>
				<Transition
					transitionOnMount
					animation={AnimationRegister.fade}
					duration={AnimationRegister.druation}
				>
					<BaseContainer>
						<StepNumber>
							{T.signUp.step} <b>{steps}</b> {T.signUp.of}{' '}
							<b>{StepsNumber.STEP_THREE}</b>
						</StepNumber>
						<StepTitle>{T.signUp.startsToSignUp.stepTitle}</StepTitle>
						<StepSubText>{T.signUp.startsToSignUp.stepSubText}</StepSubText>
						<Link to={registrationForm}>
							<Button>{T.signUp.buttonNext}</Button>
						</Link>
					</BaseContainer>
				</Transition>
			</CreateAccountContainer>
		</>
	)
}

const CreateAccountContainer = styled.div`
	background-color: ${({ theme }) => theme.createAccount.colors.background};
	color: ${({ theme }) => theme.createAccount.colors.typography};
	display: flex;
	justify-content: center;
	flex-direction: column;
	width: 400px;
	padding: 20px;
	margin: 0 auto;

	@media (min-width: ${({ theme }) => theme.media.sm}px) {
		width: 600px;
	}
`
const ImgDevices = styled.img`
	width: 80%;
	align-self: flex-start;
	padding-bottom: 30px;
	margin-top: 80px;

	@media (min-width: ${({ theme }) => theme.media.sm}px) {
		align-self: center;
		width: 50%;
	}
`
const BaseContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-bottom: 500px;

	@media (min-width: ${({ theme }) => theme.media.sm}px) {
		display: flex;
		flex-direction: column;
		text-align: center;
		margin: 0px auto;
		height: 780px;
		width: 50%;
	}
`

const StepNumber = styled.div`
	font-size: ${({ theme }) => theme.createAccount.fontSize.stepNumber};
	padding-top: 10px;
`
const StepTitle = styled.div`
	font-size: ${({ theme }) => theme.createAccount.fontSize.title};
	font-weight: 700;
	line-height: 1.3;
	padding-bottom: 20px;
	word-spacing: 3px;
`
const StepSubText = styled.div`
	font-size: ${({ theme }) => theme.createAccount.fontSize.subTitle};
	width: 80%;
	padding: 5px 0px;

	@media (min-width: ${({ theme }) => theme.media.sm}px) {
		font-size: 17px;
		width: 100%;
	}
`
const Button = styled.button`
	margin-top: 10px;
	height: 60px;
	width: 100%;
	border-radius: 5px;
	font-size: ${({ theme }) => theme.createAccount.fontSize.button};
	background: ${({ theme }) => theme.createAccount.colors.buttonBackground};
	color: ${({ theme }) => theme.createAccount.colors.buttonTypography};
	@media (min-width: ${({ theme }) => theme.media.sm}px) {
	}
`
const PlaceLabel = styled.div<FormProps>`
	position: absolute;
	color: #000;
	left: 5%;
	font-size: ${props => (props.isInputValue ? '14px' : '18px')};
	top: 50%;
	transform: ${props =>
		props.isInputValue ? 'translateY(-28px) translateX(-5px)' : 'translateY(-50%)'};
`
