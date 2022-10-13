import { Dictionary, LanguagesTranslation } from 'lib/types'

import { createAction, createReducer } from '@reduxjs/toolkit'
import { en } from 'lib/locale'

export type LangState = {
	langReducer: any
	dictionary: Dictionary
	name: string
}

export type SetLanguageAction = {
	dictionary: Dictionary
	name: string
}

export const SET_LANGUAGE = createAction<SetLanguageAction>('SET_LANGUAGE')

const localSorageLang = localStorage.getItem('language')

const initialStateLang: LangState = localSorageLang
	? JSON.parse(localSorageLang)
	: { dictionary: en, name: LanguagesTranslation.English }

export const langReducer = createReducer(initialStateLang, builder => {
	builder.addCase(SET_LANGUAGE, (state, action) => {
		state.dictionary = action.payload.dictionary
		state.name = action.payload.name
	})
})
