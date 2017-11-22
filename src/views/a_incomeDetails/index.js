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
                <Breadcrumb.Item>{base.a_router_name['a_incomeDetails'].parent}</Breadcrumb.Item>
                <Breadcrumb.Item>{base.a_router_name['a_incomeDetails'].name}</Breadcrumb.Item>
            </Breadcrumb>
        </div>
    }
}

// detail
class Detail extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            data: {
                moonIncome: 3000,
                moonConsume: 2000,
                moonEarnings: 1000,
            },
            label: {
                moonIncome: '月收入',
                moonConsume: '月消费',
                moonEarnings: '月收益',
            }
        }
    }

    componentWillMount() {
    }

    render() {
        return <div className="detail-wrap">
            <Card title="概括">
                  <div className="detail-main">
                      {Object.keys(this.state.label).map((key, index) => {
                          return <div key={index} className="detail-main-item">
                              <div className="item-label">{this.state.label[key]}：</div>
                              <div className="item-info">{this.state.data[key]}</div>
                          </div>
                      })}

                  </div>
            </Card>
        </div>
    }
}


class IncomeDetails extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        return <div className="incomedetails">
            <div className="incomedetails-breadcrumb">
                <Breadcrumbs/>
            </div>
            <div className="incomedetails-mian">
                <div className="incomedetails-mian-item" >
                    <Detail/>
                </div>
            </div>
        </div>
    }
}

export default IncomeDetails