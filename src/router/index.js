import Vue from "vue";
import VueRouter from "vue-router";
import LayOut from "../views/LayOut.vue";
import LoginPage from "../views/LoginPage.vue";
import TheIndex from "../views/TheIndex.vue"
import ResultGallery from "@/views/ResultGallery";
import CooperationRequirement from "../views/CooperationRequirement"
import SummaryShow from "../views/SummaryShow"
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


Vue.use(VueRouter);

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
