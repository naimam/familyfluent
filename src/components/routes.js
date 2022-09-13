import React from 'react'
import App from '../App'
import Eldercare from '../pages/eldercare'
import Childcare from '../pages/childcare'
import {Route, Switch, Redirect} from 'react-router-dom'
import NavBar from './NavBar'

const routes = () => {
  return (
    <div>
        <NavBar/>
        <Switch>
            <Route path='/app'> <App/></Route>
            <Route path='/eldercare'> <Eldercare/></Route>
            <Route path='/childcare'> <Childcare/></Route>
        </Switch>
    </div>
  )
}

export default routes