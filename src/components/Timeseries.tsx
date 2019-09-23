import React from 'react';
import * as Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
import timeseries_data from '../data/timeseries.json';

interface IState {
    options: Highcharts.Options
}

export default class Timeseries extends React.Component<any, any> {
    
    colors: any;

    constructor(props: any) {
        super(props);
        this.state = {
            data: null
        };

        Highcharts.setOptions({
            lang:{
                rangeSelectorZoom: ''
            }
        });

        this.colors = Highcharts.getOptions().colors;
        
    }

    options: any =  {
        chart: {
            height: 300,
            backgroundColor: undefined,
            borderColor: undefined,
            borderWidth: 0,
            plotBorderColor: undefined,
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
        navigator: {enabled: false},
        series: [{
            type: 'area',
            name: 'Trans sales price',
            data: timeseries_data ? timeseries_data : [],
            fillColor: {
                linearGradient: {
                    x1: 0,
                    y1: 1,
                    x2: 1,
                    y2: 1
                },
                stops: [
                    [0, 'rgba(223,242,255,1)'],
                    [1, 'rgba(255,0,0,0.4)']
                ]
            },
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