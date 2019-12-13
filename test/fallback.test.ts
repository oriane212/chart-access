
// Tests for main.ts, NOT main.js anymore
import access from '../src/main';
import {coffeeChart} from '../charts/barchart';

let chart = coffeeChart;

const fbtxt = access.generateFallbackText(chart);

test("fallback text is as expected", ()=> {
    expect(fbtxt).toEqual("bar chart titled, 'Coffees Consumed by Month'.");
});
