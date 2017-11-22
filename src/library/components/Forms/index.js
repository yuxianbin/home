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

                    if (item.noAddShow && !isUpdate) { // 添加操作不渲染
                        return null
                    }

                    return <FormItem
                        key={index}
                        label={item.name}
                        hasFeedback
                    >
                    {function() {
                            let required = [] // 验证规则对象

                            if (obj_type === 'Array') { // array类型
                                required = item.required
                            }
                            if (item.required && obj_type === 'Boolean') { // true
                                required = [{
                                    required: true, message: `请输入${item.name}`,
                                }]
                            }

                            return getFieldDecorator(key, {
                                        rules:  required,
                                        initialValue: that.props.form_data[key],
                                    })(<Input disabled={item.disabled && isUpdate}/>)
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

    handleOk() {
        let myForm = this.refs['myform']

        myForm.validateFields((errors, values) => { // errors: 验证没通过；values form的值
            let form_data = this.props.form_data

            if (errors) {
                return null
            }

            Object.assign(form_data, values)
            this.props.handleOk(form_data)

        })
    }

    handleCancel() {
        this.props.handleCancel()
    }

    render() {
        return <Modal
            title={this.props.title}
            visible={this.props.visible}
            onOk={this.handleOk.bind(this)}
            onCancel={this.handleCancel.bind(this)}
            >
            {this.props.visible ? <CustomizedForm ref="myform"
                                                  action_type={this.props.action_type}
                                                  form_data={this.props.form_data}
                                                  form_label={this.props.form_label}
            />: null}
        </Modal>
    }
}

/***
 * form_label     表单配置参数
 *      name         名字
 *      required     true代表需要验证启用默认验证；ArrayObject 自定义验证方法
 *      noAddShow    添加操作下不渲染
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