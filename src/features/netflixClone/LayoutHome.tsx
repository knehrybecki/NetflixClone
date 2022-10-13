import { HomeFooter, HomeHeader } from 'lib/components'
import { RootState } from 'lib/reducers'

import { Dictionary } from 'lib/types'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

export type LayoutHomeProps = {
	T: Dictionary
}
export const LayoutHome: React.FunctionComponent<LayoutHomeProps> = ({ T }) => {
	const selectedLanguage = useSelector((state: RootState) => state.language.name)

	if (location.pathname === '/') {
		return <Navigate to={`/${selectedLanguage}/`} />
	}

	return (
		<>
			<HomeHeader T={T} />
			<Outlet />
			<HomeFooter T={T} />
		</>
	)
}
