import axios from 'axios'
import { RoutePath } from 'lib/config'
import { RootState } from 'lib/reducers'
import {
	createAccoutTypes,
	ErrorFromServer,
	FetchLogin,
	FetchTypes,
	FormInputValueLength,
	FormTypes,
	LocalStorage,
	LoginTypes,
	StepsNumber,
} from 'lib/types'
import { useDispatch, useSelector } from 'react-redux'

export const useFetch = () => {
	const { LOGGED } = LoginTypes
	const { ANIMATION, STEPS } = createAccoutTypes
	const { FETCH_END, FETCH_ERROR_SERVER, FETCH_START } = FetchTypes
	const { INPUT_ERROR_EMAIL } = FormTypes

	const { registration, registationPassword, choosePlan, movies } = RoutePath

	const createAccount = useSelector((state: RootState) => state.createAccount)
	const login = useSelector((state: RootState) => state.login)
	const dispatch = useDispatch()

	const userSignOut = async () => {
		await axios
			.get('http://127.0.0.1:3000/api/signout')
			.then(res => {
				dispatch({ type: LOGGED, payload: res.data.user })
				location.pathname = '/'
			})
			.catch(err => {
				console.log(err)
			})
	}

	const checkUser = () => {
		axios
			.post('http://127.0.0.1:3000/api/user')
			.then(res => {
				dispatch({ type: LOGGED, payload: res.data.user })
			})
			.catch(err => {
				console.log(err)
			})
	}

	const registrationFetch = async () => {
		dispatch({ type: FETCH_START })

		await axios
			.post('http://127.0.0.1:3000/api/createUser', {
				email: createAccount.email.emailValue,
				password: createAccount.password.passwordValue,
			})
			.then(res => {
				if (res.data.error) {
					createAccount.email.emailValue.length > FormInputValueLength.min &&
						createAccount.password.passwordValue.length > FormInputValueLength.min &&
						dispatch({ type: FETCH_ERROR_SERVER, payload: res.data.error })

					return
				}
				if (res.data.createdUser) {
					dispatch({ type: ANIMATION, payload: false })
					dispatch({ type: STEPS, payload: StepsNumber.STEP_TWO })
					dispatch({ type: LOGGED, payload: res.data.createdUser })
					location.reload()
					location.pathname = choosePlan
				}
			})
			.catch(() => {
				dispatch({
					type: FETCH_ERROR_SERVER,
					payload: ErrorFromServer.somethngWrong,
				})
			})
			.finally(() => {
				dispatch({ type: FETCH_END })
			})
	}

	const checkEmail = async () => {
		dispatch({ type: FETCH_START })

		await axios
			.post('http://127.0.0.1:3000/api/checkEmail', {
				email: createAccount.email.emailValue,
			})
			.then(res => {
				if (res.data.userExists) {
					localStorage.setItem(LocalStorage.Email, createAccount.email.emailValue)
					location.pathname = registationPassword
				}

				if (!res.data.userExists) {
					localStorage.setItem(LocalStorage.Email, createAccount.email.emailValue)
					location.pathname = registration
				}

				if (res.data.error) {
					dispatch({
						type: INPUT_ERROR_EMAIL,
						payload: {
							inputErrorText: ErrorFromServer.somethngWrong,
							isInputError: true,
							isInputValue: true,
						},
					})
				}
			})
			.catch(err => {
				dispatch({
					type: INPUT_ERROR_EMAIL,
					payload: {
						inputErrorText: err.message,
						isInputError: true,
						isInputValue: true,
					},
				})
			})
			.finally(() => {
				dispatch({ type: FETCH_END })
			})
	}

	const loginFetch = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, email:string, password:string) => {
		event.preventDefault()

		dispatch({ type: FETCH_START })

		fetch('http://127.0.0.1:3000/api/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Access-Control-Allow-Origin': '*',
				mode: 'cors',
			},
			body: JSON.stringify({
				email: email,
				password: password,
			}),
		})
			.then(res => {
				if (res.ok) {
					return res.json()
				}
				throw new Error('Failed to fetch')
			})
			.then((res: FetchLogin) => {
				if (res.error) {
					login.email.emailValue.length >= FormInputValueLength.min &&
						login.password.passwordValue.length >= FormInputValueLength.min &&
						dispatch({ type: FETCH_ERROR_SERVER, payload: res.error })

					return
				}
				if (res.logged) {
					dispatch({ type: LOGGED, payload: res.logged })
					location.pathname = movies
				}
			})
			.catch(() => {
				dispatch({
					type: FETCH_ERROR_SERVER,
					payload: ErrorFromServer.somethngWrong,
				})
			})
			.finally(() => {
				dispatch({ type: FETCH_END })
			})
	}

	return { userSignOut, checkUser, checkEmail, registrationFetch, loginFetch }
}
