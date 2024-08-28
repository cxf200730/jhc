<template>
	<view class="bg">
		<view class="top"></view>
		<MyCard :userInfo="userInfo" />
		<MyOrder />
		<MyMore />
	</view>
</template>

<script setup>
import MyCard from './compontes/MyCard.vue';
import MyOrder from './compontes/MyOrder.vue';
import MyMore from './compontes/MyMore.vue';
import { onShow } from '@dcloudio/uni-app';
import { refreshUser } from '../../utils/publicFn';
import { ref } from 'vue';
let userInfo = ref(uni.getStorageSync('userInfo'));
onShow(() => {
	setTimeout(() => {
		userInfo.value = uni.getStorageSync('userInfo');
	}, 500);
});
</script>

<style scoped lang="scss">
.bg {
	width: 100%;
	height: 100vh;
	display: flex;
	flex-direction: column;
	background-color: #f8f8f8;
	.top {
		width: 100%;
		height: 490rpx;
		background-color: #59a0ff;
		border-radius: 0 0 100rpx 100rpx;
		margin-bottom: 100rpx;
	}
	.button {
		border: 1rpx #000 solid;
		width: 200rpx;
	}
}
</style>
