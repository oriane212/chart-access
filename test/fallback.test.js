"use strict";
exports.__esModule = true;
// Tests for main.ts, NOT main.js anymore
var main_1 = require("../src/main");
var barchart_1 = require("../charts/barchart");
var chart = barchart_1.coffeeChart;
var fbtxt = main_1["default"].generateFallbackText(chart);
test("fallback text is as expected", function () {
    expect(fbtxt).toEqual("bar chart titled, 'Coffees Consumed by Month'.");
});
