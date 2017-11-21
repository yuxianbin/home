/**
 * Revised by zhusass on 2017/11/21.
 */

import React from 'react'
import { Modal, Form, Input } from 'antd';

import tools from '../../tools/index'

import './index.less'

const FormItem = Form.Item

// table
class FormsContent extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { getFieldDecorator } = this.props.form

        return (<div className="formscontent">
            <Form>
                {Object.keys(this.props.form_label).map((key, index) => {
                    const that = this
                    let item = this.props.form_label[key]
                    let obj_type = tools.getObjectType(item.required)
                    let isUpdate = this.props.action_type === 'update'

                    return <FormItem
                        key={index}
                        label={item.name}
                        hasFeedback
                    >
                    {function() {
                            if (obj_type === 'Array') {
                                return getFieldDecorator(key, {
                                    rules:  item.required,
                                    initialValue: that.props.form_data[key],
                                })(<Input disabled={item.disabled && isUpdate}/>)
                            }
                            if (item.required && obj_type === 'Boolean') {
                                return getFieldDecorator(key, {
                                    rules: [{
                                        required: true, message: `请输入${item.name}`,
                                    }],
                                    initialValue: that.props.form_data[key],
                                })(<Input disabled={item.disabled && isUpdate}/>)
                            }
                            return <Input disabled={item.disabled && isUpdate}
                                          defaultValue={that.props.form_data[key]}/>
                        }()
                    }
                    </FormItem>
                })}

            </Form>
        </div>)
    }
}

FormsContent.defaulteProps = {
    form_data: {},
    form_label: {},
    action_type: 'add',
}

let CustomizedForm = Form.create({})(FormsContent) // 包装下table对象

class Forms extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        console.log(111, this.refs)
    }

    componentWillReceiveProps(nextProps) {
        console.log(11111, nextProps.form_data)
    }

    handleCancel() {
        this.props.handleCancel()
    }

    render() {
        return <Modal
            title={this.props.title}
            visible={this.props.visible}
            onOk={this.props.handleOk}
            onCancel={this.handleCancel.bind(this)}
            >
            <CustomizedForm ref="myform"
                            action_type={this.props.action_type}
                            form_data={this.props.form_data}
                            form_label={this.props.form_label}
                            handleOk={this.props.handleOk.bind(this)}
               />
        </Modal>
    }
}

/***
 * form_label     表单配置参数
 *      name         名字
 *      required      true代表需要验证启用默认验证；ArrayObject 自定义验证方法
 *
 * form_data      表单数据/object
 * action_type    当前操作类型，add/添加   update编辑
 * title          弹框标题
 * visible        弹框显示隐藏
 * handleOk       确认提交
 * handleCancel   取消
 * ***/

Forms.defaultProps = {
    form_data: {},
    title: '',
    action_type: 'add',
    form_label: {},
    visible: false,
    handleOk: () => {},
    handleCancel: () => {},
}

export default Forms