/**
 * Revised by zhusass on 2017/11/17.
 */

import React from 'react'
import { Breadcrumb,Card,Button, } from 'antd'

import base from '../../library/config/base'

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
            page: 1,
            page_item: 10,
            data: [
            ],
            table_data: {
                income_name: {
                    name: '收入名称',
                },
                income_price: {
                    name: '收入金额',
                },
                income_explain: {
                    name: '收入详情',
                },
                income_id: {
                    name: '收入ID',
                },
            },
            actions: [
                {
                    name: '编辑',
                    onClickHandle: this.upEarningHandle.bind(this),
                },
                {
                    name: '删除',
                    onClickHandle: this.deleteEarningHandle.bind(this),
                },
            ],
        }
    }

    componentWillMount() {
        this.getIncomListRequete()
    }

    addEarningsHandle() {
        this.props.emitEarningsRequest('add')
    }

    upEarningHandle() {
        this.props.emitEarningsRequest('update')
    }

    deleteEarningHandle() {
        this.props.emitEarningsRequest('delete')
    }

    emitEarningsRequest() { // 编辑收入

    }

    getIncomListRequete() { // 获取
        let resulte = [
            {
                income_name: '外卖',
                income_price: 32,
                income_id: '4324234', // 收入id
                income_explain: '432423你好是的是的是的',
            },
            {
                income_name: '外卖',
                income_price: 32,
                income_id: '4324234', // 收入id
                income_explain: '432423你好是的是的是的',
            },
            {
                income_name: '外卖',
                income_price: 32,
                income_id: '4324234', // 收入id
                income_explain: '432423你好是的是的是的',
            },
            {
                income_name: '外卖',
                income_price: 32,
                income_id: '4324234', // 收入id
                income_explain: '432423你好是的是的是的',
            },
            {
                income_name: '外卖',
                income_price: 32,
                income_id: '4324234', // 收入id
                income_explain: '432423你好是的是的是的',
            },]
    }

    render() {
        return <div className="detail-wrap">
            <Card title="明细"  extra={<Button onClick={this.addEarningsHandle.bind(this)} type="primary" >创建收益</Button>}
                  loading={this.state.loading}>
                <div className="detail-main">
                </div>
            </Card>
        </div>
    }
}

Detail.defaulteProps = {
    emitEarningsRequest: () => {},
}

class IncomeSummarize extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            earnings_type: 'add', // add 添加/delete 删除/update更新
        }
    }

    emitEarningsRequest(type) {
       console.log(type)
    }

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