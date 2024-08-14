<template>
	<view class="Title">
		<span><slot></slot></span>
	</view>
</template>

<script setup></script>

<style scoped lang="scss">
.Title {
	span {
		background: linear-gradient(to top, #a1741a 0%, #ffffff 60%);
		padding: 0 5px;
		font-weight: bold;
		letter-spacing: 2rpx;
	}
}
</style>
