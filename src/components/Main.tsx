import React from 'react';
import '../styles/Main.scss';
import Card, { Info } from './Card';
import Sparkline from './SparkLine';
import Timeseries from './Timeseries';
import ValueBar from './ValueBar';
import Table, { Header, Body, Row } from './Table';
import { Status } from './Status';
import { Button } from './Button';
import SearchBar from './SearchBar';
import Dropdown from './Dropdown';


export default class Main extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
        this.state = {
            data: null
        };
    }

    getDate(): String {
        var d = new Date();
        var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
        return `Today: ${d.getDate()}, ${months[d.getMonth()]} ${d.getFullYear()}`;
    }

    onPress(e: any) {
    }


    render() {
        return (
            <main>
                <div className="container">
                    <div className="surmount-volval">
                        <div className="surmount-volval__group">
                            <Card flex>
                                <Info>
                                    <Info.Description>Daily Transaction Volume</Info.Description>
                                    <Info.Value>2,342</Info.Value>
                                </Info>
                                <span className="space"></span>
                                {/* <div data-sparkline="50.0, 20.4, 39.3, 66.0 54.2 68"></div> */}
                                <Sparkline data={[50.0, 20.4, 39.3, 66.0, 54.2, 68]} />
                            </Card>
                            <Card flex>
                                <Info>
                                    <Info.Description>Daily Transaction Value</Info.Description>
                                    <Info.Value>N4,000,000</Info.Value>
                                </Info>
                                <span className="space"></span>
                                <Sparkline data={[20, 18.4, 39.3, 66.0]} />
                            </Card>
                        </div>
                        <span className="width-20"></span>
                        <div className="surmount-volval__group">
                            <Card flex>
                                <Info>
                                    <Info.Description>Total Transaction Volume</Info.Description>
                                    <Info.Value>452,000</Info.Value>
                                </Info>
                                <span className="space"></span>
                                <Sparkline data={[50.4, 20.1, 70.3, 66.0, 70.5]} />
                            </Card>
                            <Card flex>
                                <Info>
                                    <Info.Description>Total Transaction Value</Info.Description>
                                    <Info.Value>N4,000,000</Info.Value>
                                </Info>
                                <span className="space"></span>
                                <Sparkline data={[50.0, 100.4, 39.3, 8.0]} />
                            </Card>
                        </div>
                    </div>
                    <div className="surmount-charts">
                        <Card>
                            <div className="header">
                                <span id="date">{this.getDate()}</span>
                            </div>
                            <Timeseries data={this.state.data} />
                        </Card>

                        <div className="surmount-orders-payments">
                            <Card>
                                <div className="header">
                                    <span>Orders</span>
                                </div>
                                <div className="content">
                                    <ValueBar data={[100, 150]} />
                                </div>
                            </Card>
                            <Card>
                                <div className="header">
                                    <span>Payments</span>
                                </div>
                                <div className="content">
                                    <ValueBar data={[600, 150]} />
                                </div>
                            </Card>
                        </div>
                    </div>

                    <div className="table">
                        <div className="table__header">
                            <span className="table__header__title">Payments</span>
                            <div className="table__header__content">
                                <Dropdown active>
                                    <Dropdown.Prefix>Show</Dropdown.Prefix>
                                    <Dropdown.Menus pagination active label="20">
                                        <Dropdown.Menus.Item onPress={this.onPress} value="20"></Dropdown.Menus.Item>
                                        <Dropdown.Menus.Item onPress={this.onPress} value="40"></Dropdown.Menus.Item>
                                        <Dropdown.Menus.Item onPress={this.onPress} value="60"></Dropdown.Menus.Item>
                                    </Dropdown.Menus>
                                    <Dropdown.Postfix>Out of 500 payments</Dropdown.Postfix>
                                </Dropdown>
                                
                                <div className="space"></div>
                                <SearchBar type="outline-bottom" name='search_payment' placeholder="Search payments" />

                                <div className="space"></div>

                                <Dropdown active>
                                    <Dropdown.Prefix>Show</Dropdown.Prefix>
                                    <Dropdown.Menus label="All">
                                        <Dropdown.Menus.Item value="All"></Dropdown.Menus.Item>
                                        <Dropdown.Menus.Item value="Reconcilled"></Dropdown.Menus.Item>
                                        <Dropdown.Menus.Item value="Un-reconcilled"></Dropdown.Menus.Item>
                                        <Dropdown.Menus.Item value="Settled"></Dropdown.Menus.Item>
                                        <Dropdown.Menus.Item value="Unsettled"></Dropdown.Menus.Item>
                                    </Dropdown.Menus>
                                </Dropdown>
                            </div>
                        </div>

                        

                        <div className="table__content">
                            <Table>
                                <Table.Header>
                                    <Header.Item>Item type</Header.Item>
                                    <Header.Item>Price</Header.Item>
                                    <Header.Item>Transaction No</Header.Item>
                                    <Header.Item>Time</Header.Item>
                                    <Header.Item></Header.Item>
                                    <Header.Item></Header.Item>
                                </Table.Header>

                                <Table.Body>
                                    <Body.Row>
                                        <Row.Item>
                                            <span className="avatar">vw</span>
                                            <span>Apple Mac Book 15” 250 SSD 12GB</span>
                                        </Row.Item>
                                        <Row.Item>$73430</Row.Item>
                                        <Row.Item>1234567890</Row.Item>
                                        <Row.Item>12:30</Row.Item>
                                        <Row.Item>
                                            <Status type='reconcilled' />
                                        </Row.Item>
                                        <Row.Item>
                                            <Button type='icon'>
                                                <span className="icon icon--arrow-down--grey"></span>
                                            </Button>
                                        </Row.Item>
                                    </Body.Row>
                                    <Body.Row>
                                        <Row.Item>
                                            <span className="avatar">vw</span>
                                            <span>Apple Mac Book 15” 250 SSD 12GB</span>
                                        </Row.Item>
                                        <Row.Item>$73430</Row.Item>
                                        <Row.Item>1234567890</Row.Item>
                                        <Row.Item>12:30</Row.Item>
                                        <Row.Item>
                                            <Status type='pending' />
                                        </Row.Item>
                                        <Row.Item>
                                            <Button type='icon'>
                                                <span className="icon icon--arrow-down--grey"></span>
                                            </Button>
                                        </Row.Item>
                                    </Body.Row>
                                    <Body.Row>
                                        <Row.Item>
                                            <span className="avatar">vw</span>
                                            <span>Apple Mac Book 15” 250 SSD 12GB</span>
                                        </Row.Item>
                                        <Row.Item>$73430</Row.Item>
                                        <Row.Item>1234567890</Row.Item>
                                        <Row.Item>12:30</Row.Item>
                                        <Row.Item>
                                            <Status type='reconcilled' />
                                        </Row.Item>
                                        <Row.Item>
                                            <Button type='icon'>
                                                <span className="icon icon--arrow-down--grey"></span>
                                            </Button>
                                        </Row.Item>
                                    </Body.Row>
                                    <Body.Row>
                                        <Row.Item>
                                            <span className="avatar">vw</span>
                                            <span>Apple Mac Book 15” 250 SSD 12GB</span>
                                        </Row.Item>
                                        <Row.Item>$73430</Row.Item>
                                        <Row.Item>1234567890</Row.Item>
                                        <Row.Item>12:30</Row.Item>
                                        <Row.Item>
                                            <Status type='reconcilled' />
                                        </Row.Item>
                                        <Row.Item>
                                            <Button type='icon'>
                                                <span className="icon icon--arrow-down--grey"></span>
                                            </Button>
                                        </Row.Item>
                                    </Body.Row>
                                    <Body.Row>
                                        <Row.Item>
                                            <span className="avatar">vw</span>
                                            <span>Apple Mac Book 15” 250 SSD 12GB</span>
                                        </Row.Item>
                                        <Row.Item>$73430</Row.Item>
                                        <Row.Item>1234567890</Row.Item>
                                        <Row.Item>12:30</Row.Item>
                                        <Row.Item>
                                            <Status type='pending' />
                                        </Row.Item>
                                        <Row.Item>
                                            <Button type='icon'>
                                                <span className="icon icon--arrow-down--grey"></span>
                                            </Button>
                                        </Row.Item>
                                    </Body.Row>
                                    <Body.Row>
                                        <Row.Item>
                                            <span className="avatar">vw</span>
                                            <span>Apple Mac Book 15” 250 SSD 12GB</span>
                                        </Row.Item>
                                        <Row.Item>$73430</Row.Item>
                                        <Row.Item>1234567890</Row.Item>
                                        <Row.Item>12:30</Row.Item>
                                        <Row.Item>
                                            <Status type='unreconcilled' />
                                        </Row.Item>
                                        <Row.Item>
                                            <Button type='icon'>
                                                <span className="icon icon--arrow-down--grey"></span>
                                            </Button>
                                        </Row.Item>
                                    </Body.Row>
                                    <Body.Row>
                                        <Row.Item>
                                            <span className="avatar">vw</span>
                                            <span>Apple Mac Book 15” 250 SSD 12GB</span>
                                        </Row.Item>
                                        <Row.Item>$73430</Row.Item>
                                        <Row.Item>1234567890</Row.Item>
                                        <Row.Item>12:30</Row.Item>
                                        <Row.Item>
                                            <Status type='reconcilled' />
                                        </Row.Item>
                                        <Row.Item>
                                            <Button type='icon'>
                                                <span className="icon icon--arrow-down--grey"></span>
                                            </Button>
                                        </Row.Item>
                                    </Body.Row>
                                    <Body.Row>
                                        <Row.Item>
                                            <span className="avatar">vw</span>
                                            <span>Apple Mac Book 15” 250 SSD 12GB</span>
                                        </Row.Item>
                                        <Row.Item>$73430</Row.Item>
                                        <Row.Item>1234567890</Row.Item>
                                        <Row.Item>12:30</Row.Item>
                                        <Row.Item>
                                            <Status type='unreconcilled' />
                                        </Row.Item>
                                        <Row.Item>
                                            <Button type='icon'>
                                                <span className="icon icon--arrow-down--grey"></span>
                                            </Button>
                                        </Row.Item>
                                    </Body.Row>
                                    <Body.Row>
                                        <Row.Item>
                                            <span className="avatar">vw</span>
                                            <span>Apple Mac Book 15” 250 SSD 12GB</span>
                                        </Row.Item>
                                        <Row.Item>$73430</Row.Item>
                                        <Row.Item>1234567890</Row.Item>
                                        <Row.Item>12:30</Row.Item>
                                        <Row.Item>
                                            <Status type='pending' />
                                        </Row.Item>
                                        <Row.Item>
                                            <Button type='icon'>
                                                <span className="icon icon--arrow-down--grey"></span>
                                            </Button>
                                        </Row.Item>
                                    </Body.Row>
                                </Table.Body>
                            </Table>
                        </div>

                        <div className="pagination">
                            <a href="#previous">Previous</a>
                            <span className="active">1</span>
                            <span>2</span>
                            <a href="#next">Next</a>
                        </div>
                    </div>


                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                </div>
            </main>
        )
    }
}