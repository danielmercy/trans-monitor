import React from 'react';
import '../styles/Button.scss';

type ButtonType = 'icon' | 'btn';

export class Button extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
        this.state = {};
    }

    matchType(type: ButtonType): string {
        return type ? type : 'btn';
    }

    render() {
        return (
            <button className={`${this.props.className && this.props.className} ${this.props.type && this.props.type === 'icon' ? 'icon-btn' : 'btn'}`}>
                {this.props.children}
            </button>
        );
    }
}