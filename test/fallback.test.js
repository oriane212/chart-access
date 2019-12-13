"use strict";
exports.__esModule = true;
// Tests for main.ts, NOT main.js anymore
var main_1 = require("../src/main");
var barchart_1 = require("../charts/barchart");
var chart = barchart_1.coffeeChart;
var fbtxt = main_1["default"].generateFallbackText(chart);
var untitled = barchart_1.coffeeChart;
untitled.options.title.text = "";
var fbtxt2 = main_1["default"].generateFallbackText(untitled);
test("generateFallbackText() returns expected string", function () {
    expect(fbtxt).toContain("Bar chart titled, 'Coffees Consumed by Month'.");
});
test("generateFallbackText() returns expected string given empty title text", function () {
    expect(fbtxt2).toContain("Untitled bar chart.");
});
// add test to check that returned string also contains certain data points.
