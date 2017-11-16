import React from 'react'
import PropTypes from 'prop-types'
import {
    Link,
} from 'react-router-dom'

import { Menu, } from 'antd';

import './index.less'

const SubMenu = Menu.SubMenu;

class ANav extends React.Component {

    constructor(props) {
        super(props)

        this.state= {
            current: '1',
            nav_list: [
                {
                    key: '1',
                    name: '月收入',
                    children: [
                        {
                            key: '1-1',
                            name: '概括',
                            href: '/a/a_incomeSummarize',
                        },
                        {
                            key: '1-2',
                            name: '其它收入',
                            href: '/a/a_otherIncome',
                        },
                    ],
                },
                {
                    key: '2',
                    name: '月消费',
                    children: [
                        {
                            key: '2-1',
                            name: '概括',
                            href: '/a/a_consumeSummarize',
                        },
                        {
                            key: '2-2',
                            name: '其它消费',
                            href: '/a/a_otherConsume',
                        },
                    ],
                },
                {
                    key: '3',
                    name: '月收益',
                    children: [
                        {
                            key: '3-1',
                            name: '概括',
                            href: '/a/a_earningsEarnings',
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
        return <div className="anav">
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

ANav.defaultProps = {
    theme: PropTypes.string,
}

export default ANav