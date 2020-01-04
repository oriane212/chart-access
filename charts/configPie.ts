import * as chartjs from 'chart.js';

let categories: string[] = [
    'Red',
    'Green',
    'Blue'
];

let numbers: number[] = [10, 20, 30];

let colors: string[] = [
    'rgba(255, 0, 0, 0.6)',
    'rgba(0, 255, 0, 0.6)',
    'rgba(0, 0, 255, 0.6)'
];

export let pie1: chartjs.ChartConfiguration = {
    type: 'pie',
    data: {
        datasets: [{
            data: numbers,
            backgroundColor: colors
        }],
        labels: categories
    },
    options: {}
}

export let doughnut1: chartjs.ChartConfiguration = {
    type: 'doughnut',
    data: {
        datasets: [{
            data: numbers,
            backgroundColor: colors
        }],
        labels: categories
    },
    options: {}
}

export let polarArea1: chartjs.ChartConfiguration = {
    type: 'polarArea',
    data: {
        datasets: [{
            data: numbers,
            backgroundColor: colors
        }],
        labels: categories
    },
    options: {}
}