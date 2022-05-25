google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
       var data = google.visualization.arrayToDataTable([
	       ['Day', 'Price'],
	       ['4',  200],
	       ['5',  243],
	       ['6',  240],
	       ['7',  280],
	       ['8',  243],
	       ['9',  240],
	       ['10', 280],
	       ['11',  300]
       ]);

       var options = {
	       title: 'Price over time',
	       curveType: 'none',
	       legend: { position: 'bottom' }
       };

       var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

       chart.draw(data, options);
}

