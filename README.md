# chart-access
![npm](https://img.shields.io/npm/v/chart-access)

Add an accessible, auto-generated fallback to a [Chart.js](https://github.com/chartjs/Chart.js) chart.

## Install

```bash
npm install chart-access
```

## How to use

```javascript
import chartaccess from 'chart-access';
```
or 

```html
<script src='path/to/chart-access/main.js'></script>
```

Using chart-access with a script tag adds a global variable ```chartaccess``` to the browser window with the ```addFallback``` function. 


### Add fallback text

Use ```addFallback``` to add auto-generated fallback text to the canvas for a chart created with Chart.js.

```javascript
chartaccess.addFallback(chart);
```

### Example

```javascript
import chartaccess from 'chart-access';

// config for chart
let chartConfig = {
    type: 'line',
    data: data,
    options: {
        title: {
            text: 'Iced Coffees Consumed Each Month of the Year',
            display: true
        }
    }
}

// create Chart.js chart
let canvas = document.getElementById('titledChart');
let titledChart = new Chart(canvas, chartConfig);

// add auto-generated fallback text to chart canvas
chartaccess.addFallback(titledChart);
```

Now the canvas element for your chart will provide screen reader users with basic information about the chart:

```html
<canvas id='titledChart'>Line chart titled, 'Iced Coffees Consumed Each Month of the Year'.</canvas>
```

If your chart does not contain title text, the fallback text will be:

```html
<canvas id='untitledChart'>Untitled line chart.</canvas>
```

