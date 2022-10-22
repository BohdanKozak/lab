window.onload = function () {
	var data_Lucik;
	var state;
	var request = new XMLHttpRequest();
	request.onreadystatechange = function (){
	if(this.readyState == 4 && this.status == 200){
		document.getElementById("num_of_pointer").innerHTML = JSON.parse(this.responseText).data_balance;
		document.getElementById("num_of_days2").innerHTML = JSON.parse(this.responseText).data_days;
		data_Lucik = JSON.parse(this.responseText).data_charts.map((item) => parseInt(item, 10));
			var data = {
			labels: labels,
			datasets: [{
				backgroundColor: 'rgba(89,199,255,0.2)',
				borderColor: 'rgb(89, 199, 255)',
				data: data_Lucik,
				pointRadius: 0,
				fill: 1,
                
			}, {
				backgroundColor: 'rgb(225, 225, 225)',
				borderColor: 'rgb(225, 225, 225)',
				data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				pointRadius: 0,

			}, {
				backgroundColor: 'rgba(42,164,137,0.2)',
				borderColor: 'rgb(42, 164, 137)',
				data: [110, 170, 220, 300, 250, 260, 280, 275, 300, 250, 190, 110],
				pointRadius: 0,
				fill: 1,

			}, {
				backgroundColor: 'rgb(225, 225, 225)',
				borderColor: 'rgb(225, 225, 225)',
				data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				pointRadius: 0,

			}]
		};

		var config_1 = {
			type: 'line',
			data: data,
			options: {
				responsive: true,
				plugins: {
					legend: {
						display: false
					}
				},
				scales: {
					y: {
						max: 500,
						min: 0,
						grace: '5%'
					}
				}
			},
             
		}
		const myChart = new Chart(
		document.getElementById('myChart_1'),
		config_1
	);
		}
	}
	
	request.open("GET", "data.json", true);
	request.send();


	const labels = ['Ja', 'Fe', 'Ma', 'Ap', 'Ma', 'Ju', 'Ji', 'Au', 'Se', 'Oc', 'No', 'De'];
	
	

	const data_2 = {
		labels: labels,
		datasets: [{
			backgroundColor: 'rgba(89,199,255,0.2)',
			borderColor: 'rgb(89, 199, 255)',
			data: [140, 135, 130, 125, 140, 145, 150, 145, 150, 140, 200, 300],
			pointRadius: 0,
			fill: 1,
                
		}, {
			backgroundColor: 'rgb(225, 225, 225)',
			borderColor: 'rgb(225, 225, 225)',
			data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			pointRadius: 0,

		}, {
			backgroundColor: 'rgba(42,164,137,0.2)',
			borderColor: 'rgb(42, 164, 137)',
			data: [150, 170, 165, 160, 157, 170, 200, 160, 150, 170, 180, 190],
			pointRadius: 0,
			fill: 1,

		}, {
			backgroundColor: 'rgb(225, 225, 225)',
			borderColor: 'rgb(225, 225, 225)',
			data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			pointRadius: 0,

		}]
	};
	const config_2 = {
		type: 'line',
		responsive: true,
		data: data_2,
		options: {
			plugins: {
				legend: {
					display: false
				}
			},
			scales: {
				y: {
					max: 600,
					min: 0,
					grace: '5%'
				}
			}
		},
             
	};
	
	const myChart_2 = new Chart(
		document.getElementById('myChart_2'),
		config_2
	)
	  
	var data_5 = {
		datasets: [
			{
				data: [76, 289],
				cutout: 50,
				
				responsive: true,
				backgroundColor: [
					"rgb(89, 199, 255)",
					"#b5bfcd",
                            
				],
				hoverBackgroundColor: [
					"rgb(89, 199, 255)",
					"#b5bfcd",
                            
				]
			}]
	};
	const config_4 = {
		type: 'doughnut',
		data: data_5,
		options: {
			
			
			plugins: {
				legend: {
					display: false,
				},
				title: {
					display: false,
					
				}
			}
		},
	};
	const myChart_4 = new Chart(
		document.getElementById('myChart_3'),
		config_4)
	
	var data_6 = {
		datasets: [
			{
				data: [155,500],
				circumference: Math.PI * 100,
				rotation: Math.PI * -50,
				cutout: 70,
				responsive: true,
				backgroundColor: [
					"rgb(89, 199, 255)",
					"#b5bfcd",
                            
				],
				hoverBackgroundColor: [
					"rgb(89, 199, 255)",
					"#b5bfcd",
                            
				]
			}]
	};
	const config_5 = {
		type: 'doughnut',
		data: data_6,
		options: {
			
			
			plugins: {
				legend: {
					display: false,
				},
				title: {
					display: false,
					
				}
			}
		},
	};
		const myChart_5 = new Chart(
		document.getElementById('gauge'),
		config_5)
	
	
	
setInterval(function() {
	let today = new Date();
	let hour = today.getHours();
	let min = today.getMinutes();
	let sec = today.getSeconds();
	am_pm = "AM";

	if (hour > 12) {
		hour -= 12;
		am_pm = "PM";
	}
	if (hour == 0) {
		hour = 12;
		am_pm = "AM";
	}

	hour = hour < 10 ? "0" + hour : hour;
	min = min < 10 ? "0" + min : min;
	sec = sec < 10 ? "0" + sec : sec;
	let currentTime = hour + ":"
			+ min + ":" + sec + " " + am_pm;
	
	document.getElementById("time")
			.innerHTML = currentTime;
}, 1000)};
setInterval(function() {
	let today = new Date();
	let month = today.getMonth() + 1;
	let day = today.getDate();
	let month2;
	month = month < 10 ? "0" + month : month;
	day = day < 10 ? "0" + day : day;
	if (month === 1) {
		month2 = "Jan"
	} else if (month === 2) {
		month2 = "Feb"
	} else if (month === 3) {
		month2 = "Mar"
	} else if (month === 4) {
		month2 = "Apr"
	} else if (month === 5) {
		month = "May"
	}else if (month === 6) {
		month2 = "Jun"
	}else if (month === 7) {
		month2 = "Jul"
	}else if (month === 8) {
		month2 = "Aug"
	}else if (month === 9) {
		month2 = "Sep"
	}else if (month === 10) {
		month2 = "Oct"
	}else if (month === 11) {
		month2 = "Nov"
	}else if (month === 12) {
		month2 = "Dec"
	}
	document.getElementById("weather").innerHTML =  month2 + " " +day;
}, 1000)


