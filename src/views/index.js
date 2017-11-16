/**
 * Revised by zhusass on 2017/11/13.
 */

import React from 'react'
import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom'

import AIndex from './a_index/index'

class NavMenu extends React.Component {
    render() {
        return <Router>
            <div style={{width: '100%', height: '100%',}}>
                <Route exact path="/" component={AIndex}/>
                <Route path="/a" component={AIndex}/>
            </div>
        </Router>
    }
}

export default NavMenu