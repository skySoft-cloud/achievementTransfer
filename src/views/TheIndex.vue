<template>
  <div class="the-index">
    <div class="w1240 df flex-sb week-container">
      <div>
        <week-section :section-list="weekResult"
                      title="本周成果关注排名"
                      class="mb132"></week-section>
        <week-section :section-list="weekProvide"
                      title="本周供需对接排名"></week-section>
      </div>
      <div>
        <week-section title="本周成果数据采集"
                      width="400px">
          <template #weekData>
            <div class="data-get">
              <img src="../assets/images/earth.png"
                   class="earth-img"
                   alt="">
              <div class="data-get-desc">
                <span>本周采集数据</span>
                <span>202029</span>
              </div>
            </div>
          </template>
        </week-section>
      </div>
    </div>
    <sub-section background="#3A3C48"
                 color="#ffffff"
                 title="成果大厅"
                 routeName="SummaryShow"
                 shadowText="ACHIEVEMENT"
                 shadowColor="#FFFFFF"
                 opacity="0.03">
      <template #content>
        <div class="result-room">
          <div class="result-room-item img-mb"
               @click="$router.push({name: 'SummaryShowDetail'})">
            <img
              src="../assets/images/成果大厅1@2x.png"
              alt="">
            <div>电子信息</div>
          </div>
          <div class="result-room-item img-mb">
            <img src="../assets/images/成果大厅2@2x.png"
                 alt="">
            <div>生物医药</div>
          </div>
          <div class="result-room-item img-mb">
            <img src="../assets/images/成果大厅3@2x.png"
                 alt="">
            <div>智能制造</div>
          </div>
          <div class="result-room-item img-mb">
            <img src="../assets/images/成果大厅4@2x.png"
                 alt="">
            <div>能源化工</div>
          </div>
        </div>
      </template>
    </sub-section>
    <sub-section background="#ffffff"
                 color="#000000"
                 title="需求大厅"
                 routeName="CooperationRequirement"
                 shadowText="DEMAND"
                 shadowColor="#CDD3DE"
                 opacity="0.3">
      <template #content>
        <div class="result-room mb40">
          <div class="result-room-item img-mb"
               @click="$router.push({name: 'RequirementShowDetail'})">
            <img src="../assets/images/需求大厅1@2x.png"
                 alt="">
            <div>油橄榄渣的综合利用</div>
          </div>
          <div class="result-room-item img-mb">
            <img src="../assets/images/需求大厅2@2x.png"
                 alt="">
            <div>发动机高合金零部件精密铸造</div>
          </div>
          <div class="result-room-item img-mb">
            <img src="../assets/images/需求大厅3.@2x.png"
                 alt="">
            <div>饲料生产的关键技术应用</div>
          </div>
          <div class="result-room-item img-mb">
            <img src="../assets/images/组 16@2x.png"
                 alt="">
            <div>无花果果干烘干技术</div>
          </div>
        </div>
        <div class="result-room">
          <div class="result-room-item img-mb">
            <img src="../assets/images/需求大厅5@2x.png"
                 alt="">
            <div>瓜蒌的综合利用技术</div>
          </div>
          <div class="result-room-item img-mb">
            <img src="../assets/images/需求大厅6@2x.png"
                 alt="">
            <div>特种氧化铝陶瓷基板技术</div>
          </div>
          <div class="result-room-item img-mb">
            <img src="../assets/images/gongyijishu.png"
                 alt="">
            <div>阀体感应装置加工工艺技术</div>
          </div>
          <div class="result-room-item img-mb">
            <img src="../assets/images/需求大厅8@2x.png"
                 alt="">
            <div>突破电感器耐电流载荷技术</div>
          </div>
        </div>
      </template>
    </sub-section>
    <sub-section style="margin-top: 0"
                 background="#F4F5F7"
                 color="#000000"
                 title="最新动态"
                 routeName="ActiveNews"
                 shadowText="RECENT NEWS"
                 shadowColor="#CDD3DE"
                 opacity="0.3">
      <template #content>
        <div class="new-dynamic">
          <img src="../assets/images/newast_dynamic.png">
          <div class="news">
            <div class="news-head">
              <span @click="dynamic='news'" :class="[dynamic === 'news' ? 'active' : '']">科技动态</span>
              <span @click="dynamic='active'" :class="[dynamic === 'active' ? 'active' : '']">最新活动</span>
            </div>
            <div class="news-item" @click="$router.push({name: 'ActiveNews'})">
              <span>第十届国内外高端人才交流会</span>
              <span>03-21</span>
            </div>
            <div class="news-item">
              <span>电子信息行业全国总决赛四川企业终战告捷</span>
              <span>03-14</span>
            </div>
            <div class="news-item">
              <span>遂宁市人民政府与四川大学成功签约合作 —设立 5000万元资金支持发展</span>
              <span>03-04</span>
            </div>
            <div class="news-item">
              <span>绵阳市实施“四川省科技扶贫产业技术服务与示范” 项目启动仪式在安州区举行</span>
              <span>02-21</span>
            </div>
          </div>
        </div>
      </template>
    </sub-section>
    <sub-section background="#3A3C48"
                 color="#ffffff"
                 title="专家库"
                 routeName="ProfessionalPool"
                 shadowText="EXPEXTS"
                 shadowColor="#FFFFFF"
                 opacity="0.03">
      <template #content>
        <div class="result-room avatar-container">
          <div class="result-room-item img-mb1"
               @click="$router.push({name: 'ProfessionalDetail'})">
            <img src="../assets/images/专家7@2x.png"
                 alt="">
            <div class="profession">何晴</div>
            <div class="profession-line"></div>
          </div>
          <div class="result-room-item">
            <img src="../assets/images/18@2x.png"
                 alt="">
            <div class="profession">贾亮</div>
            <div class="profession-line"></div>
          </div>
          <div class="result-room-item">
            <img src="../assets/images/专家3@2x.png"
                 alt="">
            <div class="profession">刘昊然</div>
            <div class="profession-line"></div>
          </div>
          <div class="result-room-item">
            <img src="../assets/images/专家2@2x.png"
                 alt="">
            <div class="profession">吴承东</div>
            <div class="profession-line"></div>
          </div>
        </div>
      </template>
    </sub-section>
    <sub-section background="#F4F5F7"
                 color="#000000"
                 title="服务商"
                 routeName="ServiceConstructor"
                 shadowText="RECENT NEWS"
                 shadowColor="#CDD3DE"
                 opacity="0.3">
      <template #content>
        <div class="service-store mb16">
          <img
            @click="goNewWindow"
            src="../assets/images/tianfuxingulogo@2x.png"
            class="service-store-item">
          <img src="../assets/images/logo@2x.png"
               class="service-store-item">
          <img src="../assets/images/logo12@2x.png"
               class="service-store-item">
          <img src="../assets/images/logo4@2x.png"
               class="service-store-item">
          <img src="../assets/images/youchen@2x.png"
               class="service-store-item">
        </div>
        <div class="service-store">
          <img src="../assets/images/work+@2x.png"
               class="service-store-item">
          <img src="../assets/images/tengxun@2x.png"
               class="service-store-item">
          <img src="../assets/images/logo13@2x.png"
               class="service-store-item">
          <img src="../assets/images/logo@2x(1).png"
               class="service-store-item">
          <img src="../assets/images/yingchuangdongli@2x.png"
               class="service-store-item"
               @click="goNewWindow2">
        </div>
      </template>
    </sub-section>
    <sub-section background="#ffffff"
                 color="#000000"
                 title="投融资服务"
                 shadowText="INVESTMENT SERVICE"
                 shadowColor="#CDD3DE"
                 :hideBtn="true"
                 style="padding-bottom: 40px;"
                 opacity="0.3">
      <template #content>
        <div class="result-room">
          <div class="result-room-item"
               style="width: 293px;height: 280px;box-shadow: none">
            <img src="../assets/images/bank1.png"
                 style="width: 293px;height: 280px;"
                 alt="">
            <el-button type="primary" style="width: 200px;height: 38px;border-radius: 18px;position:absolute;bottom: 34px">立即申请>></el-button>
          </div>
          <div class="result-room-item"
               style="width: 293px;height: 280px;box-shadow: none">
            <img src="../assets/images/bank2.png"
                 style="width: 293px;height: 280px;"
                 alt="">
            <el-button type="primary" style="width: 200px;height: 38px;border-radius: 18px;position:absolute;bottom: 34px">立即申请>></el-button>
          </div>
          <div class="result-room-item"
               style="width: 293px;height: 280px;box-shadow: none">
            <img src="../assets/images/bank3.png"
                 style="width: 293px;height: 280px;"
                 alt="">
            <el-button type="primary" style="width: 200px;height: 38px;border-radius: 18px;position:absolute;bottom: 34px">立即申请>></el-button>
          </div>
          <div class="result-room-item"
               style="width: 293px;height: 280px;box-shadow: none">
            <img src="../assets/images/bank4.png"
                 style="width: 293px;height: 280px;"
                 alt="">
            <el-button type="primary" style="width: 200px;height: 38px;border-radius: 18px;position:absolute;bottom: 34px">立即申请>></el-button>
          </div>
        </div>
      </template>
    </sub-section>
    <!--    <div class="footer-container bottom-images">
          <img src="../assets/images/i1.png"
               @click="goLink('http://zr.scppc.org.cn/list-50-1.html')"
               alt="">
          <img src="../assets/images/i2.png"
               @click="goLink('http://tech.scppc.org.cn/')"
               alt="">
          <img src="../assets/images/i3.png"
               @click="goLink('http://ztsp.scppc.org.cn/')"
               alt="">
          <img src="../assets/images/i4.png"
               @click="goLink('http://fuhua.scppc.org.cn/index.php')"
               alt="">
        </div>-->
  </div>
</template>

<script>
import WeekSection from "@/components/WeekSection";
import SubSection from "@/components/SubSection";

export default {
  name: "index",
  components: { SubSection, WeekSection },
  data () {
    return {
      weekResult: [
        {
          desc: "超级电容器太阳能发电系统输出频率的控制技术",
          num: "123",
          routeName: "SummaryShowDetail",
          id: 1
        },
        {
          desc: "钛合金涡轮及导向轮机加工工艺的优化改进",
          num: "123",
        },
        {
          desc: "页岩气开采井下油管耐“硫酸盐还原菌”腐蚀涂层技术开发",
          num: "312"
        }
      ],
      weekProvide: [
        {
          desc: "高分子材料聚醚醚酮（PEEK）模压工艺的优化改进",
          num: "123",
          routeName: "RequirementShowDetail",
          id: 1
        },
        {
          desc: "太阳能电站DC-AC变换器高效率整流技术",
          num: "123"
        },
        {
          desc: "四旋翼无人机结构的强度和力场三维仿",
          num: "312"
        }
      ],
      dynamic: 'news'
    };
  },
  methods: {
    goNewWindow () {
      window.open("http://www.thinkzone.com.cn/", "_blank");
    },
    goNewWindow2 () {
      window.open("https://www.winpow.com/", "_blank");
    },
    goLink (url) {
      window.open(url, "_blank");
    }
  }
};
</script>

<style lang="scss">
.the-index {
  .mb16 {
    margin-bottom: 16px;
  }

  .mb90 {
    margin-bottom: 94px;
  }

  .mb132 {
    margin-bottom: 132px;
  }

  .mb40 {
    margin-bottom: 40px;
  }

  .mb80 {
    margin-bottom: 80px;
  }

  .week-container {
    padding: 40px 0;
    align-items: flex-start;

    .data-get {
      display: flex;
      flex-direction: column;
      align-items: center;

      .earth-img {
        width: 398px;
        height: 376px;
      }

      .data-get-desc {
        margin-top: 20px;

        span:first-child {
          font-size: 20px;
          font-weight: 400;
          color: #000000;
          margin-right: 20px;
        }

        span:last-child {
          font-size: 24px;
          font-weight: bold;
          color: #E68140;
        }
      }
    }
  }

  .result-room {
    width: 100%;
    display: flex;
    justify-content: space-between;

    .result-room-item {
      width: 286px;
      height: 286px;
      display: flex;
      flex-direction: column;
      align-items: center;
      box-shadow: 0px 2px 2px 0px rgba(8, 1, 3, 0.13);
      position: relative;

      &:hover {
        cursor: pointer;
        /* &:before{
           text-align: center;
           line-height: 286px;
           color: #ffffff;
           font-size: 14px;
           font-weight: 700;
           content: "行业分类 | 合作方式 | 联系企业";
           display: block;
           position: absolute;
           top: 0;
           left: 0;
           right: 0;
           bottom: 0;
           background: #E68140;
           opacity: 0.7;
         }*/
      }

      img {
        width: 286px;
      }

      div {
        background: #ffffff;
        font-size: 16px;
        color: #232326;
        width: 100%;
        text-align: center;
        padding: 12px 0;

        &:hover {
          cursor: pointer;
          color: #E68140;
        }
      }
    }

    .img-mb {
      position: relative;

      &:hover.img-mb::before {
        font-size: 14px;
        width: 286px;
        height: 286px;
        text-align: center;
        line-height: 286px;
        content: "行业分类 | 合作方式 | 联系企业";
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        top: 0;
        color: #fff;
        background-color: #e68140;
        opacity: 0.8;
      }
    }
  }

  .new-dynamic {
    display: flex;

    img {
      width: 664px;
      height: 420px;
    }

    .news {
      width: 530px;
      height: 420px;
      display: flex;
      flex-direction: column;
      background: #ffffff;
      padding-left: 20px;

      .news-head {
        font-size: 20px;
        font-weight: bold;
        color: #1F1F1F;
        padding: 20px 10px 10px 10px;
        border-bottom: 1px solid #eeeeee;
        span:hover{
          cursor: pointer;
        }
        span:first-child {
          margin-right: 20px;
        }
      }

      .news-item {
        display: flex;
        justify-content: space-between;
        padding: 37px 10px 10px 10px;
        border-bottom: 1px solid #eeeeee;

        &:hover {
          cursor: pointer;
          color: #E68140;
        }

        span:first-child {
          width: 385px;
          font-size: 18px;
          color: #1F1F1F;

          &:hover {
            cursor: pointer;
            color: #E68140;
          }
        }

        span:last-child {
          font-size: 18px;
          color: #838383;

          &:hover {
            cursor: pointer;
            color: #E68140;
          }
        }
      }
    }
  }

  .avatar-container {
    .img-mb1 {
      position: relative;

      &:hover.img-mb1::before {
        font-size: 14px;
        content: "行业分类 | 合作方式 | 联系企业";
        width: 286px;
        height: 286px;
        text-align: center;
        line-height: 286px;
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        top: 0;
        color: #fff;
        background-color: #e68140;
        opacity: 0.8;
      }
    }

    .result-room-item {
      font-size: 0;

      &:hover {
        cursor: pointer;
      }

      background: #ffffff;

      img {
        width: 146px;
        height: 146px;
        margin-top: 20px;
      }

      .profession {
        font-size: 20px;
        color: #000000;
        padding: 0;
        padding-top: 28px;
      }

      .profession-line {
        width: 26px;
        height: 5px;
        background: #E68140;
        padding: 0;
        margin-bottom: 15px;
        margin-top: 6px;
      }

      .profession-role {
        font-size: 16px;
        color: #000000;
        padding: 0;
      }
    }
  }

  .service-store {
    width: 100%;
    display: flex;
    justify-content: space-between;

    .service-store-item {
      width: 228px;
      height: 100px;

      &:hover {
        cursor: pointer;
        color: #E68140;
      }
    }
  }

  .footer-container {
    width: 1240px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    color: #ffffff;
    font-size: 20px;
    padding-top: 20px;
    padding-bottom: 20px;
  }

  .bottom-images {
    img {
      width: 286px;
      height: 60px;

      &:hover {
        cursor: pointer;
      }
    }
  }
}
</style>
