import { RootState } from 'lib/reducers'
import { FormInputValueLength, FormTypes, InputName } from 'lib/types'
import { useDispatch, useSelector } from 'react-redux'

export type EnumInputError = {
	emptyText: string
	enterEmail: string
	vaildEmail: string
	enterPassword: string
}

export const useLogin = () => {
	const T = useSelector((state: RootState) => state.language.dictionary)
	const login = useSelector((state: RootState) => state.login)

	const dispatch = useDispatch()

	const { email, password, isClickedSubmit } = login

	const InputError = {
		emptyText: '',
		enterEmail: T.login.inputError.enterEmail,
		validEmail: T.login.inputError.validEmail,
		enterPassword: T.login.inputError.enterPassword,
	}

	const {
		INPUT_ERROR_EMAIL,
		INPUT_ERROR_PASSWORD,
		INPUT_VALUE_EMAIL,
		INPUT_VALUE_PASSWORD,
		IS_CLICKED_SUBMIT,
	} = FormTypes

	const handleBlur = (event: React.FocusEvent<HTMLInputElement, Element>) => {
		const { value, name } = event.target

		if (name === InputName.email) {
			value.length === FormInputValueLength.empty &&
				dispatch({
					type: INPUT_ERROR_EMAIL,
					payload: {
						inputErrorText: InputError.enterEmail,
						isInputError: true,
					},
				})

			value.length < FormInputValueLength.min &&
				dispatch({
					type: INPUT_ERROR_EMAIL,
					payload: {
						inputErrorText: InputError.validEmail,
						isInputError: true,
					},
				})

			value.length > FormInputValueLength.min &&
				dispatch({
					type: INPUT_ERROR_EMAIL,
					payload: {
						inputErrorText: InputError.emptyText,
						isInputError: false,
					},
				})
		}
		if (name === InputName.password) {
			value.length >= FormInputValueLength.empty &&
				value.length < FormInputValueLength.min &&
				dispatch({
					type: INPUT_ERROR_PASSWORD,
					payload: {
						inputErrorText: InputError.enterPassword,
						isInputError: true,
					},
				})
		}
	}

	const handleSubmit = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		event.preventDefault()

		dispatch({ type: IS_CLICKED_SUBMIT })

		email.emailValue.length === FormInputValueLength.empty &&
			dispatch({
				type: INPUT_ERROR_EMAIL,
				payload: {
					inputErrorText: InputError.enterEmail,
					isInputError: true,
				},
			})

		email.emailValue.length < FormInputValueLength.min &&
			dispatch({
				type: INPUT_ERROR_EMAIL,
				payload: {
					inputErrorText: InputError.validEmail,
					isInputError: true,
				},
			})

		email.emailValue.length > FormInputValueLength.min &&
			dispatch({
				type: INPUT_ERROR_EMAIL,
				payload: {
					inputErrorText: InputError.emptyText,
					isInputError: false,
				},
			})

		password.passwordValue.length >= FormInputValueLength.empty &&
			password.passwordValue.length < FormInputValueLength.min &&
			dispatch({
				type: INPUT_ERROR_PASSWORD,
				payload: {
					inputErrorText: InputError.enterPassword,
					isInputError: true,
				},
			})

		password.passwordValue.length > FormInputValueLength.min &&
			dispatch({
				type: INPUT_ERROR_PASSWORD,
				payload: {
					inputErrorText: InputError.emptyText,
					isInputError: false,
				},
			})
	}

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { value, name } = event.target

		if (name === InputName.email) {
			value.length >= FormInputValueLength.empty &&
				dispatch({ type: INPUT_VALUE_EMAIL, payload: value })

			value.length > FormInputValueLength.min &&
				dispatch({
					type: INPUT_ERROR_EMAIL,
					payload: {
						inputErrorText: InputError.emptyText,
						isInputError: false,
					},
				})
		}

		if (name === InputName.password) {
			value.length >= FormInputValueLength.empty &&
				dispatch({ type: INPUT_VALUE_PASSWORD, payload: value })

			value.length > FormInputValueLength.min &&
				dispatch({
					type: INPUT_ERROR_PASSWORD,
					payload: {
						inputErrorText: InputError.emptyText,
						isInputError: false,
					},
				})
		}

		if (isClickedSubmit) {
			if (name === InputName.email) {
				value.length === FormInputValueLength.empty &&
					dispatch({
						type: INPUT_ERROR_EMAIL,
						payload: {
							inputErrorText: InputError.enterEmail,
							isInputError: true,
						},
					})

				value.length < FormInputValueLength.min &&
					dispatch({
						type: INPUT_ERROR_EMAIL,
						payload: {
							inputErrorText: InputError.validEmail,
							isInputError: true,
						},
					})

				value.length > FormInputValueLength.min &&
					dispatch({
						type: INPUT_ERROR_EMAIL,
						payload: {
							inputErrorText: InputError.emptyText,
							isInputError: false,
						},
					})
			}

			if (name === InputName.password) {
				value.length >= FormInputValueLength.empty &&
					value.length < FormInputValueLength.min &&
					dispatch({
						type: INPUT_ERROR_PASSWORD,
						payload: {
							inputErrorText: InputError.enterPassword,
							isInputError: true,
						},
					})
			}
		}
	}


	return {
		handleChange,
		handleSubmit,
		handleBlur,
	}
}
