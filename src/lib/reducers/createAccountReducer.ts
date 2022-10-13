import { createAction, createReducer } from '@reduxjs/toolkit'
import { StepsNumber } from 'lib/types'

const localStorageEmail = localStorage.getItem('email')

type CreateAccountState = {
	isLoading: boolean
	steps: StepsNumber
	activateStep: boolean
	animation: boolean
	email: {
		emailValue: string
		isInputValue: boolean
		inputErrorText: string
		isInputError: boolean
		emailValidCSS: boolean
	}
	password: {
		passwordValue: string
		isInputValue: boolean
		inputErrorText: string
		isInputError: boolean
		passwordValidCSS: boolean
	}
	fetchError: {
		text: string
		isError: boolean
	}
	isClickedSubmit: boolean
	selectedPlan: string
}

export const INITAL_STATE_CREATE_ACCOUNT: CreateAccountState = {
	isLoading: false,
	steps: StepsNumber.STEP_ONE,
	activateStep: false,
	animation: false,
	email: {
		emailValue: localStorageEmail ? localStorageEmail : '',
		isInputValue: localStorageEmail ? true : false,
		inputErrorText: '',
		isInputError: false,
		emailValidCSS: false,
	},
	password: {
		passwordValue: '',
		isInputValue: false,
		inputErrorText: '',
		isInputError: false,
		passwordValidCSS: false,
	},
	fetchError: {
		text: '',
		isError: false,
	},
	isClickedSubmit: false,
	selectedPlan: 'standard',
}

type inputError = {
	inputErrorText: string
	isInputError: boolean
	isInputValue: boolean
	emailValidCSS: boolean
	passwordValidCSS: boolean
}
type emailValue = {
	emailValue: string
	isInputValue: boolean
}
type passwordValue = {
	passwordValue: string
	isInputValue: boolean
}

const activateStep = createAction<boolean>('ACTIVATE_STEP')
const animation = createAction<boolean>('ANIMATION')
const steps = createAction<StepsNumber>('STEPS')
const fetchStart = createAction<boolean>('FETCH_START')
const fetchSuccess = createAction<Boolean>('FETCH_SUCCESS')
const fetchEnd = createAction<boolean>('FETCH_END')
const isClickedSubmit = createAction<boolean>('IS_CLICKED_SUBMIT')
const inputValueEmail = createAction<emailValue>('INPUT_VALUE_EMAIL')
const inputValuePassword = createAction<passwordValue>('INPUT_VALUE_PASSWORD')
const inputErrorEmail = createAction<inputError>('INPUT_ERROR_EMAIL')
const inputErrorPassword = createAction<inputError>('INPUT_ERROR_PASSWORD')
const fetchErrorServer = createAction<string>('FETCH_ERROR_SERVER')
const selectedPlan =createAction<string>('SELECTED_PLAN')

export const createAccountReducer = createReducer(
	INITAL_STATE_CREATE_ACCOUNT,
	builder => {
		builder
			.addCase(activateStep, (state, action) => {
				state.activateStep = action.payload
			})
			.addCase(animation, (state, action) => {
				state.animation = action.payload
			})
			.addCase(steps, (state, action) => {
				state.steps = action.payload
			})
			.addCase(fetchStart, state => {
				state.isLoading = true
			})
			.addCase(fetchSuccess, state => {
				state.isLoading = false
			})
			.addCase(fetchEnd, state => {
				state.isLoading = false
			})
			.addCase(fetchErrorServer, (state, action) => {
				state.fetchError.text = action.payload
				state.fetchError.isError = true
			})
			.addCase(inputErrorEmail, (state, action) => {
				state.email.inputErrorText = action.payload.inputErrorText
				state.email.isInputError = action.payload.isInputError
				state.email.isInputValue = action.payload.isInputValue
				state.email.emailValidCSS = action.payload.emailValidCSS
			})
			.addCase(inputErrorPassword, (state, action) => {
				state.password.inputErrorText = action.payload.inputErrorText
				state.password.isInputError = action.payload.isInputError
				state.password.isInputValue = action.payload.isInputValue
				state.password.passwordValidCSS = action.payload.passwordValidCSS
			})
			.addCase(inputValueEmail, (state, action) => {
				state.email.emailValue = action.payload.emailValue
				state.email.isInputValue = action.payload.isInputValue
			})
			.addCase(inputValuePassword, (state, action) => {
				state.password.passwordValue = action.payload.passwordValue
				state.email.isInputValue = action.payload.isInputValue
			})
			.addCase(isClickedSubmit, (state, action) => {
				state.isClickedSubmit = true
			})
			.addCase(selectedPlan, (state, action) => {
				state.selectedPlan = action.payload
			})
	}
)

// export const createAccountReducer = (
// 	state = INITAL_STATE_CREATE_ACCOUNT,
// 	action
// ) => {

// 	switch (action.type) {
// 		case 'SET_ACTIVATE_STEP':
// 			return {
// 				...state,
// 				activeStep: true,
// 			}
// 		case 'SET_ANIMATION':
// 			return {
// 				...state,
// 				animation: action.payload,
// 			}
// 		case 'SET_EMAIL':
// 			return {
// 				...state,
// 				email: {
// 					...state.email,
// 					emailValue: action.payload,
// 					isInputValue: true,
// 					buttonClicked: false,
// 				},
// 			}
// 		case 'SET_PASSWORD':
// 			return {
// 				...state,
// 				password: {
// 					...state.password,
// 					passwordValue: action.payload,
// 					isInputValue: true,
// 					buttonClicked: false,
// 				},
// 			}
// 		case 'SET_STEPS':
// 			return {
// 				...state,
// 				steps: action.payload,
// 			}
// 		case 'FETCH_START':
// 			return {
// 				...state,
// 				isLoading: false,
// 			}
// 		case 'FETCH_SUCCESS':
// 			return {
// 				...state,
// 				steps: StepsNumber.STEP_TWO,
// 			}
// 		case 'FETCH_ERROR_SERVER':
// 			return {
// 				...state,
// 				isLoading: false,
// 			}
// 		case 'INPUT_ERROR_EMAIL':
// 			return {
// 				...state,
// 				email: {
// 					...state.email,
// 					inputErrorText: action.payload,
// 					isInputError: true,
// 				},
// 			}
// 		case 'INPUT_ERROR_PASSWORD':
// 			return {
// 				...state,
// 				password: {
// 					...state.password,
// 					inputErrorText: action.payload,
// 					isInputError: true,
// 				},
// 			}
// 		case 'INPUT_ERROR_EMAIL_CLEAR':
// 			return {
// 				...state,
// 				email: {
// 					...state.email,
// 					inputErrorText: '',
// 					isInputError: false,
// 				},
// 			}
// 		case 'INPUT_ERROR_PASSWORD_CLEAR':
// 			return {
// 				...state,
// 				password: {
// 					...state.password,
// 					inputErrorText: '',
// 					isInputError: false,
// 				},
// 			}

// 		case 'FETCH_END':
// 			return {
// 				...state,
// 				isLoading: true,
// 			}

// 		default:
// 			return state
// 	}
// }
