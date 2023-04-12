import Vue from "vue";
import VueRouter from "vue-router";
import LayOut from "@/views/LayOut.vue";
import LoginPage from "@/views/LoginPage.vue";
import TheIndex from "@/views/TheIndex.vue"
import ResultGallery from "@/views/ResultGallery";
import CooperationRequirement from "@/views/CooperationRequirement"
import SummaryShow from "@/views/SummaryShow"
import PublishResult from "@/views/PublishResult";
import ActiveNews from "@/views/ActiveNews";
import ServiceConstructor from "@/views/ServiceConstructor";
import PolicyRules from "@/views/PolicyRules";
import ProfessionalPool from "@/views/ProfessionalPool";
import ProfessionalDetail from "@/views/ProfessionalDetail";
import PolicyRulesDetail from "@/views/PolicyRulesDetail";
import NewsDetail from "@/views/NewsDetail";
import ResultActive from "@/views/ResultActive.vue";
import UserLoginPage from "@/views/UserLoginPage.vue";
import HelpCenter from "@/views/HelpCenter.vue";
import SummaryShowDetail from "@/views/SummaryShowDetail.vue";
import RequirementShowDetail from "@/views/RequirementShowDetail";
import PublishRequirement from "@/views/PublishRequirement";
import UserRegister from '@/views/UserRegister'
import UserCenter from '@/views/UserCenter'


Vue.use(VueRouter);
// 获取原型对象push函数
const originalPush = VueRouter.prototype.push

// 获取原型对象replace函数
const originalReplace = VueRouter.prototype.replace

// 修改原型对象中的push函数
VueRouter.prototype.push = function push(location){
  return originalPush.call(this , location).catch(err=>err)
}

// 修改原型对象中的replace函数
VueRouter.prototype.replace = function replace(location){
  return originalReplace.call(this , location).catch(err=>err)
}


const routes = [
  {
    path: "/",
    redirect: '/index',
    component: LayOut,
    children: [
      {
        path: "/index",
        name: "TheIndex",
        component: TheIndex,
      },
      {
        path: "/help-center",
        name: "HelpCenter",
        component: HelpCenter,
      },
      {
        path: "/publish-result",
        name: "PublishResult",
        component: PublishResult,
      },
      {
        path: "/cooperation-requirement",
        name: "CooperationRequirement",
        component: CooperationRequirement,
      },
      {
        path: "/requirement-show-details",
        name: "RequirementShowDetail",
        component: RequirementShowDetail,
      },
      {
        path: "/publish-requirement",
        name: "PublishRequirement",
        component: PublishRequirement,
      },
      {
        path: "/summary-show",
        name: "SummaryShow",
        component: SummaryShow,
      },
      {
        path: "/result-gallery",
        name: "ResultGallery",
        component: ResultGallery,
      },
      {
        path: "/active-news",
        name: "ActiveNews",
        component: ActiveNews,
      },
      {
        path: "/result-active",
        name: "ResultActive",
        component: ResultActive,
      },
      {
        path: "/news-detail",
        name: "NewsDetail",
        component: NewsDetail,
      },
      {
        path: "/policy-rules",
        name: "PolicyRules",
        component: PolicyRules,
      },
      {
        path: "/policy-rules-details",
        name: "PolicyRulesDetail",
        component: PolicyRulesDetail,
      },
      {
        path: "/summary-show-details",
        name: "SummaryShowDetail",
        component: SummaryShowDetail,
      },
      {
        path: "/professional-pool",
        name: "ProfessionalPool",
        component: ProfessionalPool,
      },
      {
        path: "/service-constructor",
        name: "ServiceConstructor",
        component: ServiceConstructor,
      },
      {
        path: "/professional-pool",
        name: "ProfessionalDetail",
        component: ProfessionalDetail,
      },
      {
        path: "/user-center",
        name: "UserCenter",
        component: UserCenter,
      }
    ],
  },
  {
    path: "/login",
    name: "LoginPage",
    component: LoginPage
  },
  {
    path: "/user-login",
    name: "UserLoginPage",
    component: UserLoginPage
  },
  {
    path: "/user-register",
    name: "UserRegister",
    component: UserRegister
  }
];

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savePosition) {
    // return 期望滚动到哪个的位置
    return {
      y: 0
    }
  }
});

export default router;
