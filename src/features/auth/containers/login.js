import React, { Component } from 'react';
import { string, func } from 'prop-types';
import { connect } from 'react-redux';
import autobind from 'autobind-decorator';

import login from '../actions/login';

const defaultErrors = { username: null, password: null };

const selector = state => {
    return {
        isPending: state.auth.isPending,
        error: state.auth.error
    };
};

@connect(selector, { login })
class Login extends Component {
    state = {
        username: '',
        password: '',
        errors: defaultErrors
    };

    static propTypes = {
        login: func,
        error: string
    };

    render() {
        const { username, password, errors } = this.state;
        const { error } = this.props;
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="username" value={username} onChange={this.handleChange} />
                    { errors.username && <span>{ errors.username }</span> }
                    <br />
                    <input type="password" name="password" value={password} onChange={this.handleChange} />
                    { errors.password && <span>{ errors.password }</span> }
                    <br />
                    { error && <div>{error}</div> }
                    <button type="submit">Войти</button>
                </form>
            </div>
        );
    }

    @autobind
    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value,
            errors: {
                ...this.state.errors,
            }
        });
    }

    @autobind
    handleSubmit(event) {
        event.preventDefault();

        const { username, password } = this.state;
        this.props.login({ username, password }, this.props.location.query.return || '/');
        this.setState({ errors: { ...defaultErrors } });
    }
}

export default Login;
