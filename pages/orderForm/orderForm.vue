<template>
	<view class="orderForm">
		<view>
			<view class="uni-padding-wrap uni-common-mt">
				<uni-segmented-control :current="current" :values="items" style-type="text" active-color="#007aff" @clickItem="onClickItem" />
			</view>
			<view class="content">
				<view v-if="current === 4">
					<view class="content-view" v-for="(item, index) in allLog" :key="item._id">
						<view class="logitem">
							<image :src="baseURL + item.exchangeImg" mode="aspectFit" class="img"></image>
							<view class="info">
								<view>兑换商品：</view>
								<view style="font-weight: bold; flex-wrap: wrap">&emsp;&emsp;{{ item.exchangeName }}</view>
								<view>花费积分：{{ item.exchangePrice }}</view>
								<view>剩余积分：{{ item.afterPoint }}</view>
								<view>兑换时间：</view>
								<view>&emsp;{{ item.exchangeTime }}</view>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
import { ref } from 'vue';
import { onLoad, onShow } from '@dcloudio/uni-app';
import { getAllLog } from '/api/log';
const baseURL = uni.getStorageSync('baseURL');
const userInfo = uni.getStorageSync('userInfo');
const items = ['待付款', '待收货', '待评价', '退款/售后', '全部订单'];
const current = ref(0);
const onClickItem = (e) => {
	if (current.value !== e.currentIndex) {
		current.value = e.currentIndex;
	}
};
onLoad((options) => {
	current.value = parseInt(options.current);
});
const allLog = ref([]);
onShow(() => {
	getAllLog().then((res) => {
		allLog.value = res.filter((item) => item.userId === userInfo._id);
	});
});
</script>

<style scoped lang="scss">
.orderForm {
	width: 100%;
	height: 100vh;
	display: flex;
	flex-direction: column;
}
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
</style>
