$(function(){
	$('.img_back').on('click',function(){
		history.go(-1);
	})
	$('.logo').on('click',function(){
		location.href='index.html'
	});
	setmap();
	$('.body').css({opacity:1}).addClass('animated rollIn')
	setTimeout(function(){
		$('.body').addClass('current')
	},1000)
})
function setmap(){
	setTimeout(function(){
		if(document.querySelector('#map1')){
			map1();
		}
		if(document.querySelector('#map2')){
			map2();

		}
		if(document.querySelector('#map3')){
			map3();
		}
		if(document.querySelector('#map4')){
			map4();
		}	
		if(document.querySelector('#map5')){
			map5();
		}
		if(document.querySelector('#map6')){
			map6();
		}
		if(document.querySelector('#map7')){
			map7();
		}
		if(document.querySelector('#map8')){
			map8();
		}
	},1000)
}
function map1(){
	var data = [[15, 0], [-50, 10], [-56.5, 20], [-46.5, 30], [-22.1, 40]];
	var option = {
	    title: {
	        text: ''
	    },
	    
	    grid: {
	        left: '0%',
	        right: '0%',
	        bottom: '0%',
	        containLabel: true
	    },
	     xAxis: {
        	type: 'category',
        	axisLabel:{color:'#fff'},
        	axisLine:{
        		lineStyle:{
        				color:'#21bccd'
        		}
        	},
        	splitLine:{show: false,lineStyle:{color:['red']}},
        	data: ['5月','6月','7月','8月','9月', '10月', '11月', '12月', '1月', '2月','3月', '4月']
	    },
	    yAxis: {
	        type: 'value',axisLine:{
	        	show:false
	        },axisLabel:{
	        	color:'#fff'
	        },splitLine:{show: true,lineStyle:{color:['#204a57']}},

	    },
	    series: [{
	        data: [220, 232, 301, 234, 290, 330, 220,332,302,290,322,182],
	        type: 'line',
	        lineStyle:{color:'#8ef4ff'},
	        itemStyle:{
	        	normal:{
	        		color:'#8ef4ff',borderColor:'#8ef4ff'
	        	}
	        },label:{
	        	normal:{
	        		show:true
	        	}
	        }
	    }]
	};
	var myChart=echarts.init(document.querySelector('#map1'));
	myChart.setOption(option);

}
function map2(){
	var data = [[15, 0], [-50, 10], [-56.5, 20], [-46.5, 30], [-22.1, 40]];
	var option = {
	    title: {
	        text: ''
	    },
	    
	    grid: {
	        left: '2%',
	        right: '10px',
	        bottom: '0%',
	        top:'6%',
	        containLabel: true
	    },
	    xAxis: {
        	type: 'value',
        	boundaryGap: [0, 0.01],
        	axisLabel:{color:'#fff'},
        	splitLine:{show: true,lineStyle:{color:['#204a57']}},
	    },
	    yAxis: {
	        type: 'category',
	        data: ['外科','普儿科','介入科','心内科','骨科'],
	        axisLabel:{color:'#fff'},
        	axisLine:{
        		lineStyle:{
        				color:'#21b8c9'
        		}
        	},splitLine:{show: false},
        	max:'70px'

	    },
	    series: [{
	        data: [32, 27, 32, 43, 48],
	        type: 'bar',
	        barWidth: '50%',
	        barCategoryGap:'10%',
	        lineStyle:{color:'#8ef4ff'},
	        itemStyle:{
	        	normal:{
	        		color:{
						    type: 'linear',
						    x: 1,
						    y: 1,
						    x2: 0,
						    y2: 1,
						    colorStops: [{
						        offset: 0, color: '#21bacb' // 0% 处的颜色
						    }, {
						        offset: 1, color: 'rgba(33,186,203,0.1)' // 100% 处的颜色
						    }],
						    globalCoord: false // 缺省为 false
					}
	        		
	        	}
	        },label:{
	        	normal:{
	        		show:true,position:['102%','20%'],color:'#fff'
	        	}
	        }
	    }]
	};
	var myChart=echarts.init(document.querySelector('#map2'));
	myChart.setOption(option);
}
function map3(){
	var data = [[15, 0], [-50, 10], [-56.5, 20], [-46.5, 30], [-22.1, 40]];
	var option = {
	    title: {
	        text: ''
	    },
	    
	    grid: {
	        left: '40px',
	        right: '0%',
	        bottom: '10px',
	        containLabel: true
	    },
	     xAxis: {
        	type: 'category',
        	axisLabel:{color:'#fff'},
        	axisLine:{
        		lineStyle:{
        				color:'#21bccd'
        		}
        	},
        	splitLine:{show: false,lineStyle:{color:['red']}},
        	data: [ '11月','12月','1月', '2月','3月']
	    },
	    yAxis: {
	        type: 'value',axisLine:{
	        	show:false
	        },axisLabel:{
	        	color:'#fff',margin:50,
	        	formatter:'      {value}',
	        },splitLine:{show: true,lineStyle:{color:['#204a57']}},

	    },
	    series: [
	    	{
		        data: [327,310,290,285,305],
		        type: 'line',
		        lineStyle:{color:'#8187e9'},
		        itemStyle:{
		        	normal:{
		        		color:'#8187e9',borderColor:'#8187e9'
		        	}
		        }
		    },
	    	{
	    		data: [323,290,301,270,290],
		        type: 'line',
		        lineStyle:{color:'#81dde9'},
		        itemStyle:{
		        	normal:{
		        		color:'#81dde9',borderColor:'#81dde9'
		        	}
		        }
	    	},
	    	{
	    		data: [285,243,265,285,302],
		        type: 'line',
		        lineStyle:{color:'#20c594'},
		        itemStyle:{
		        	normal:{
		        		color:'#20c594',borderColor:'#20c594'
		        	}
		        }
	    	},
	    	{
	    		data: [265,290,243,212,276],
		        type: 'line',
		        lineStyle:{color:'#92cd21'},
		        itemStyle:{
		        	normal:{
		        		color:'#92cd21',borderColor:'#92cd21'
		        	}
		        }
	    	},
	    	{
	    		data: [285,312,276,285,254],
		        type: 'line',
		        lineStyle:{color:'#cd6221'},
		        itemStyle:{
		        	normal:{
		        		color:'#cd6221',borderColor:'#cd6221'
		        	}
		        }
	    	},
	    	{
	    		data: [289,276,285,245,232],
		        type: 'line',
		        lineStyle:{color:'#c8ab21'},
		        itemStyle:{
		        	normal:{
		        		color:'#c8ab21',borderColor:'#c8ab21'
		        	}
		        }
	    	}
	    ]
	};
	var myChart=echarts.init(document.querySelector('#map3'));
	myChart.setOption(option);

}
function map4(){
	var data = [[15, 0], [-50, 10], [-56.5, 20], [-46.5, 30], [-22.1, 40]];
	var option = {
	    title: {
	        text: ''
	    },
	    
	    grid: {
	        left: '40px',
	        right: '0%',
	        bottom: '10px',
	        containLabel: true
	    },
	     xAxis: {
        	type: 'category',
        	axisLabel:{color:'#fff'},
        	axisLine:{
        		lineStyle:{
        				color:'#21bccd'
        		}
        	},
        	splitLine:{show: false,lineStyle:{color:['red']}},
        	data: [ '11月',	'12月','1月', '2月','3月']
	    },
	    yAxis: {
	        type: 'value',axisLine:{
	        	show:false
	        },axisLabel:{
	        	color:'#fff',margin:50,
	        	formatter:'      {value}',
	        },splitLine:{show: true,lineStyle:{color:['#204a57']}},

	    },
	    series: [
	    	{
		        data: [280,260,287,278,200],
		        type: 'line',
		        lineStyle:{color:'#8187e9'},
		        itemStyle:{
		        	normal:{
		        		color:'#8187e9',borderColor:'#8187e9'
		        	}
		        }
		    },
	    	{
	    		data: [260,292,267,234,254],
		        type: 'line',
		        lineStyle:{color:'#81dde9'},
		        itemStyle:{
		        	normal:{
		        		color:'#81dde9',borderColor:'#81dde9'
		        	}
		        }
	    	},
	    	{
	    		data: [234,212,223,245,190],
		        type: 'line',
		        lineStyle:{color:'#20c594'},
		        itemStyle:{
		        	normal:{
		        		color:'#20c594',borderColor:'#20c594'
		        	}
		        }
	    	},
	    	{
	    		data: [203,223,232,180,193],
		        type: 'line',
		        lineStyle:{color:'#92cd21'},
		        itemStyle:{
		        	normal:{
		        		color:'#92cd21',borderColor:'#92cd21'
		        	}
		        }
	    	},
	    	{
	    		data: [195,212,223,180,193],
		        type: 'line',
		        lineStyle:{color:'#cd6221'},
		        itemStyle:{
		        	normal:{
		        		color:'#cd6221',borderColor:'#cd6221'
		        	}
		        }
	    	},
	    	{
	    		data: [289,245,232,267,230],
		        type: 'line',
		        lineStyle:{color:'#c8ab21'},
		        itemStyle:{
		        	normal:{
		        		color:'#c8ab21',borderColor:'#c8ab21'
		        	}
		        }
	    	}
	    ]
	};
	var myChart=echarts.init(document.querySelector('#map4'));
	myChart.setOption(option);

}
function map5(){
	
	var option = {
	    title: {
	        text: ''
	    },
	    
	    grid: {
	        left: '40px',
	        right: '0%',
	        bottom: '10px',

	        containLabel: true
	    },
	    legend: {
       	 orient: 'vertical',
       	 x: 'left',show:false,
       	 data:['直接访问','邮件营销',]
	    },
	    series: [
	        {
	            name:'空置率',
	            type:'pie',
	            radius: ['35%', '45%'],
	            center : ['25%', '50%'],
	            avoidLabelOverlap: false,
	            label: {
	                normal: {
	                    show: false,
	                    position: 'center',
	                    textStyle:{fontSize:16}
	                }
	            },
	            labelLine: {
	                normal: {
	                    show: false
	                }
	            },
	            data:[
	                {value:75, name:'空置率'
		                ,label:{
		                	normal:{
		                		show:true,color:'#fff',
		                		formatter:['{a}','{b|{c}}{c|%}'].join('\n'),
		                		rich:{
		                			a:{
		                				color:'#fff',fontSize:16
		                			},b:{
		                				color:'#20adbd',fontSize:30,lineHeight:40
		                			},c:{
		                				color:'#fff'
		                			}
		                		}
		                	}
		                },itemStyle:{
		                	color:'#21bccd',opacity:0.9
		                }
	            	},
	                {value:25, name:'邮件营销',
	                	itemStyle:{
	                		color:'rgba(0,0,0,0)'
	                	}
	            	}
	            ]
	        },
	        {
	            name:'实时在保率',
	            type:'pie',
	            radius: ['35%', '45%'],
	            center : ['75%', '50%'],
	            avoidLabelOverlap: false,
	            label: {
	                normal: {
	                    show: false,
	                    position: 'center',
	                    textStyle:{fontSize:16}
	                }
	            },
	            labelLine: {
	                normal: {
	                    show: false
	                }
	            },
	            data:[
	                {value:73, name:'实时在保率'
		                ,label:{
		                	normal:{
		                		show:true,color:'#fff',
		                		formatter:['{a}','{b|{c}}{c|%}'].join('\n'),
		                		rich:{
		                			a:{
		                				color:'#fff',fontSize:16
		                			},b:{
		                				color:'#20adbd',fontSize:30,lineHeight:40
		                			},c:{
		                				color:'#fff'
		                			}
		                		}
		                	}
		                },itemStyle:{
		                	color:'#21cd9a',opacity:0.9
		                }
	            	},
	                {value:27, name:'邮件营销',
	                	itemStyle:{
	                		color:'rgba(0,0,0,0)'
	                	}
	            	}
	            ]
	        }
	    ]
	};
	var myChart=echarts.init(document.querySelector('#map5'));
	myChart.setOption(option);

}
function map6(){
	
	var option = {
	    title: {
	        text: ''
	    },
	    
	    grid: {
	        left: '40px',
	        right: '0%',
	        bottom: '10px',

	        containLabel: true
	    },
	    legend: {
       	 orient: 'vertical',
       	 x: 'left',show:false,
       	 data:['直接访问','邮件营销',]
	    },
	    series: [
	        {
	            name:'空置率',
	            type:'pie',
	            radius: ['35%', '45%'],
	            center : ['25%', '50%'],
	            avoidLabelOverlap: false,
	            label: {
	                normal: {
	                    show: false,
	                    position: 'center',
	                    textStyle:{fontSize:16}
	                }
	            },
	            labelLine: {
	                normal: {
	                    show: false
	                }
	            },
	            data:[
	                {value:75, name:'空置率'
		                ,label:{
		                	normal:{
		                		show:true,color:'#fff',
		                		formatter:['{a}','{b|{c}}{c|%}'].join('\n'),
		                		rich:{
		                			a:{
		                				color:'#fff',fontSize:16
		                			},b:{
		                				color:'#20adbd',fontSize:30,lineHeight:40
		                			},c:{
		                				color:'#fff'
		                			}
		                		}
		                	}
		                },itemStyle:{
		                	color:'#21bccd',opacity:0.9
		                }
	            	},
	                {value:25, name:'邮件营销',
	                	itemStyle:{
	                		color:'rgba(0,0,0,0)'
	                	}
	            	}
	            ]
	        },
	        {
	            name:'实时在保率',
	            type:'pie',
	            radius: ['35%', '45%'],
	            center : ['75%', '50%'],
	            avoidLabelOverlap: false,
	            label: {
	                normal: {
	                    show: false,
	                    position: 'center',
	                    textStyle:{fontSize:16}
	                }
	            },
	            labelLine: {
	                normal: {
	                    show: false
	                }
	            },
	            data:[
	                {value:73, name:'实时在保率'
		                ,label:{
		                	normal:{
		                		show:true,color:'#fff',
		                		formatter:['{a}','{b|{c}}{c|%}'].join('\n'),
		                		rich:{
		                			a:{
		                				color:'#fff',fontSize:16
		                			},b:{
		                				color:'#20adbd',fontSize:30,lineHeight:40
		                			},c:{
		                				color:'#fff'
		                			}
		                		}
		                	}
		                },itemStyle:{
		                	color:'#21cd9a',opacity:0.9
		                }
	            	},
	                {value:27, name:'邮件营销',
	                	itemStyle:{
	                		color:'rgba(0,0,0,0)'
	                	}
	            	}
	            ]
	        }
	    ]
	};
	var myChart=echarts.init(document.querySelector('#map6'));
	myChart.setOption(option);

}
function map7(){
	var data = [[15, 0], [-50, 10], [-56.5, 20], [-46.5, 30], [-22.1, 40]];
	var option = {
	    title: {
	        text: ''
	    },
	    
	    grid: {
	        left: '2%',
	        right: '20px',
	        bottom: '0%',
	        top:'6%',
	        containLabel: true
	    },
	    xAxis: {
        	type: 'value',
        	boundaryGap: [0, 0.01],
        	axisLabel:{color:'#fff'},
        	splitLine:{show: true,lineStyle:{color:['#204a57']}},
	    },
	    yAxis: {
	        type: 'category',
	        data: ['爱明医院','康复医院','第六肿瘤医院','台江区第八眼科医院','普济骨科医院'],
	        axisLabel:{
	        	color:'#fff',
	        	formatter:formatter
	        },
        	axisLine:{
        		lineStyle:{
        				color:'#21b8c9'
        		}
        	},splitLine:{show: false},
        	max:'70px'

	    },
	    series: [{
	        data: [223, 243, 254, 259, 286],
	        type: 'bar',
	        barWidth: '40%',
	        barCategoryGap:'10%',
	        lineStyle:{color:'#8ef4ff'},
	        itemStyle:{
	        	normal:{
	        		color: {
						    type: 'linear',
						    x: 1,
						    y: 1,
						    x2: 0,
						    y2: 1,
						    colorStops: [{
						        offset: 0, color: '#21bacb' // 0% 处的颜色
						    }, {
						        offset: 1, color: 'rgba(33,186,203,0.1)' // 100% 处的颜色
						    }],
						    globalCoord: false // 缺省为 false
					}
	        	}
	        },label:{
	        	normal:{
	        		show:true,position:['102%','20%'],color:'#fff'
	        	}
	        }
	    }]
	};
	var myChart=echarts.init(document.querySelector('#map7'));
	myChart.setOption(option);
}
function map8(){
	var data = [[15, 0], [-50, 10], [-56.5, 20], [-46.5, 30], [-22.1, 40]];
	var option = {
	    title: {
	        text: ''
	    },
	    
	    grid: {
	        left: '10px',
	        right: '0%',
	        bottom: '10px',top:'30px',
	        containLabel: true
	    },
	     xAxis: {
        	type: 'category',
        	axisLabel:{color:'#fff'},
        	axisLine:{
        		lineStyle:{
        				color:'#21bccd'
        		}
        	},
        	splitLine:{show: false,lineStyle:{color:['red']}},
        	data: ['厦门','福州','泉州','龙岩','宁德', '莆田', '平潭', '三明']
	    },
	    yAxis: {
	        type: 'value',axisLine:{
	        	show:false
	        },axisLabel:{
	        	color:'#fff'
	        },splitLine:{show: true,lineStyle:{color:['#204a57']}},

	    },
	    series: [{
	        data: [8220, 6332, 5941, 5443, 5223, 4893, 4764,4232,3255,3212],
	        type: 'line',
	        lineStyle:{color:'#8ef4ff'},
	        itemStyle:{
	        	normal:{
	        		color:'#8ef4ff',borderColor:'#8ef4ff'
	        	}
	        },label:{
	        	normal:{
	        		show:true
	        	}
	        }
	    }]
	};
	var myChart=echarts.init(document.querySelector('#map8'));
	myChart.setOption(option);

}
function formatter(params){
	var newParamsName = "";
    var paramsNameNumber = params.length;
    var provideNumber = 5;
    var rowNumber = Math.ceil(paramsNameNumber / provideNumber);
    if (paramsNameNumber > provideNumber) {
        for (var p = 0; p < rowNumber; p++) {
            var tempStr = "";
            var start = p * provideNumber;
            var end = start + provideNumber;
            if (p == rowNumber - 1) {
                tempStr = params.substring(start, paramsNameNumber);
            } else {
                tempStr = params.substring(start, end) + "\n";
            }
            newParamsName += tempStr;
        }

    } else {
        newParamsName = params;
    }
    return newParamsName
}