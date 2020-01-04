"use strict";
exports.__esModule = true;
var categories = [
    'Red',
    'Green',
    'Blue'
];
var numbers = [10, 20, 30];
var colors = [
    'rgba(255, 0, 0, 0.6)',
    'rgba(0, 255, 0, 0.6)',
    'rgba(0, 0, 255, 0.6)'
];
exports.pie1 = {
    type: 'pie',
    data: {
        datasets: [{
                data: numbers,
                backgroundColor: colors
            }],
        labels: categories
    },
    options: {}
};
exports.doughnut1 = {
    type: 'doughnut',
    data: {
        datasets: [{
                data: numbers,
                backgroundColor: colors
            }],
        labels: categories
    },
    options: {}
};
exports.polarArea1 = {
    type: 'polarArea',
    data: {
        datasets: [{
                data: numbers,
                backgroundColor: colors
            }],
        labels: categories
    },
    options: {}
};
