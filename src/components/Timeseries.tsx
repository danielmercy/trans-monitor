import React from 'react';
import * as Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
import timeseries_data from '../data/timeseries.json';

interface IState {
    options: Highcharts.Options
}

export default class Timeseries extends React.Component<any, any> {
    

    constructor(props: any) {
        super(props);
        this.state = {
            data: null
        };

        Highcharts.setOptions({
            lang:{
                rangeSelectorZoom: ''
            }
        })
    }

    options: any =  {
        chart: {
            height: 300
        },
        title: {
            text: undefined
        },
        subtitle: {
            text: undefined
        },
        legend: {
            enabled: false
        },
        yAxis: {
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
        rangeSelector: {
            selected: 1
        },
        exporting: {
            enabled: false
        },
        credits: { enabled: false},
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
                        [0, "rgba(223,242,255,1)"],
                        [1, 'rgba(255,255,255,1)']
                    ]
                },
                marker: {
                    radius: 2
                },
                lineWidth: 1,
                states: {
                    hover: {
                        lineWidth: 1
                    }
                }
            }
        },
        navigator: {enabled: false},
        series: [{
            type: 'area',
            name: 'AAPL Stock Price',
            data: timeseries_data ? timeseries_data : [],
            threshold: undefined,
            tooltip: {
                valueDecimals: 2
            }
        }],
    }

    render() {
        return (
            <HighchartsReact
                highcharts={Highcharts}
                constructorType = { "stockChart" }
                options={this.options}
                {...this.props}
            />
        )
    }
}