"use strict";
exports.__esModule = true;
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
// TODO: create text
var generateStringContainingData = function (chartconfig) {
    var text = 'testing testing';
    return text;
};
/**
 * generate fallback text for canvas
 * @param chartconfig of chartConfig interface
 *
 * @returns {string}
 */
function generateFallbackText(chartconfig) {
    var text1;
    var text2;
    if (chartconfig.options.title.text === "") {
        text1 = "Untitled " + chartconfig.type + " chart.";
    }
    else {
        var typeCapitalized = chartconfig.type[0].toUpperCase() + chartconfig.type.slice(1);
        text1 = typeCapitalized + " chart titled, '" + chartconfig.options.title.text + "'.";
    }
    if (datapointsThreshold(chartconfig, 8)) {
        text2 = generateStringContainingData(chartconfig);
    }
    else {
        text2 = "";
    }
    return text1 + " " + text2;
}
exports["default"] = generateFallbackText;
