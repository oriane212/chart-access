import * as chartjs from 'chart.js';

let categories: string[] = ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'];
let numbers: number[] = [12, 19, 3, 5, 2, 3];
let points: chartjs.Point[] = [{
    x: 10,
    y: 12
}, {
    x: 15,
    y: 19
}, {
    x: 20,
    y: 3
}, {
    x: 25,
    y: 5
}, {
    x: 30,
    y: 2
}, {
    x: 35,
    y: 3
}];
let stackedArea = {
    scales: {
        yAxes: [{
            stacked: true
        }]
    }
}

export let line1: chartjs.ChartConfiguration = {
    type: 'line',
    data: {
        labels: categories,
        datasets: [{
            label: '# of Votes',
            data: numbers
        }]
    },
    options: {}
}

export let line2: chartjs.ChartConfiguration = {
    type: 'line',
    data: {
        datasets: [{
            label: '# of Votes',
            data: points
        }]
    },
    options: {}
}

export let scatter1: chartjs.ChartConfiguration = {
    type: 'scatter',
    data: {
        datasets: [{
            label: '# of Votes',
            data: points
        }]
    },
    options: {
        scales: {
            xAxes: [{
                type: 'linear',
                position: 'bottom'
            }]
        }
    }
}