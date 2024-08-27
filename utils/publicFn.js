import {
	wxLogin,
	addUser,
	getAllUser
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

//小程序打开初始化
export const init = () => {
	const openid = uni.getStorageSync('openid')
	//没有openid说明是首次打开小程序
	if (!openid) {
		wxLogin().then((res) => {
			uni.setStorageSync('openid', res.openid)
		});
	} else {
		getAllUser().then((res) => {
			if (res.length < 1) {
				uni.removeStorageSync('userInfo')
			} else {
				for (let i = 0; i < res.length; i++) {
					if (res[i].openid === openid) {
						uni.setStorageSync('userInfo', res[i]);
						return
					}
				}
				uni.removeStorageSync('userInfo')
			}
		})
	}
}