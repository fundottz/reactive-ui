import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk';
import { Provider } from 'react-redux'
import InvestmentApp from './components/InvestmentApp'
import reducer from './reducers'
import './styles/App.css'
import { devToolsEnhancer } from 'redux-devtools-extension'

const store = createStore(
  reducer,
  compose(
    applyMiddleware(thunk),
    devToolsEnhancer()
  )
)

render(
  <Provider store={store}>
    <InvestmentApp />
  </Provider>,
  document.getElementById('root')
)