import React from 'react';
import { Link } from 'react-router';
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
            <Menu.Item key="Wallet">
                <Link to="/wallet">Wallet</Link>
            </Menu.Item>
        </Menu>
    </Layout.Header>
);

export default Header;
