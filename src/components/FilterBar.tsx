import React from 'react';
import '../styles/Button.scss';

type ButtonType = 'icon' | 'btn';

export const Title: React.FC = (props) => {
    return (
        <>
            <span className="table__header__title">
                {props.children}
            </span>
        </>
    )
}

export const Content: React.FC = (props) => {
    return (
        <>
            <span className="table__header__content">
                {props.children}
            </span>
        </>
    )
}

export default class FilterBar extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
        this.state = {};
    }

    matchType(type: ButtonType): string {
        return type ? type : 'btn';
    }

    static Title = Title;
    static Content = Content;

    render() {
        return (
            <div className="table__header">
                
                
                    <div className="selector">
                        <span className="label">Showing</span>
                        <select name="pagination" id="pagination">
                            <option value="20">20</option>
                            <option value="40">40</option>
                            <option value="60">60</option>
                        </select>
                        <span className="description">Out of 500 payments</span>
                    </div>

                    <div className="search-bar">
                        <input type="search" name="search_payemnt" placeholder="Search payments" />
                    </div>
                </div>
        );
    }
}