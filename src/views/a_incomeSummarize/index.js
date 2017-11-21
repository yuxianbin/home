/**
 * Revised by zhusass on 2017/11/17.
 */

import React from 'react'
import { Breadcrumb,Card,Button, } from 'antd'

import base from '../../library/config/base'

import Tables from '../../library/components/Tables/index'
import Forms from '../../library/components/Forms/index'

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
            loading: true,
            page: 1,
            page_size: 10, // 每页条数
            total: 1, // 数据总数
            table_data: [],
            modelVisible: false, // model
            action_type: 'add', // add 添加; update 更新; delete 删除
            modalTitle: '新增项目',
            table_label: {
                income_id: {
                    name: '项目ID',
                    disabled: true,
                    required: true,
                },
                income_name: {
                    name: '项目名称',
                    required: true,
                },
                income_price: {
                    name: '收益金额',
                    required: true,
                },
                income_explain: {
                    name: '项目详情',
                },
            },
            up_data: {},
            operation: [
                {
                    name: '编辑',
                    type: 'primary',
                    onClickHandle: this.upEarningHandle.bind(this),
                },
                {
                    name: '删除',
                    type: 'danger',
                    onClickHandle: this.deleteEarningHandle.bind(this),
                },
            ],
        }
    }

    componentWillMount() {
        // 异步拉去数据
        window.setTimeout(() => {
            this.getIncomListRequete()
        }, 1000)
        this.getIncomListRequete()
    }

    addEarningsHandle() { // 增加收入项目
        this.setState({
            modelVisible: true,
            action_type: 'add',
            up_data: {},
            modalTitle: '新增项目',
        })
        this.emitEarningsRequest()
    }

    upEarningHandle(item) { // 更新收入项目
        this.setState({
            modelVisible: true,
            up_data: item,
            action_type: 'update',
            modalTitle: '编辑项目',
        })
        this.emitEarningsRequest()
    }

    deleteEarningHandle(item) { // 删除收入项目
        this.setState({
            action_type: 'delete'
        })
        this.emitEarningsRequest()
    }

    changePageSize(page, pageSize) { // 页码发生变化
        console.log('page:', page, pageSize)
        this.setState({
            page: page,
            page_size: pageSize,
        })

        this.getIncomListRequete()
    }

    // forms 操作
    okModalHandle() { // 确认

    }

    cancelModalHandle() { // 取消
        this.setState({
            modelVisible: false,
        })
    }

    emitEarningsRequest() { // 编辑收入
        window.setTimeout(()=>{
           console.log('异步操作:', this.state.action_type)
        },5)
    }

    getIncomListRequete() { // 获取收入列表
        let resulte = [
            {
                income_id: '4324234', // 收入id
                income_name: '外卖',
                income_price: 32,
                income_explain: '432423你好是的是的是的',
                key: '432423487f68',
            },
            {
                income_id: '4324234', // 收入id
                income_name: '外卖',
                income_price: 32,
                income_explain: '432423你好是的是的是的432423你好是的是的是的432423你好是的是的是的432423你好是的是的是的',
                key: '43242344535w43',
            },
            {
                income_id: '4324234', // 收入id
                income_name: '外卖',
                income_price: 32,
                income_explain: '432423你好是的是的是的',
                key: '43242344476j3',
            },
            {
                income_id: '4324234', // 收入id
                income_name: '外卖',
                income_price: 32,
                income_explain: '432423你好是的是的是的',
                key: '4324236543w24',
            },
            {
                income_id: '4324234', // 收入id
                income_name: '外卖',
                income_price: 32,
                income_explain: '432423你好是的是的是的',
                key: '432423544f978',
            },]

        this.setState({
            table_data: resulte,
            loading: false,
            total: 200,
        })
    }

    render() {
        return <div className="detail-wrap">
            <Card title="明细"  extra={<Button onClick={this.addEarningsHandle.bind(this)} type="primary" >创建收益</Button>}>
                <div className="detail-main">
                    <Tables table_data={this.state.table_data}
                            table_label={this.state.table_label}
                            actions={this.state.operation}
                            page_size={this.state.page_size}
                            current={this.state.page}
                            total={this.state.total}
                            onChange={this.changePageSize.bind(this)}
                      />
                </div>
            </Card>
            <Forms visible={this.state.modelVisible}
                   title={this.state.modalTitle}
                   action_type={this.state.action_type}
                   form_data={this.state.up_data}
                   form_label={this.state.table_label}
                   handleOk={this.okModalHandle.bind(this)}
                   handleCancel={this.cancelModalHandle.bind(this)}
              />
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