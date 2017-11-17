/**
 * Revised by zhusass on 2017/11/17.
 */

import React from 'react'
import { Breadcrumb,Card } from 'antd'

import base from '../../library/config/base'

import Graph from '../../library/components/Graph/index'

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

// detail
class Detail extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            loading: false,
        }
    }

    render() {
        return <div className="detail-wrap">
            <Card title="明细" loading={this.state.loading}>
                <div className="detail-main">
                    <Graph/>
                </div>
            </Card>
        </div>
    }
}

class IncomeSummarize extends React.Component {
    render() {
        return <div className="incomesummarize">
            <div className="incomesummarize-breadcrumb">
                <Breadcrumbs/>
            </div>
            <div className="incomesummarize-mian">
                <div className="incomesummarize-mian-item" >
                    <Detail/>
                </div>

            </div>
        </div>
    }
}

export default IncomeSummarize