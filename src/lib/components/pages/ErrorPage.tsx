import { store } from 'lib/reducers'
import { Dictionary } from 'lib/types'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

type ErrorProps = {
	T: Dictionary
}
export const ErrorPage: React.FunctionComponent<ErrorProps> = ({ T }) => {
	const selectedLanguage = store.getState().language.name

	window.history.pushState(null, '', `/error`)

	return (
		<Container>
			{T.error.title}
			<Button>
				<Link to={`/${selectedLanguage}/`}>Home</Link>
			</Button>
		</Container>
	)
}

const Container = styled.div`
	background-color: ${({ theme }) => theme.homePage.colors.background};
	color: ${({ theme }) => theme.homePage.colors.typography};
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	height: 100vh;
	width: 100%;
	row-gap: 50px;
	font-size: 30px;
`

const Button = styled.button`
	width: 80px;
	height: 50px;
	font-size: 20px;
	border-radius: 5px;
	background-color: red;
	color: #fff;
`
