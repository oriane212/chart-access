"use strict";
// Tests for simple alt text for each chart type: 'line' | 'bar' | 'horizontalBar' | 'radar' | 'doughnut' | 'polarArea' | 'bubble' | 'pie' | 'scatter'
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
// Tests for a titled and untitled chart
var main_1 = require("../src/main");
var addFallback_1 = require("../src/addFallback");
// reminder: if imported, .ts file for that chart config are compiled to .js
var configBar_1 = require("../charts/configBar");
var configPie_1 = require("../charts/configPie");
var configRadar_1 = require("../charts/configRadar");
var configLine_1 = require("../charts/configLine");
var configBubble_1 = require("../charts/configBubble");
var chart_js_1 = require("chart.js");
var chartTypes = ['line', 'bar', 'horizontal bar', 'radar', 'doughnut', 'polar area', 'bubble', 'pie', 'scatter'];
var chartConfigs = [configLine_1.line1, configBar_1.bar1, configBar_1.hBar1, configRadar_1.radar1, configPie_1.doughnut1, configPie_1.polarArea1, configBubble_1.bubble1, configPie_1.pie1, configLine_1.scatter1];
describe("addFallBack adds expected fallback text to chart", function () {
    var canvas = document.createElement('canvas');
    var ctx = canvas.getContext('2d');
    chartTypes.forEach(function (chartType, i) {
        test("Untitled " + chartType + " chart", function () {
            var newChart = new chart_js_1.Chart(ctx, chartConfigs[i]);
            main_1["default"].addFallback(newChart);
            expect(newChart.canvas.innerText).toContain("Untitled " + chartType + " chart");
        });
        var typeCapitalized = chartType[0].toUpperCase() + chartType.slice(1);
        test(typeCapitalized + " chart titled, 'Sample title'", function () {
            var chartConfigTitled = __assign({}, chartConfigs[i]);
            var newChart = new chart_js_1.Chart(ctx, chartConfigTitled);
            newChart.config.options.title.text = 'Sample title';
            main_1["default"].addFallback(newChart);
            expect(newChart.canvas.innerText).toContain(typeCapitalized + " chart titled, 'Sample title'");
        });
    });
});
describe("generateFallbackText generates expected string from chart config", function () {
    chartTypes.forEach(function (chartType, i) {
        test("Untitled " + chartType + " chart", function () {
            var fbtext = addFallback_1.generateFallbackText(chartConfigs[i]);
            expect(fbtext).toContain("Untitled " + chartType + " chart");
        });
        var typeCapitalized = chartType[0].toUpperCase() + chartType.slice(1);
        test(typeCapitalized + " chart titled, 'Sample title'", function () {
            var chartConfigTitled = __assign({}, chartConfigs[i]);
            chartConfigTitled.options.title = {
                display: true,
                text: 'Sample title'
            };
            var fbtext = addFallback_1.generateFallbackText(chartConfigTitled);
            expect(fbtext).toContain(typeCapitalized + " chart titled, 'Sample title'");
        });
    });
});
describe.skip("percentages works for pie charts", function () {
    var testdata = [{ x: 5, y: 35 }, { x: 10, y: 12 }, { x: 15, y: 26 }];
    var teststrings = addFallback_1.percentages(testdata);
    test("testdata list of y values", function () {
        expect(teststrings).toHaveLength(3);
    });
    var strings = addFallback_1.percentages(configPie_1.pie1.data.datasets[0].data);
    test("percentages fn returns an arry of strings with the correct values", function () {
        expect(strings).toHaveLength(3);
    });
});
