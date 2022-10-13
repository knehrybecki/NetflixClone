import { RoutePath } from 'lib/config'
import { planSelectedState } from 'lib/hooks/useCreateAccount'
import { RootState } from 'lib/reducers'
import {
	AnimationRegister,
	createAccoutTypes,
	Dictionary,
	InputType,
	StepsNumber,
} from 'lib/types'
import { useEffect, useState } from 'react'
import { AiOutlineCheck } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Transition } from 'semantic-ui-react'
import styled from 'styled-components'

type PlanFormProps = {
	T: Dictionary
}
type choosePlanProps = {
	choosedPlan: boolean
}

export const PlanForm: React.FunctionComponent<PlanFormProps> = ({ T }) => {
	const createAccount = useSelector((state: RootState) => state.createAccount)
	const { animation, steps } = createAccount

	const dispatch = useDispatch()

	const { ANIMATION, STEPS, SELECTED_PLAN } = createAccoutTypes

	const { payment } = RoutePath

	useEffect(() => {
		dispatch({ type: ANIMATION, payload: true })
		dispatch({ type: STEPS, payload: StepsNumber.STEP_TWO })
	}, [])
	
	const monthlyPrice = {
		basic: '29 zł',
		standard: '43 zł',
		premium: '60 zł',
	}

	const resolutions = {
		basic: '480p',
		standard: '1080p',
		premium: '4K+HDR',
	}
	const [choosePlan, setChoosePlan] = useState<planSelectedState>({
		basic: false,
		standard: true,
		premium: false,
	})

	const setSelectedPlan = () => {
		const plan = Object.entries(choosePlan).filter(item => item[1] === true)
		const [selectedPlan] = plan
		const [value] = selectedPlan
		dispatch({ type: SELECTED_PLAN, payload: value })
	}

	return (
		<Transition
			transitionOnMount
			visible={animation && steps === StepsNumber.STEP_TWO}
			animation={animation ? AnimationRegister.flyLeft : AnimationRegister.flyRight}
			duration={AnimationRegister.druation}
		>
			<StepsContainer>
				<StepNumber>
					{T.signUp.step} <b>{steps}</b> {T.signUp.of}{' '}
					<b>{StepsNumber.STEP_THREE}</b>
				</StepNumber>
				<StepTitle>{T.signUp.planForm.stepTitle}</StepTitle>
				<CheckBody>
					<CheckGroup>
						<CheckMark>
							{' '}
							<CheckIcon />
							<CheckText>{T.signUp.planForm.checkTextFirst}</CheckText>
						</CheckMark>
						<CheckMark>
							<CheckIcon />
							<CheckText>{T.signUp.planForm.checkTextSecond}</CheckText>
						</CheckMark>
						<CheckMark>
							<CheckIcon />
							<CheckText>{T.signUp.planForm.checkTextThird}</CheckText>
						</CheckMark>
					</CheckGroup>
				</CheckBody>
				<PlanFormContainer>
					<PlanFormSelector>
						<PlanChoice>
							<PlanChoiceLabel choosedPlan={choosePlan.basic}>
								<PlanChoiceONE
									type={InputType.radio}
									name='Plan'
									onChange={() => setChoosePlan({ basic: true, standard: false, premium: false })}
								/>
								<PlanChoiceTitle choosedPlan={choosePlan.basic}>
									{T.signUp.planForm.plan.basic}
								</PlanChoiceTitle>
							</PlanChoiceLabel>
							<PlanChoiceLabel choosedPlan={choosePlan.standard}>
								<PlanChoiceTWO
									type={InputType.radio}
									name='Plan'
									onChange={() => setChoosePlan({ basic: false, standard: true, premium: false })}
								/>
								<PlanChoiceTitle choosedPlan={choosePlan.standard}>
									{T.signUp.planForm.plan.standard}
								</PlanChoiceTitle>
							</PlanChoiceLabel>
							<PlanChoiceLabel choosedPlan={choosePlan.premium}>
								<PlanChoiceTHREE
									type={InputType.radio}
									name='Plan'
									onChange={() => setChoosePlan({ basic: false, standard: false, premium: true })}
								/>
								<PlanChoiceTitle choosedPlan={choosePlan.premium}>
									{T.signUp.planForm.plan.premium}
								</PlanChoiceTitle>
							</PlanChoiceLabel>
						</PlanChoice>
						<PlanChoiceContainer>
							<PlanCostTitle>{T.signUp.planForm.plan.monthlyPrice}</PlanCostTitle>
							<PlanCostBox>
								<PlanCostBasic choosedPlan={choosePlan.basic}>
									{monthlyPrice.basic}
								</PlanCostBasic>
								<PlanCostStandard choosedPlan={choosePlan.standard}>
									{monthlyPrice.standard}
								</PlanCostStandard>
								<PlanCostPremium choosedPlan={choosePlan.premium}>
									{monthlyPrice.premium}
								</PlanCostPremium>
							</PlanCostBox>
						</PlanChoiceContainer>
						<PlanChoiceContainer>
							<PlanVideoQualityTitle>
								{T.signUp.planForm.plan.videoQuality.title}
							</PlanVideoQualityTitle>
							<PlanVideoQualityBox>
								<PlanVideoQualityBasic choosedPlan={choosePlan.basic}>
									{T.signUp.planForm.plan.videoQuality.basic}
								</PlanVideoQualityBasic>
								<PlanVideoQualityStandard choosedPlan={choosePlan.standard}>
									{T.signUp.planForm.plan.videoQuality.standard}
								</PlanVideoQualityStandard>
								<PlanVideoQualityPremium choosedPlan={choosePlan.premium}>
									{T.signUp.planForm.plan.videoQuality.premium}
								</PlanVideoQualityPremium>
							</PlanVideoQualityBox>
						</PlanChoiceContainer>
						<PlanChoiceContainer>
							<PlanResolutionsTitle>
								{T.signUp.planForm.plan.resolutions}
							</PlanResolutionsTitle>
							<PlanResolutionsBox>
								<PlanResolutionBasic choosedPlan={choosePlan.basic}>
									{resolutions.basic}
								</PlanResolutionBasic>
								<PlanResolutionStandard choosedPlan={choosePlan.standard}>
									{resolutions.standard}
								</PlanResolutionStandard>
								<PlanResolutionPremium choosedPlan={choosePlan.premium}>
									{resolutions.premium}
								</PlanResolutionPremium>
							</PlanResolutionsBox>
						</PlanChoiceContainer>
						<PlanChoiceContainer>
							<PlanDevicesTitle>
								{T.signUp.planForm.plan.planDevices}
							</PlanDevicesTitle>
							<PlanDevicesBox>
								<PlanDevicesBasic>
									<PlanCheckIcon choosedPlan={choosePlan.basic} />
								</PlanDevicesBasic>
								<PlanDevicesStandard>
									<PlanCheckIcon choosedPlan={choosePlan.standard} />
								</PlanDevicesStandard>
								<PlanDevicesPremium>
									<PlanCheckIcon choosedPlan={choosePlan.premium} />
								</PlanDevicesPremium>
							</PlanDevicesBox>
						</PlanChoiceContainer>
						<PlanDescription>
							{T.signUp.planForm.plan.planDescription}
						</PlanDescription>
						<PlanLegal>{T.signUp.planForm.plan.planLegal}</PlanLegal>
					</PlanFormSelector>
				</PlanFormContainer>
				<Link to={payment}>
					<Button
						onClick={() => {
							dispatch({ type: ANIMATION, payload: false })
							setSelectedPlan()
						}}
					>
						{T.signUp.buttonNext}
					</Button>
				</Link>
			</StepsContainer>
		</Transition>
	)
}

const StepsContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	text-align: left;
	margin: 50px auto 170px auto;
	width: 90%;
`
const StepNumber = styled.div`
	font-size: ${({ theme }) => theme.createAccount.fontSize.stepNumber};
	padding-top: 10px;

	@media (min-width: ${({ theme }) => theme.media.sm}px) {
		text-align: left;
	}
`
const StepTitle = styled.div`
	font-size: ${({ theme }) => theme.createAccount.fontSize.title};
	font-weight: 700;
	line-height: 1.3;
	padding-bottom: 20px;
	word-spacing: 3px;

	@media (min-width: ${({ theme }) => theme.media.sm}px) {
		text-align: left;
	}
`
const Button = styled.button`
	margin-top: 30px;
	height: 65px;
	width: 100%;
	border-radius: 5px;
	font-size: ${({ theme }) => theme.createAccount.fontSize.button};
	background: ${({ theme }) => theme.createAccount.colors.buttonBackground};
	color: ${({ theme }) => theme.createAccount.colors.buttonTypography};

	@media (min-width: ${({ theme }) => theme.media.sm}px) {
		width: 60%;
		display: flex;
		justify-content: center;
		align-items: center;
		margin: 0 auto;
	}
	@media (min-width: ${({ theme }) => theme.media.md}px) {
		width: 50%;
	}
	@media (min-width: ${({ theme }) => theme.media.lg}px) {
		width: 40%;
	}
`
const CheckBody = styled.div``
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
const PlanFormContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	text-align: left;
	margin: 20px auto 20px auto;
	width: 100%;
`
const PlanFormSelector = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-end;
`
const PlanChoice = styled.div`
	display: flex;
	justify-content: center;
	width: 100%;
	height: 75px;
	column-gap: 10px;

	@media (min-width: ${({ theme }) => theme.media.sm}px) {
		width: 49%;
		column-gap: 20px;
	}
	@media (min-width: ${({ theme }) => theme.media.md}px) {
		height: 100px;
	}
`
const PlanChoiceLabel = styled.label<choosePlanProps>`
	background-color: #e50914;
	opacity: ${({ choosedPlan }) => (choosedPlan ? '1' : '0.6')};
	width: 33.33333%;
	display: flex;
	align-items: center;
	justify-content: center;
`
const PlanChoiceONE = styled.input`
	opacity: 0;
`
const PlanChoiceTWO = styled.input`
	opacity: 0;
`
const PlanChoiceTHREE = styled.input`
	opacity: 0;
`
const PlanChoiceTitle = styled.span<choosePlanProps>`
	font-size: 16px;
	font-weight: 700;
	line-height: 1.3;
	word-spacing: 3px;
	color: #fff;
	text-align: center;
	position: absolute;

	::after {
		border: 0 solid transparent;
		content: '';
		display: block;
		border-top-color: #e50914;
		opacity: ${({ choosedPlan }) => (choosedPlan ? '1' : '0')};
		left: 50%;
		position: absolute;
		top: 47px;
		transform: translateX(-50%);
		border-width: 15px 15px 0;
	}

	@media (min-width: ${({ theme }) => theme.media.sm}px) {
		::after {
			border-width: 10px 10px 0;
		}
	}
	@media (min-width: ${({ theme }) => theme.media.md}px) {
		::after {
			top: 60px;
			border-width: 12px 12px 0;
		}
	}
`

const PlanChoiceContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	width: 100%;
	margin-top: 20px;

	:nth-child(5) {
		margin-bottom: 30px;
	}

	@media (min-width: ${({ theme }) => theme.media.sm}px) {
		flex-direction: row;
		align-items: center;
		border-bottom: 1px solid #ccc;

		:nth-child(5) {
			margin-bottom: 30px;
			border-bottom: none;
		}
	}
`
const PlanCostTitle = styled.div`
	font-size: 13px;
	padding-bottom: 10px;

	@media (min-width: ${({ theme }) => theme.media.sm}px) {
		width: 50%;
	}
`
const PlanCostBox = styled.div`
	display: flex;
	width: 100%;
	padding: 10px 0;
	text-align: center;
	border-bottom: 1px solid #ccc;
	font-weight: 700;

	@media (min-width: ${({ theme }) => theme.media.sm}px) {
		border-bottom: none;
		width: 50%;
	}
`
const PlanCostBasic = styled.div<choosePlanProps>`
	color: ${({ choosedPlan }) => (choosedPlan ? '#e50914' : '#737373')};
	width: 33.33333%;
`
const PlanCostStandard = styled.div<choosePlanProps>`
	color: ${({ choosedPlan }) => (choosedPlan ? '#e50914' : '#737373')};
	width: 33.33333%;
`
const PlanCostPremium = styled.div<choosePlanProps>`
	color: ${({ choosedPlan }) => (choosedPlan ? '#e50914' : '#737373')};
	width: 33.33333%;
`

const PlanVideoQualityTitle = styled.div`
	font-size: 13px;
	padding-bottom: 10px;

	@media (min-width: ${({ theme }) => theme.media.sm}px) {
		width: 50%;
	}
`
const PlanVideoQualityBox = styled.div`
	display: flex;
	width: 100%;
	padding: 10px 0;
	text-align: center;
	border-bottom: 1px solid #ccc;
	font-weight: 700;

	@media (min-width: ${({ theme }) => theme.media.sm}px) {
		border-bottom: none;
		width: 50%;
	}
`
const PlanVideoQualityBasic = styled.div<choosePlanProps>`
	color: ${({ choosedPlan }) => (choosedPlan ? '#e50914' : '#737373')};
	width: 33.33333%;
`
const PlanVideoQualityStandard = styled.div<choosePlanProps>`
	color: ${({ choosedPlan }) => (choosedPlan ? '#e50914' : '#737373')};
	width: 33.33333%;
`
const PlanVideoQualityPremium = styled.div<choosePlanProps>`
	color: ${({ choosedPlan }) => (choosedPlan ? '#e50914' : '#737373')};
	width: 33.33333%;
`

const PlanResolutionsTitle = styled.div`
	font-size: 13px;
	padding-bottom: 10px;

	@media (min-width: ${({ theme }) => theme.media.sm}px) {
		width: 50%;
	}
`
const PlanResolutionsBox = styled.div`
	display: flex;
	width: 100%;
	padding: 10px 0;
	border-bottom: 1px solid #ccc;
	font-weight: 700;
	text-align: center;

	@media (min-width: ${({ theme }) => theme.media.sm}px) {
		border-bottom: none;
		width: 50%;
	}
`
const PlanResolutionBasic = styled.div<choosePlanProps>`
	color: ${({ choosedPlan }) => (choosedPlan ? '#e50914' : '#737373')};
	width: 33.33333%;
`
const PlanResolutionStandard = styled.div<choosePlanProps>`
	color: ${({ choosedPlan }) => (choosedPlan ? '#e50914' : '#737373')};
	width: 33.33333%;
`
const PlanResolutionPremium = styled.div<choosePlanProps>`
	color: ${({ choosedPlan }) => (choosedPlan ? '#e50914' : '#737373')};
	width: 33.33333%;
`
const PlanDevicesBox = styled.div`
	display: flex;
	width: 100%;
	padding: 10px 0;
	text-align: center;
	font-weight: 700;

	@media (min-width: ${({ theme }) => theme.media.sm}px) {
		border-bottom: none;
		width: 50%;
	}
`
const PlanDevicesTitle = styled.div`
	font-size: 13px;
	padding-bottom: 10px;

	@media (min-width: ${({ theme }) => theme.media.sm}px) {
		width: 50%;
	}
`
const PlanDevicesBasic = styled.div`
	width: 33.33333%;
`
const PlanDevicesStandard = styled.div`
	width: 33.33333%;
`
const PlanDevicesPremium = styled.div`
	width: 33.33333%;
`
const PlanCheckIcon = styled(AiOutlineCheck)<choosePlanProps>`
	color: ${({ choosedPlan }) => (choosedPlan ? '#e50914' : '#737373')};
	height: 35px;
	width: 30px;
`
const PlanDescription = styled.div`
	font-size: 13px;
`
const PlanLegal = styled.div`
	font-size: 13px;
	padding-top: 30px;
`
