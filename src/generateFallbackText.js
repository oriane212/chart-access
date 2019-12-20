"use strict";
exports.__esModule = true;
exports.percentages = function (data) {
    var sum;
    var stringArray;
    if (typeof data[0] === "object") {
        if (data[0].y) {
            var yValues_1 = [];
            data.forEach(function (obj) {
                if (typeof obj.y === 'number') {
                    yValues_1.push(obj.y);
                }
            });
            sum = yValues_1.reduce(function (accumulator, currentValue) {
                return accumulator + currentValue;
            }, 0);
            stringArray = yValues_1.map(function (datapoint) {
                var value = Math.round((datapoint / sum) * 100);
                return "(" + value + "%)";
            });
        }
    }
    else {
        data = data;
        sum = data.reduce(function (accumulator, currentValue) {
            return accumulator + currentValue;
        }, 0);
        stringArray = data.map(function (datapoint) {
            var value = Math.round((datapoint / sum) * 100);
            return "(" + value + "%)";
        });
    }
    return stringArray;
};
var splitCamelCase;
splitCamelCase = function (camelCaseString) {
    var index = camelCaseString.search(/[A-Z]/g);
    // if there is a camelCase
    if (index !== -1) {
        var letter = camelCaseString[index];
        var newStr = camelCaseString.replace(letter, " " + letter.toLowerCase());
        return newStr;
    }
    else {
        return camelCaseString;
    }
};
// checks that the total number of datapoints is no more than t
var datapointsThreshold;
datapointsThreshold = function (chartconfig, t) {
    if (chartconfig.data.datasets.length * chartconfig.data.labels.length <= t) {
        return true;
    }
    else {
        return false;
    }
};
// only includes for one/first dataset, and only
var generateStringContainingData = function (chartconfig) {
    var dataset1 = chartconfig.data.datasets[0].data;
    var datapoints;
    var percentValues;
    if (chartconfig.type === 'pie') {
        percentValues = exports.percentages(dataset1);
        datapoints = chartconfig.data.labels.map(function (label, i) {
            return label + ": " + chartconfig.data.datasets[0].data[i] + " " + percentValues[i];
        });
    }
    else {
        datapoints = chartconfig.data.labels.map(function (label, i) {
            return label + ": " + chartconfig.data.datasets[0].data[i];
        });
    }
    var datastring = datapoints.join(", ") + ".";
    return datastring;
};
/**
 * generate fallback text for canvas
 * @param chartconfig: ChartConfiguration interface
 *
 * @returns {string}
 */
function generateFallbackText(chartconfig) {
    var text1;
    var text2;
    var datapoints = 1;
    var chartType = splitCamelCase(chartconfig.type);
    // substring 1
    if (chartconfig.options && chartconfig.options.title) {
        if (chartconfig.options.title.text !== "") {
            var typeCapitalized = chartType[0].toUpperCase() + chartType.slice(1);
            text1 = typeCapitalized + " chart titled, '" + chartconfig.options.title.text + "'.";
        }
        else {
            text1 = "Untitled " + chartType + " chart.";
        }
    }
    else {
        text1 = "Untitled " + chartType + " chart.";
    }
    //substring 2
    if (datapointsThreshold(chartconfig, datapoints)) {
        text2 = generateStringContainingData(chartconfig);
    }
    else {
        text2 = "";
    }
    return text1 + " " + text2;
}
exports["default"] = generateFallbackText;
