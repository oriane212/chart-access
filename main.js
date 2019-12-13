'use strict';

/**
 * generate fallback text for canvas
 * @param chartconfig of chartConfig interface
 *
 * @returns {string}
 */
function generateFallbackText(chartconfig) {
    console.log(chartconfig.data.datasets[0].label);
    if (chartconfig.options.title.text === "") {
        return "Untitled " + chartconfig.type + " chart";
    }
    else {
        return chartconfig.type + " chart titled, '" + chartconfig.options.title.text + "'.";
    }
}

var access = {
    generateFallbackText: generateFallbackText
};

module.exports = access;
