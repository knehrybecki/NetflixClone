import { Dictionary } from 'lib/types'

export const en: Dictionary = {
	home: {
		titleFinish: 'Welcome back!',
		Title: 'Unlimited movies, TV shows, and more.',
		subTitle: 'Watch anywhere. Cancel anytime.',
		buttonFinish: 'Finish Sign Up!',
		buttonSignOut: 'Sign Out',
		buttonSignIn: 'Sign In',
		createAccountTitle:
			'Ready to watch? Enter your email to create or restart your membership.',
		startCreateAccount: 'Get Started',
		inputEmail: {
			placeholder: 'Email address',
			error: {
				required: 'Email is required',
				invalid: 'Email is invalid',
				empty: '',
			},
		},
		storyCards: {
			tv: {
				title: 'Enjoy on your TV.',
				subTitle:
					'Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.',
			},
			download: {
				title: 'Download your shows to watch offline.',
				subTitle: 'Save your favorites easily and always have something to watch.',
				box: {
					movieTitle: 'Stranger Things',
					download: 'Downloading...',
				},
			},
			watchEverywhere: {
				title: 'Watch everywhere.',
				subTitle:
					'Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more.',
			},
			kids: {
				title: 'Create profiles for kids.',
				subTitle:
					'Send kids on adventures with their favorite characters in a space made just for them—free with your membership.',
			},
		},
		FAQ: {
			title: 'Frequently Asked Questions',
			questions: [
				{
					question: 'What is Netflix?',
					answer:
						"Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.\n\n You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price.There's always something new to discover and new TV shows and movies are added every week!",
				},
				{
					question: 'How much does Netflix cost?',
					answer:
						'Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from 29 zł to 60 zł a month. No extra costs, no contracts.',
				},
				{
					question: 'Where can I watch?',
					answer:
						"Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles. \n\n You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.",
				},
				{
					question: 'How do I cancel?',
					answer:
						'Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.',
				},
				{
					question: 'What can I watch on Netflix?',
					answer:
						'Netflix has an extensive library of thousands of titles. Watch as many as you want. Even movies and TV shows you may never watch again. From sci-fi to comedy to family, Netflix has it all.',
				},
				{
					question: 'Is Netflix good for kids?',
					answer:
						'The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space. \n\n Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.',
				},
			],
		},
	},
	footer: {
		question: 'Questions? Call 00 800 112 4392',
		links: {
			faq: 'FAQ',
			accout: 'Account',
			investor: 'Investor Relations',
			reedemGift: 'Redeem Gift Cards',
			waysToWatch: 'Ways to Watch',
			privacy: 'Privacy',
			corporate: 'Corporate Information',
			speedTest: 'Speed Test',
			legalNotices: 'Legal Notices',
			helpCetner: 'Help Center',
			mediaCenter: 'Media Center',
			jobs: 'Jobs',
			buyGiftCards: 'Buy Gift Cards',
			termsOfUse: 'Terms of Use',
			cookiePreferences: 'Cookie Preferences',
			contactUs: 'Contact Us',
			legalGuarantees: 'Legal Guarantee',
			onlyOnNetfilx: 'Only on Netflix',
		},
		clon: 'Clon Netflix created only to learning',
	},
	error: {
		title: '404 Page not found!',
	},
	login: {
		title: 'Sign In',
		form: {
			email: 'Email',
			password: 'Password',
			forgetPassword: 'Need help?',
			buttonSignIn: 'Sign In',
			createAccount: 'New to Netflix?',
			buttonSignUp: 'Sign Up',
			rememberMe: 'Remember me',
		},
		errorFromDatabase: {
			invalidEmail: 'Invalid email.',
			invalidPassword: 'Wrong password.',
			userNotFound: `Sorry, we can't find an account with this email address.`,
			somethingWrong: 'Something went wrong.',
			pleaseTryAgain: 'Please try again.',
			resetPassword: 'Reset Password',
			createAccount: 'create at account',
			toManyRequest: 'Too many request. Try again later.',
		},
		inputError: {
			emptyText: '',
			enterEmail: 'Please enter your email.',
			validEmail: 'Please enter a valid email address.',
			enterPassword: 'Your password must contain between 4 and 60 characters.',
		},
	},
	signUp: {
		step: 'STEP',
		of: 'OF',
		buttonNext: 'Next',
		startsToSignUp: {
			stepTitle: 'Finish setting up your account',
			stepSubText:
				'Netflix is personalized for you. Create a password to watch on any device at any time.',
		},
		stepForm: {
			stepTitle: 'Create a password to start your membership',
			stepSubText: "Just a few more steps and you're done!",
			stepSubText2: 'We hate paperwork, too.',
			checkBox: 'Please do not email me Netflix special offers.',
			inputEmail: {
				error: {
					required: 'Please enter your email.',
					shouldBetween: 'Email should be between 5 and 50 characters',
					invalid: 'Please enter a valid email address.',
					emptyText: '',
				},
			},
			inputPassword: {
				error: {
					required: 'Please enter your password.',
					shouldBetween: 'Password should be between 4 and 60 characters',
					emptyText: '',
				},
			},
			errorFromDatabase: {
				emailAllreadyinUse: 'Email already in use.',
				somethingWentWrong: 'Something went wrong.',
			},
		},
		accountCreated: {
			stepTitle: 'Account created!',
			stepSubText: 'Use this email to access your account:',
		},
		choosePlan: {
			stepTitle: 'Choose your plan',
			checkMarkFirst: 'No commitments, cancel anytime.',
			checkMarkSecond: 'Everything on Netflix for one low price.',
			checkMarkThird: 'Unlimited viewing on all your devices.',
		},
		planForm: {
			stepTitle: 'Choose the plan that’s right for you',
			checkTextFirst: 'Watch all you want. Ad-free.',
			checkTextSecond: 'Recommendations just for you.',
			checkTextThird: 'Change or cancel your plan anytime.',
			plan: {
				basic: 'Basic',
				standard: 'Standard',
				premium: 'Premium',
				monthlyPrice: 'Monthly price',
				videoQuality: {
					title: 'Video quality',
					basic: 'Good',
					standard: 'Better',
					premium: 'Best',
				},
				resolutions: 'Resolutions',
				planDevices: 'Watch on your TV, computer, mobile phone and tablet',
				planDescription:
					'HD (720p), Full HD (1080p), Ultra HD (4K) and HDR availability subject to your internet service and device capabilities. Not all content is available in all resolutions. See our Terms of Use for more details.',
				planLegal:
					'Only people who live with you may use your account. Watch on 4 different devices at the same time with Premium, 2 with Standard and 1 with Basic.',
			},
		},
		payment: {
			stepTitle: 'Choose how to pay',
			stepSubText: "You're getting the Premium Plan.",
			checkTextFirst: 'Unlimited TV shows and movies',
			checkTextSecond: {
				basic: 'Good video quality (480p)',
				standard: 'Great video quality (1080p)',
				premium: 'Best video quality in 4K and HDR',
			},
			checkTextThird: 'Watch on phone, tablet, computer or TV',
			checkTextFourth: 'Cancel easily online anytime',
			cardCredit: 'Credit or Debit',
			cardPaypal: 'PayPal',
			cardGift: 'Gift Code',
			cardFree: 'Start your free month',
			success: {
				title: 'Payment successful',
				button: 'forwarding to movies',
			},
		},
		finishSignUp: {
			stepTitle: 'Welcome back!',
			stepSubTitle: 'Joining Netflix is easy.',
			stepSubText: "Enter your password and you'll be watching in no time.",
			email: 'Email',
		},
	},
}
