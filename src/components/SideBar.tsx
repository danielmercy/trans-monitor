import React from 'react';
import '../styles/Sidebar.scss'
import { Button } from './Button';

export default class SideBar extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <aside>
                <div className="aside__nav">
                    <div className="link-group button">
                        <Button className="btn--invoice" type="btn">
                            <span>generate invoice</span>
                        </Button>
                    </div>
                    <div className="link-group">
                        <label>Main</label>
                        <a href="#" className="active">
                            <span className="icon icon--overview"></span>
                            <span>Overview</span>
                        </a>
                    </div>
                    <div className="link-group">
                        <label>Payments</label>
                        <a href="#" className="">
                            <span className="icon icon--all-payments"></span>
                            <span>All Payments</span>
                        </a>
                        <a href="#" className="">
                            <span className="icon icon--reconcilled-payments"></span>
                            <span>Reconcilled Payments</span>
                        </a>
                        <a href="#" className="">
                            <span className="icon icon--unreconcilled-payments"></span>
                            <span>Un - Reconcilled Payments</span>
                        </a>
                        <a href="#" className="">
                            <span className="icon icon--manual-settlement"></span>
                            <span>Manual Settlement</span>
                        </a>
                    </div>
                    <div className="link-group">
                        <label>Orders</label>
                        <a href="#" className="">
                            <span className="icon icon--all-orders"></span>
                            <span>All Orders</span>
                        </a>
                        <a href="#" className="">
                            <span className="icon icon--pending-orders"></span>
                            <span>Pending Orders</span>
                        </a>
                        <a href="#" className="">
                            <span className="icon icon--reconcilled-orders"></span>
                            <span>Reconcilled Orders</span>
                        </a>
                    </div>
                    <div className="link-group">
                        <a href="#" className="">
                            <span className="icon icon--merchant-profile"></span>
                            <span>Merchant Profile</span>
                        </a>
                    </div>
                </div>
            </aside>
        );
    }
}