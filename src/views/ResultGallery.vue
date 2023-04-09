<template>
<div>
  <div style="height: 50px;background: #fff"></div>
  <div class="result-gallery">
    <el-breadcrumb separator-class="el-icon-arrow-right"
                   class="bread-list">
      <el-breadcrumb-item :to="{name:'TheIndex'}">首页</el-breadcrumb-item>
      <el-breadcrumb-item :to="{name:'CooperationRequirement'}">合作需求</el-breadcrumb-item>
      <el-breadcrumb-item>成果画像</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="result-gallery-content">
      <div class="title">光伏新能源项目详情</div>
      <div class="enterprise-info">
        <p>企业信息</p>
        <div class="enterprise-info-content">
          <div class="enterprise-info-item">
            <div><span>公司名称：</span>
              <div>浙江新伏能源管理有限公司</div>
            </div>
            <div><span>公司介绍：</span>
              <div>成立于2004年，位于浙江省丽水市，是一家以从事商务服务为主的企业。企业 注册资本3000万人名币，超过了89%的浙江省同行，实缴资本3000万人民币</div>
            </div>
          </div>
          <div class="enterprise-info-item">
            <div><span>发布时间：</span>
              <div>2022-11-08-23</div>
            </div>
            <div><span>运营状态：</span>
              <div>通过系统大数据分析，浙江绿谷光伏科技有限公司参与招投标项目1次：知识产权方面有商标信息1条，专项信息16条：此外企业还拥有行政许可3个。</div>
            </div>
          </div>
        </div>
      </div>
      <div class="enterprise-info mt66">
        <div class="enterprise-info-content dfc" style="border-bottom: none;">
          <div class="info-content">
            <div>
              <span>成果内容：</span>
              <div>光伏发电技术，再国家电价补贴等政策的大力扶持下，行业规模快速扩大。中国是全球光伏发电安装量增长迅速的国家，光伏发电安装量逐年增长。中国太阳能光伏发电站潜力巨大，
                配合积极稳定的政策扶持，正在成为中国的朝阳产业，将对中国的能源体系改革有着不可估量的影响。
              </div>
            </div>
          </div>
          <div class="bottom-box">
            <div class="left">
              <div>
                <span>所属行业：</span>
                <div>新能源</div>
              </div>
              <div>
                <span>研发团队：</span>
                <div>光伏发电技术，再国家电价补贴等政策的大力扶持下，行业规模快速扩大。中国
                  是全球光伏发电安装量增长迅速的国家，光伏发电安装量逐年增长。中国太阳能
                  光伏发电站潜力巨大，配合积极稳定的政策扶持，正在成为中国的朝阳产业，将
                  对中国的能源体系改革有着不可估量的影响。</div>
              </div>
              <div>
                <span>竞争信息：</span>
                <div>公司成立于2009年，是集光伏支架研发、设计、生产和销售于一体的清洁能源技
                  术和方案提供商。总部位于杭州，光伏支架产能6000兆瓦。生产基地位于浙江长
                  兴。河北唐山、布局贵阳和义乌等地。截止2020年底，累计为全球30多个国家500
                  多座光伏电站提供10GW安装量的光伏支架系统解决方案。累计取得专利122项，入
                  榜中国光伏电站支架企业10强。</div>
              </div>
              <div>
                <span>技术创新：</span>
                <div>技术优势：深耕光伏支架领域11年，累计获得专利122项，公司推出行星系列跟踪
                  支架，自主研发控制系统、创新制动装置、智能跟踪算法和闭环反馈系统等，实现
                  更高精度的跟踪技术、助力光伏平均时代提质将本增效。
                  产能优势：工厂布局长兴、上海、唐山、贵阳等地，产能6000兆瓦以上，累计安装
                  支架10GW，已为全球30多个国家和地区提供优质的光伏支架系统解决方案。</div>
              </div>
            </div>
            <div class="right">
              <div id="main_charts"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div style="height: 100px;background: #f5f5f5"></div>
  </div>
  <div style="height: 20px;background: #fff"></div>
</div>
</template>

<script>
import * as echarts from 'echarts';
export default {
  name: "ResultGallery",
  mounted () {
    let chartDom = document.getElementById('main_charts');
    let myChart = echarts.init(chartDom);
    this.option && myChart.setOption(this.option);
  },
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
  }
};
</script>

<style lang="scss">
.result-gallery {
  background: #F5F5F5;

  .bread-list {
    width: 1240px;
    margin: 0 auto;
    padding: 28px 0 20px 0;
  }

  .result-gallery-content {
    width: 1240px;
    background: #ffffff;
    margin: 0 auto;

    .title {
      font-size: 18px;
      font-weight: bold;
      padding: 18px 12px;
      color: #0F0F0F;
      border-bottom: 2px solid #eeeeee;
    }

    .enterprise-info {
      font-size: 14px;

      > p {
        padding-left: 16px;
      }

      .enterprise-info-content {
        display: flex;
        justify-content: space-between;
        padding: 0 40px 24px 40px;
        border-bottom: 2px solid #eeeeee;
      }

      .enterprise-info-item {
        width: 524px;

        > div {
          display: flex;
          margin-bottom: 14px;
          color: #5C5C5C;

          span {
            display: inline-block;
            color: #000;
            min-width: 80px;
          }

          > div {
            width: 440px;
          }
        }
      }

      .info-content {
        width: 100%;

        > div {
          display: flex;
          margin-bottom: 14px;
          color: #5C5C5C;

          span {
            display: inline-block;
            color: #000;
            min-width: 80px;
          }
        }
      }
    }
  }

  .mt66 {
    margin-top: 66px;
  }
  .dfc{
    display: flex;
    flex-direction: column;
    .bottom-box{
      display: flex;
      justify-content: space-between;
    }
    .left{
      > div {
        display: flex;
        margin-bottom: 14px;
        color: #5C5C5C;

        span {
          display: inline-block;
          color: #000;
          min-width: 80px;
        }

        > div {
          width: 440px;
        }
      }
    }
  }
  #main_charts{
    min-width: 500px;
    width: 550px;
    height: 460px;
  }
}
</style>
