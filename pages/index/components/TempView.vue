<template>
	<view class="TempView">
		<view class="top">
			<Title>积分兑换</Title>
			<view class="span" @click="toPage">查看更多 ></view>
		</view>

		<view class="main">
			<slot></slot>
		</view>
	</view>
</template>

<script setup>
import Title from '/components/Title.vue';
import { defineProps } from 'vue';
const props = defineProps({
	toURL: {
		type: String,
		default: ''
	}
});
const toPage = () => {
	console.log(props.toURL);
	uni.navigateTo({
		url: props.toURL
	});
};
</script>

<style scoped lang="scss">
.TempView {
	width: 100%;
	background-color: #fff;
	padding: 20rpx;
	box-sizing: border-box;
	border-radius: 30rpx;
	margin: 20rpx 0;
	display: flex;
	flex-direction: column;
	.top {
		width: 100%;
		display: flex;
		justify-content: space-between;
	}
	.main {
		width: 100%;
		padding: 20rpx 0;
		box-sizing: border-box;
	}
}
</style>
