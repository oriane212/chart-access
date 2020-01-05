// Example using chart-access to add fallback text to a chart

let data = {
    datasets: [{
        data: [{
            x: 10,
            y: 12
        }, {
            x: 15,
            y: 19
        }, {
            x: 20,
            y: 3
        }, {
            x: 25,
            y: 5
        }, {
            x: 30,
            y: 2
        }, {
            x: 35,
            y: 3
        }]
    }]
}

let untitled = {
    type: 'line',
    data: data
}

let titled = {
    type: 'line',
    data: data,
    options: {
        title: {
            text: 'Sample data',
            display: true
        }
    }
}

let ctx = document.getElementById('untitledChart');
let untitledChart = new Chart(ctx, untitled);

chartaccess.addFallback(untitledChart);

let ctx2 = document.getElementById('titledChart');
let titledChart = new Chart(ctx2, titled);

chartaccess.addFallback(titledChart);

