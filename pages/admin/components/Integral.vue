<template>
	<view class="Integral">
		<view class="content-view" v-for="(item, index) in allLog" :key="item._id">
			<view class="logitem">
				<image :src="baseURL + item.exchangeImg" mode="aspectFit" class="img"></image>
				<view class="info">
					<view>兑换人：{{ item.userName }}</view>
					<view>兑换人手机号：</view>
					<view>&emsp;&emsp;{{ item.userPhone }}</view>
					<view>兑换商品：</view>
					<view style="font-weight: bold; flex-wrap: wrap">&emsp;&emsp;{{ item.exchangeName }}</view>
					<view>兑换时间：</view>
					<view>&emsp;&emsp;{{ item.exchangeTime }}</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { getAllLog } from '/api/log';
const baseURL = uni.getStorageSync('baseURL');
const userInfo = uni.getStorageSync('userInfo');
const allLog = ref([]);
onMounted(() => {
	getAllLog().then((res) => {
		allLog.value = res;
	});
});
</script>

<style scoped lang="scss">
.Integral {
	width: 100%;
	display: flex;
	flex-direction: column;
	.content-view {
		width: 100%;
		display: flex;
		background-color: #d3d3d3;
		margin-bottom: 40rpx;
		.logitem {
			width: 100%;
			padding: 20rpx;
			box-sizing: border-box;
			display: flex;
			.img {
				flex-shrink: 0;
				width: 300rpx;
				margin: auto 0;
				height: 300rpx;
			}
			.info {
				display: flex;
				flex-direction: column;
				font-size: 30rpx;
				flex-grow: 1;
				margin-left: 30rpx;
			}
			:not(:last-child) {
				margin-bottom: 10rpx;
			}
		}
	}
}
</style>
