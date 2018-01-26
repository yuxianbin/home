/**
 * Revised by peter on 2017/11/13.
 */
import React from 'react'

import { Modal, Button,Form,Input, } from 'antd';


import './index.less'

const FormItem = Form.Item;

class FamilyInfo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          createFamilyModalVisible: false, // false:family不存在，true：family存在
        }
    }

    showModal = () => {
      this.setState({
        createFamilyModalVisible: true,
      });
    }
    createFamilyRequestHandle () { 
      this.setState({createFamilyModalVisible: false })
    }
    cancelCreateFamilyhandle () {
      console.log('-----------------------')
      this.setState({ createFamilyModalVisible: true })
    }

    render() {
        return <div className="familyinfo-wrap">
                  <div className="familyinfo-name">
                        <Modal
                          visible={(this.state.createFamilyModalVisible === false)}
                          title="您还没有创建家庭，请先创建家庭"
                          onOk={this.createFamilyRequestHandle}
                          onCancel={this.cancelCreateFamilyhandle}
                          footer={[
                            <Button key="back" onClick={this.cancelCreateFamilyhandle.bind(this)}>取消</Button>,
                            <Button key="submit" type="primary" onClick={this.createFamilyRequestHandle.bind(this)}>
                              创建
                            </Button>,
                          ]}
                        >
                          <Form onSubmit={this.handleSubmit}>
                              <FormItem
                                label="家庭名字"
                              >
                                {/*{getFieldDecorator('email', {
                                  rules: [{
                                    type: 'email', message: 'The input is not valid E-mail!',
                                  }, {
                                    required: true, message: 'Please input your E-mail!',
                                  }],
                                })(
                                  <Input />
                                )}*/}
                                <Input />
                              </FormItem>
                           </Form>
                        </Modal>
                  </div>
        </div>
    }
}

export default FamilyInfo