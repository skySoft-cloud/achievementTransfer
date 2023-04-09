import * as $api from './request'

export const getSummaryList = (data) => {
  return $api.getFunc({url: '/api/summary-list',data: data})
}

export const getRequirementList = (data) => {
  return $api.getFunc({url: '/api/requirement-list',data: data})
}

// 专家库分页列表
export const getProfessionalList = (data) => {
  return $api.getFunc({url: '/plat/experts/list',data: data})
}

// 专家详情
export const getProfessionalDetail = (id) => {
  return $api.getFunc({url: `/plat/experts/queryById?id=${id}`})
}

// 政策法规分页列表
export const getPolicyList = (data) => {
  return $api.getFunc({url: '/plat/policy/list',data: data})
}

// 政策法规详情
export const getPolicyDetail = (id) => {
  return $api.getFunc({url: `/plat/policy/queryById?id=${id}`})
}

// 新闻分页列表
export const getNewsList = (data) => {
  return $api.getFunc({url: '/plat/news/list',data: data})
}

// 活动分页列表
export const getActiveList = (data) => {
  return $api.getFunc({url: '/plat/activities/list',data: data})
}
