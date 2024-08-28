import '/utils/request.js'
const db = uniCloud.databaseForJQL();
const log = db.collection('log')

//获取所有日志信息
export const getAllLog = async () => {
	const res = await log.get()
	return res
}
//添加日志
export const addLog = async (query : object) => {
	const res = log.add(query)
	return res
}