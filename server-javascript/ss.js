
// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('main'));
// 指定图表的配置项和数据

var option = {
    title: {
        text: '走势图'
    },
    tooltip: {
        trigger: 'axis'
    },  
    xAxis:  {
        type: 'category',
        boundaryGap: false,
        data: ['周一','周二','周三','周四','周五','周六','周日']
    },
    yAxis: {
        type: 'value',
        axisLabel: {
            formatter: '{value}'
        }
    },
    series: [
        {
            name:'1',
            type:'line',
            data:[1, 2, 12, 13, 22, 23, 24] 
        },
        {
            name:'2',
            type:'line',
            data:[12, 22, 12, 35, 13, 12, 10] 
        },
        {
            name:'3',
            type:'line',
            data:[12, 22, 12, 35, 13, 12, 10] 
        },
        {
            name:'4',
            type:'line',
            data:[12, 22, 12, 35, 13, 12, 10] 
        },
        {
            name:'5',
            type:'line',
            data:[12, 22, 12, 35, 13, 12, 10] 
        },
        {
            name:'6',
            type:'line',
            data:[12, 22, 12, 35, 13, 12, 10] 
        }
    ]
};

myChart.setOption(option); 