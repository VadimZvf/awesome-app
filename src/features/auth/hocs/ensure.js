import React, { Component } from 'react';
import { bool, string } from 'prop-types';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';

export default function (ComposedComponent, options = {}) {
    const selector = state => {
        const { isAuthenticated, role } = state.auth;
        return { isAuthenticated, role };
    };

    @connect(selector)
    class AuthenticatedComponent extends Component {
        static propTypes = {
            isAuthenticated: bool,
            role: string
        };

        constructor(props) {
            super(props);

            this.redirectTo = options.redirectTo || '/login';
            this.roles = options.roles || [];
        }

        componentWillMount() {
            this.checkAuth(this.props.isAuthenticated);
        }

        componentWillReceiveProps(nextProps) {
            this.checkAuth(nextProps.isAuthenticated);
        }

        checkAuth(isAuthenticated) {
            if (!isAuthenticated) {
                const path = this.props.location.pathname;
                browserHistory.push(path === '/' ? this.redirectTo : `${this.redirectTo}?return=${path}`);
            } else if (this.roles.length && this.roles.indexOf[this.props.role] === -1) {
                browserHistory.push('/not-found');
            }
        }

        render() {
            return this.props.isAuthenticated ? <ComposedComponent {...this.props} /> : null;
        }
    }

    return AuthenticatedComponent;
}
