import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom'

import { DatePicker, } from 'antd';

import tools from '../../library/tools/index'

import ANav from './a_nav/index' // 页面路由

import a_incomeSummarize from '../a_incomeSummarize/index' // 月收入->月收入设置
import a_consumeSummarize from '../a_consumeSummarize/index' // 月消费->月消费设置
import a_IncomeDetails from '../a_incomeDetails/index' // 月收益->概括
import a_earningsEvaluate from '../a_earningsEvaluate/index' // 月收益->评价

import './index.less'

// 用户头像
class UserInfo extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            img_obj_url: '',
        }
    }

    uploadUserImgHandle(ev) {
        let img_obj = ev.target.files[0]
        let img_obj_url = window.URL['createObjectURL'](img_obj)

        this.setState({
            img_obj_url: img_obj_url,
        })
        this.props.uploadUserImgRequest(img_obj)
    }

    render() {
        return <div className="userinfo-wrap">
            <div className="main-user-img">
                <img src={this.state['img_obj_url'] || this.props.user_url} className="user-img-img" alt=""/>
                <input type="file" onChange={(ev) => {this.uploadUserImgHandle(ev)}} className="user-img-input"/>
            </div>
            <div className="main-user-name">
                {this.props.user_name}
            </div>
        </div>
    }
}

UserInfo.defaulteProps = {
    user_url: PropTypes.string,
    user_name: PropTypes.string,
    uploadUserImgRequest: PropTypes.func,
}

class AIndex extends React.Component {

    constructor(props) {
        super(props)

        this.state= {
            user_url: '',
            user_name: '未命名',
            theme: 'dark',
            currentTime: '',
        }
    }

    componentWillMount() {
        let user_url = tools.getCookie('user_url') || 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3505995965,2781827203&fm=27&gp=0.jpg'
        let user_name = tools.getCookie('user_name') || '未命名'
        let currentTime = tools.getCookie('current_time') || tools.getTime()

        this.setState({
            user_url: user_url,
            user_name: user_name,
            currentTime: currentTime,
        })
    }
    
    uploadUserImgRequest(img_obj) { // 上传用户头像
        console.log('img_obj:', img_obj)
    }

    changeCurrentDate(info) {
        let current_time = tools.getTime(info._d)

        tools.setCookie('current_time', current_time)
    }

    render() {
        return <Router>
            <div className="aindex">
                <div className="aindex-main">
                    <div className="main-user">
                        <UserInfo user_url={this.state.user_url}
                                  user_name={this.state.user_name}
                                  uploadUserImgRequest={this.uploadUserImgRequest.bind(this)}/>
                    </div>

                    <div className="main-navlist">
                        <ANav theme={this.state.theme}/>
                    </div>
                    <div className="main-date">
                        <DatePicker defaultValue={moment(this.state.currentTime, 'YYYY/MM/DD')}
                                    onChange={this.changeCurrentDate.bind(this)}
                                    placeholder="Select month"/>
                    </div>
                </div>

                <div className="aindex-content">
                    <Route exact path={`${this.props.match.url}/a_incomeSummarize`} component={a_incomeSummarize}/>
                    <Route path={`${this.props.match.url}/a_consumeSummarize`} component={a_consumeSummarize}/>
                    <Route path={`${this.props.match.url}/a_incomeDetails`} component={a_IncomeDetails}/>
                    <Route path={`${this.props.match.url}/a_earningsEvaluate`} component={a_earningsEvaluate}/>
                </div>
            </div>
        </Router>

    }
}

export default AIndex