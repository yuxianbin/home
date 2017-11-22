/**
 * Revised by zhusass on 2017/11/13.
 */

import React from 'react'
import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom'

import AIndex from './a_index/index'
import Login from './login/index'

class NavMenu extends React.Component {
    render() {
        return <Router>
            <div style={{width: '100%', height: '100%',}}>
                <Route path="/a" component={AIndex}/>
                <Route path="/Login" component={Login}/>
            </div>
        </Router>
    }
}

export default NavMenu