import React from 'react'
import { Route, Switch } from 'react-router-dom'

// Import Components
import Header from '../components/header/Header'
import Sidebar from '../components/header/Sidebar'

// Import Pages
import CompanyPage from './company'
import DashboardPage from './dashboard'

function RouterMainPages() {

  return (
    <>
      <Switch>
        <div>
          <Sidebar />
          <div className="wrapper">
            <div
              className="content shadow-sm"
              style={{ paddingBottom: "58px"}}
            >
              <div className="container-fluid header-container">
                <Header />
              </div>

              <Route exact path="/">
                <DashboardPage />
              </Route>
              <Route exact path="/company">
                <CompanyPage />
              </Route>
            </div>
          </div>
        </div>
      </Switch>
    </>
  )
}

export default RouterMainPages