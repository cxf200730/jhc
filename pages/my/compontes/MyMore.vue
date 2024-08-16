<template>
	<view class="MyMore">
		<view class="title">更多服务</view>
		<view class="main">
			<view class="item" v-for="(item, index) in myOrderList" :key="index" @click="toPage">
				<image :src="item.img" class="image"></image>
				<view>{{ item.name }}</view>
			</view>
		</view>
	</view>
</template>

<script setup>
import { ref } from 'vue';
const myOrderList = ref([
	{ img: '/static/my/yaoqingyouli.svg', name: '邀请有礼' },
	{ img: '/static/my/qiyezizhi.svg', name: '企业资质' },
	{ img: '/static/my/lianxiwomen.svg', name: '联系我们' },
	{ img: '/static/my/kefuzhongxin.svg', name: '客服中心' },
	{ img: '/static/my/shezhi.svg', name: '设置' }
]);
const toPage = () => {
	uni.navigateTo({
		url: '/pages/login/login'
	});
};
</script>

<style scoped lang="scss">
.MyMore {
	width: 670rpx;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	background-color: #fff;
	padding: 30rpx 20rpx 20rpx 20rpx;
	box-sizing: border-box;
	margin-top: 40rpx;
	.title {
		font-size: 32rpx;
	}
	.main {
		display: flex;
		align-items: center;
		flex-grow: 1;
		flex-wrap: wrap;
		.item {
			width: 157rpx;
			height: 150rpx;
			display: flex;
			flex-direction: column;
			align-items: center;
			font-size: 24rpx;
			flex-shrink: 0;
			justify-content: center;
			.image {
				width: 49rpx;
				height: 49rpx;
				margin-bottom: 20rpx;
			}
		}
	}
}
</style>
