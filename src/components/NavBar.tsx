import React from 'react';
import ReactDOM from 'react-dom';
import '../styles/Navbar.scss'
import { Button } from './Button';

export default class NavBar extends React.Component<any,any> {

    constructor(props: any) {
        super(props);
        this.state = {
            hiddenLinks: true
        };
    }

    componentDidMount() {
        const links: any = ReactDOM.findDOMNode(this);
        links.addEventListener('click', () => {
            this.setState({
                hiddenLinks: !this.state.hiddenLinks
            })
        })
    }


    render() {
        return (
            <header>
                <div className="logo"><span>TransMonitor</span></div>
                <div className="search-bar">
                    <span className="icon icon--search"></span>
                    <input type="search" name="search" id="search" placeholder="Search....." />
                </div>
                <div className={`links ${this.state.hiddenLinks ? 'hide': ''}`}>
                    <a href="#support" className="route-links">Support</a>
                    <a href="#faq" className="route-links">FAQ</a>
                    <button className="icon-btn">
                        <span className="icon-btn--badge">8</span>
                        <span className="icon icon--notification"></span>
                    </button>
                    <a href="#" className="route-links user-info">
                        <div className="user-info__text">
                            <span className="user-info__text--message">Hello</span>
                            <span className="user-info__text--name">Oluwaleke Ojo</span>
                        </div>
                        <div className="user-info__avatar">
                            <img src="../icons/image.svg" alt="merchart profile avatar" />
                        </div>
                    </a>
                </div>
                <Button className="link--trigger" type="icon">
                    <span className="icon icon--arrow-down"></span>
                </Button>
            </header>
        );
    }
}