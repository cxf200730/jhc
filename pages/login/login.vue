<template>
	<view class="bg">
		<button @click="handleLogin">快速注册/登录</button>
	</view>
</template>

<script setup>
import { wxLogin } from '/api/user';
const handleLogin = () => {
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
};
</script>

<style scoped lang="scss">
.bg {
	width: 100%;
	height: 100vh;
	display: flex;
	flex-direction: column;
}
</style>
