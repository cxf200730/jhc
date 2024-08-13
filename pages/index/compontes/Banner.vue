<template>
	<view class="bg">
		<image :src="BannerList[0]" mode="scaleToFill" style="width: 100%; border-radius: 24rpx"></image>
	</view>
</template>

<script setup>
import { getBannerList } from '/api/index';
import { ref } from 'vue';
const BannerList = ref([]);
console.log(wx.getStorageSync('baseURL'));
getBannerList().then((res) => {
	BannerList.value = res.imgs.map((item) => {
		return wx.getStorageSync('baseURL') + item;
	});
});
</script>

<style scoped lang="scss"></style>
