import React, { useRef } from 'react';
import '../styles/Valuebar.scss';
import ValueInfo from './ValueInfo';


export default class ValueBar extends React.Component<any, any> {

    // bar = useRef(null);
    indicator: any;

    constructor(props: any) {
        super(props);
        this.state = {
            width: 0
        }
    }

    static linearMap(x: number, a: number, b: number, c: number, d: number) {
        return (x - a) / (b - a) * (d - c) + c;
    }

    componentDidMount() {
        this.indicator = document.querySelector('.indicator');
        this.computeValue(this.props.data, this.indicator);
    }

    computeValue(data: Array<number>, container: any) {
        container = container.clientWidth;
        const mn1 = 1, mx1 = Math.max.apply(Math, data);
        const mn2 = 1, mx2 = container;
        const x = data[0] > data[1] ? data[0] - data[1] : data[1] - data[0];
        const result = ValueBar.linearMap(x, mn1, mx1, mn2, mx2);
        this.setState({width: result})

        console.log(result)
    }


    render() {
        return (
            <>
                <span className="indicator">
                    <span style={{width: this.state.width}} className="bar"></span>
                </span>
                <ValueInfo data={this.props.data} />
            </>
        )
    }
}