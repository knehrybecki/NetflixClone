import { AppTheme } from 'lib/types'

export const theme: AppTheme = {
	homePage: {
		fontSize: '15px',
		colors: {
			buttonSignUp: '#db0510',
			typography: '#fff',
			background: '#000',
			inputError: '#ffa00a',
		},
	},
	LoginPage: {
		colors: {
			buttonSignIn: '#db0510',
			typography: '#fff',
			backgroundMobile: '#000',
		},
	},
	createAccount: {
		SignIn: {
			colors: '#333',
			fontSize: '15px',
		},
		colors: {
			typography: '#000',
			background: '#fff',
			backgroundFooter: '#f3f3f3',
			footerTypography: '#737373',
			buttonBackground: '#db0510',
			buttonTypography: '#fff',
		},
		fontSize: {
			title: '32px',
			subTitle: '18px',
			stepNumber: '13px',
			button: '24px',
		},
	},

	media: {
		xs: 550,
		sm: 768,
		md: 992,
		lg: 1200,
	},
}
