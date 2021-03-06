"use strict";
exports.__esModule = true;
var categories = ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'];
var chartpoints = [{
        x: 10,
        y: 12,
        r: 8
    }, {
        x: 15,
        y: 19,
        r: 18
    }, {
        x: 20,
        y: 3,
        r: 20
    }, {
        x: 25,
        y: 5,
        r: 12
    }, {
        x: 30,
        y: 2,
        r: 16
    }, {
        x: 35,
        y: 3,
        r: 5
    }];
exports.bubble1 = {
    type: 'bubble',
    data: {
        labels: categories,
        datasets: [{
                data: chartpoints
            }]
    },
    options: {}
};
