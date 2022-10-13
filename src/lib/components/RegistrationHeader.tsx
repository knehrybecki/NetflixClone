import { Images } from 'assets'
import { store } from 'lib/reducers'
import { Dictionary } from 'lib/types'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { SignIn } from './SignIn'

type RegistrationHeaderProps = {
	T: Dictionary
}

export const RegistrationHeader: React.FunctionComponent<
	RegistrationHeaderProps
> = ({ T }) => {
	const selectedLanguage = store.getState().language.name
  
	return (
		<Header>
			<Link to={`/${selectedLanguage}`}>
				<Img src={Images.Logo} alt='netflix logo' />
			</Link>
			<SignIn T={T} homeHeader={false}/>
		</Header>
	)
}
const Header = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 10px;
	align-items: center;
	background-color: ${({ theme }) => theme.createAccount.colors.background};
	border-bottom: 1px solid #3333333b;
`
const ButtonSignIn = styled.button``
const Img = styled.img`
	padding-top: 10px;
	width: 100px;

	@media (min-width: ${({ theme }) => theme.media.sm}px) {
		width: 180px;
	}
`
