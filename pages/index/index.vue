<template>
	<view class="bg">
		<Company />
		<Banner />
		<view class="main">
			<ChooseItem />
		</view>
		<TempView toURL="/pages/integral/integral">
			<Integral />
		</TempView>
	</view>
</template>

<script setup>
import Company from './components/Company.vue';
import Banner from './components/Banner.vue';
import ChooseItem from './components/ChooseItem.vue';
import TempView from './components/TempView.vue';
import Integral from './components/Integral.vue';
</script>

<style scoped lang="scss">
.bg {
	display: flex;
	flex-direction: column;
	padding: 20rpx;
	box-sizing: border-box;
	background-color: #faf7f3;
	.main {
		display: flex;
		flex-direction: column;
		margin-top: 30rpx;
		background-color: #fff;
		border-radius: 30rpx;
		padding: 20rpx;
	}
}
</style>
