import { RoutePath } from 'lib/config'
import { useFetch, useLogin } from 'lib/hooks'
import { RootState } from 'lib/reducers'
import {
	Dictionary,
	ErrorFromServer,
	FormProps,
	InputName,
	InputType,
} from 'lib/types'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import 'semantic-ui-css/semantic.min.css'
import { Loader } from 'semantic-ui-react'
import styled from 'styled-components'

type LoginProps = {
	T: Dictionary
}

export const Login: React.FunctionComponent<LoginProps> = ({ T }) => {
	const { loginHelp, home } = RoutePath

	const login = useSelector((state: RootState) => state.login)
	const { email, fetchError, isLoading, password } = login

	const { handleChange, handleSubmit, handleBlur } = useLogin()
	const { loginFetch } = useFetch()

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
		<>
			<LoginContainer>
				<Container>
					<Title>{T.login.title}</Title>
					{fetchError.isError && <MessageError>{IncorrectData()}</MessageError>}
					<Form>
						<EmailControls>
							<Label isError={email.isInputError} placeholder={InputName.email}>
								<Input
									type={InputType.text}
									name={InputType.email}
									value={email.emailValue}
									onBlur={handleBlur}
									maxLength={50}
									minLength={5}
									onChange={handleChange}
								/>
								<PlaceLabel isInputValue={email.isInputValue}>
									{T.login.form.email}
								</PlaceLabel>
							</Label>
							<InputError>{email.inputErrorText}</InputError>
						</EmailControls>
						<PasswordControls>
							<Label
								isError={password.isInputError}
								placeholder={InputName.password}
							>
								<Input
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
						</PasswordControls>
						<Button
							type={InputType.submit}
							onClick={event => {
								handleSubmit(event)
								loginFetch(event, email.emailValue, password.passwordValue)
							}}
						>
							{' '}
							{isLoading ? (
								T.login.form.buttonSignIn
							) : (
								<Loader active inline inverted />
							)}
						</Button>
					</Form>
					<LoginFormHelper>
						<RememberMe>
							<CheckBox type={InputType.checkBox} />
							{T.login.form.rememberMe}
						</RememberMe>
						<ForgotPassword to={loginHelp}>
							{T.login.form.forgetPassword}
						</ForgotPassword>
					</LoginFormHelper>
					<CreateAccount>
						{T.login.form.createAccount}{' '}
						<SignUp to={home}>{T.login.form.buttonSignUp}</SignUp>
					</CreateAccount>
				</Container>
			</LoginContainer>
		</>
	)
}

const LoginContainer = styled.div`
	background-color: #000;
	display: flex;
	justify-content: center;
	padding: 10px;
	border-bottom: 1px solid #737373;

	@media (min-width: ${({ theme }) => theme.media.sm}px) {
		border-bottom: none;
		background: rgba(0, 0, 0, 0.65);
		padding: 120px 0px;
	}
`
const Container = styled.div`
	color: #fff;
	display: flex;
	flex-direction: column;
	justify-content: center;
	row-gap: 10px;
	width: 100%;
	max-height: 50%;
	padding: 10px;

	@media (min-width: ${({ theme }) => theme.media.sm}px) {
		max-width: 60%;
		padding: 60px;
		background: rgba(0, 0, 0, 0.6);
	}
	@media (min-width: ${({ theme }) => theme.media.md}px) {
		max-width: 50%;
	}
	@media (min-width: ${({ theme }) => theme.media.lg}px) {
		max-width: 650px;
	}
`

const Title = styled.h1`
	font-size: 35px;
	margin-bottom: 20px;
	margin-left: 20px;

	@media (min-width: ${({ theme }) => theme.media.sm}px) {
		font-size: 40px;
	}
`

const Form = styled.form`
	display: flex;
	flex-direction: column;
	align-self: center;
	row-gap: 40px;
	width: 100%;
	height: 240px;
`

const PlaceLabel = styled.label<FormProps>`
	position: absolute;
	color: #8c8c8c;
	left: 5%;
	font-size: ${props => (props.isInputValue ? '12px' : '14px')};
	top: 50%;
	transform: ${props =>
		props.isInputValue ? 'translateY(-22px) translateX(0px)' : 'translateY(-50%)'};
`

const EmailControls = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	position: relative;
`
const PasswordControls = styled.div`
	position: relative;
`

const Label = styled.div<FormProps>`
	display: flex;
	flex-direction: column;
	position: relative;
	align-items: center;
	width: 100%;

	:focus-within {
		${PlaceLabel} {
			transition: all 0.3s ease 0s;
			font-size: 12px;
			transform: translateY(-23px) translateX(0px);
		}
	}

	::after {
		border-bottom: 3px solid #e87c03;
		content: '';
		display: ${props => (props.isError ? 'block' : 'none')};
		position: absolute;
		border-bottom-left-radius: 4px;
		border-bottom-right-radius: 4px;
		width: 95%;
		left: 10px;
		bottom: 0px;
	}
`

const Input = styled.input`
	height: 50px;
	border-radius: 5px;
	width: 95%;
	outline: none;
	padding-left: 10px;
	align-self: center;
	padding-top: 10px;
	background: #333;
	color: #fff;
	border: 0;

	@media (min-width: ${({ theme }) => theme.media.sm}px) {
		height: 60px;
	}
`
const InputError = styled.div`
	width: 100%;
	text-align: left;
	color: #ff7613;
	font-size: 12px;
	padding-left: 15px;
	position: absolute;
	bottom: -22px;
`

const Button = styled.button`
	background-color: #e50914;
	border: none;
	border-radius: 5px;
	color: #fff;
	font-size: 18px;
	font-weight: bold;
	height: 50px;
	width: 95%;
	align-self: center;

	@media (min-width: ${({ theme }) => theme.media.sm}px) {
		font-size: 1.3rem;
		height: 60px;
	}
`
const ForgotPassword = styled(Link)`
	align-self: center;
	color: #737373;
	font-size: 15px;
	padding-right: 10px;

	@media (min-width: ${({ theme }) => theme.media.sm}px) {
		font-size: 18px;
	}
`
const CreateAccount = styled.div`
	color: #737373;
	font-size: 0.8rem;
	font-size: 18px;
	padding-top: 20px;
	padding-bottom: 50px;
	padding-left: 10px;

	@media (min-width: ${({ theme }) => theme.media.sm}px) {
		font-size: 22px;
		padding-top: 50px;
		padding-bottom: 100px;
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
const RememberMe = styled.div`
	padding-left: 15px;
`
const LoginFormHelper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
`
const CheckBox = styled.input`
	margin-right: 10px;
	width: 15px;
	height: 15px;
	justify-content: center;
	accent-color: #e6e6e6;
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
const ResetPassword = styled(Link)`
	color: #fff;
	text-decoration: underline;

	:hover {
		color: #fff;
		text-decoration: underline;
	}
`
