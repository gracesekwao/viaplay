import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import store from './utils/store'

import 'style/index.scss'

import ListView from './main/ListView'


ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path='/' component={ListView} />
      </Switch>
    </Router>
  </Provider>,
  document.querySelector('#app')
)
