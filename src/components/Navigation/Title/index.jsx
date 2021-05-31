import "./index.css";
import React, { useState } from "react";
import { Layout, Menu, Button } from "antd";
import { Modal, Form, Checkbox, Input, Tooltip } from "antd"; 
import { IntlProvider, FormattedMessage } from "react-intl";
import zh_CN from "../../../locales/zh_CN";
import axios from "axios";
import { createFromIconfontCN } from "@ant-design/icons";

const { Header } = Layout;
 
export const IconFont = createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/font_2582740_iwnumargvdr.js", // 在 iconfont.cn 上生成
});

export const IconFont2 = createFromIconfontCN({
  scriptUrl:'iconfont.js', // 在 iconfont.cn 上生成
});
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};
const MainTitle = (props) => {
  /** 设置默认的语言为zhcn */

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [loginBtnVisable, setLoginBtnVisable] = useState(true);
  const [collapsed, setCollapsed] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
    //这里要修改公共状态才行
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  /** axios访问 */
  //{username: "sdaf a", password: "asdfasdf", remember: true}

  const login = (value) => {
    // 获取参数
    let { value: keyWord } = value;
    const { username, password, remember } = value;
    //通知AP P更新呢状态
    //props.updateAppState({isFirst:false,isLoading:true,users:[],err:''})
    //http://127.0.0.1:8081/user/business?userName=root&userPass=roo
    axios
      .get("http://localhost:3000/user/business", {
        params: { userName: "root", userPass: "123" },
      })
      .then((response) => {
        //	props.updateAppState({isLoading:false,users:response.data.items,err:'',isFirst:false})
        console.log(response.data);
        setLoginBtnVisable(false);
        handleCancel();
      })
      .catch((error) => {
        console.log(error);
        //	props.updateAppState({isLoading:false,err:error.message,users:[],isFirst:false})
      })
      .finally(() => {
        // TODO
      });
  };

  const onFinish = (values) => {
    login(values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
 

  return (
    <div>
      <IntlProvider locale={zh_CN} key={zh_CN} messages={zh_CN}>
        <Header>
          <div className="logo" />
          <Menu
            className="menuTd"
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["2"]}
          >
            <Menu.Item key="1">nva 1</Menu.Item>
            <Menu.Item key="2">nav 2</Menu.Item>
            <Menu.Item key="3">nav 3</Menu.Item>
            {/* <h1 className="h_hh_hhh">
              状态:{props.visable === true ? "打开" : "关闭"}
            </h1> */}

            <div className="div_btn_1">
              <Button
                onClick={showModal}
                type="primary"
                shape="circle"
                style={{ display: loginBtnVisable ? "block" : "none" }}
              >
                <FormattedMessage id="btn_login_ch" />
              </Button>
              &nbsp;
              {/* 增加一个列表组件 */}
              {/* <Button type="primary" style={{ marginBottom: 16 ,display:loginBtnVisable?'none':'block'}}  >
         
        </Button> */}
              <Tooltip title="search">
                <Button
                  type="primary"
                  shape="circle"
                  // icon={<SearchOutlined />}
                  icon={<IconFont/>}
                  style={{ display:loginBtnVisable?'none':'block'}}
                  className="icon_btn"
                />
              </Tooltip>
              <Modal
                title="Basic Modal"
                visible={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
                footer={null}
              >
                <Form
                  {...layout}
                  name="basic"
                  initialValues={{
                    remember: true,
                  }}
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                >
                  <Form.Item
                    label="Username"
                    name="username"
                    rules={[
                      {
                        required: true,
                        message: "Please input your username!",
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>

                  <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                      {
                        required: true,
                        message: "Please input your password!",
                      },
                    ]}
                  >
                    <Input.Password />
                  </Form.Item>

                  <Form.Item
                    {...tailLayout}
                    name="remember"
                    valuePropName="checked"
                  >
                    <Checkbox>Remember me</Checkbox>
                  </Form.Item>

                  <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit">
                      Submit
                    </Button>
                    &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp;
                    &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;
                    &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;
                    <Button htmlType="button" onClick={handleCancel}>
                      Cancel
                    </Button>
                  </Form.Item>
                </Form>
              </Modal>
            </div>
          </Menu>
        </Header>
      </IntlProvider>
    </div>
  );
};
export default MainTitle;
// export  default connect(
//   state=>({
//       users:state.userArray,
//   }),
//   {
//      login: createAddPersonAaction
//   }
// )(MainTitle)
