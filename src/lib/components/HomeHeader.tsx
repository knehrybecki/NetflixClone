import { Images } from 'assets'
import { Dictionary } from 'lib/types'
import styled from 'styled-components'
import { HeaderChangeLanguages } from './HeaderChangelanguages'
import { SignIn } from './SignIn'

type HeaderProps = {
	T: Dictionary
}

export const HomeHeader: React.FunctionComponent<HeaderProps> = ({ T }) => {
	return (
		<HeaderContainer>
			<Container>
				<Img src={Images.Logo} alt='netflix logo' />
				<HeaderChangeLanguages>
					<SignIn T={T} homeHeader={true}/>
				</HeaderChangeLanguages>
			</Container>
		</HeaderContainer>
	)
}

const HeaderContainer = styled.div``

const Container = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 20px 0 0 20px;
	box-shadow: inset 0px 60px 27px -21px rgba(0, 0, 0, 0.8);
	position: absolute;
	background-color: transparent;
	width: 100%;
	z-index: 1;

	@media (min-width: ${({ theme }) => theme.media.md}px) {
		padding: 30px;
	}
`
const Img = styled.img`
	width: 100px;

	@media (min-width: ${({ theme }) => theme.media.sm}px) {
		width: 130px;
	}

	@media (min-width: ${({ theme }) => theme.media.md}px) {
		width: 180px;
	}
`
