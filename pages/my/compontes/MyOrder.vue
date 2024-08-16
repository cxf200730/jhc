<template>
	<view class="MyOrder">
		<view class="title">我的订单</view>
		<view class="main">
			<view class="item" v-for="item in myOrderList">
				<image :src="item.img" class="image"></image>
				<view>{{ item.name }}</view>
			</view>
		</view>
	</view>
</template>

<script setup>
import { ref } from 'vue';
const myOrderList = ref([
	{ img: '/static/my/awaitPay.svg', name: '待付款' },
	{ img: '/static/my/awaitGet.svg', name: '待收货' },
	{ img: '/static/my/awaitSay.svg', name: '待评价' },
	{ img: '/static/my/awaitReturn.svg', name: '退款/售后' },
	{ img: '/static/my/awaitAll.svg', name: '全部订单' }
]);
</script>

<style scoped lang="scss">
.MyOrder {
	width: 670rpx;
	height: 260rpx;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	background-color: #fff;
	padding: 30rpx 20rpx 20rpx 20rpx;
	box-sizing: border-box;
	.title {
		font-size: 32rpx;
	}
	.main {
		display: flex;
		align-items: center;
		flex-grow: 1;
		.item {
			flex: 1;
			display: flex;
			flex-direction: column;
			align-items: center;
			font-size: 24rpx;
			.image {
				width: 49rpx;
				height: 49rpx;
				margin-bottom: 20rpx;
			}
		}
	}
}
</style>
