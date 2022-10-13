import { LayoutLogin } from 'features/netflixClone'
import { LayoutHome } from 'features/netflixClone/LayoutHome'
import { LayoutRegistration } from 'features/netflixClone/LayoutRegistration'
import { AllLinks, ErrorPage, Home, Login, Movies } from 'lib/components/pages'
import {
	ChoosePlan,
	Payment,
	PlanForm,
	Registration,
	RegistrationForm,
	RegistrationPassword,
} from 'lib/components/pages/registration-page'
import { RoutePath } from 'lib/config'
import { useFetch } from 'lib/hooks'
import { RootState } from 'lib/reducers'
import { theme } from 'lib/styles'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

export const App = () => {
	const T = useSelector((state: RootState) => state.language.dictionary)
	const selectedLanguage = useSelector((state: RootState) => state.language.name)
	const loginRedux = useSelector((state: RootState) => state.login)
	const { logged } = loginRedux

	const { checkUser } = useFetch()

	useEffect(() => {
		checkUser()
	}, [logged])

	useEffect(() => {
		if (location.href === '/') {
			location.href = `/${selectedLanguage}/`
		}
	}, [selectedLanguage])

	const {
		root,
		home,
		buyGiftCard,
		contactUs,
		cookiePreferences,
		corporateInfo,
		faq,
		investor,
		account,
		helpCenter,
		legalGuarantee,
		legalNotices,
		login,
		mediaCenter,
		movies,
		privacy,
		redeemGiftCard,
		registration,
		speedTest,
		termsOfUse,
		waysToWatch,
		jobs,
		onlyOnNetflix,
		registrationForm,
		signUp,
		registationPassword,
		choosePlan,
		payment,
		planForm,
	} = RoutePath

	return (
		<ThemeProvider theme={theme}>
			<BrowserRouter>
				<Routes>
					<Route path={root} element={<LayoutHome T={T} />} />
					<Route path={home} element={<LayoutHome T={T} />}>
						<Route index element={<Home T={T} />} />
					</Route>
					{!logged && (
						<Route path={login} element={<LayoutLogin T={T} />}>
							<Route index element={<Login T={T} />} />
						</Route>
					)}
					<Route path={signUp} element={<LayoutRegistration T={T} />}>
						{!logged && (
							<Route path={registration} element={<Registration T={T} />} />
						)}
						<Route path={registrationForm} element={<RegistrationForm T={T} />} />
						<Route
							path={registationPassword}
							element={<RegistrationPassword T={T} />}
						/>
						<Route path={choosePlan} element={<ChoosePlan T={T} />} />
						<Route path={planForm} element={<PlanForm T={T} />} />
						<Route path={payment} element={<Payment T={T} />} />
					</Route>
					<Route path={movies} element={<Movies />} />
					<Route path={faq} element={<AllLinks />} />
					<Route path={investor} element={<AllLinks />} />
					<Route path={waysToWatch} element={<AllLinks />} />
					<Route path={corporateInfo} element={<AllLinks />} />
					<Route path={legalNotices} element={<AllLinks />} />
					<Route path={helpCenter} element={<AllLinks />} />
					<Route path={jobs} element={<AllLinks />} />
					<Route path={termsOfUse} element={<AllLinks />} />
					<Route path={contactUs} element={<AllLinks />} />
					<Route path={onlyOnNetflix} element={<AllLinks />} />
					<Route path={account} element={<AllLinks />} />
					<Route path={redeemGiftCard} element={<AllLinks />} />
					<Route path={privacy} element={<AllLinks />} />
					<Route path={speedTest} element={<AllLinks />} />
					<Route path={mediaCenter} element={<AllLinks />} />
					<Route path={buyGiftCard} element={<AllLinks />} />
					<Route path={cookiePreferences} element={<AllLinks />} />
					<Route path={legalGuarantee} element={<AllLinks />} />
					<Route path='*' element={<ErrorPage T={T} />} />
				</Routes>
			</BrowserRouter>
		</ThemeProvider>
	)
}
