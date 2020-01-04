
// Tests for simple alt text for each chart type: 'line' | 'bar' | 'horizontalBar' | 'radar' | 'doughnut' | 'polarArea' | 'bubble' | 'pie' | 'scatter'

// Tests for a titled and untitled chart


import access from '../src/main';
import { generateFallbackText, percentages } from '../src/addFallback';

// reminder: if imported, .ts file for that chart config are compiled to .js
import { hBar1, bar1 } from '../charts/configBar';
import { pie1, doughnut1, polarArea1 } from '../charts/configPie';
import { radar1 } from '../charts/configRadar';
import { line1, scatter1 } from '../charts/configLine';
import { bubble1 } from '../charts/configBubble';

import { Chart } from 'chart.js';

const chartTypes = ['line', 'bar', 'horizontal bar', 'radar', 'doughnut', 'polar area', 'bubble', 'pie', 'scatter'];

let chartConfigs = [ line1, bar1, hBar1, radar1, doughnut1, polarArea1, bubble1, pie1, scatter1 ];

describe("addFallBack adds expected fallback text to chart", () => {

    let canvas = document.createElement('canvas');
    let ctx = canvas.getContext('2d');

    chartTypes.forEach((chartType, i) => {
        
        test(`Untitled ${chartType} chart`, ()=> {
            let newChart = new Chart(ctx, chartConfigs[i]);
            access.addFallback(newChart);
            expect(newChart.canvas.innerText).toContain(`Untitled ${chartType} chart`)
        })

        let typeCapitalized: string = chartType[0].toUpperCase() + chartType.slice(1);

        test(`${typeCapitalized} chart titled, 'Sample title'`, ()=> {
            let chartConfigTitled = { ...chartConfigs[i] };
            let newChart = new Chart(ctx, chartConfigTitled);
            newChart.config.options.title.text = 'Sample title';
            access.addFallback(newChart);
            expect(newChart.canvas.innerText).toContain(`${typeCapitalized} chart titled, 'Sample title'`);
        })
    })

})


describe("generateFallbackText generates expected string from chart config", () => {

    chartTypes.forEach((chartType, i) => {
        
        test(`Untitled ${chartType} chart`, ()=> {
            let fbtext: string = generateFallbackText(chartConfigs[i]);
            expect(fbtext).toContain(`Untitled ${chartType} chart`);
        })
        
        let typeCapitalized: string = chartType[0].toUpperCase() + chartType.slice(1);

        test(`${typeCapitalized} chart titled, 'Sample title'`, ()=> {
        let chartConfigTitled = { ...chartConfigs[i] };
        chartConfigTitled.options.title = {
            display: true,
            text: 'Sample title'
        }
            let fbtext: string = generateFallbackText(chartConfigTitled);
            expect(fbtext).toContain(`${typeCapitalized} chart titled, 'Sample title'`);
        })
        
    })

})


describe.skip("percentages works for pie charts", () => {

    let testdata = [{ x: 5, y: 35 }, { x: 10, y: 12 }, { x: 15, y: 26 }];
    let teststrings = percentages(testdata);
    test("testdata list of y values", () => {
        expect(teststrings).toHaveLength(3);
    })


    let strings = percentages(pie1.data.datasets[0].data);
    test("percentages fn returns an arry of strings with the correct values", () => {
        expect(strings).toHaveLength(3);
    })

})