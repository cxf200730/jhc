export const isLogin = () => {
	if (!uni.getStorageSync('userInfo')) {
		uni.showToast({
			title: '您还未登陆，请先登录',
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