import { RootState } from 'lib/reducers'
import { emailRegex, FormInputValueLength, FormTypes } from 'lib/types'
import { useDispatch, useSelector } from 'react-redux'
import { useFetch } from './useFetch'

export const useHome = () => {
	const T = useSelector((state: RootState) => state.language.dictionary)
	const createAccount = useSelector((state: RootState) => state.createAccount)
	const { email } = createAccount

	const dispatch = useDispatch()

	const { checkEmail } = useFetch()

	const isEmailValid = emailRegex.test(email.emailValue)

	const { INPUT_ERROR_EMAIL, INPUT_VALUE_EMAIL } = FormTypes

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()

		if (!isEmailValid && email.emailValue.length === FormInputValueLength.empty) {
			dispatch({
				type: INPUT_ERROR_EMAIL,
				payload: {
					inputErrorText: T.home.inputEmail.error.required,
					isInputError: true,
				},
			})
		}

		if (isEmailValid) {
			checkEmail()
		}
	}
	const handleBlur = () => {
		if (!isEmailValid && email.emailValue.length === FormInputValueLength.empty) {
			dispatch({
				type: INPUT_ERROR_EMAIL,
				payload: {
					inputErrorText: T.home.inputEmail.error.required,
					isInputError: true,
					isInputValue: false,
					emailValidCSS: false,
				},
			})
		}

		if (!isEmailValid && email.emailValue.length > FormInputValueLength.min) {
			dispatch({
				type: INPUT_ERROR_EMAIL,
				payload: {
					inputErrorText: T.home.inputEmail.error.invalid,
					isInputError: true,
					isInputValue: true,
					emailValidCSS: false,
				},
			})
		}

		if (
			isEmailValid &&
			email.emailValue.length > FormInputValueLength.min &&
			email.emailValue.length < FormInputValueLength.max
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

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = event.target

		value.length >= FormInputValueLength.empty &&
			dispatch({
				type: INPUT_VALUE_EMAIL,
				payload: {
					emailValue: value,
					isInputValue: true,
				},
			})

		if (email.isInputError) {
			value.length === FormInputValueLength.empty &&
				dispatch({
					type: INPUT_ERROR_EMAIL,
					payload: {
						inputErrorText: T.home.inputEmail.error.required,
						isInputError: true,
						isInputValue: false,
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
	}

  return {
    handleBlur,
    handleChange,
    handleSubmit,
  }
}
