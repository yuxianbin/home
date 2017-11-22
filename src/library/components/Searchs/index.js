/**
 * Revised by zhusass on 2017/11/22.
 */

import React from 'react'
import { Select, Input } from 'antd';


import './index.less'

const Search = Input.Search
const Option = Select.Option

class Searchs extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            placeholder: '请输入关键词',
            serachWidth: 200,
            selectWidth: 120,
        }
    }

    render() {
        return <div className="search-wrap">
              <div className="search-condition">
                  <Select defaultValue={this.props.selectAction}
                          onChange={this.props.changeSelectHandle}
                          style={{ width: this.props.selectWidth || this.state.selectWidth}}>
                      {this.props.selectLists.map((item, index) => {

                          return <Option key={index} value={item.val}>{item.label}</Option>

                      })}
                  </Select>
              </div>
              <div className="search-main">
                  <Search
                      placeholder={this.props.placeholder || this.state.placeholder}
                      style={{ width: this.props.serachWidth || this.state.serachWidth}}
                      onSearch={value => this.props.changeSerachHandle(value)}
                  />
              </div>
        </div>
    }
}

Searchs.defaultProps = {
    selectLists: [], // 选中器里的列表名称
    selectAction: '', // 当前选中
    selectWidth: 0,
    changeSelectHandle: () => {},

    serachVal: '', // 当前搜索的关键词
    serachWidth: 0, // 搜索框宽度
    placeholder: '',
    changeSerachHandle: () => {},
}

export default Searchs