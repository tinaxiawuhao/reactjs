import React from 'react'
import {Layout, Menu, Icon} from 'antd';
import Link from 'umi/link';

const {Header, Footer, Sider, Content} = Layout;
const SubMenu = Menu.SubMenu;

class BasicLayout extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            collapsed: false,
        }
    }

    render(){
        return (
            <Layout>
                <Sider width={256} style={{minHeight: '100vh', color: 'white'}}>
                    <div style={{ height: '32px', background: 'rgba(255,255,255,.2)', margin: '16px'}}/>
                    <Menu defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        mode="inline"
                        theme="dark"
                        inlineCollapsed={this.state.collapsed}>
                        <SubMenu key="sub1" title={<span><Icon type="user"/><span>用户管理</span></span>}>
                            <Menu.Item key="1">
                                <Link to="/user/list">用户列表</Link>
                            </Menu.Item>
                            <Menu.Item key="2">
                                <Link to="/user/add">新增用户</Link>
                            </Menu.Item>
                        </SubMenu>
                        {/*<Menu.Item key="1">
                            <Icon type="pie-chart"/>
                            <span>Option 1</span>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Icon type="desktop"/>
                            <span>Option 2</span>
                        </Menu.Item>
                        <Menu.Item key="3">
                            <Icon type="inbox"/>
                            <span>Option 3</span>
                        </Menu.Item>
                        <SubMenu key="sub1" title={<span><Icon type="mail"/><span>Navigation One</span></span>}>
                            <Menu.Item key="5">Option 5</Menu.Item>
                            <Menu.Item key="6">Option 6</Menu.Item>
                            <Menu.Item key="7">Option 7</Menu.Item>
                            <Menu.Item key="8">Option 8</Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub2" title={<span><Icon type="appstore"/><span>Navigation Two</span></span>}>
                            <Menu.Item key="9">Option 9</Menu.Item>
                            <Menu.Item key="10">Option 10</Menu.Item>
                            <SubMenu key="sub3" title="Submenu">
                                <Menu.Item key="11">Option 11</Menu.Item>
                                <Menu.Item key="12">Option 12</Menu.Item>
                            </SubMenu>
                        </SubMenu>*/}
                    </Menu>
                </Sider>
                <Layout>
                    <Header style={{ background:'#fff', textAlign: 'center', padding: 0 }}>Header</Header>
                    <Content style={{ margin: '24px 16px 0' }}>
                        <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                            {this.props.children}
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>后台系统 ©2018 Created by 程序员</Footer>
                </Layout>
            </Layout>
        );
    }
}

export default BasicLayout;
