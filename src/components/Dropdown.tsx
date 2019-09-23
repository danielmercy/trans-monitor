import React from 'react';
import ReactDOM from 'react-dom';
import '../styles/Dropdown.scss';

type StyleType = 'pagination' | 'list';

const Prefix: React.FC = (props) => {
    return (
        <span className="dropdown__prefix">{props.children}</span>
    );
}

const Postfix: React.FC = (props) => {
    return (
        <span className="dropdown__postfix">{props.children}</span>
    );
}

export class MenusItem extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
        this.state = {};

    }
    
    onPress() {}

    render() {
        if(this.props.value) return (<a onClick={this.onPress} href={this.props.href && this.props.href} className="menus__item"><span>{this.props.value}</span></a>);
        return (<></>);
    }
}

export class Menus extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
        this.state = {};
    }

    static Item = MenusItem;

    render() {
        return (
            <div className={`dropdown__menus ${this.props.pagination ? 'dropdown__menus--pagination' : ''}`}>
                <label htmlFor="dropdown-menus">{this.props.label ? this.props.label : ''}</label>
                <div className="menus">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default class Dropdown extends React.Component<any, any> {

    node: any;

    constructor(props: any) {
        super(props);
        this.state = {};

        this.activate = this.activate.bind(this);

    }
    
    static Prefix = Prefix;
    static Postfix = Postfix;
    static Menus = Menus;
    
    componentDidMount() {
        const ref: any = ReactDOM.findDOMNode(this);
        ref.addEventListener('click', this.activate);
        
    }

    activate(event: any) {
        const target = event.target
        target.classList.toggle('active');
    }

    render() {
        return (
            <div className={`dropdown ${this.props.active ? 'active': ''}`}>
                {this.props.children}
            </div>
        );
    }
}