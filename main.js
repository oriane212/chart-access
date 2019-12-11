'use strict';

/**
 * generate fallback text for canvas
 * @param title Chart.js object title
 * @param type Chart.js object type
 *
 * @returns {string}
 */
function generateFallbackText(title, type) {
    if (title === "") {
        return "Untitled " + type + " chart";
    }
    else {
        return type + " chart titled, '" + title + "'.";
    }
}

var access = {
    generateFallbackText: generateFallbackText
};

module.exports = access;
