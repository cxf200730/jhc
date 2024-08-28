<template>
	<view class="IntegralTop">
		<view class="top">
			<view class="top_main" :style="{ 'background-image': `url(${bgURL})` }">
				<view>
					<view style="margin: 20rpx">累计总积分</view>
					<view style="margin: 20rpx; font-size: 60rpx; font-weight: 500">{{ myPoint }}</view>
				</view>

				<view style="font-size: 50rpx; display: flex">
					<view style="margin: auto; text-decoration: underline" bind:tap="guize">积分规则</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
defineProps({
	myPoint: {
		default: 0
	}
});
const bgURL = uni.getStorageSync('baseURL') + '/integral/bg.jpg';
</script>

<style scoped lang="scss">
.IntegralTop {
	width: 100%;
	display: flex;
	flex-direction: column;
}
.top {
	width: 100%;
	height: 300rpx;
	background-color: #ffffff;
	margin: 0 auto;
	display: flex;
}
.top_main {
	width: 90%;
	height: 200rpx;
	margin: auto;
	border-radius: 30rpx;
	display: flex;
	// background-image: url('http://schy75281.hd-bkt.clouddn.com/icon/index_4.jpg');
	background-size: cover;
	background-repeat: no-repeat;
	justify-content: space-around;
	background-size: cover;
	background-repeat: no-repeat;
}
</style>
