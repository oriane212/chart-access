
// Tests for main.ts, NOT main.js anymore
import access from '../src/main';
import {coffeeChart} from '../charts/barchart';

let chart = coffeeChart;
const fbtxt = access.generateFallbackText(chart);

let untitled = coffeeChart;
untitled.options.title.text = "";
const fbtxt2 = access.generateFallbackText(untitled);

test("generateFallbackText() returns expected string", ()=> {
    expect(fbtxt).toContain("Bar chart titled, 'Coffees Consumed by Month'.");
});

test("generateFallbackText() returns expected string given empty title text", ()=> {
    expect(fbtxt2).toContain("Untitled bar chart.")
})

// add test to check that returned string also contains certain data points.