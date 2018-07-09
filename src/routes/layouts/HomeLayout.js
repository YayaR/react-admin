import React from 'react';
import './home.less';
// import './App.css';
import { Layout, Breadcrumb} from 'antd';
// import Kider from './routes/AAA';
import { Link } from 'dva/router';
import { Menu, Icon } from 'antd';

const SubMenu = Menu.SubMenu;
const { Content, Footer, Sider,Header } = Layout;

class HomeLayout  extends React.Component {

  state = {
    theme: 'dark',
    current: '1',
    collapsed: false,
  }
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
  changeTheme = (value) => {
    this.setState({
      theme: value ? 'dark' : 'light',
    });
  }
  componentDidMount = () => {
    console.log(this.state.current)
  }
  handleClick = (e) => {
    console.log(e);
    this.setState({
      current: e.key,
    });
  }
  render() {
    const {children} = this.props;
    return (
      <Layout style={{ minHeight: '100vh' }}>
      
       <Header style={{ background: '#3c8dbc', padding: 0 ,width:'100%'}}>
          <img className="logoimg" alt="img" src="https://raw.githubusercontent.com/YayaR/yayar.github.io/11cd3bc79faf13d5143381daf3dd0cef5fab4088/logo.png"></img>
            <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
            
        </Header>
        <Layout style={{ minHeight: '100vh' }}>
        <Sider   trigger={null}
          collapsible 
          collapsed={this.state.collapsed}>
            <Menu
              theme={this.state.theme}
              onClick={this.handleClick}
              // style={{ width: 256 }}
              defaultOpenKeys={['sub1','sub2','sub4']}
              defaultSelectedKeys={['4']}
              // selectedKeys={[this.state.current]}
              mode="inline"
            >
              <SubMenu key="sub1" title={<span><Icon type="mail" /><span>Navigation One</span></span>}>
                <Menu.Item key="1"><Link to="/bbb">Option 1</Link></Menu.Item>
                <Menu.Item key="2"><Link to="/bbb">Option 1</Link></Menu.Item>
                <Menu.Item key="3"><Link to="/bbb">Option 1</Link></Menu.Item>
                <Menu.Item key="4"><Link to="/bbb">Option 1</Link></Menu.Item>
              </SubMenu>
              <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>Navigtion Two</span></span>}>
                <Menu.Item key="5">Option 5</Menu.Item>
                <Menu.Item key="6">Option 6</Menu.Item>
                <SubMenu key="sub3" title="Submenu">
                  <Menu.Item key="7">Option 7</Menu.Item>
                  <Menu.Item key="8">Option 8</Menu.Item>
                </SubMenu>
              </SubMenu>
              <SubMenu key="sub4" title={<span><Icon type="setting" /><span>Navigation Three</span></span>}>
                <Menu.Item key="9">Option 9</Menu.Item>
                <Menu.Item key="10">Option 10</Menu.Item>
                <Menu.Item key="11">Option 11</Menu.Item>
                <Menu.Item key="12">Option 12</Menu.Item>
              </SubMenu>
            </Menu>
          
        </Sider>
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
            {children}
            </div>
          </Content>
          </Layout>      
          <Footer style={{ textAlign: 'center' }}>
            Ant Why ©2018 Created by Ant UED
            </Footer>      
        </Layout>
    );
  }
}



export default HomeLayout ;
