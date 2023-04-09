<template>
<div>
  <div class="full-container">
    <div class="news-list-item"
         style="padding-top: 20px;"
         @click="$router.push({name: 'NewsDetail'})">
      <div><img src="../assets/images/new4.png"
                alt=""></div>
      <div class="news-desc">
        <h3>全国第一个线下全产业技术展示馆启动，展示项目征集中!</h3>
        <div class="n-active-profile df"><span class="label40">新闻简介: </span><span>首期产业技术馆展示技术全面征集中，如果您的技术有足够市场容量和推广价值有足够技术亮点，如果您想加大技术的推广力度，获得更多技术报道以及曝光率，请及时联系我们。</span></div>
        <span>2019年11月11日</span>
      </div>
    </div>
  </div>
  <div class="full-container">
    <div class="news-list-item"
         @click="$router.push({name: 'NewsDetail'})">
      <div><img src="../assets/images/new4.png"
                alt=""></div>
      <div class="news-desc">
        <h3>全国第一个线下全产业技术展示馆启动，展示项目征集中!</h3>
        <div class="n-active-profile df"><span class="label40">新闻简介: </span><span>首期产业技术馆展示技术全面征集中，如果您的技术有足够市场容量和推广价值有足够技术亮点，如果您想加大技术的推广力度，获得更多技术报道以及曝光率，请及时联系我们。</span></div>
        <span>2019年11月11日</span>
      </div>
    </div>
  </div>
  <div class="full-container">
    <div class="news-list-item"
         @click="$router.push({name: 'NewsDetail'})">
      <div><img src="../assets/images/new4.png"
                alt=""></div>
      <div class="news-desc">
        <h3>全国第一个线下全产业技术展示馆启动，展示项目征集中!</h3>
        <div class="n-active-profile df"><span class="label40">新闻简介: </span><span>首期产业技术馆展示技术全面征集中，如果您的技术有足够市场容量和推广价值有足够技术亮点，如果您想加大技术的推广力度，获得更多技术报道以及曝光率，请及时联系我们。</span></div>
        <span>2019年11月11日</span>
      </div>
    </div>
  </div>
  <div class="full-container">
    <div class="news-list-item"
         @click="$router.push({name: 'NewsDetail'})">
      <div><img src="../assets/images/new4.png"
                alt=""></div>
      <div class="news-desc">
        <h3>全国第一个线下全产业技术展示馆启动，展示项目征集中!</h3>
        <div class="n-active-profile df"><span class="label40">新闻简介: </span><span>首期产业技术馆展示技术全面征集中，如果您的技术有足够市场容量和推广价值有足够技术亮点，如果您想加大技术的推广力度，获得更多技术报道以及曝光率，请及时联系我们。</span></div>
        <span>2019年11月11日</span>
      </div>
    </div>
  </div>
<!--  <div class="full-container" v-for="(item) in listData" :key="item.id">
    <div class="news-list-item"
         @click="$router.push({name: 'NewsDetail',query: {id:item.id}})">
&lt;!&ndash;      TODO:图片字段没有？&ndash;&gt;
      <div><img src="../assets/images/new4.png"
                alt=""></div>
      <div class="news-desc">
        <h3>{{item.title}}</h3>
        <div class="n-active-profile df"><span class="label40">新闻简介: </span><span>{{item.descrption}}</span></div>
        <span>{{item.createTime}}</span>
      </div>
    </div>
  </div>-->
  <div class="page-size-class">
    <div>
      <el-pagination
        background
        :current-page="2"
        layout="prev, pager, next"
        :total="100">
      </el-pagination>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "NewsList",
  data(){
    return {
      listData: []
    }
  }
};
</script>
<style lang="scss">
.n-active-profile{
  font-size: 20px;
  margin-bottom: 30px;
  height: 120px;
  max-height: 120px;
  overflow: hidden;
}
.label40{
  min-width: 100px;
  margin-right: 10px;

}
.full-container{
  padding: 20px 0;
}
</style>
