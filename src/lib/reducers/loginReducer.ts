import { createAction, createReducer } from '@reduxjs/toolkit'

export const INITIAL_STATE_LOGIN = {
	isLoading: true,
	email: {
		emailValue: '',
		isInputValue: false,
		inputErrorText: '',
		isInputError: false,
	},
	password: {
		passwordValue: '',
		isInputValue: false,
		inputErrorText: '',
		isInputError: false,
	},
	fetchError: {
		text: '',
		isError: false,
	},
	isClickedSubmit: false,
	logged: false,
}

type inputError = {
	inputErrorText: string
	isInputError: boolean
}

const fetchStart = createAction<boolean>('FETCH_START')
const fetchSuccess = createAction<boolean>('FETCH_SUCCESS')
const fetchErrorServer = createAction<string>('FETCH_ERROR_SERVER')
const fetchEnd = createAction<boolean>('FETCH_END')
const isClickedSubmit = createAction<boolean>('IS_CLICKED_SUBMIT')
const inputErrorEmail = createAction<inputError>('INPUT_ERROR_EMAIL')
const inputErrorPassword = createAction<inputError>('INPUT_ERROR_PASSWORD')
const inputValueEmail = createAction<string>('INPUT_VALUE_EMAIL')
const inputValuePassword = createAction<string>('INPUT_VALUE_PASSWORD')
const logged = createAction<boolean>('LOGGED')

export const loginReducer = createReducer(INITIAL_STATE_LOGIN, builder => {
	builder.addCase(fetchStart, state => {
		state.isLoading = false
	})
	builder.addCase(fetchSuccess, state => {
		state.logged = true
	})
	builder.addCase(fetchErrorServer, (state, action) => {
		state.fetchError.text = action.payload
		state.fetchError.isError = true
	})
	builder.addCase(isClickedSubmit, (state, action) => {
		state.isClickedSubmit = true
	})
	builder.addCase(inputValueEmail, (state, action) => {
		state.email.emailValue = action.payload
		state.email.isInputValue = true
	})
	builder.addCase(inputValuePassword, (state, action) => {
		state.password.passwordValue = action.payload
		state.password.isInputValue = true
	})
	builder.addCase(inputErrorEmail, (state, action) => {
		state.email.inputErrorText = action.payload.inputErrorText
		state.email.isInputError = action.payload.isInputError
	})
	builder.addCase(inputErrorPassword, (state, action) => {
		state.password.inputErrorText = action.payload.inputErrorText
		state.password.isInputError = action.payload.isInputError
	})
	builder.addCase(fetchEnd, state => {
		state.isLoading = true
	})
	builder.addCase(logged, (state, action) => {
		state.logged = action.payload
	})
})
