<template>
	<view class="integralRule" :style="{ 'background-image': `url(${bgURL})` }">
		<view style="width: 100%">
			<image :src="img" mode="widthFix" style="width: 100%" />
		</view>
	</view>
</template>

<script setup>
const baseURL = uni.getStorageSync('baseURL');
const img = baseURL + 'integral/rule.png';
const bgURL = baseURL + 'integral/rulebg.jpg';
</script>

<style scoped lang="scss">
.integralRule {
	width: 100%;
	height: 100vh;
	background-repeat: no-repeat;
	background-size: cover;
	background-position: 100%;
}
</style>
