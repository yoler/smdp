import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga'

import App from './page/App/App'
import DevTools from './component/DevTools/DevTools'
import { saga } from './saga/saga'
import reducer from './reducer/reducer'
import './index.css'

const sagaMiddleware = createSagaMiddleware(saga)

const enhancer = compose(
    applyMiddleware(sagaMiddleware),
    DevTools.instrument()
)

const store = createStore(reducer, {
    platformLoading: true
}, enhancer)

sagaMiddleware.run(saga)

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <div>
                <App />
                {/* <DevTools /> */}
            </div>
        </Router>
    </Provider>,
    document.getElementById('root')
)