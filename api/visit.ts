import '/utils/request.js'
const db = uniCloud.databaseForJQL();
const visit = db.collection('visit')
//获取总浏览量
export const getNums = async () => {
	const res = await visit.get()
	return res
}
//修改用户信息
export const editUser = async (query : any) => {
	const id : string = query.id;
	delete query.id
	const res = visit.doc(id).update(query)
	return res
}