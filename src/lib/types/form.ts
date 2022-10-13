export enum FormInputValueLength {
	empty = 0,
	min = 5,
	max = 50,
}

export enum InputType {
	text = 'text',
	email = 'email',
	password = 'password',
	submit= 'submit',
	checkBox = 'checkbox',
	radio = 'radio',
}

export enum ErrorFromServer {
	emptyText = '',
	invalidEmail = 'Invalid email.',
	invalidPassword = 'Wrong password.',
	userNotFound = `Sorry, we can't find an account with this email address.`,
	somethngWrong = 'Something went wrong.',
	toManyRequest = 'Too many requests.',
	emailAlleradyInUse = 'Email already in use.',
}
export enum InputName {
	email = 'email',
	password = 'password',
}

export type FormProps = {
	isInputValue?: boolean
	isClickedSubmit?: boolean
	isError?: boolean
	emailValid?: boolean
	passwordValid?: boolean
	isInputError?: boolean
}

export enum FormTypes {
	INPUT_ERROR_EMAIL = 'INPUT_ERROR_EMAIL',
	INPUT_ERROR_PASSWORD = 'INPUT_ERROR_PASSWORD',
	INPUT_VALUE_EMAIL = 'INPUT_VALUE_EMAIL',
	INPUT_VALUE_PASSWORD = 'INPUT_VALUE_PASSWORD',
	IS_CLICKED_SUBMIT = 'IS_CLICKED_SUBMIT',
}

export const emailRegex =
	/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/
