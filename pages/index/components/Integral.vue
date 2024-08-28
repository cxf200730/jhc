<template>
	<view class="Integral">
		<view class="item" v-for="(item, index) in data" :key="index" @click="toPage(item)">
			<image :src="baseURL + item.cover" alt="" />
			<view class="span">{{ item.name }}</view>
			<view class="span">{{ getPrice(item) }}</view>
		</view>
	</view>
</template>

<script setup>
import { ref } from 'vue';
import { getIndexIntegral } from '/api/index';
const data = ref([]);
const baseURL = uni.getStorageSync('baseURL');
getIndexIntegral().then((res) => {
	data.value = res;
});
const getPrice = (item) => {
	if (!item.price2) return item.price + 'pv';
	return item.price + 'pv+' + item.price2 + '¥';
};

const toPage = (item) => {
	const id = item._id;
	uni.navigateTo({
		url: `/pages/detail/detail?id=${id}`
	});
};
</script>

<style scoped lang="scss">
.Integral {
	width: 100%;
	display: flex;
	justify-content: space-between;
	.item {
		display: flex;
		flex-direction: column;
		width: 130rpx;
		image {
			width: 130rpx;
			height: 130rpx;
			margin-bottom: 10rpx;
		}
		.span {
			text-align: center;
			font-size: 24rpx;
		}
	}
}
</style>
