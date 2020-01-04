"use strict";
exports.__esModule = true;
var categories = ['Running', 'Swimming', 'Eating', 'Cycling'];
var numbers = [20, 10, 4, 2];
exports.radar1 = {
    type: 'radar',
    data: {
        labels: categories,
        datasets: [{
                data: numbers
            }]
    },
    options: {}
};
