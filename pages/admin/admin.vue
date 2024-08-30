<template>
	<view class="orderForm">
		<view>
			<view class="uni-padding-wrap uni-common-mt">
				<uni-segmented-control :current="current" :values="items" style-type="text" active-color="#007aff" @clickItem="onClickItem" />
			</view>
			<view class="content">
				<view v-if="current === 0">
					<Integral />
				</view>
				<view v-if="current === 1">
					<Users />
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
import { ref } from 'vue';
import { onLoad, onShow } from '@dcloudio/uni-app';
import { getAllLog } from '/api/log';
import Integral from './components/Integral.vue';
import Users from './components/Users.vue';
const baseURL = uni.getStorageSync('baseURL');
const userInfo = uni.getStorageSync('userInfo');
const items = ['积分兑换', '用户信息'];
const current = ref(0);
const onClickItem = (e) => {
	if (current.value !== e.currentIndex) {
		current.value = parseInt(e.currentIndex);
	}
};
</script>

<style scoped lang="scss">
.orderForm {
	width: 100%;
	height: 100vh;
	display: flex;
	flex-direction: column;
}
</style>
