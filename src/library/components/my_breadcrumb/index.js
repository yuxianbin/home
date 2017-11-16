/**
 * Revised by zhuzengzhi on 2017/11/16.
 */

import React from 'react'
import PropTypes from 'prop-types'
import { Breadcrumb } from 'antd'

class MyBreadcrumb extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            readcrumb_list: [],
        }
    }

    componentWillMount() {

    }

    render() {
        return <div className="mybreadcrumb">

        </div>
    }
}

MyBreadcrumb.defaulteProps = {
    route_list: PropTypes.array,
}