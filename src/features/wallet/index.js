import AsyncComponent from '../../components/async-wrap';

function importFunc() {
    return import(/* webpackChunkName: "wallet" */ 'chunk-wallet');
}

export default AsyncComponent(importFunc);
