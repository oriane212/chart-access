
// Tests for main.ts, NOT main.js anymore
import access from '../src/main';
import {bar1} from '../charts/configBar';
import {pie1} from '../charts/configPie';

import {percentages} from '../src/generateFallbackText';

let testdata = [{x: 5, y: 35}, {x:10, y: 12}, {x:15, y:26}];
let teststrings = percentages(testdata);
test("testdata list of y values", ()=> {
    expect(teststrings).toHaveLength(3);
})


let strings = percentages(pie1.data.datasets[0].data);

test("percentages fn returns an arry of strings with the correct values", ()=> {
    expect(strings).toHaveLength(3);
})

let bar = bar1;
const fbtxt3 = access.generateFallbackText(bar);

test("generateFallBackText() for bar1 returns expected string", ()=> {
    expect(fbtxt3).toContain("Untitled horizontal bar chart.");
    /*
    expect(fbtxt3).toContain("Red: 12");
    expect(fbtxt3).toContain("Green: 5");
    expect(fbtxt3).toContain("Orange: 3.");
    */
})


const fbtxt4 = access.generateFallbackText(pie1);

test("generateFallBackText() for pie1 returns expected string", ()=> {
    expect(fbtxt4).toContain("Untitled pie chart.");
    /*
    expect(fbtxt4).toContain("Red: 10");
    expect(fbtxt4).toContain("Green: 20");
    expect(fbtxt4).toContain("Blue: 30 (50%).");
    */
})

// add test to check that returned string also contains certain data points.