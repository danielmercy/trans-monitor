import React from 'react';
import '../styles/Status.scss';

type StatusType = 'pending' | 'reconcilled' | 'unreconcilled';

export class Status extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
        this.state = {};
    }

    matchType(type: StatusType): string {
        return type ? type : 'unreconcilled';
    }

    render() {
        return (
            <div className={`status status--${this.matchType(this.props.type)}`}>
                <span>{this.props.type && this.matchType(this.props.type) === 'pending' 
                        ? 'Pending' : this.matchType(this.props.type) === 'reconcilled' 
                        ? 'Reconcilled' : 'Un - Reconcilled' }</span>
            </div>
        );
    }
}