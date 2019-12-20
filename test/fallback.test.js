"use strict";
exports.__esModule = true;
// Tests for main.ts, NOT main.js anymore
var main_1 = require("../src/main");
var configBar_1 = require("../charts/configBar");
var configPie_1 = require("../charts/configPie");
var generateFallbackText_1 = require("../src/generateFallbackText");
var testdata = [{ x: 5, y: 35 }, { x: 10, y: 12 }, { x: 15, y: 26 }];
var teststrings = generateFallbackText_1.percentages(testdata);
test("testdata list of y values", function () {
    expect(teststrings).toHaveLength(3);
});
var strings = generateFallbackText_1.percentages(configPie_1.pie1.data.datasets[0].data);
test("percentages fn returns an arry of strings with the correct values", function () {
    expect(strings).toHaveLength(3);
});
var bar = configBar_1.bar1;
var fbtxt3 = main_1["default"].generateFallbackText(bar);
test("generateFallBackText() for bar1 returns expected string", function () {
    expect(fbtxt3).toContain("Untitled horizontal bar chart.");
    /*
    expect(fbtxt3).toContain("Red: 12");
    expect(fbtxt3).toContain("Green: 5");
    expect(fbtxt3).toContain("Orange: 3.");
    */
});
var fbtxt4 = main_1["default"].generateFallbackText(configPie_1.pie1);
test("generateFallBackText() for pie1 returns expected string", function () {
    expect(fbtxt4).toContain("Untitled pie chart.");
    /*
    expect(fbtxt4).toContain("Red: 10");
    expect(fbtxt4).toContain("Green: 20");
    expect(fbtxt4).toContain("Blue: 30 (50%).");
    */
});
// add test to check that returned string also contains certain data points.
