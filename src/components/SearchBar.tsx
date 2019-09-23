import React from 'react';
import '../styles/Searchbar.scss';

type StyleType = 'outline-bottom' | 'outline';

export default class SearchBar extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className={`search-bar ${this.props.type ? this.props.type : ''}`} style={this.props.style && this.props.style}>
                <span className="icon icon--search"></span>
                <input type="search" name={this.props.name && this.props.name} placeholder={this.props.placeholder && this.props.placeholder} />
            </div>
        );
    }
}