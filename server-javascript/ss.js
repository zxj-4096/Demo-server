
// ����׼���õ�dom����ʼ��echartsʵ��
var myChart = echarts.init(document.getElementById('main'));
// ָ��ͼ��������������

var option = {
    title: {
        text: '����ͼ'
    },
    tooltip: {
        trigger: 'axis'
    },  
    xAxis:  {
        type: 'category',
        boundaryGap: false,
        data: ['��һ','�ܶ�','����','����','����','����','����']
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