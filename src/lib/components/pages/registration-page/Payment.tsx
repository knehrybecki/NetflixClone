import { RoutePath } from 'lib/config'
import { RootState } from 'lib/reducers'
import {
	AnimationRegister,
	createAccoutTypes,
	Dictionary,
	StepsNumber,
} from 'lib/types'
import { useEffect, useState } from 'react'
import { AiOutlineCheck } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Transition } from 'semantic-ui-react'
import styled from 'styled-components'

type PaymentProps = {
	T: Dictionary
}

enum PlanName {
	basic = 'basic',
	standard = 'standard',
	premium = 'premium',
}

export const Payment: React.FunctionComponent<PaymentProps> = ({ T }) => {
	const createAccount = useSelector((state: RootState) => state.createAccount)
	const { animation, steps, selectedPlan } = createAccount

	const dispatch = useDispatch()

	const { ANIMATION, STEPS } = createAccoutTypes

	const { movies } = RoutePath

	const [paySuccess, setPaySuccess] = useState(false)
	const [time, setTime] = useState(5)

	useEffect(() => {
		dispatch({ type: ANIMATION, payload: true })
		dispatch({ type: STEPS, payload: StepsNumber.STEP_THREE })
	}, [])

	useEffect(() => {
		if (paySuccess) {
			setTimeout(() => {
				setTime(time - 1)
			}, 1000)

			if (time === 0) {
				location.pathname = movies
			}
		}
	})

	const PaymentCheckText = () => {
		if (selectedPlan === PlanName.basic) {
			return T.signUp.payment.checkTextSecond.basic
		}
		if (selectedPlan === PlanName.standard) {
			return T.signUp.payment.checkTextSecond.standard
		}
		if (selectedPlan === PlanName.premium) {
			return T.signUp.payment.checkTextSecond.premium
		}
	}

	const PaymentSteps = () => {
		return (
			<Transition
				transitionOnMount
				visible={animation && steps === StepsNumber.STEP_THREE}
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
					<StepTitle>{T.signUp.payment.stepTitle}</StepTitle>
					<StepSubText>{T.signUp.payment.stepSubText}</StepSubText>
					<CheckBody>
						<CheckGroup>
							<CheckMark>
								{' '}
								<CheckIcon />
								<CheckText> {T.signUp.payment.checkTextFirst}</CheckText>
							</CheckMark>
							<CheckMark>
								<CheckIcon />
								<CheckText>{PaymentCheckText()}</CheckText>
							</CheckMark>
							<CheckMark>
								<CheckIcon />
								<CheckText>{T.signUp.payment.checkTextThird}</CheckText>
							</CheckMark>
							<CheckMark>
								<CheckIcon />
								<CheckText>{T.signUp.payment.checkTextFourth}</CheckText>
							</CheckMark>
						</CheckGroup>
					</CheckBody>
					<CardPay>
						<CardCredit onClick={() => setPaySuccess(true)}>
							{T.signUp.payment.cardCredit} <ImgVisa />
						</CardCredit>
						<CardPayPal onClick={() => setPaySuccess(true)}>
							{T.signUp.payment.cardPaypal}
							<ImgPayPal />
						</CardPayPal>
						<CardGift onClick={() => setPaySuccess(true)}>
							{T.signUp.payment.cardGift} <ImgGift />
						</CardGift>
						<CardFree onClick={() => setPaySuccess(true)}>
							{T.signUp.payment.cardFree}
						</CardFree>
					</CardPay>
				</StepsContainer>
			</Transition>
		)
	}

	const PaymentSucces = () => {
		return (
			<Transition
				transitionOnMount
				visible={steps === StepsNumber.STEP_THREE}
				animation={
					animation ? AnimationRegister.flyLeft : AnimationRegister.flyRight
				}
				duration={AnimationRegister.druation}
			>
				<StepsContainer>
					<PaySuccess>{T.signUp.payment.success.title}</PaySuccess>
					<Link to={movies}>
						<Button>
							{T.signUp.payment.success.button} ({time})
						</Button>
					</Link>
				</StepsContainer>
			</Transition>
		)
	}

	return <>{paySuccess ? PaymentSucces() : PaymentSteps()}</>
}

const StepsContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	text-align: left;
	margin: 120px auto 170px auto;
	width: 90%;

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
	background: url('https://assets.nflxext.com/ffe/siteui/acquisition/simplicity/Lock.png')
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
const StepSubText = styled.div`
	font-size: ${({ theme }) => theme.createAccount.fontSize.subTitle};
	text-align: left;
	padding-bottom: 20px;
	width: 100%;

	@media (min-width: ${({ theme }) => theme.media.sm}px) {
	}
`

const CheckBody = styled.div`
	padding-bottom: 20px;
`
const CheckGroup = styled.ul`
	list-style: none;
	display: flex;
	flex-direction: column;
`
const CheckMark = styled.li`
	display: flex;
`
const CheckIcon = styled(AiOutlineCheck)`
	display: inline-block;
	width: 17px;
	height: 17px;
	color: #ff0000;
	margin-right: 10px;
`
const CheckText = styled.span`
	font-size: 12px;
	font-weight: 400;
	line-height: 1.3;
	padding-bottom: 10px;
	word-spacing: 3px;
	letter-spacing: 0.5px;
`
const CardPay = styled.div`
	display: flex;
	flex-direction: column;
	row-gap: 5px;
`
const CardCredit = styled.div`
	display: flex;
	align-items: center;
	padding-left: 10px;
	width: 100%;
	border: 2px solid #ccc;
	border-radius: 5px;
	height: 70px;
	cursor: pointer;
`
const CardPayPal = styled.div`
	display: flex;
	align-items: center;
	padding-left: 10px;
	width: 100%;
	border: 2px solid #ccc;
	border-radius: 5px;
	height: 70px;
	cursor: pointer;
`
const CardGift = styled.div`
	display: flex;
	align-items: center;
	padding-left: 10px;
	width: 100%;
	border: 2px solid #ccc;
	border-radius: 5px;
	height: 70px;
	cursor: pointer;
`
const CardFree = styled.div`
	display: flex;
	align-items: center;
	font-weight: 700;
	padding-left: 10px;
	width: 100%;
	border: 2px solid #ccc;
	border-radius: 5px;
	height: 70px;
	cursor: pointer;
`
const ImgVisa = styled.img`
	background-image: url('https://assets.nflxext.com/ffe/siteui/acquisition/payment/svg/visa-v3.svg');
	background-repeat: no-repeat;
	width: 40px;
	height: 25px;
	margin-left: 10px;
`

const ImgPayPal = styled.img`
	background-image: url('https://assets.nflxext.com/ffe/siteui/acquisition/payment/svg/paypal.svg');
	background-repeat: no-repeat;
	width: 40px;
	height: 25px;
	margin-left: 10px;
`

const ImgGift = styled.img`
	background-image: url('https://assets.nflxext.com/ffe/siteui/acquisition/payment/svg/netflix-gift-card-v2.svg');
	background-repeat: no-repeat;
	width: 40px;
	height: 25px;
	margin-left: 10px;
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
const PaySuccess = styled.div`
	text-align: center;
	font-size: 30px;
	font-weight: 700;
	padding: 20px;
	color: #0bcc38;
`
