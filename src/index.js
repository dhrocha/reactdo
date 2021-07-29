import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Login from './components/Login/Index'
import Dashboard from './components/Dashboard/Index'
import { Provider } from 'jotai'

import '@fontsource/roboto'
import './index.css'

ReactDOM.render(
  <React.StrictMode>
    <Provider>
      <BrowserRouter>
        <Switch>
          <Route path='/' exact={true} component={Login} />
          <Route path='/dashboard' exact={true} component={Dashboard} />
        </Switch>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
