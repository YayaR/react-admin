import React from 'react';
// import Kider from './routes/AAA';
import './App.less';
import { Layout, Breadcrumb} from 'antd';
// import Kider from './routes/AAA';
import { Link } from 'dva/router';
import { Menu, Icon } from 'antd';

const SubMenu = Menu.SubMenu;
const { Content, Footer, Sider } = Layout;

class HomeLayout  extends React.Component {

  render() {
    const {children} = this.props;
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider>
        <div >
            <Menu mode="inline" theme="dark" >
            <SubMenu key="sub1" title={<span><Icon type="mail" /><span>Navigation One</span></span>}>
            <Menu.Item key="1"><Link to="/bbb">Option 1</Link></Menu.Item>
            <Menu.Item key="2"><Link to="/bbb">Option 1</Link></Menu.Item>
            <Menu.Item key="3"><Link to="/bbb">Option 1</Link></Menu.Item>
            <Menu.Item key="4"><Link to="/bbb">Option 1</Link></Menu.Item>
          </SubMenu>
            </Menu>
          </div>
        </Sider>
        <Layout>
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
            {children}
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            Ant Why ©2018 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    );
  }
}



export default HomeLayout ;
