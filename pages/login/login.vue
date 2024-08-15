<template>
	<view class="bg">
		<view class="top">
			<image src="/static/login_bg_yuan.svg" style="width: 400rpx; height: 400rpx; position: absolute; right: -140rpx; top: 20rpx"></image>
			<image src="/static/login_bg_yuan.svg" style="width: 300rpx; height: 300rpx; position: absolute; left: 0rpx; top: -20rpx"></image>
			<image src="/static/login_bg_yuan.svg" style="width: 300rpx; height: 300rpx; position: absolute; right: 200rpx; top: 200rpx"></image>
		</view>
		<LoginView />
	</view>
</template>

<script setup>
import LoginView from './components/LoginView';
uni.setNavigationBarColor({
	frontColor: '#ffffff',
	backgroundColor: '#b7d2fd'
});
</script>

<style scoped lang="scss">
.bg {
	width: 100%;
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	background-color: rgb(183, 210, 253);
}
</style>
