export type { RootState } from 'lib/reducers/redux'
export {
	createAccountReducer,
	INITAL_STATE_CREATE_ACCOUNT,
	
} from './createAccountReducer'
export { SET_LANGUAGE } from './langReducer'
export type { LangState, SetLanguageAction } from './langReducer'
export { store } from './redux'
