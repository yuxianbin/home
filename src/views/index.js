/**
 * Revised by zhusass on 2017/11/13.
 */

import React from 'react'
import createHistory from 'history/createBrowserHistory'
import {
    BrowserRouter as Router,
    Route,
    withRouter,
} from 'react-router-dom'

import AIndex from './a_index/index' // 账单系统入口
import Login from './login/index'
import FamilyInfo from './familyInfo/index'

const history = createHistory()

class App extends React.Component {
      render () {
          return <div className="app-wrap" style={{width: '100%', height: '100%',}}>
              <Route path="/a" component={AIndex}/>
              <Route path="/" exact component={Login}/>
              <Route path="/login" component={Login}/>
              <Route path="/familyInfo" component={FamilyInfo}/>
          </div>
      }
}

const WithRouterComponent = withRouter(App)

class NavMenu extends React.Component {
    render() {
        return <Router history={history}>
                  <WithRouterComponent/>
        </Router>
    }
}

export default NavMenu