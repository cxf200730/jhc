import '/utils/request.js'
const db = uniCloud.databaseForJQL();
const cooperate = db.collection('cooperate')
const wuainin = db.collection('player')

//获取所有合作伙伴信息
export const getAllCooperate = async () => {
	const res = await cooperate.get()
	return res
}
//获取所有最新动态
export const getAllNews = async () => {
	const res = await wuainin.where({ type: "news" }).get()
	return res
}
//获取指定节目
export const getOneNew = async (params : any) => {
	const res = await wuainin.where(params).get()
	return res
}
//获取所有演员
export const getAllPlayers = async () => {
	const res = await wuainin.where({ type: "player" }).get()
	return res
}
//获取指定演员
export const getOnePlayer = async (params : any) => {
	const res = await wuainin.where(params).get()
	return res
}