import { SET_LANGUAGE } from './../reducers/langReducer';
import { useFetch } from 'lib/hooks'
import { RootState } from 'lib/reducers'
import { emailRegex, FormInputValueLength, FormTypes, InputName } from 'lib/types'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export type planSelectedState = {
	basic: boolean
	standard: boolean
	premium: boolean
}

export const useCreateAccount = () => {
	const {
		INPUT_ERROR_EMAIL,
		INPUT_ERROR_PASSWORD,
		INPUT_VALUE_EMAIL,
		INPUT_VALUE_PASSWORD,
		IS_CLICKED_SUBMIT,
	} = FormTypes



	const T = useSelector((state: RootState) => state.language.dictionary)
	const createAccount = useSelector((state: RootState) => state.createAccount)
	const { email, password, isClickedSubmit, selectedPlan } = createAccount

	const dispatch = useDispatch()

	const { registrationFetch } = useFetch()

	const isEmailValid = emailRegex.test(email.emailValue)

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()

		dispatch({ type: IS_CLICKED_SUBMIT })

		if (email.emailValue.length > FormInputValueLength.empty) {
			dispatch({
				type: INPUT_VALUE_EMAIL,
				payload: {
					emailValue: email.emailValue,
					isInputValue: true,
				},
			})
		}

		if (password.passwordValue.length > FormInputValueLength.empty) {
			dispatch({
				type: INPUT_VALUE_PASSWORD,
				payload: {
					passwordValue: password.passwordValue,
					isInputValue: true,
				},
			})
		}
		if (!isEmailValid && email.emailValue.length === FormInputValueLength.empty) {
			dispatch({
				type: INPUT_ERROR_EMAIL,
				payload: {
					inputErrorText: T.signUp.stepForm.inputEmail.error.required,
					isInputValue: false,
					isInputError: true,
				},
			})
		}
		if (!isEmailValid && email.emailValue.length < FormInputValueLength.min) {
			dispatch({
				type: INPUT_ERROR_EMAIL,
				payload: {
					inputErrorText: T.signUp.stepForm.inputEmail.error.shouldBetween,
					isInputError: true,
				},
			})
		}
		if (!isEmailValid && email.emailValue.length > FormInputValueLength.min) {
			dispatch({
				type: INPUT_ERROR_EMAIL,
				payload: {
					inputErrorText: T.signUp.stepForm.inputEmail.error.invalid,
					isInputValue: true,
					isInputError: true,
				},
			})
		}

		if (isEmailValid && password.passwordValue.length > FormInputValueLength.min) {
			registrationFetch()
		}

		if (isEmailValid) {
			dispatch({
				type: INPUT_ERROR_EMAIL,
				payload: {
					isInputValue: true,
					emailValidCSS: true,
				},
			})
		}
		if (!isEmailValid) {
			dispatch({
				type: INPUT_ERROR_EMAIL,
				payload: {
					isInputValue: false,
					emailValidCSS: false,
				},
			})
		}

		if (password.passwordValue.length === FormInputValueLength.empty) {
			dispatch({
				type: INPUT_ERROR_PASSWORD,
				payload: {
					inputErrorText: T.signUp.stepForm.inputPassword.error.required,
					isInputError: true,
				},
			})

			password.passwordValue.length >= FormInputValueLength.empty &&
				password.passwordValue.length < FormInputValueLength.min &&
				dispatch({
					type: INPUT_ERROR_PASSWORD,
					payload: {
						inputErrorText: T.signUp.stepForm.inputPassword.error.shouldBetween,
						isInputError: true,
					},
				})

			password.passwordValue.length > FormInputValueLength.min &&
				dispatch({
					type: INPUT_ERROR_PASSWORD,
					payload: {
						inputErrorText: T.signUp.stepForm.inputPassword.error.emptyText,
						isInputError: false,
						passwordValidCSS: true,
					},
				})
		}

		password.passwordValue.length < FormInputValueLength.min &&
			dispatch({
				type: INPUT_ERROR_PASSWORD,
				payload: {
					passwordValidCSS: false,
				},
			})
	}

	const handleBlur = (event: React.FocusEvent<HTMLInputElement, Element>) => {
		const { value, name } = event.target
		if (name === InputName.email) {
			if (isEmailValid) {
				dispatch({
					type: INPUT_ERROR_EMAIL,
					payload: {
						isInputValue: true,
						emailValidCSS: true,
					},
				})
			}
			if (!isEmailValid) {
				dispatch({
					type: INPUT_ERROR_EMAIL,
					payload: {
						isInputValue: true,
						emailValidCSS: false,
					},
				})
			}

			if (!isEmailValid && value.length === FormInputValueLength.empty) {
				dispatch({
					type: INPUT_ERROR_EMAIL,
					payload: {
						inputErrorText: T.signUp.stepForm.inputEmail.error.required,
						isInputError: true,
						isInputValue: false,
					},
				})
			}

			if (!isEmailValid && value.length > FormInputValueLength.min) {
				dispatch({
					type: INPUT_ERROR_EMAIL,
					payload: {
						inputErrorText: T.signUp.stepForm.inputEmail.error.invalid,
						isInputError: true,
						isInputValue: true,
					},
				})
			}
			if (!isEmailValid && value.length < FormInputValueLength.min) {
				dispatch({
					type: INPUT_ERROR_EMAIL,
					payload: {
						inputErrorText: T.signUp.stepForm.inputEmail.error.shouldBetween,
						isInputError: true,
					},
				})
			}

			if (
				isEmailValid &&
				value.length >= FormInputValueLength.min &&
				value.length < FormInputValueLength.max
			) {
				dispatch({
					type: INPUT_ERROR_EMAIL,
					payload: {
						inputErrorText: T.signUp.stepForm.inputEmail.error.emptyText,
						isInputError: false,
						isInputValue: true,
						emailValidCSS: true,
					},
				})
			}
		}
		if (name === InputName.password) {
			if (value.length === FormInputValueLength.empty) {
				dispatch({
					type: INPUT_ERROR_PASSWORD,
					payload: {
						inputErrorText: T.signUp.stepForm.inputPassword.error.required,
						isInputError: true,
						isInputValue: false,
					},
				})
			}

			if (value.length < FormInputValueLength.min) {
				dispatch({
					type: INPUT_ERROR_PASSWORD,
					payload: {
						inputErrorText: T.signUp.stepForm.inputPassword.error.shouldBetween,
						isInputError: true,
						passwordValidCSS: false,
					},
				})
			}

			if (
				value.length >= FormInputValueLength.min &&
				value.length < FormInputValueLength.max
			) {
				dispatch({
					type: INPUT_ERROR_PASSWORD,
					payload: {
						inputErrorText: T.signUp.stepForm.inputPassword.error.emptyText,
						isInputError: false,
						isInputValue: true,
						passwordValidCSS: true,
					},
				})
			}
		}
	}

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { value, name } = event.target

		if (name === InputName.email) {
			value.length >= FormInputValueLength.empty &&
				dispatch({
					type: INPUT_VALUE_EMAIL,
					payload: {
						emailValue: value,
						isInputValue: true,
					},
				})

			value.length > FormInputValueLength.min &&
				dispatch({
					type: INPUT_ERROR_EMAIL,
					payload: {
						inputErrorText: T.signUp.stepForm.inputEmail.error.emptyText,
						isInputError: false,
						isInputValue: true,
					},
				})
		}
		if (name === InputName.password) {
			value.length >= FormInputValueLength.empty &&
				dispatch({
					type: INPUT_VALUE_PASSWORD,
					payload: {
						passwordValue: value,
						isInputValue: true,
					},
				})

			value.length > FormInputValueLength.min &&
				dispatch({
					type: INPUT_ERROR_PASSWORD,
					payload: {
						inputErrorText: T.signUp.stepForm.inputPassword.error.emptyText,
						isInputError: false,
						isInputValue: true,
					},
				})
		}

		if (isClickedSubmit) {
			if (name === InputName.email) {
				value.length === FormInputValueLength.empty &&
					dispatch({
						type: INPUT_ERROR_EMAIL,
						payload: {
							inputErrorText: T.signUp.stepForm.inputEmail.error.required,
							isInputError: true,
							isInputValue: false,
						},
					})

				value.length < FormInputValueLength.min &&
					dispatch({
						type: INPUT_ERROR_EMAIL,
						payload: {
							inputErrorText: T.signUp.stepForm.inputEmail.error.shouldBetween,
							isInputError: true,
							isInputValue: true,
							emailValidCSS: false,
						},
					})

				isEmailValid &&
					dispatch({
						type: INPUT_ERROR_EMAIL,
						payload: {
							inputErrorText: T.signUp.stepForm.inputEmail.error.emptyText,
							isInputError: false,
							isInputValue: true,
							emailValidCSS: true,
						},
					})
			}

			if (name === InputName.password) {
				value.length === FormInputValueLength.empty &&
					dispatch({
						type: INPUT_ERROR_PASSWORD,
						payload: {
							inputErrorText: T.signUp.stepForm.inputPassword.error.required,
							isInputError: true,
							isInputValue: false,
						},
					})

				value.length > FormInputValueLength.empty &&
					value.length < FormInputValueLength.min &&
					dispatch({
						type: INPUT_ERROR_PASSWORD,
						payload: {
							inputErrorText: T.signUp.stepForm.inputPassword.error.shouldBetween,
							isInputError: true,
							isInputValue: true,
							passwordValidCSS: false,
						},
					})

				value.length > FormInputValueLength.min &&
					dispatch({
						type: INPUT_ERROR_PASSWORD,
						payload: {
							isInputValue: true,
							passwordValidCSS: true,
						},
					})
			}
		}
	}





	return {
		handleChange,
		handleBlur,
		handleSubmit,
		selectedPlan
	}
}
