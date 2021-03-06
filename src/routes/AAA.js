import React from 'react';
import { Link } from 'dva/router';
import { Menu, Icon } from 'antd';

const SubMenu = Menu.SubMenu;

class sider extends React.Component {
  
  state = {
    theme: 'dark',
    current: '1',
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
    return (
      <div>
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
      </div>
    );
  }
}

export default sider;
