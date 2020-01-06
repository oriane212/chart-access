var chartaccess = (function () {
    'use strict';

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
    /**
     * generate fallback text for chart
     *
     * @param chartconfig: ChartConfiguration interface
     *
     * @returns {string}
     */
    function generateFallbackText(chartconfig) {
        var text1;
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
        /*
        if (datapointsThreshold(chartconfig, datapoints)) {
            text2 = generateStringContainingData(chartconfig);
        } else {
            text2 = "";
        }
        */
        return "" + text1;
    }
    /**
     * add fallback text for chart to its canvas
     *
     * @param chart: Chart instance
     */
    function addFallback(chart) {
        chart.canvas.innerText = generateFallbackText(chart.config);
        return;
    }

    var access = {
        addFallback: addFallback
    };

    return access;

}());
