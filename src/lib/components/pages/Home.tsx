import { Images } from 'assets'
import { RoutePath } from 'lib/config'
import { useHome } from 'lib/hooks'
import { RootState } from 'lib/reducers/redux'
import { Dictionary, InputName } from 'lib/types'
import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { FormProps, Loader } from 'semantic-ui-react'
import styled from 'styled-components'
import { FAQ } from '../FAQ'
import { StoryCards } from '../StoryCards'

type HeaderProps = {
	T: Dictionary
}

type ChangeProps = {
	changeCSS?: boolean
}

type ButtonProps = {
	isLoading: boolean
}

export const Home: React.FunctionComponent<HeaderProps> = ({ T }) => {
	const { createAccount, login } = useSelector((state: RootState) => state)
	const { email, isLoading } = createAccount
	const { logged } = login
	const { choosePlan } = RoutePath

	const { handleBlur, handleChange, handleSubmit } = useHome()

	return (
		<>
			<Container>
				<BackgroundImage />
				<Content>
					{logged && <TitleFinish>Welcome back!</TitleFinish>}
					<Title>{T.home.Title}</Title>
					<Subtitle>{T.home.subTitle}</Subtitle>
					{logged ? (
						<Link to={choosePlan}>
							<ButtonFinish>Finish Sign up</ButtonFinish>
						</Link>
					) : (
						<>
							<Subtitle changeCSS>{T.home.createAccountTitle}</Subtitle>
							<Form onSubmit={handleSubmit}>
								<Label placeholder={InputName.email} isError={email.isInputError}>
									<Input
										emailValid={email.emailValidCSS}
										onBlur={handleBlur}
										type={InputName.email}
										value={email.emailValue}
										onChange={handleChange}
									/>
									<PlaceLabel isInputValue={email.isInputValue}>
										{T.home.inputEmail.placeholder}
									</PlaceLabel>
									{email.isInputError && (
										<InputError>{email.inputErrorText}</InputError>
									)}
									<Button type='submit' isLoading={isLoading}>
										{' '}
										{isLoading ? (
											<Loader active inline inverted />
										) : (
											T.home.startCreateAccount
										)}
									</Button>
								</Label>
							</Form>
						</>
					)}
				</Content>
			</Container>
			<StoryCards T={T} />
			<FAQ T={T}>
				<Subtitle changeCSS>{T.home.createAccountTitle}</Subtitle>
				<Form onSubmit={handleSubmit}>
					<Label placeholder={InputName.email} isError={email.isInputError}>
						<Input
							emailValid={email.emailValidCSS}
							onBlur={handleBlur}
							type={InputName.email}
							value={email.emailValue}
							onChange={handleChange}
						/>
						<PlaceLabel isInputValue={email.isInputValue}>
							{T.home.inputEmail.placeholder}
						</PlaceLabel>
						{email.isInputError && <InputError>{email.inputErrorText}</InputError>}
						<Button type='submit' isLoading={isLoading}>
							{isLoading ? (
								<Loader active inline inverted />
							) : (
								T.home.startCreateAccount
							)}
						</Button>
					</Label>
				</Form>
			</FAQ>
		</>
	)
}

const Container = styled.div`
	background-image: url(${Images.HomeBackground});
	background-size: cover;
	background-position: center;
	display: flex;
	position: relative;
	top: -25px;
	justify-content: center;
	align-items: center;
	height: 520px;
	text-align: center;

	@media (min-width: ${({ theme }) => theme.media.sm}px) {
		height: 740px;
	}
	@media (min-width: ${({ theme }) => theme.media.md}px) {
		height: 700px;
	}
`

const BackgroundImage = styled.div`
	background-image: linear-gradient(
		0deg,
		rgba(0, 0, 0, 0.8),
		transparent 40%,
		transparent 75%,
		rgba(0, 0, 0, 0.8)
	);
	background: rgba(0, 0, 0, 0.6);
	width: 100%;
	height: 100%;
	position: absolute;
`
const Content = styled.div`
	z-index: 1;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	color: ${({ theme }) => theme.homePage.colors.typography};
	row-gap: 5px;
	margin-top: 90px;

	@media (min-width: ${({ theme }) => theme.media.sm}px) {
		width: 100%;
	}
	@media (min-width: ${({ theme }) => theme.media.md}px) {
		width: 80%;
	}
`
const Title = styled.h1`
	font-size: 1.75rem;

	@media (min-width: ${({ theme }) => theme.media.sm}px) {
		font-size: 3.5rem;
		width: 70%;
	}
	@media (min-width: ${({ theme }) => theme.media.md}px) {
		font-size: 3.5rem;
	}
	@media (min-width: ${({ theme }) => theme.media.lg}px) {
		width: 50%;
		font-size: 3rem;
	}
`
const Subtitle = styled.div<ChangeProps>`
	font-size: 1.125rem;
	width: 90%;
	text-align: center;
	font-weight: 400;
	padding: ${({ changeCSS }) => (changeCSS ? '10px 0' : '0 0')};

	@media (min-width: ${({ theme }) => theme.media.sm}px) {
		font-size: ${({ changeCSS }) => (changeCSS ? '1.5rem' : '1.9rem')};
		width: 55%;
		line-height: 1;
	}
	@media (min-width: ${({ theme }) => theme.media.md}px) {
		width: 90%;
		padding-top: ${({ changeCSS }) => (changeCSS ? '20px' : '0px')};
		font-size: ${({ changeCSS }) => (changeCSS ? '1.5rem' : '1.9rem')};
	}
`

const Input = styled.input<FormProps>`
	width: 90%;
	height: 50px;
	padding-left: 10px;
	padding-top: 10px;
	font-size: 15px;
	border-color: ${({ emailValid }) => (emailValid ? 'green' : 'none')};
	border-width: ${({ emailValid }) => emailValid && '2px'};
	border-style: solid;
	border-radius: 4px;

	@media (min-width: ${({ theme }) => theme.media.sm}px) {
		height: 55px;
	}

	@media (min-width: ${({ theme }) => theme.media.md}px) {
		height: 60px;
	}
	@media (min-width: ${({ theme }) => theme.media.lg}px) {
		height: 65px;
	}

	:focus {
		outline: none;
	}
`
const InputError = styled.div`
	position: absolute;
	bottom: -22px;
	font-weight: 700;
	left: 25px;
	font-size: 12px;
	color: ${({ theme }) => theme.homePage.colors.inputError};

	@media (min-width: ${({ theme }) => theme.media.sm}px) {
		left: 35px;
		font-size: 14px;
	}
`

const Button = styled.button<ButtonProps>`
	background: ${({ theme }) => theme.homePage.colors.buttonSignUp};
	color: ${({ theme }) => theme.homePage.colors.typography};
	border-radius: 2px;
	font-size: ${({ theme }) => theme.homePage.fontSize};

	padding: 10px 25px;
	position: absolute;
	bottom: -65px;
	width: 170px;

	@media (min-width: ${({ theme }) => theme.media.md}px) {
		position: relative;
		display: inline;
		bottom: 0;
		width: 140px;
		padding: 0 5px;
		font-size: 25px;
		width: 250px;
	}

	::after {
		font: var(--fa-font-solid);
		content: '\f105';
		margin-left: 10px;
		font-size: 15px;
		display: ${({ isLoading }) => (isLoading ? 'none' : 'inline')};

		@media (min-width: ${({ theme }) => theme.media.sm}px) {
			font-size: 20px;
		}
	}
	:hover {
		cursor: pointer;
		background-color: #e50914;
	}
`

const PlaceLabel = styled.label<FormProps>`
	position: absolute;
	color: #8c8c8c;
	left: 7%;
	font-size: ${props => (props.isInputValue ? '10px' : '14px')};
	top: 50%;
	transform: ${props =>
		props.isInputValue ? 'translateY(-22px) translateX(0px)' : 'translateY(-50%)'};

	@media (min-width: ${({ theme }) => theme.media.sm}px) {
		left: 40px;
	}

	@media (min-width: ${({ theme }) => theme.media.md}px) {
		left: 20px;
	}
`
const Label = styled.label<FormProps>`
	width: 100%;
	position: relative;
	display: flex;
	justify-content: center;

	@media (min-width: ${({ theme }) => theme.media.sm}px) {
		width: 550px;
		margin-top: 15px;
	}

	@media (min-width: ${({ theme }) => theme.media.md}px) {
		width: 700px;
	}

	@media (min-width: ${({ theme }) => theme.media.lg}px) {
		width: 800px;
	}

	:focus-within {
		${PlaceLabel} {
			transition: all 0.3s ease 0s;
			font-size: 10px;
			transform: translateY(-22px) translateX(0px);

			@media (min-width: ${({ theme }) => theme.media.sm}px) {
				font-size: 10px;
			}
		}
	}

	::after {
		border-bottom: 3px solid #e87c03;
		content: '';
		display: ${({ isError }) => (isError ? 'block' : 'none')};
		position: absolute;
		border-bottom-left-radius: 4px;
		border-bottom-right-radius: 4px;
		width: 90%;
		bottom: 0px;

		@media (min-width: ${({ theme }) => theme.media.md}px) {
			left: 0;
			width: 71%;
		}

		@media (min-width: ${({ theme }) => theme.media.lg}px) {
			width: 74%;
		}
	}
`
const Form = styled.form`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`
const ButtonFinish = styled.button`
	background: ${({ theme }) => theme.homePage.colors.buttonSignUp};
	color: ${({ theme }) => theme.homePage.colors.typography};
	border-radius: 2px;
	font-size: ${({ theme }) => theme.homePage.fontSize};
	margin-top: 30px;
	padding: 10px 25px;
	width: 170px;

	@media (min-width: ${({ theme }) => theme.media.md}px) {
		font-size: 20px;
		width: 220px;
		padding: 15px 25px;
	}

	::after {
		font: var(--fa-font-solid);
		content: '\f105';
		margin-left: 10px;
		font-size: 15px;

		@media (min-width: ${({ theme }) => theme.media.sm}px) {
			font-size: 20px;
		}
	}
	:hover {
		cursor: pointer;
		background-color: #e50914;
	}
`
const TitleFinish = styled.div`
	font-size: 22px;
`
