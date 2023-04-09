<template>
  <div class="card-list">
    <div class="card-list-item"
         v-for="(listItem,index) in listData"
         :key="index"
         @click="clickItem(listItem)">
      <div class="top-content">
        <img :src="listItem.poster"
             alt="">
      </div>
      <div class="bottom-content">
        <div class="title">{{ listItem.title }}</div>
        <div class="city-desc">{{ listItem.city }}/{{ listItem.major }}</div>
        <div class="bottom-content-info">
          <div>
            <i class="el-icon-date"></i>
            <span>{{ listItem.date }}</span>
          </div>
          <div>
            <i class="el-icon-view"></i>
            <span>{{ listItem.readers }}人浏览</span>
          </div>
        </div>
      </div>
    </div>
    <!--    <div class="card-list-item">
          <div class="top-content">
            <img src="../assets/images/yc.png"
                 alt="">
            &lt;!&ndash;              <span>暂无图片</span>&ndash;&gt;
          </div>
          <div class="bottom-content"
               @click="$router.push({name: 'SummaryShowDetail'})">
            <div class="title">工厂化养蚕成套设备开发关键技术</div>
            <div class="city-desc">南充市/现代农业</div>
            <div class="bottom-content-info">
              <div>
                <img src="../assets/images/bg-calendar.png"
                     alt="">
                <span>2019-4-2</span>
              </div>
              <div>
                <img src="../assets/images/eye.png"
                     alt="">
                <span>121人浏览</span>
              </div>
            </div>
          </div>
        </div>
        <div class="card-list-item"
             @click="$router.push({name: 'SummaryShowDetail'})">
          <div class="top-content">
            <img src="../assets/images/lajiao.png"
                 alt="">
            &lt;!&ndash;              <span>暂无图片</span>&ndash;&gt;
          </div>
          <div class="bottom-content">
            <div class="title">自动循环辣椒多用烘干机智能化技术
            </div>
            <div class="city-desc">南充市/智能制造</div>
            <div class="bottom-content-info">
              <div>
                <img src="../assets/images/bg-calendar.png"
                     alt="">
                <span>2019-4-15</span>
              </div>
              <div>
                <img src="../assets/images/eye.png"
                     alt="">
                <span>33人浏览</span>
              </div>
            </div>
          </div>
        </div>
        <div class="card-list-item"
             @click="$router.push({name: 'SummaryShowDetail'})">
          <div class="top-content">
            <img src="../assets/images/gualou.png"
                 alt="">
            &lt;!&ndash;              <span>暂无图片</span>&ndash;&gt;
          </div>
          <div class="bottom-content">
            <div class="title">瓜蒌瓜子炒制及开口（破口） 技术</div>
            <div class="city-desc">泸州市/智能制造</div>
            <div class="bottom-content-info">
              <div>
                <img src="../assets/images/bg-calendar.png"
                     alt="">
                <span>2019-6-20</span>
              </div>
              <div>
                <img src="../assets/images/eye.png"
                     alt="">
                <span>12人浏览</span>
              </div>
            </div>
          </div>
        </div>
        <div class="card-list-item">
          <div class="top-content">
            <img src="../assets/images/huajiao.png"
                 alt="">
            &lt;!&ndash;              <span>暂无图片</span>&ndash;&gt;
          </div>
          <div class="bottom-content">
            <div class="title">花椒采摘小型机械 广安市市/现代农业</div>
            <div class="city-desc">南充市/电子信息</div>
            <div class="bottom-content-info">
              <div>
                <img src="../assets/images/bg-calendar.png"
                     alt="">
                <span>2019-6-15</span>
              </div>
              <div>
                <img src="../assets/images/eye.png"
                     alt="">
                <span>16人浏览</span>
              </div>
            </div>
          </div>
        </div>
        <div class="card-list-item">
          <div class="top-content">
            <img src="../assets/images/paomo.png"
                 alt="">
            &lt;!&ndash;              <span>暂无图片</span>&ndash;&gt;
          </div>
          <div class="bottom-content">
            <div class="title">大尺寸聚酰亚胺刚性泡沫安全环保生产工艺</div>
            <div class="city-desc">自贡市/化学化工</div>
            <div class="bottom-content-info">
              <div>
                <img src="../assets/images/bg-calendar.png"
                     alt="">
                <span>2019-5-5</span>
              </div>
              <div>
                <img src="../assets/images/eye.png"
                     alt="">
                <span>146人浏览</span>
              </div>
            </div>
          </div>
        </div>
        <div class="card-list-item">
          <div class="top-content">
            <img src="../assets/images/jiangcan.png"
                 alt="">
            &lt;!&ndash;              <span>暂无图片</span>&ndash;&gt;
          </div>
          <div class="bottom-content">
            <div class="title">一种提取分离僵蚕中抗凝血活性成分的方法</div>
            <div class="city-desc">泸州市/生物医药</div>
            <div class="bottom-content-info">
              <div>
                <img src="../assets/images/bg-calendar.png"
                     alt="">
                <span>2019-7-19</span>
              </div>
              <div>
                <img src="../assets/images/eye.png"
                     alt="">
                <span>56人浏览</span>
              </div>
            </div>
          </div>
        </div>
        <div class="card-list-item">
          <div class="top-content">
            <img src="../assets/images/yanghualv.png"
                 alt="">
            &lt;!&ndash;              <span>暂无图片</span>&ndash;&gt;
          </div>
          <div class="bottom-content">
            <div class="title">特种氧化铝陶瓷基板技术</div>
            <div class="city-desc">自贡市/化学化工</div>
            <div class="bottom-content-info">
              <div>
                <img src="../assets/images/bg-calendar.png"
                     alt="">
                <span>2019-8-2</span>
              </div>
              <div>
                <img src="../assets/images/eye.png"
                     alt="">
                <span>22人浏览</span>
              </div>
            </div>
          </div>
        </div>
        <div class="card-list-item">
          <div class="top-content">
            <img src="../assets/images/fadongji.png"
                 alt="">
            &lt;!&ndash;              <span>暂无图片</span>&ndash;&gt;
          </div>
          <div class="bottom-content">
            <div class="title">发动机高合金零部件精密铸造 工艺技术
            </div>
            <div class="city-desc">南充市/智能制造</div>
            <div class="bottom-content-info">
              <div>
                <img src="../assets/images/bg-calendar.png"
                     alt="">
                <span>2019-8-2</span>
              </div>
              <div>
                <img src="../assets/images/eye.png"
                     alt="">
                <span>21人浏览</span>
              </div>
            </div>
          </div>
        </div>
        <div class="card-list-item">
          <div class="top-content">
            <img src="../assets/images/byq.png"
                 alt="">
            &lt;!&ndash;              <span>暂无图片</span>&ndash;&gt;
          </div>
          <div class="bottom-content">
            <div class="title">干式变压器绝缘材料浇注和固化工艺技术</div>
            <div class="city-desc">南充市/先进材料</div>
            <div class="bottom-content-info">
              <div>
                <img src="../assets/images/bg-calendar.png"
                     alt="">
                <span>2019-8-10</span>
              </div>
              <div>
                <img src="../assets/images/eye.png"
                     alt="">
                <span>39人浏览</span>
              </div>
            </div>
          </div>
        </div>
        <div class="card-list-item">
          <div class="top-content">
            <img src="../assets/images/fati.png"
                 alt="">
            &lt;!&ndash;              <span>暂无图片</span>&ndash;&gt;
          </div>
          <div class="bottom-content">
            <div class="title">阀体感应装置加工工艺技术</div>
            <div class="city-desc">泸州市/能源化工</div>
            <div class="bottom-content-info">
              <div>
                <img src="../assets/images/bg-calendar.png"
                     alt="">
                <span>2019-9-22</span>
              </div>
              <div>
                <img src="../assets/images/eye.png"
                     alt="">
                <span>47人浏览</span>
              </div>
            </div>
          </div>
        </div>
        <div class="card-list-item">
          <div class="top-content">
            <img src="../assets/images/ngw.png"
                 alt="">
            &lt;!&ndash;              <span>暂无图片</span>&ndash;&gt;
          </div>
          <div class="bottom-content">
            <div class="title">一种耐高温高压的核磁扫描专用填砂管的研制
            </div>
            <div class="city-desc">自贡市/化学化工</div>
            <div class="bottom-content-info">
              <div>
                <img src="../assets/images/bg-calendar.png"
                     alt="">
                <span>2019-9-26</span>
              </div>
              <div>
                <img src="../assets/images/eye.png"
                     alt="">
                <span>22人浏览</span>
              </div>
            </div>
          </div>
        </div>-->
  </div>
</template>

<script>
export default {
  name: "CardItem",
  props: {
    routeName: {
      type: String,
      default: ""
    },
    "listData": {
      type: Array,
      default: () => []
    }
  }
  ,
  data () {
    return {};
  },
  methods: {
    clickItem (listItem) {
      this.$router.push({ name: this.routeName, query: {
          id: listItem.id
        } });
    }
  }
};
</script>

<style lang="scss"
       scoped>
@import "@/styles/_variables.scss";

.card-list {
  width: 1240px;
  padding-top: 38px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  .card-list-item {
    display: flex;
    flex-direction: column;
    width: 288px;
    min-height: 290px;
    margin-bottom: 60px;

    &:hover {
      cursor: pointer;
      box-shadow: 6px 4px 8px 2px #eee;
    }

    .top-content {
      display: flex;
      flex-direction: column;
      align-items: center;

      img {
        height: 170px;
      }

      span {
        font-size: 14px;
        color: #8B8B8B;
        margin-top: 8px;
      }
    }

    .bottom-content {
      background: #fff;
      display: flex;
      flex-direction: column;

      .title {
        padding-left: 24px;
        padding-right: 22px;
        font-size: 16px;
        color: #212121;
        margin: 8px 0 8px 0;
        height: 38px;

        &:hover {
          color: #E1660D;
        }
      }

      .city-desc {
        padding-left: 24px;
        padding-right: 22px;
        font-size: 12px;
        color: #8B8B8B;
        padding-bottom: 12px;
        border-bottom: 1px solid #eeeeee;
      }

      .bottom-content-info {
        display: flex;
        justify-content: space-between;
        padding: 12px 22px 16px 24px;

        div img {
          height: 14px;
          vertical-align: middle;
          margin-right: 6px;
        }

        div i {
          color: $text-color-grey;
          margin-right: 6px;
          vertical-align: middle;
        }

        div span {
          font-size: 12px;
          color: #8B8B8B;
        }
      }
    }
  }
}
</style>
