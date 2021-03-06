import React from 'react'
import ReactDOM from 'react-dom'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import * as reducers from 'redux'
import { AppContainer }from 'containers'

// const store = createStore(
//   combineReducers(reducers),
//   compose(
//     applyMiddleware(thunk),
//     window.devToolsExtension ? window.devToolsExtension() : (f) => f
//   )
// )

ReactDOM.render(<AppContainer />, document.getElementById('app'))

// ReactDOM.render(
//   <Provider store={store}>
//     <AppContainer />
//   </Provider>,
// document.getElementById('app'))