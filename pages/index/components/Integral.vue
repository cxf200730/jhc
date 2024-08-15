<template>
	<view class="Integral">
		<view class="item" v-for="(item, index) in data" :key="index">
			<image :src="item.cover" alt="" />
			<view class="span">{{ item.name }}</view>
			<view class="span">{{ getPrice(item) }}</view>
		</view>
	</view>
</template>

<script setup>
import { ref } from 'vue';
import { getIndexIntegral } from '/api/index';
const data = ref([]);
getIndexIntegral().then((res) => {
	res = res.map((item) => {
		return {
			...item,
			cover: 'https://bpic.51yuansu.com/pic3/cover/04/05/50/6136732c56a42_610.jpg?x-oss-process=image/resize,w_260/sharpen,100'
		};
	});
	data.value = res;
});
const getPrice = (item) => {
	if (!item.price2) return item.price + 'pv';
	return item.price + 'pv+' + item.price2 + '¥';
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
