window.onload = function () {
	var chart = new CanvasJS.Chart("chartContainer", {
       
		theme: "light2",//light1
        zoomEnabled: true,
        panEnabled: true,
		
        creditText: "Custom String",
        culture:"es",
		
		title:{
			              
		},
		data: [              
		{
           
			type: "area",
			fillOpacity: .2,
            color:"aqua",
			cursor: "pointer",
			markerType: "none",
			lineThickness: 3,
			dataPoints: [
				{ label: "Ja",  y: 150  },
				{ label: "Fe", y: 155  },
				{ label: "Ma", y:  270 },
				{ label: "Ap",  y: 250  },
				{ label: "Ma",  y: 230  },
                { label: "Ju",  y: 240  },
                { label: "Ji",  y: 270  },
                { label: "Au",  y: 280  },
                { label: "Se",  y: 300  },
                { label: "Oc",  y: 170  },
                { label: "No",  y: 180  },
                { label: "De",  y: 150  },
			]
            
		},{
            type: "area",
            color:"lightgreen",
			fillOpacity: .2,
			markerType: "none",
			cursor: "pointer",
			dataPoints: [
				{ label: "Ja",  y: 150  },
				{ label: "Fe", y: 175  },
				{ label: "Ma", y:  270 },
				{ label: "Ap",  y: 300  },
				{ label: "Ma",  y: 250  },
                { label: "Ju",  y: 260  },
                { label: "Ji",  y: 280  },                
                { label: "Au",  y: 280  },
                { label: "Se",  y: 270  },
                { label: "Oc",  y: 190  },
                { label: "No",  y: 170  },
                { label: "De",  y: 160  },
			]
        }
		],			
		
	});
	chart.render();

	var chart_2 = new CanvasJS.Chart("chartContainer_2", {
       
		theme: "light2",//light1
        zoomEnabled: true,
        panEnabled: true,
		
        creditText: "Custom String",
        culture:"es",
		
		title:{
			              
		},
		data: [              
		{
           
			type: "area",
			fillOpacity: .2,
            color:"aqua",
			cursor: "pointer",
			markerType: "none",
			lineThickness: 3,
			dataPoints: [
				

				{ label: "Ja",  y: 130  },
				{ label: "Fe", y: 125  },
				{ label: "Ma", y:  120 },
				{ label: "Ap",  y: 115  },
				{ label: "Ma",  y: 140  },
                { label: "Ju",  y: 145  },
                { label: "Ji",  y: 150  },
                { label: "Au",  y: 145  },
                { label: "Se",  y: 150  },
                { label: "Oc",  y: 140  },
                { label: "No",  y: 240  },
                { label: "De",  y: 240  },
			]
            
		},{
            type: "area",
            color:"lightgreen",
			fillOpacity: .2,
			markerType: "none",
			cursor: "pointer",
			dataPoints: [
				{ label: "Ja",  y: 150  },
				{ label: "Fe", y: 170  },
				{ label: "Ma", y:  170 },
				{ label: "Ap",  y: 175  },
				{ label: "Ma",  y: 187  },
                { label: "Ju",  y: 195  },
                { label: "Ji",  y: 200  },                
                { label: "Au",  y: 170  },
                { label: "Se",  y: 150  },
                { label: "Oc",  y: 175  },
                { label: "No",  y: 180  },
                { label: "De",  y: 183  },
			]
        }
		],			
		
	});
	chart_2.render();

	var chart_3 = new CanvasJS.Chart("doughnut",
    {
      title:{
        
      },
      data: [
      {
       type: "doughnut",
	   color:"#53c6ea",
       dataPoints: [
       {  y: 65},  
       {  y: 300},
       ]
     }
     ]
   });

   chart_3.render();
};

