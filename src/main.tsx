import { store } from 'lib/reducers/redux'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { App } from './app/App'
import './index.css'
import './reset.css'

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
)
