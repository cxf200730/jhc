import '/utils/request.js'
const db = uniCloud.databaseForJQL();
const company = db.collection('company')
const goods = db.collection('goods')
const integral = db.collection('integral')
//获取公司信息
export const getCompany = async () => {
	const res = await company.where({ headertype: 'companyinfo' }).get()
	return res[0].data
}
//获取轮播图信息
export const getBannerList = async () => {
	const res = await company.where({ headertype: 'bannerList' }).get()
	return res[0].data
}
//获取首页菜单信息
export const getIndexMenu = async () => {
	const res = await company.where({ headertype: 'indexMenu' }).get()
	return res[0].data
}
//获取首页展示的积分商品信息
export const getIndexIntegral = async () => {
	const res = await integral.where({ type: 'indexMenu' }).get()
	return res
}
//获取商品信息
export const getGoods = async (query = {}) => {
	const res = await goods.where(query).get()
	return res
}
//获取酒信息
export const getWine = async (query = {}) => {
	const params : any = { ...query }
	params.goodsType = 'wine'
	const res = await goods.where(params).get()
	return res
}