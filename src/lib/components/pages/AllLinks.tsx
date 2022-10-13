import { store } from 'lib/reducers/redux'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

type AllLinksProps = {
	backToHome?: {
		setOpen: (value: boolean) => void
	}
}

export const AllLinks: React.FunctionComponent<AllLinksProps> = ({
	backToHome,
}) => {
	const selectedLanguage = store.getState().language.name

	return (
		<Backgrounds>
			<Title>Links</Title>
			<Button>
				<BackToHome to={`/${selectedLanguage}`} >Home</BackToHome>
			</Button>
		</Backgrounds>
	)
}
const Title = styled.h1``

const Backgrounds = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	background-color: #000;
	color: #fff;
	height: 100vh;
	width: 100%;
	row-gap: 50px;
`
const Button = styled.button`
	height: 50px;
	font-size: 20px;
	border-radius: 5px;
	background-color: red;
	color: #fff;
`
const BackToHome = styled(Link)`
	padding: 15px 30px;
`
