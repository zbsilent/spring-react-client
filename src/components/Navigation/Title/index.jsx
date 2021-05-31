import "./index.css";
import React, { useState } from "react";
import {} from "antd";
import {
  Modal,
  Form,
  Checkbox,
  Input,
  Card,
  Avatar,
  Collapse,
  Layout,
  Menu,
  Button,
  List,
  Typography,
} from "antd";
import { IntlProvider, FormattedMessage } from "react-intl";
import zh_CN from "../../../locales/zh_CN";
import axios from "axios";
import { createFromIconfontCN } from "@ant-design/icons";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";

const { Meta } = Card;
const { Header } = Layout;
const { Panel } = Collapse;
const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
const data = [
  "Racing car sprays burning fuel into crowd.",
  "Japanese princess to wed commoner.",
  "Australian walks 100km after outback crash.",
  "Man charged over missing wedding girl.",
  "Los Angeles battles huge wildfires.",
];
export const IconFont = createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/font_2582740_iwnumargvdr.js", // 在 iconfont.cn 上生成
});

export const IconFont2 = createFromIconfontCN({
  scriptUrl: "iconfont.js", // 在 iconfont.cn 上生成
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
  const [isCardVisable, setIsCardVisable] = useState(false);

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
    setIsCardVisable(false);
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

  const openCard = () => {
    setIsCardVisable(true);
  };

  function callback(key) {
    console.log(key);
  }
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
              {/* 这里的按钮打开设置卡片 */}
              <Button
                type="primary"
                shape="circle"
                // icon={<SearchOutlined />}
                icon={<IconFont type="icon-tx" />}
                style={{ display: loginBtnVisable ? "none" : "block" }}
                className="icon_btn"
                onClick={openCard}
              />
              <Modal
                visible={isCardVisable}
                footer={null}
                centered={false}
                width="350px"
                // closable={false}
                onCancel={handleCancel}
                keyboard
                style={{ left: "595px", top: "49px", height: "350px" }}
              >
                <Card style={{ width: 300, marginTop: 16 }}>
                  <Meta
                    avatar={
                      <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                    }
                    title="Card title"
                    description="This is the description"
                  />
                </Card>
                <Card
                  style={{ width: 300 }}
                  bordered={false}
                  // cover={
                  //   <img
                  //     alt="example"
                  //     src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                  //   />
                  // }
                  actions={[
                    <SettingOutlined key="setting" />,
                    <EditOutlined key="edit" />,
                    <EllipsisOutlined key="ellipsis" />,
                  ]}
                >
                  {/* <Meta
                    // avatar={
                    //   <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                    // }
                    title="Card title"
                    description="This is the description"
                  /> */}
                  {/* 幽灵折叠面板 */}
                  {/* <Collapse defaultActiveKey={["1"]} onChange={callback} ghost>
                    <Panel header="This is panel header 1" key="1">
                      <p>{text}</p>
                    </Panel>
                    <Panel header="This is panel header 2" key="2">
                      <p>{text}</p>
                    </Panel>
                    <Panel header="This is panel header 3" key="3">
                      <p>{text}</p>
                    </Panel>
                  </Collapse> */}
                  <List
                    style={{ left: "-20px" }}
                    // header={<div>Header</div>}
                    // footer={<div>Footer</div>}
                    split={false}
                    bordered={false}
                    dataSource={data}
                    renderItem={(item) => (
                      <List.Item>
                        <Typography.Text mark>[ITEM]</Typography.Text> {item}
                      </List.Item>
                    )}
                  />
                </Card>
              </Modal>
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
                  style={{left:'20px'}}
                >
                  <Form.Item
                    label="Username"
                    labelAlign="left"
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
                    labelAlign="left"
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
                    style={{margin: '0px 0px 0px -220px'}}
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
