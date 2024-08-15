import {
	wxLogin
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
export const toLogin = () => {
	//获取用户openid
	wxLogin().then((res) => {
		uni.setStorageSync('userInfo', res);
		uni.showToast({
			title: '登陆成功',
			icon: 'error',
			duration: 2000
		});
		setTimeout(() => {
			uni.switchTab({
				url: '/pages/index/index'
			});
		}, 2000);
	});
}