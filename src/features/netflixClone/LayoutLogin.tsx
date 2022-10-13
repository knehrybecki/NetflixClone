import { Images } from 'assets'
import { LoginFooter, LoginHeader } from 'lib/components'
import { Dictionary } from 'lib/types'
import { Outlet } from 'react-router-dom'
import styled from 'styled-components'

export type LayoutLoginProps = {
	T: Dictionary
}

export const LayoutLogin: React.FunctionComponent<LayoutLoginProps> = ({ T }) => {
	return (
		<>
			<BackgroundsImage>
				<LoginHeader T={T} />
				<Outlet />
				<LoginFooter T={T} />
			</BackgroundsImage>
		</>
	)
}

const BackgroundsImage = styled.div`
	@media (min-width: ${({ theme }) => theme.media.sm}px) {
		background-image: url(${Images.Login});
		background-repeat: no-repeat;
		background-size: cover;
		z-index: -1;
		width: 100%;
		height: 100%;
	}
`
