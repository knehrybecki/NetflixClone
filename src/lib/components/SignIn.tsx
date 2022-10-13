import { useFetch } from 'lib/hooks'

import { RootState, store } from 'lib/reducers'

import { Dictionary } from 'lib/types'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

type SignInProps = {
	T: Dictionary
	homeHeader: boolean
}

type buttonProps = {
	homeHeader: boolean
}
export const SignIn: React.FunctionComponent<SignInProps> = ({ T, homeHeader }) => {
	const selectedLanguage = store.getState().language.name
	const login = useSelector((state: RootState) => state.login)
	const { logged } = login
	const { userSignOut } = useFetch()

	return (
		<>
			{logged ? (
				<Button onClick={userSignOut} homeHeader={homeHeader}>
					{' '}
					{T.home.buttonSignOut}
				</Button>
			) : (
				<Button
					onClick={() => (location.pathname = `/${selectedLanguage}/login`)}
					homeHeader={homeHeader}
				>
					{T.home.buttonSignIn}
				</Button>
			)}
		</>
	)
}

const Button = styled.button<buttonProps>`
	background: ${({ theme, homeHeader }) =>
		homeHeader ? theme.homePage.colors.buttonSignUp : 'none'};
	color: ${({ theme, homeHeader }) =>
		homeHeader
			? theme.homePage.colors.typography
			: theme.createAccount.SignIn.colors.typography};
	border-radius: ${props => (props.homeHeader ? '5px' : '0')};
	font-size: ${({ theme }) => theme.homePage.fontSize};
	font-weight: ${props => (props.homeHeader ? 100 : 700)};
	padding: 0px 5px;
	justify-self: flex-end;

	@media (min-width: ${({ theme }) => theme.media.sm}px) {
		padding: 5px 10px;
		font-size: 18px;
	}
`
