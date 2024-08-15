<template>
	<view class="bg">
		<button @click="toPage">123</button>
	</view>
</template>

<script setup>
const toPage = () => {
	uni.navigateTo({
		url: '/pages/login/login'
	});
};
</script>

<style scoped lang="scss">
.bg {
	width: 100%;
	height: 100vh;
	display: flex;
	flex-direction: column;
}
</style>
