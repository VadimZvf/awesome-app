import React from 'react';
import { node } from 'prop-types';
import Header from './components/header';
import Footer from './components/footer';

const Layout = props => {
    return (
        <section>
            <Header />
            { props.children }
            <Footer />
        </section>
    );
};

Layout.propTypes = {
    children: node
};

export default Layout;
