import '/utils/request.js'
const db = uniCloud.databaseForJQL();
const integral = db.collection('integral')

//获取首页展示的积分商品信息
export const getIndexIntegral = async () => {
	const res = await integral.where({ type: 'indexMenu' }).get()
	return res
}
//获取全部积分商品信息
export const getAllIntegral = async () => {
	const res = await integral.get()
	return res
}
//获取指定商品信息
export const getOneIntegral = async (id : string) => {
	const res = await integral.where({ _id: id }).get()
	return res
}