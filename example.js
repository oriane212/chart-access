// Example using chart-access to add fallback text to a chart

let data = {
    labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        datasets: [
            { label: "Iced coffees", data: [5, 4, 6, 11, 18, 24, 29, 30, 26, 16, 10, 6], backgroundColor: "rgba(112, 91, 58, 0.4)" }
        ]
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
            text: 'Iced Coffees Consumed Each Month of the Year',
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

