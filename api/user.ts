import '/utils/request.js'
const db = uniCloud.databaseForJQL();
const user = db.collection('user')

//获取用户openid
export const wxLogin = async () => {
	try {
		const res = await wx.login();
		if (res.code) {
			const URL = 'https://api.weixin.qq.com/sns/jscode2session'
			const params = {
				appid: "wxf6e6c63a3dbffc01",
				secret: "1c55433160d2f073bab8e0e35266f79d",
				js_code: res.code,
				grant_type: "authorization_code"
			}
			return new Promise((resolve, reject) => {
				wx.request({
					url: URL,
					data: params,
					success(res) {
						resolve(res.data);
					},
					fail(err) {
						reject(err)
					}
				})
			})
		}
	} catch (e) {
		return new Promise((resolve) => {
			const res = {
				openid: "window",
				name: "window",
			}
			resolve(res);
		})
	}





};
//获取所有用户
export const getAllUser = async () => {
	const res = await user.orderBy('_id', 'desc').get()
	return res
}
//添加用户（注册）
export const addUser = async (query : object) => {
	const res = user.add(query)
	return res
}
//修改用户信息
export const editUser = async (query : object) => {
	const myID : string = uni.getStorageSync('userInfo')._id;
	const res = user.doc(myID).update(query)
	return res
}
//修改其他用户信息
export const editOtherUser = async (query : any) => {
	const id : string = query.id;
	delete query.id
	const res = user.doc(id).update(query)
	return res
}