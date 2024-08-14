<template>
	<view class="bg">
		<IntegralTop />
	</view>
</template>

<script setup>
import { onLoad } from '@dcloudio/uni-app';
import { isLogin } from '../../utils/publicFn';
import IntegralTop from './components/IntegralTop.vue';

onLoad(() => {
	isLogin();
});
</script>

<style scoped lang="scss">
.bg {
	width: 100%;
	height: 100vh;
	display: flex;
	flex-direction: column;
	background-color: #cfc2a4;
}
</style>
