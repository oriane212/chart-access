import { checkThreshold, stringArrayFromData, editString } from './index';
import * as chartjs from 'chart.js';

export const percentages: stringArrayFromData = function (data) {

    let sum: number;
    let stringArray: string[];

    if (typeof data[0] === "object") {
        if (data[0].y) {
            let yValues = [];
            data.forEach((obj) => {
                if (typeof obj.y === 'number') {
                    yValues.push(obj.y);
                }
            })
            sum = yValues.reduce(function (accumulator, currentValue) {
                return accumulator + currentValue
            }, 0);
            stringArray = yValues.map((datapoint) => {
                let value = Math.round((datapoint / sum) * 100);
                return `(${value}%)`;
            })
        }

    } else {
        data = data as Array<number>;
        sum = data.reduce(function (accumulator, currentValue) {
            return accumulator + currentValue
        }, 0);
        stringArray = data.map((datapoint) => {
            let value = Math.round((datapoint / sum) * 100);
            return `(${value}%)`;
        })
    }
    return stringArray;
}

let splitCamelCase: editString;
splitCamelCase = function (camelCaseString: string) {
    let index = camelCaseString.search(/[A-Z]/g);
    // if there is a camelCase
    if (index !== -1) {
        let letter = camelCaseString[index];
        let newStr = camelCaseString.replace(letter, " " + letter.toLowerCase());
        return newStr;
    } else {
        return camelCaseString;
    }

}

// checks that the total number of datapoints is no more than t
let datapointsThreshold: checkThreshold;
datapointsThreshold = function (chartconfig: chartjs.ChartConfiguration, t: number) {
    if (chartconfig.data.datasets.length * chartconfig.data.labels.length <= t) {
        return true;
    } else {
        return false;
    }
}

// only includes for one/first dataset, and only
let generateStringContainingData = function (chartconfig: chartjs.ChartConfiguration) {
    let dataset1 = chartconfig.data.datasets[0].data;
    let datapoints: string[];
    let percentValues: string[];

    if (chartconfig.type === 'pie') {
        percentValues = percentages(dataset1);
        datapoints = chartconfig.data.labels.map((label, i) => {
            return `${label}: ${chartconfig.data.datasets[0].data[i]} ${percentValues[i]}`;
        })
    } else {
        datapoints = chartconfig.data.labels.map((label, i) => {
            return `${label}: ${chartconfig.data.datasets[0].data[i]}`;
        })
    }

    let datastring: string = datapoints.join(", ") + ".";
    return datastring;
}


/**
 * generate fallback text for chart
 * 
 * @param chartconfig: ChartConfiguration interface
 * 
 * @returns {string}
 */
export function generateFallbackText(chartconfig: chartjs.ChartConfiguration) {

    let text1: string;
    let text2: string;
    let datapoints: number = 1;

    let chartType = splitCamelCase(chartconfig.type);

    // substring 1
    if (chartconfig.options && chartconfig.options.title) {
        if (chartconfig.options.title.text !== "") {
            let typeCapitalized: string = chartType[0].toUpperCase() + chartType.slice(1);
            text1 = `${typeCapitalized} chart titled, '${chartconfig.options.title.text}'.`
        } else {
            text1 = `Untitled ${chartType} chart.`;
        }
    } else {
        text1 = `Untitled ${chartType} chart.`;
    }

    //substring 2
    /*
    if (datapointsThreshold(chartconfig, datapoints)) {
        text2 = generateStringContainingData(chartconfig);
    } else {
        text2 = "";
    }
    */

    return `${text1}`;

}


/**
 * add fallback text for chart to its canvas
 * 
 * @param chart: Chart instance
 */
export default function addFallback(chart: Chart) {
    chart.canvas.innerText = generateFallbackText(chart.config);
    return ;
}