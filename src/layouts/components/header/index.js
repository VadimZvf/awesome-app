import React from 'react';
import { Layout, Menu } from 'antd';

const Header = () => (
    <Layout.Header className="header">
        <div className="logo" />
        <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['Wallet']}
            style={{ lineHeight: '64px' }}
        >
            <Menu.Item key="Wallet">Wallet</Menu.Item>
        </Menu>
    </Layout.Header>
);

export default Header;
