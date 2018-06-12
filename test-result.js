/*$(document).ready(function(){

  var server_IP="192.168.2.104";

  $.ajax({

      url: 'http://'+server_IP+':3000/api/result/speedtest',
      type: 'GET',
      crossDomain: true,
      xhrFields: {
        withCredentials: true
      },

      success: function(data){
                console.log(data.type);
                console.log(data.result.length);

            },
      error: function(jqXHR, exception) { alert(jqXHR.status + "   " + exception); }
  });
});*/
// ============================================
// As of Chart.js v2.5.0
// http://www.chartjs.org/docs
// ============================================

// ============================================
// As of Chart.js v2.5.0
// http://www.chartjs.org/docs
// ============================================

var chart    = document.getElementById('chart').getContext('2d'),
    gradient = chart.createLinearGradient(0, 0, 0, 450);

gradient.addColorStop(0, 'rgba(3,118,175, 0.5)');
gradient.addColorStop(0.5, 'rgba(88, 183, 226, 0.25)');
gradient.addColorStop(1, 'rgba(252, 117, 55, 0)');


var data  = {
    labels: [ '0', '1', '2', '3', '4', '5','6' ],
    datasets: [{
			label: 'speed',
			backgroundColor: gradient,
			pointBackgroundColor: 'white',
			borderWidth: 2,
			borderColor: '#0f3b6d',
			data: [50, 55, 80, 81, 70, 54,60]
    }]
};


var options = {
	responsive: true,
	maintainAspectRatio: true,
	animation: {
		easing: 'easeInOutQuad',
		duration: 520
	},
	scales: {
		xAxes: [{
			gridLines: {
				color: 'rgba(200, 200, 200, 0.05)',
				lineWidth: 1
			}
		}],
		yAxes: [{
			gridLines: {
				color: 'rgba(200, 200, 200, 0.08)',
				lineWidth: 1
			}
		}]
	},
	elements: {
		line: {
			tension: 0.4
		}
	},
	legend: {
		display: true
	},
	point: {
		backgroundColor: 'white'
	},
	tooltips: {
		titleFontFamily: 'Open Sans',
		backgroundColor: 'rgba(0,0,0,0.3)',
		titleFontColor: 'white',
		caretSize: 5,
		cornerRadius: 2,
		xPadding: 10,
		yPadding: 10
	}
};


var chartInstance = new Chart(chart, {
    type: 'line',
    data: data,
		options: options
});
