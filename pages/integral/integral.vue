<template>
	<view class="bg">
		<IntegralTop :myPoint="myPoint" />
		<view class="main">
			<view v-for="(item, index) in goods" :key="index">
				<view class="card" @click="toPage(item)">
					<view class="card_top">
						<image :src="baseURL + item.cover" mode="aspectFit" style="width: 100%; height: 100%" />
					</view>
					<view class="card_main">
						<view class="title">
							{{ item.name }}
						</view>
						<view class="yuanjia">
							{{ item.value }}
						</view>
						<view class="alt">
							<view>{{ item.price }}积分</view>
							<view v-if="item.price2">+{{ item.price2 }}元</view>
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
import { isLogin, refreshUser } from '../../utils/publicFn';
import { getAllIntegral } from '/api/integral';
import IntegralTop from './components/IntegralTop.vue';

onLoad(() => {
	isLogin();
});

onShow(() => {
	setTimeout(() => {
		myPoint = uni.getStorageSync('userInfo').point;
	}, 500);
});
const goods = ref([]);
let myPoint = ref(0);
const baseURL = uni.getStorageSync('baseURL');
getAllIntegral().then((res) => {
	goods.value = res.filter((item) => item.type !== 'indexMenu');
});
const toPage = (item) => {
	const id = item._id;
	uni.navigateTo({
		url: `/pages/detail/detail?id=${id}`
	});
};
</script>

<style scoped lang="scss">
.bg {
	width: 100%;
	display: flex;
	flex-direction: column;
	background-color: #cfc2a4;
	.main {
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		background-color: #cfc2a4;
		padding: 30rpx;
		box-sizing: border-box;
		justify-content: space-between;
		.good {
			width: 320rpx;
			height: 400rpx;
			background-color: saddlebrown;
		}
	}
}

.card {
	width: 300rpx;
	min-height: 525rpx;
	background-color: #ffffff;
	margin-top: 30rpx;
	display: flex;
	flex-direction: column;
}
.card_top {
	width: 300rpx;
	height: 300rpx;
}
.card_main {
	width: 90%;
	margin: 10rpx auto;
	text-align: center;
	height: calc(100% - 330rpx);

	display: flex;
	flex-direction: column;
	justify-content: space-between;
	flex-grow: 1;
}
.title {
	font-size: 28rpx;
}
.yuanjia {
	text-decoration: line-through;
	font-size: 32rpx;
	color: #9b4a14;
}
.alt {
	font-size: 28rpx;
	margin-top: 10rpx;
	display: flex;
	align-items: center;
	text-align: center;
	justify-content: center;
}
</style>
