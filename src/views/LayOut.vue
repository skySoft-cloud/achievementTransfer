<template>
  <el-container>
    <el-header :height="!showBanner ?'138px' : '420px'">
      <div class="header-top flex-sb">
        <span>欢迎访问基于大数据科技孵化成果转移转化平台</span>
        <div class="header-top-right">
          <span @click="goUserLogin">登录</span>
          <el-divider direction="vertical"></el-divider>
          <span>注册</span>
        </div>
      </div>
      <el-divider></el-divider>
      <div class="header-nav flex-sb">
          <span class="header-nav-logo">
            <img src="../assets/images/comlogo.png"
                 alt="">
          </span>
        <span @click="goRoute('TheIndex')"
              :class="['header-nav-item',$route.name === 'TheIndex' ? 'active' : '' ]">首页</span>
        <span @click="goRoute('SummaryShow')"
              :class="['header-nav-item',$route.name === 'SummaryShow' ? 'active' : '' ]">成果展示</span>
<!--        <span :class="['header-nav-item']"-->
<!--              @click="goLogin">成果评价</span>-->
        <span @click="goRoute('CooperationRequirement')"
              :class="['header-nav-item',$route.name === 'CooperationRequirement' ? 'active' : '' ]">合作需求</span>
        <span @click="goRoute('ActiveNews')"
              :class="['header-nav-item',$route.name === 'ActiveNews' ? 'active' : '' ]">活动新闻</span>
        <span @click="goRoute('PolicyRules')"
              :class="['header-nav-item',$route.name === 'PolicyRules' ? 'active' : '' ]">政策法规</span>
        <span @click="goRoute('ProfessionalPool')"
              :class="['header-nav-item',$route.name === 'ProfessionalPool' ? 'active' : '' ]">专家库</span>
        <span @click="goRoute('ServiceConstructor')"
              :class="['header-nav-item',$route.name === 'ServiceConstructor' ? 'active' : '' ]">服务商</span>
      </div>
      <div class="banner"
           v-if="showBanner">
        <el-carousel height="282px">
          <el-carousel-item>
            <el-image
              style="width: 1920px; height: 564px"
              :src="require('../assets/images/home_banner1.png')"
              fit="fit"></el-image>
          </el-carousel-item>
          <el-carousel-item>
            <el-image
              style="width: 1920px; height: 564px"
              :src="require('../assets/images/home_banner2.png')"
              fit="fit"></el-image>
          </el-carousel-item>
        </el-carousel>
      </div>
    </el-header>
    <el-main>
      <router-view></router-view>
    </el-main>
    <el-footer>
      <div class="footer-container">
        <div style="width: 456px;">
          <img class="img-logo" src="../assets/images/comlogo.png"
               alt="">
          <div class="df align-center help-list">
            <span>免费服务</span>
            <el-divider direction="vertical"></el-divider>
            <span @click="$router.push({name:'HelpCenter'})">帮助中心</span>
            <el-divider direction="vertical"></el-divider>
            <span>意见反馈</span>
          </div>
        </div>
        <div class="flex-column">
          <span>四川省自然资源科学研究院</span>
          <span>地址：成都市武侯区一环路南二段24号</span>
          <span>联系电话：028-68107435</span>
        </div>
        <div class="flex-column">
          <span>技术支持：成都中企艾维数据有限公司</span>
          <span>地址：成都市锦江区幸福梅林醉香路305号</span>
          <span>联系电话：028-65215025</span>
        </div>
      </div>
    </el-footer>
  </el-container>
</template>
<script>
export default {
  name: "LayOut",
  mounted () {
    console.log(this.$route);
  },
  computed: {
    showBanner(){
      let showBannerRouteList = ['TheIndex'];
      return showBannerRouteList.includes(this.$route.name);
    }
  },
  methods: {
    goUserLogin() {
      this.$router.replace({ name: "UserLoginPage" });
    },
    goLogin () {
      this.$router.replace({ name: "LoginPage" });
    },
    goRoute (routeName) {
      this.$router.push({ name: routeName });
    }
  }
};
</script>
<style lang="scss">
@import "@/styles/layout.scss";
.top-divider{
  height: 4px !important;
  background: #E7742B !important;
  margin-bottom: 18px !important;
}
</style>
