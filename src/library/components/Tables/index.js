/**
 * Revised by zhusass on 2017/11/21.
 */

import React from 'react'
import { Table,Button } from 'antd'

import tools from '../../tools/index'

import './index.less'

class Tables extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            columns: [], // col配置
            table_data: [],
        }
    }

    componentWillReceiveProps(nextProps) {

        if (nextProps.table_data.length) {
            let columns = []
            let table_data = tools.setObjKeys(nextProps.table_data)

            Object.keys(nextProps['table_label']).map((key) => {
                let name = nextProps.table_label[key].name

                columns.push({
                    title: name,
                    dataIndex: key,
                    key: key,
                    render: text => <span>{text}</span>,
                })
            })

            if (nextProps.actions.length) {
                columns.push({
                    title: '操作',
                    key: 'action',
                    render: (text,record) => (
                        <div className="table-options">
                            {
                                nextProps.actions.map((item, index) => {
                                    return <Button key={index}
                                                   type={item.type}
                                                   onClick={() => {item.onClickHandle(record) }}>
                                        {item['name']}</Button>
                                })
                            }
                        </div>
                    )
                })
            }

            this.setState({
                table_data: table_data,
                columns: columns,
            })
        }
    }

    render() {
       return <div className="tables-wrap">
           <Table
               columns={this.state.columns}
               dataSource={this.props.table_data}
               pagination={{
                   current: this.props.current,
                   showSizeChanger: true,
                   showQuickJumper: true,
                   total: this.props.total,
                   pageSize: this.props.page_size,
                   onChange: this.props.onChange,
               }}
           />
       </div>
    }
}

Tables.defaulteProps = {
    table_data: [], // list
    table_label: {}, // name
    actions: [], // table 操作功能
    current: 1, // 当前页数
    total: 100, // 数据总数
    page_size: 10, // 每页条数
    onChange: () => {}, // 页码改变的回调，参数是改变后的页码及每页条数
}

export default Tables