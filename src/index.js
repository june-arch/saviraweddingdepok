import React from 'react'
import { render } from 'react-dom'
// import {createStore,compose , applyMiddleware} from 'redux';
// import {Provider} from 'react-redux';
import App from './components/App'
// import reducer from './reducers'
// import thunk from 'redux-thunk'
import "./css/index.css"

// store development
// const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)))
//store production
// const store = createStore(reducer, applyMiddleware(thunk))

render(
    <App />, 
    document.getElementById('root')
)