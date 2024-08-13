import '/utils/request.js'
const db = uniCloud.databaseForJQL();
const user = db.collection('user')

//获取用户openid
export const wxLogin = async () => {
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
};
//获取所有用户
export const getAllUser = async () => {
	const res = await user.get()
	return res
}