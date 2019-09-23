import React from 'react';
import '../styles/Card.scss';

export const Description: React.FC = (props: any) => {
    return (
        <div className="info__description">
            {props.children}
        </div>
    );
};

export const Value: React.FC = (props: any) => {
    return (
        <div className="info__value">
            {props.children}
        </div>
    );
};

export class Info extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
        this.state = {};
    }

    static Description = Description;
    static Value = Value;

    render() {
        return (
            <div className="info">
                {this.props.children}
            </div>
        );
    }
}

export default class Card extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
        this.state = {};
    }

    static Info = Info;

    render() {
        return (
            <div className={`card ${this.props.flex ? 'flex' : ''}`}>
                {this.props.children}
            </div>
        );
    }
}




