import React, { Component } from 'react';

export default function (ImportPromise) {
    class ImportedComponent extends Component {
        state = {
            component: <b>Loading...</b>
        }

        componentWillMount() {
            ImportPromise().then(component => {
                this.setState({ component: <component.default /> });
            }).catch(err => {
                console.error(err);
                this.setState({ component: 'Ошибка загрузки' });
            });
        }

        render() {
            return <div>{this.state.component}</div>;
        }
    }

    return ImportedComponent;
}
