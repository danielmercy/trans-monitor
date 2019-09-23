import React from 'react';
import '../styles/Table.scss';

export class Header extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
        this.state = {};
    }

    static Item: React.FC = (props) => {
        return (
            <th>
                {props.children}
            </th>
        );
    }


    render() {
        return (
            <thead>
                <tr>
                    {this.props.children}
                </tr>
            </thead>
        );
    }
}

export class Row extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
        this.state = {};
    }

    static Item: React.FC = (props) => {
        return (
            <td>
                {props.children}
            </td>
        );
    }


    render() {
        return (
            <tr>
                {this.props.children}
            </tr>
        );
    }
}

export class Body extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
        this.state = {};
    }

    static Row = Row;

    render() {
        return (
            <tbody>
                {this.props.children}
            </tbody>
        );
    }
}


export default class Table extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
        this.state ={};
    }

    static Header = Header;
    static Body = Body;

    render() {
        return (
            <table>
                {this.props.children}
            </table>
        )
    }
}