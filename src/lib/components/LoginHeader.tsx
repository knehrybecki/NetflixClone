import { Images } from 'assets'
import { RootState, store } from 'lib/reducers'
import { Dictionary } from 'lib/types'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

type LoginHeaderProps = {
	T: Dictionary
}

export const LoginHeader: React.FunctionComponent<LoginHeaderProps> = ({
	T,
}) => {
	const selectedLanguage = store.getState().language.name
	
	return (
		<Header>
			<Link to={`/${selectedLanguage}`}>
				<Img src={Images.Logo} alt='netflix logo' />
			</Link>
		</Header>
	)
}

const Header = styled.header`
	background-color: ${({ theme }) => theme.LoginPage.colors.backgroundMobile};
	padding: 20px 10px;

	@media (min-width: ${({ theme }) => theme.media.sm}px) {
		background: rgba(0, 0, 0, 0.65);
	}
`
const Img = styled.img``
