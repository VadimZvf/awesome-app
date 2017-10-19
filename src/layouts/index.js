import React from 'react';
import { node } from 'prop-types';
import { Layout } from 'antd';
import Header from './components/header';
import Footer from './components/footer';
import './index.css';

const Wrapper = props => {
    return (
        <Layout className="layout">
            <Header />
            <Layout.Content className="layout__content">
                { props.children }
            </Layout.Content>
            <Footer />
        </Layout>
    );
};

Wrapper.propTypes = {
    children: node
};

export default Wrapper;
