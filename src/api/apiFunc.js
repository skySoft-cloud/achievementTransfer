import * as $api from './request'

/*********************************** 注册登录 start ***********************************/
// 获取验证码
export const getVerifyCode = () => {
  return $api.getFunc({url: `/sys/randomImage/abc123456`})
}
// 注册
export const register = (data) => {
  return $api.postFunc({url: `/sys/reportUserRegister`,data:data})
}
export const login = (data) => {
  return $api.postFunc({url: `/sys/reportUserLogin`,data:data})
}
/*********************************** 注册登录 end ***********************************/

/*********************************** 字典接口API start ***********************************/
/**
 * @param {string} dictCode:字典编码
 */
export const getDictByDicCode = (dictCode) => {
  return $api.getFunc({url:`/sys/api/queryEnableDictItemsByCode?code=${dictCode}`});
}
/*********************************** 字典接口API start ***********************************/

/*********************************** 成果展示系统API start ***********************************/
//  成果发布
export const addSummary = (data) => {
  return $api.postFunc({url: '/plat/achievement/add',data: data})
}
// 成果分页列表
export const getSummaryList = (data) => {
  return $api.getFunc({url: '/plat/achievement/list',data: data})
}
// 成果详情
export const getSummaryDetail = (id) => {
  return $api.getFunc({url: `/plat/achievement/queryById?id=${id}`})
}
/*********************************** 成果展示系统API end ***********************************/

/*********************************** 合作需求系统API start ***********************************/
//  需求发布
export const addRequirement = (data) => {
  return $api.postFunc({url: '/plat/needPub/add',data: data})
}
// 需求分页列表
export const getRequirementList = (data) => {
  return $api.getFunc({url: '/plat/needPub/list',data: data})
}
// 需求详情
export const getRequirementDetail = (id) => {
  return $api.getFunc({url: `/plat/needPub/queryById?id=${id}`})
}
/*********************************** 合作需求系统API end ***********************************/

/*********************************** 专家库系统API start ***********************************/
// 专家库分页列表
export const getProfessionalList = (data) => {
  return $api.getFunc({url: '/plat/experts/list',data: data})
}
// 专家详情
export const getProfessionalDetail = (id) => {
  return $api.getFunc({url: `/plat/experts/queryById?id=${id}`})
}
/*********************************** 专家库系统API end ***********************************/

/*********************************** 政策法规系统API start ***********************************/
// 政策法规分页列表
export const getPolicyList = (data) => {
  return $api.getFunc({url: '/plat/policy/list',data: data})
}
// 政策法规详情
export const getPolicyDetail = (id) => {
  return $api.getFunc({url: `/plat/policy/queryById?id=${id}`})
}
/*********************************** 政策法规系统API end ***********************************/

/*********************************** 活动新闻系统API start ***********************************/
// 新闻分页列表
export const getNewsList = (data) => {
  return $api.getFunc({url: '/plat/news/list',data: data})
}
// 活动分页列表
export const getActiveList = (data) => {
  return $api.getFunc({url: '/plat/activities/list',data: data})
}
/*********************************** 活动新闻系统API end ***********************************/

/*********************************** 供应商API start ***********************************/
// 供应商分页列表
export const getConstructorList = (data) => {
  return $api.getFunc({url: '/plat/serviceSeller/list',data: data})
}
/*********************************** 供应商API end ***********************************/

/*********************************** 供应商API start ***********************************/
// 供应商分页列表
export const getTeams = () => {
  return $api.getFunc({url: '/plat/userGroupItem/list?pageSize=999'})
}
/*********************************** 供应商API end ***********************************/

// 新增团队
export const addTeam = (data) => {
  return $api.postFunc({url: '/plat/userGroup/add',data: data})
}

//  团队列表
export const getTeamList = () => {
  return $api.getFunc({url: '/plat/userGroup/list?pageSize=999'})
}

//  获取团队成员
export const getTeamMember = (id) => {
  return $api.getFunc({url: `/plat/userGroup/list?id=${id}&pageSize=999`})
}

//  新增团队成员
export const addTeamMember = (data) => {
  return $api.postFunc({url: '/plat/userGroupItem/add',data:data})
}

//  事迹列表
export const getTeamEvent = () => {
  return $api.getFunc({url: '/plat/userGroupEvent/list?pageSize=999'})
}

//  新增事迹
export const addTeamEvent = (data) => {
  return $api.postFunc({url: '/plat/userGroupEvent/add',data:data})
}
