// import './index.scss'
import React from 'react';

export default class extends React.Component {

    render() {
        const { children } = this.props;
        return (
            <header className="x-header">
                {children}
            </header>
        );
    }
}
