
import * as chartjs from 'chart.js';

let categories: string[] = ['Running', 'Swimming', 'Eating', 'Cycling'];
let numbers: number[] = [20, 10, 4, 2];

export let radar1: chartjs.ChartConfiguration = {
    type: 'radar',
    data: {
        labels: categories,
        datasets: [{
            data: numbers
        }]
    },
    options: {}
}