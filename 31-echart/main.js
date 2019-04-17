$(function(){
  var xData=[],
      yData=[];
  for(var p=0;p<=1;p+=0.1){
    xData.push(p.toFixed(1));
    yData.push(h(p));
  } 

  function h(p){
    if(p==0)  return 0;
    return -1*p*Math.log2(p)-(1-p)*Math.log2(1-p);
  }
  var myChart = echarts.init($('.main')[0]);
  var option = {
    title: {
      text: '二进熵函数曲线'
    },
    tooltip: {},
    legend: {
      data:['信息量']
    },
    xAxis: {
      data: xData
    },
    yAxis: {},
    series: [{
      name: '信息量',
      type: 'line',
      data: yData,
      smooth:true           
    }]
  };
  myChart.setOption(option);
});
