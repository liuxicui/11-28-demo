import React from 'react';
import echarts from 'echarts';

class Work extends React.Component {
  componentDidMount(){
    var myChart = echarts.init(document.getElementById('main'));
    let X = ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"];
    let Y = [44, 50, 30, 15, 20, 20];
    myChart.setOption({
      title: {
        text: '我的技能展示',
        left: 'center',
        padding:[25,15]
       },
      tooltip: {},
      xAxis: {
          data: X
      },
      yAxis: {},
      series: [{
          name: '销量',
          type: 'bar',
          data: Y
      }]
    });
    myChart.on('click', function (params) {
    // 控制台打印数据的名称
    console.log(params.name);
    });
  }
  render () {
    return(
    <div id='main' style={{width:'500px',height:'auto',maxWidth:'600px'}}>

    </div>
    )
  }
}

export default Work;
