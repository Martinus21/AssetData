import React from 'react'

// Router
import { Route, Switch } from 'react-router-dom'

// Import Pages
import RouterMainPages from '../pages'
import LoginPage from '../pages/login'
import NotFoundPage from '../pages/notfound'

function RouterPages() {
  return (
    <>
      <Switch>
        <Route path="/404">
          <NotFoundPage />
        </Route>
        <Route path="/">
          <RouterMainPages />
        </Route>
        <Route exact path="/login">
          <LoginPage />
        </Route>
      </Switch>
    </>
  )
}

export default RouterPages