import React from 'react';
import { Link } from 'react-router';
import { Icon } from 'antd';
import './index.css';

const Main = () => (
    <div className="main">
        <h1>Widget manager</h1>
        <div className="main__widgets">
            <Link className="main__widget" to="/wallet">
                <Icon className="main__widget-icon" type="wallet" />
                <span className="main__widget-name">Wallet</span>
            </Link>
        </div>
    </div>
);

export default Main;
