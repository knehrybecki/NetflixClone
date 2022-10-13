export type ErrorState = {
	email: {
		text: string
		isError: boolean
	}
	password: {
		text: string
		isError: boolean
	}
	user: {
		text: string
		isError: boolean
	}
}

export type LoginState = {
	email: {
		text: string
		isInputValue: boolean
		buttonClicked: boolean
	}
	password: {
		text: string
		isInputValue: boolean
		buttonClicked: boolean
	}
}

export type FetchLogin = {
	logged: boolean
	error: string
}

export enum LoginTypes {
	LOGGED = 'LOGGED',
}
