import { RoutePath } from 'lib/config'
import { useCreateAccount } from 'lib/hooks/useCreateAccount'
import { RootState } from 'lib/reducers'
import {
	AnimationRegister,
	createAccoutTypes,
	Dictionary,
	ErrorFromServer,
	FormProps,
	InputName,
	InputType,
	StepsNumber,
} from 'lib/types'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Transition } from 'semantic-ui-react'
import styled from 'styled-components'

type RegistrationFormProps = {
	T: Dictionary
}

export const RegistrationForm: React.FunctionComponent<RegistrationFormProps> = ({
	T,
}) => {
	const createAccount = useSelector((state: RootState) => state.createAccount)
	const { animation, email, password, steps, fetchError, isClickedSubmit } =
		createAccount
	const login = useSelector((state: RootState) => state.login)
	const { logged } = login

	const dispatch = useDispatch()

	const { handleBlur, handleChange, handleSubmit } = useCreateAccount()

	const { ANIMATION, STEPS } = createAccoutTypes
	const { choosePlan } = RoutePath

	useEffect(() => {
		dispatch({ type: ANIMATION, payload: true })
		dispatch({ type: STEPS, payload: StepsNumber.STEP_ONE })
	}, [])

	const IncorrectData = () => {
		switch (fetchError.text) {
			case ErrorFromServer.emailAlleradyInUse:
				return <>{T.signUp.stepForm.errorFromDatabase.emailAllreadyinUse}</>
			default:
				return <>{T.login.errorFromDatabase.somethingWrong}</>
		}
	}

	const createAccountForm = () => {
		if (steps === StepsNumber.STEP_ONE) {
			return (
				<Transition
					transitionOnMount
					visible={steps === StepsNumber.STEP_ONE}
					animation={
						animation ? AnimationRegister.flyLeft : AnimationRegister.flyRight
					}
					duration={AnimationRegister.druation}
				>
					<StepsContainer>
						{fetchError.isError && <MessageError>{IncorrectData()}</MessageError>}
						<StepNumber>
							{T.signUp.step} <b>{steps}</b> {T.signUp.of}{' '}
							<b>{StepsNumber.STEP_THREE}</b>
						</StepNumber>
						<StepTitle>{T.signUp.stepForm.stepTitle}</StepTitle>
						<StepSubText>{T.signUp.stepForm.stepSubText}</StepSubText>
						<StepSubText>{T.signUp.stepForm.stepSubText2}</StepSubText>
						<StepForm onSubmit={handleSubmit}>
							<Label placeholder={InputName.email}>
								<StepFormInput
									emailValid={email.emailValidCSS}
									isClickedSubmit={isClickedSubmit}
									type={InputType.email}
									name={InputName.email}
									onBlur={handleBlur}
									maxLength={50}
									minLength={5}
									value={email.emailValue}
									onChange={handleChange}
								/>
								<PlaceLabel isInputValue={email.isInputValue}>
									{T.login.form.email}
								</PlaceLabel>
								<InputError>{email.inputErrorText}</InputError>
							</Label>
							<Label placeholder={InputName.password}>
								<StepFormInput
									passwordValid={password.passwordValidCSS}
									isClickedSubmit={isClickedSubmit}
									autoComplete='true'
									type={InputType.password}
									name={InputName.password}
									maxLength={50}
									minLength={5}
									onBlur={handleBlur}
									onChange={handleChange}
								/>
								<PlaceLabel isInputValue={password.isInputValue}>
									{T.login.form.password}
								</PlaceLabel>
								<InputError>{password.inputErrorText}</InputError>
							</Label>
							<StepCheckBox>
								<StepCheckBoxText>
									<StepCheckBoxInput type={InputType.checkBox} />
									{T.signUp.stepForm.checkBox}
								</StepCheckBoxText>
							</StepCheckBox>
							<Button type={InputType.submit}>{T.signUp.buttonNext}</Button>
						</StepForm>
					</StepsContainer>
				</Transition>
			)
		}
	}

	const accountCreated = () => {
		setTimeout(() => {
			dispatch({ type: STEPS, payload: StepsNumber.STEP_ONE })
		}, 500)

		if (steps === StepsNumber.STEP_ONE) {
			return (
				<StepsContainer>
					<StepNumber>
						{T.signUp.step} <b>{steps}</b> {T.signUp.of}{' '}
						<b>{StepsNumber.STEP_THREE}</b>
					</StepNumber>
					<StepTitle>{T.signUp.accountCreated.stepTitle}</StepTitle>
					<StepSubText>{T.signUp.accountCreated.stepSubText}</StepSubText>
					<Email>{email.emailValue}</Email>
					<Button
						onClick={() => {
							location.pathname = choosePlan
						}}
					>
						{T.signUp.buttonNext}
					</Button>
				</StepsContainer>
			)
		}
	}

	return <>{logged ? accountCreated() : createAccountForm()}</>
}

const StepsContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 30px auto 200px auto;
	padding: 30px;

	@media (min-width: ${({ theme }) => theme.media.sm}px) {
		width: 70%;
	}
	@media (min-width: ${({ theme }) => theme.media.md}px) {
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
const StepForm = styled.form`
	width: 100%;
	display: flex;
	flex-direction: column;
	row-gap: 25px;
	padding-top: 20px;
`

const StepFormInput = styled.input<FormProps>`
	height: 60px;
	width: 100%;
	padding-left: 10px;
	border-width: 1px;
	border-radius: 2px;
	border-color: ${({ isClickedSubmit, emailValid, passwordValid }) =>
		emailValid === true || passwordValid === true
			? 'green'
			: isClickedSubmit
			? 'red'
			: 'black'};
	border-style: solid;
	:focus {
		outline: none;
	}
`
const PlaceLabel = styled.div<FormProps>`
	position: absolute;
	color: #000;
	left: 4%;
	font-size: ${props => (props.isInputValue ? '14px' : '18px')};
	top: 50%;
	transform: ${props =>
		props.isInputValue
			? 'translateY(-28px) translateX(-5px)'
			: 'translateY(-50%) translateX(-5px)'};
`

const Label = styled.label`
	display: flex;
	flex-direction: column;
	position: relative;
	align-items: center;
	width: 100%;

	:focus-within {
		${PlaceLabel} {
			transition: all 0.3s ease 0s;
			font-size: 14px;
			transform: translateY(-28px) translateX(-5px);
		}
	}
`
const StepCheckBox = styled.div``
const StepCheckBoxInput = styled.input`
	width: 15px;
	height: 15px;
	margin-right: 5px;
`
const StepCheckBoxText = styled.div``
const InputError = styled.div`
	width: 100%;
	text-align: left;
	color: #ff7613;
	font-size: 12px;
	padding-left: 15px;
	position: absolute;
	bottom: -22px;
`

const MessageError = styled.div`
	width: 95%;
	color: #fff;
	padding: 10px 20px;
	background-color: #f77a21;
	border-radius: 5px;
	align-self: center;
	font-size: 17px;
`
const Email = styled.div`
	font-size: 20px;
	font-weight: 700;
	padding: 20px 0px;
`
