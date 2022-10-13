export enum LanguagesTranslation {
	English = 'en',
	Polish = 'en_PL',
}

export enum LanguageLabel {
	English = 'English',
	Polish = 'Polski',
}

export type Dictionary = {
	home: {
		titleFinish: string
		Title: string
		subTitle: string
		buttonFinish: string
		buttonSignOut: string
		buttonSignIn: string
		createAccountTitle: string
		startCreateAccount: string
		inputEmail: {
			placeholder: string
			error: {
				required: string
				invalid: string
				empty: string
			}
		}
		storyCards: {
			tv: {
				title: string
				subTitle: string
			}
			download: {
				title: string
				subTitle: string
				box: {
					movieTitle: string
					download: string
				}
			}
			watchEverywhere: {
				title: string
				subTitle: string
			}
			kids: {
				title: string
				subTitle: string
			}
		}
		FAQ: {
			title: string
			questions: {
				question: string
				answer: string
			}[]
		}
	}
	footer: {
		question: string
		links: {
			faq: string
			accout: string
			investor: string
			reedemGift: string
			waysToWatch: string
			privacy: string
			corporate: string
			speedTest: string
			legalNotices: string
			helpCetner: string
			mediaCenter: string
			jobs: string
			buyGiftCards: string
			termsOfUse: string
			cookiePreferences: string
			contactUs: string
			legalGuarantees: string
			onlyOnNetfilx: string
		}
		clon: string
	}
	error: {
		title: string
	}
	login: {
		title: string
		form: {
			email: string
			password: string
			forgetPassword: string
			buttonSignIn: string
			createAccount: string
			buttonSignUp: string
			rememberMe: string
		}
		errorFromDatabase: {
			invalidEmail: string
			invalidPassword: string
			userNotFound: string
			somethingWrong: string
			pleaseTryAgain: string
			resetPassword: string
			createAccount: string
			toManyRequest: string
		}
		inputError: {
			emptyText: string
			enterEmail: string
			validEmail: string
			enterPassword: string
		}
	}
	signUp: {
		step: string
		of: string
		buttonNext: string
		startsToSignUp: {
			stepTitle: string
			stepSubText: string
		}
		stepForm: {
			stepTitle: string
			stepSubText: string
			stepSubText2: string
			checkBox: string
			inputEmail: {
				error: {
					required: string
					shouldBetween: string
					invalid: string
					emptyText: string
				}
			}
			inputPassword: {
				error: {
					required: string
					shouldBetween: string
					emptyText: string
				}
			}
			errorFromDatabase: {
				emailAllreadyinUse: string
				somethingWentWrong: string
			}
		}
		accountCreated: {
			stepTitle: string
			stepSubText: string
		}
		choosePlan: {
			stepTitle: string
			checkMarkFirst: string
			checkMarkSecond: string
			checkMarkThird: string
		}
		planForm: {
			stepTitle: string
			checkTextFirst: string
			checkTextSecond: string
			checkTextThird: string
			plan: {
				basic: string
				standard: string
				premium: string
				monthlyPrice: string
				videoQuality: {
					title: string
					basic: string
					standard: string
					premium: string
				}
				resolutions: string
				planDevices: string
				planDescription: string
				planLegal: string
			}
		}
		payment: {
			stepTitle: string
			stepSubText: string
			checkTextFirst: string
			checkTextSecond: {
				basic: string
				standard: string
				premium: string
			}
			checkTextThird: string
			checkTextFourth: string
			cardCredit: string
			cardPaypal: string
			cardGift: string
			cardFree: string
			success: {
				title: string
				button: string
			}
		}
		finishSignUp: {
			stepTitle: string
			stepSubTitle: string
			stepSubText: string
			email: string
		}
	}
}
