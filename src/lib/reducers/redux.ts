import { configureStore } from '@reduxjs/toolkit'
import { loginReducer } from 'lib/reducers/loginReducer'
import { createAccountReducer } from './createAccountReducer'

import { langReducer } from './langReducer'

export type RootState = ReturnType<typeof store.getState>

export const store = configureStore({
	reducer: {
		language: langReducer,
		createAccount: createAccountReducer,
		login: loginReducer,
	},
})
