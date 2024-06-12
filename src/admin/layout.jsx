import React, { useState } from 'react';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';
import { Button, Layout, Menu, theme } from 'antd';
import { Outlet, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
const { Header, Sider, Content } = Layout;
const AdminLayout = () => {
    const [collapsed, setCollapsed] = useState(false);
    const naviagte = useNavigate()
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    return (
        <Layout>
            
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <div className="demo-logo-vertical" />

                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    items={[
                        {
                            key: '1',
                            icon: <UserOutlined />,
                            label: 'Đơn Hàng',
                            onClick: () => naviagte('/admin/order')
                        },
                        {
                            key: '2',
                            icon: <VideoCameraOutlined />,
                            label: 'Sản Phẩm',
                            onClick: () => naviagte('/admin/product')
                        },
                        {
                            key: '3',
                            icon: <UploadOutlined />,
                            label: 'Category',
                            onClick: () => naviagte('/admin/category')
                        },

                    ]}
                />
            </Sider>
            <Layout>
              

                <Header
                    style={{
                        padding: 0,
                        background: colorBgContainer,
                    }}
                    
                >
                   
                    <Button
                        type="text"
                        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                        onClick={() => setCollapsed(!collapsed)}
                        style={{
                            fontSize: '16px',
                            width: 64,
                            height: 64,
                        }}
                    />
                    <span>User info</span>

                </Header>
          
                <Content
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                        background: colorBgContainer,
                        borderRadius: borderRadiusLG,
                    }}
                >
                    <Outlet>
                        
                    </Outlet>
                </Content>
            </Layout>
        </Layout>
    );
};
export default AdminLayout;