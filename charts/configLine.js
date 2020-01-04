"use strict";
exports.__esModule = true;
var categories = ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'];
var numbers = [12, 19, 3, 5, 2, 3];
var points = [{
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
var stackedArea = {
    scales: {
        yAxes: [{
                stacked: true
            }]
    }
};
exports.line1 = {
    type: 'line',
    data: {
        labels: categories,
        datasets: [{
                label: '# of Votes',
                data: numbers
            }]
    },
    options: {}
};
exports.line2 = {
    type: 'line',
    data: {
        datasets: [{
                label: '# of Votes',
                data: points
            }]
    },
    options: {}
};
exports.scatter1 = {
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
};
