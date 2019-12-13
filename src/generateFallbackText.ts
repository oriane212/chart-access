import {chartConfig, checkThreshold} from './index';

// checks that the total number of datapoints is no more than t
let datapointsThreshold: checkThreshold;
datapointsThreshold = function(chartconfig: chartConfig, t: number) {
    if (chartconfig.data.datasets.length * chartconfig.data.labels.length <= t) {
        return true;
    } else {
        return false;
    }
}
    

// TODO: create text
let generateStringContainingData = function(chartconfig: chartConfig) {
    let text: string = 'testing testing';
    return text;
}


/**
 * generate fallback text for canvas
 * @param chartconfig of chartConfig interface
 * 
 * @returns {string}
 */
export default function generateFallbackText(chartconfig: chartConfig) {

    let text1: string;
    let text2: string;

    if (chartconfig.options.title.text === "") {
        text1 = `Untitled ${chartconfig.type} chart.`;
    } else {
        let typeCapitalized: string = chartconfig.type[0].toUpperCase() + chartconfig.type.slice(1);
        text1 = `${typeCapitalized} chart titled, '${chartconfig.options.title.text}'.`;
    }

    if (datapointsThreshold(chartconfig, 8)) {
        text2 = generateStringContainingData(chartconfig);
    } else {
        text2 = "";
    }

    return `${text1} ${text2}`;
    
}

