import React from 'react';
import '../styles/ValueInfo.scss';

export default class ValueInfo extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
        this.state = {};
    }

    span_style = {
        marginLeft: '5px'
    }

    render() {
        return (
            <div className="data-info">
                <span className="data-info__pending">
                    Pending Orders:
                    <span style={this.span_style}>{this.props.data && this.props.data[1]}</span> 
                </span>
                <span className="data-info__reconcilled">
                    Reconcilled Orders: 
                    <span style={this.span_style}>{this.props.data && this.props.data[0]}</span>
                </span>
                <span className="data-info__total">
                    Total: 
                    <span style={this.span_style}>{this.props.data && (this.props.data[0] + this.props.data[0])}</span>
                </span>
            </div>
        );
    }
}