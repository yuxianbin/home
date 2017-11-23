import React from 'react'
import PropTypes from 'prop-types'
import {
    Link,
} from 'react-router-dom'

import { Menu, } from 'antd';

import './index.less'

const SubMenu = Menu.SubMenu;

class ARouter extends React.Component {

    constructor(props) {
        super(props)

        this.state= {
            current: '1',
            nav_list: [
                {
                    key: '1',
                    name: '收入',
                    children: [
                        {
                            key: '1-1',
                            name: '收入设置',
                            href: '/a/a_incomeSummarize',
                        },
                    ],
                },
                {
                    key: '2',
                    name: '消费',
                    children: [
                        {
                            key: '2-1',
                            name: '消费设置',
                            href: '/a/a_consumeSummarize',
                        },
                    ],
                },
                {
                    key: '3',
                    name: '月收益',
                    children: [
                        {
                            key: '3-1',
                            name: '详情',
                            href: '/a/a_incomeDetails',
                        },
                        {
                            key: '3-2',
                            name: '评价',
                            href: '/a/a_earningsEvaluate',
                        },
                    ],
                },
            ],
        }
    }
    
    changeNavHandle(e) { // 切换页面
        this.setState({
            current: e.key,
        })
    }

    render() {
        return <div className="arouter-wrap">
            <Menu
                theme={this.props.theme}
                onClick={this.changeNavHandle.bind(this)}
                style={{ width: 240 }}
                defaultOpenKeys={['sub1']}
                selectedKeys={[this.state.current]}
                mode="inline"
            >
                {this.state.nav_list.map((item) => {
                    return <SubMenu key={item.key} title={<span>{item.name}</span>}>

                        {item.children.map(item => {
                            return <Menu.Item key={item.key}>
                                <Link to={item.href}>{item.name}</Link>
                            </Menu.Item>
                        })}

                    </SubMenu>
                })}

            </Menu>
    </div>}
}

ARouter.propTypes = {
    theme: PropTypes.string,
}

export default ARouter