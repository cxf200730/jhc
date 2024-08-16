import {
	wxLogin,
	addUser
} from '/api/user';
//判断是否登录
export const isLogin = () => {
	if (!uni.getStorageSync('userInfo')) {
		uni.showToast({
			title: '未登陆',
			icon: 'error',
			duration: 2000,
		});
		setTimeout(() => {
			uni.navigateTo({
				url: '/pages/login/login',
			});
		}, 2000)
	}
}
//登录
export const LoginWx = (query) => {
	addUser(query).then((res) => {
		uni.setStorageSync('userInfo', query);
		uni.showToast({
			title: '登陆成功',
			icon: 'success',
			duration: 2000
		});
		setTimeout(() => {
			uni.switchTab({
				url: '/pages/index/index'
			});
		}, 2000);
	});
}



//保存openid到缓存
export const saveOpenid = () => {
	const openid = uni.getStorageSync('openid')
	if (!openid) {
		wxLogin().then((res) => {
			uni.setStorageSync('openid', res.openid)
		});
	}
}