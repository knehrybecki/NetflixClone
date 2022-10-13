import { RegistrationFooter, RegistrationHeader } from 'lib/components'
import { Dictionary } from 'lib/types'
import { Outlet } from 'react-router-dom'

export type LayoutRegistrationbProps = {
	T: Dictionary
}

export const LayoutRegistration: React.FunctionComponent<
	LayoutRegistrationbProps
> = ({ T }) => {
	return (
		<>
			<RegistrationHeader T={T} />
			<Outlet />
			<RegistrationFooter T={T} />
		</>
	)
}
