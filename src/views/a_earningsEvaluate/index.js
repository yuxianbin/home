/**
 * Revised by zhusass on 2017/11/13.
 */

import React from 'react'

import { Breadcrumb,Card,Button, } from 'antd'

import base from '../../library/config/base'

import Tables from '../../library/components/Tables/index'
import Forms from '../../library/components/Forms/index'
import Searchs from '../../library/components/Searchs/index'

import './index.less'

// Breadcrumbs
class Breadcrumbs extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return <div className="breadcrumbs-wrap">
            <Breadcrumb>
                <Breadcrumb.Item>{base.a_router_name['a_incomeSummarize'].parent}</Breadcrumb.Item>
                <Breadcrumb.Item>{base.a_router_name['a_incomeSummarize'].name}</Breadcrumb.Item>
            </Breadcrumb>
        </div>
    }
}

class EarningsEvaluate extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        return <div className="earningsevaluate">
            <div className="earningsevaluate-breadcrumb">
                <Breadcrumbs/>
            </div>
        </div>
    }
}

export default EarningsEvaluate