import { RoutePath } from 'lib/config'
import { useFetch, useLogin } from 'lib/hooks'
import { RootState } from 'lib/reducers'
import {
	createAccoutTypes,
	Dictionary,
	ErrorFromServer,
	FormProps,
	FormTypes,
	InputName,
	InputType,
	StepsNumber,
} from 'lib/types'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Loader } from 'semantic-ui-react'
import styled from 'styled-components'

type RegistrationFormProps = {
	T: Dictionary
}

export const RegistrationPassword: React.FunctionComponent<
	RegistrationFormProps
> = ({ T }) => {
	const { createAccount, login } = useSelector((state: RootState) => state)
	const { steps } = createAccount
	const { fetchError, isLoading, password, email, logged } = login
	const dispatch = useDispatch()

	const { handleBlur, handleChange, handleSubmit } = useLogin()

	const { STEPS } = createAccoutTypes

	const { loginHelp, home, choosePlan } = RoutePath

	const { loginFetch } = useFetch()

	const { INPUT_VALUE_EMAIL } = FormTypes

	useEffect(() => {
		if (logged) {
			location.pathname = home
		}
	}, [logged])

	useEffect(() => {
		dispatch({ type: STEPS, payload: StepsNumber.STEP_ONE })
		dispatch({ type: INPUT_VALUE_EMAIL, payload: createAccount.email.emailValue })
	}, [])

	console.log(fetchError.isError)
	const IncorrectData = () => {
		switch (fetchError.text) {
			case ErrorFromServer.invalidEmail:
				return (
					<>
						{T.login.errorFromDatabase.invalidEmail}{' '}
						{T.login.errorFromDatabase.pleaseTryAgain}{' '}
						<ResetPassword to={loginHelp}>
							{T.login.errorFromDatabase.resetPassword}
						</ResetPassword>
					</>
				)
			case ErrorFromServer.invalidPassword:
				return (
					<>
						{T.login.errorFromDatabase.invalidPassword}{' '}
						{T.login.errorFromDatabase.pleaseTryAgain}{' '}
						<ResetPassword to={loginHelp}>
							{T.login.errorFromDatabase.resetPassword}
						</ResetPassword>
					</>
				)
			case ErrorFromServer.userNotFound:
				return (
					<>
						{T.login.errorFromDatabase.userNotFound}{' '}
						{T.login.errorFromDatabase.pleaseTryAgain}{' '}
						<SignUp to={home}>{T.login.errorFromDatabase.createAccount}</SignUp>
					</>
				)
			case ErrorFromServer.somethngWrong:
				return <>{T.login.errorFromDatabase.somethingWrong}</>

			case ErrorFromServer.toManyRequest:
				return <>{T.login.errorFromDatabase.toManyRequest}</>
			default:
				return <>{T.login.errorFromDatabase.somethingWrong}</>
		}
	}

	return (
		<StepsContainer>
			{fetchError.isError && <MessageError>{IncorrectData()}</MessageError>}
			<StepNumber>
				{T.signUp.step} <b>{steps}</b> {T.signUp.of} <b>{StepsNumber.STEP_THREE}</b>
			</StepNumber>
			<StepTitle>{T.signUp.finishSignUp.stepTitle}</StepTitle>
			<StepSubtitle>{T.signUp.finishSignUp.stepSubTitle}</StepSubtitle>
			<StepSubText>{T.signUp.finishSignUp.stepSubText}</StepSubText>
			<StepForm>
				<EmailBox>
					<Email>{T.signUp.finishSignUp.email}</Email>
					<EmailValue>{email.emailValue}</EmailValue>
				</EmailBox>
				<Label placeholder={InputName.password}>
					<Input
						isClickedSubmit={login.isClickedSubmit}
						isInputError={password.isInputError}
						type={InputType.password}
						name={InputName.password}
						onBlur={handleBlur}
						autoComplete='true'
						value={password.passwordValue}
						maxLength={50}
						minLength={4}
						onChange={handleChange}
					/>
					<PlaceLabel isInputValue={password.isInputValue}>
						{T.login.form.password}
					</PlaceLabel>
				</Label>
				<InputError>{password.inputErrorText}</InputError>
				<ForgotPassword to={loginHelp}>{T.login.form.forgetPassword}</ForgotPassword>
				<Button
					type={InputType.submit}
					onClick={event => {
						handleSubmit(event)
						loginFetch(event, email.emailValue, password.passwordValue)
					}}
				>
					{' '}
					{isLoading ? T.signUp.buttonNext : <Loader active inline inverted />}
				</Button>
			</StepForm>
		</StepsContainer>
	)
}

const StepsContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin: 30px auto 200px auto;
	text-align: left;
	width: 85%;

	@media (min-width: ${({ theme }) => theme.media.sm}px) {
		width: 70%;
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
	word-spacing: 3px;
`

const StepSubtitle = styled.div`
	font-size: ${({ theme }) => theme.createAccount.fontSize.title};
	font-weight: 700;
	line-height: 1.3;
	padding-bottom: 20px;
	word-spacing: 3px;
`
const StepSubText = styled.div`
	font-size: ${({ theme }) => theme.createAccount.fontSize.subTitle};
	padding: 5px 0px;

	@media (min-width: ${({ theme }) => theme.media.sm}px) {
		font-size: 17px;
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
`
const StepForm = styled.form`
	width: 100%;
	display: flex;
	flex-direction: column;
	row-gap: 15px;
	padding-top: 20px;
`

const Input = styled.input<FormProps>`
	height: 60px;
	width: 100%;
	padding-left: 10px;
	border-radius: 5px;
	border: 1px solid #8c8c8c;
	border-width: 1px;
	border-color: ${({ isClickedSubmit, isInputError }) =>
		!isClickedSubmit ? 'none' : isInputError ? 'red' : 'green'};
	border-style: solid;

	:focus {
		outline: none;
	}
`
const PlaceLabel = styled.div<FormProps>`
	position: absolute;
	color: #8c8c8c;
	left: 5%;
	font-size: ${props => (props.isInputValue ? '14px' : '18px')};
	top: 50%;
	transform: ${props =>
		props.isInputValue ? 'translateY(-28px) translateX(-5px)' : 'translateY(-50%)'};
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

const MessageError = styled.div`
	width: 95%;
	color: #fff;
	padding: 10px 20px;
	background-color: #f77a21;
	border-radius: 5px;
	align-self: center;
	font-size: 17px;
`
const EmailBox = styled.div``
const Email = styled.div`
	font-size: 17px;
`

const EmailValue = styled.div``

const ForgotPassword = styled(Link)`
	align-self: left;
	color: #737373;
	font-size: 15px;
	padding-right: 10px;

	@media (min-width: ${({ theme }) => theme.media.sm}px) {
		font-size: 18px;
	}
`

const SignUp = styled(Link)`
	color: #fff;
	font-size: 18px;

	:hover {
		text-decoration: underline;
		color: #fff;
	}

	@media (min-width: ${({ theme }) => theme.media.sm}px) {
		font-size: 18px;
	}
`
const ResetPassword = styled(Link)`
	color: #fff;
	text-decoration: underline;

	:hover {
		color: #fff;
		text-decoration: underline;
	}
`
const InputError = styled.div`
	width: 100%;
	text-align: left;
	color: #ff7613;
	font-size: 12px;
	padding-left: 15px;
	position: relative;
	top: -12px;
`
