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
                /* eslint-disable no-console */
                console.error(err);
                /* eslint-enable no-console */
                this.setState({ component: 'Ошибка загрузки' });
            });
        }

        render() {
            return <div>{this.state.component}</div>;
        }
    }

    return ImportedComponent;
}
