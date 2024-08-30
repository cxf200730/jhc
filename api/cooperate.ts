import '/utils/request.js'
const db = uniCloud.databaseForJQL();
const cooperate = db.collection('cooperate')

//获取所有用户
export const getAllCooperate = async () => {
	const res = await cooperate.get()
	return res
}