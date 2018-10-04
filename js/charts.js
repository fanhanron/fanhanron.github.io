// // 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('page4-chart'));

// 指定图表的配置项和数据
var option = {
    title: {
        text: '技能知识点掌握',
        subtext: 'skills and knowlegde',
        x:'center'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : ({c}%)"
    },
    series : [
        {
            name: '掌握度:',
            type: 'pie',
            radius: '55%',
            data:[
                {value:70, name:'javascript'},
				{value:70, name:'css'},
                {value:60, name:'linux'},
                {value:70, name:'php'},
                {value:70, name:'mysql'}
            ],
            roseType: 'angle',
            itemStyle: {
                emphasis: {
                    shadowBlur: 35,
                    shadowOffsetX: 0,
                    // 阴影垂直方向上的偏移
                    shadowOffsetY: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.7)'
                }
            }
        }
    ]
    
};

// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);