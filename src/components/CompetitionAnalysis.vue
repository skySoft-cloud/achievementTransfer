<template>
<div class="summary-idea">
  <div id="main_charts"></div>
  <content-header title="行业竞争分析">
    <template slot="content">本技术能够有效实现尾气中醇、乙牌的资源化回农，使得甲乙醇的回收率高，收益大，男外，本技术不仅能有效减少有机度气的转放，还能有败减少粉尘排放，实现清洁化工生产。本技术还可
      应用于含有机物的尾气处理领娘，能将尾气中的有机物有效回收利用。</template>
  </content-header>
  <content-header title="市场需求状态">
    <template slot="content">本技术能够有效实现尾气中醇、乙牌的资源化回农，使得甲乙醇的回收率高，收益大，男外，本技术不仅能有效减少有机度气的转放，还能有败减少粉尘排放，实现清洁化工生产。本技术还可
      应用于含有机物的尾气处理领娘，能将尾气中的有机物有效回收利用。</template>
  </content-header>
</div>
</template>

<script>
import ContentHeader from "@/components/ContentHeader";
import * as echarts from "echarts";
export default {
  name: "CompetitionAnalysis",
  components: { ContentHeader },
  data() {
    return {
      option: {
        title: {
          text: '92(良)',
          x: 'center',
          y: 'center',
          textStyle: {
            color: '#ffffff',
            fontSize: 24,
          },
        },
        radar: {
          indicator: [
            { name: '团队能力', max: 100 },
            { name: '技术能力', max: 100 },
            { name: '财务数据', max: 100 },
            { name: '风险', max: 100 },
            { name: '竞争力', max: 100 },
          ],
          axisName: {
            fontSize: 14
          },
        },
        series: [
          {
            name: 'Budget vs spending',
            type: 'radar',
            itemStyle: {
              color: '#F1B792'
            },
            data: [
              {
                value: [90, 90, 88, 70, 95],
                label: {
                  show: true,
                  fontSize: 14,
                  color: '#c8c8c8',
                  formatter: function (params) {
                    return params.value;
                  }
                },
                lineStyle: {
                  color: '#E68140'
                },
                areaStyle: {
                  color: new echarts.graphic.RadialGradient(0.1, 0.6, 1, [
                    {
                      color: '#FAE8DD',
                      offset: 0
                    },
                    {
                      color: '#FAE8DD',
                      offset: 1
                    }
                  ])
                }
              },
              {
                value: [70, 65, 60, 40, 60],
                label: {
                  show: true,
                  formatter: function (params) {
                    return params.value;
                  }
                },
                symbol: 'none',
                lineStyle: {
                  color: '#E68140'
                },
                areaStyle: {
                  color: new echarts.graphic.RadialGradient(0.1, 0.6, 1, [
                    {
                      color: '#F1B792',
                      offset: 0
                    },
                    {
                      color: '#F1B792',
                      offset: 1
                    }
                  ])
                }
              }
            ]
          }
        ]
      }
    }
  },
  mounted () {
    let chartDom = document.getElementById('main_charts');
    let myChart = echarts.init(chartDom);
    this.option && myChart.setOption(this.option);
  }
};
</script>

<style lang="scss" scoped>
#main_charts{
  min-width: 500px;
  width: 550px;
  height: 460px;
}
</style>
