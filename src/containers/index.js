import React, { Component } from 'react';
import { bool, func } from 'prop-types';
import { connect } from 'react-redux';
import Wallet from 'chunk-wallet';
import init from '../actions/init';

const selector = state => {
    const { isReady } = state.app;
    return { isReady };
};

@connect(selector, { init })
class App extends Component {
    static propTypes = {
        isReady: bool,
        init: func
    }

    componentDidMount() {
        this.props.init();
    }

    render() {
        return this.props.isReady ? <Wallet /> : 'Загрузка...';
    }
}

export default App;
