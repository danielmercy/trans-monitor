import React, { ReactPropTypes } from 'react';
import * as Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

export default class Sparkline extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
        this.state = {};
    }

    options: Highcharts.Options = {
        chart: {
            type: 'area',
            margin: [2, 0, 2, 0],
            backgroundColor: undefined,
            borderColor: undefined,
            borderWidth: 0,
            plotBorderColor: undefined,
            width: 60,
            height: 30,
            style: {
                overflow: 'hidden'
            },
        },
        title: { text: undefined },
        credits: { enabled: false },
        navigator: { enabled: false },
        xAxis: {
            labels: {
                enabled: false
            },
            title: {
                text: undefined
            },
            startOnTick: false,
            endOnTick: false,
            tickPositions: []
        },
        yAxis: {
            endOnTick: false,
            startOnTick: false,
            labels: {
                enabled: false
            },
            title: {
                text: undefined
            },
            tickPositions: [0]
        },
        legend: {
            enabled: false
        },
        tooltip: { enabled: false },
        plotOptions: {
            area: {
                fillColor: {
                    linearGradient: {
                        x1: 0,
                        y1: 0,
                        x2: 0,
                        y2: 1
                    },
                    stops: [
                        [0, 'rgba(223,242,255,1)'],
                        [1, 'rgba(255,255,255,1)']
                    ]
                },
            },
            series: {
                animation: true,
                lineWidth: 2,
                shadow: false,
                states: {
                    hover: {
                        enabled: false
                    }
                },
                marker: {
                    enabled: false
                }
            },
        },
        exporting: {
            enabled: false
        },
        series: [{
            type: 'area',
            data: this.props.data ? this.props.data : [],
            pointStart: 1
        }],
    }

    render() {
        return (
            <HighchartsReact
                highcharts={Highcharts}
                options={this.options}
                {...this.props}
            />
        )
    }
}