<template>
	<view class="Banner">
		<swiper :autoplay="true" :circular="true" interval="3000">
			<view v-for="(item, index) in BannerList" :key="index">
				<swiper-item>
					<image :src="item" mode="aspectFill" style="width: 100%; border-radius: 24rpx; height: 100%" @click="handleClick(item)"></image>
					<view class="lunbo_words">
						<view style="float: right; margin-right: 20rpx">123 456 7890</view>
					</view>
				</swiper-item>
			</view>
		</swiper>
	</view>
</template>

<script setup>
import { getBannerList } from '/api/index';
import { ref } from 'vue';
let BannerList = ref([]);
getBannerList().then((res) => {
	BannerList.value = res.imgs.map((item) => {
		return uni.getStorageSync('baseURL') + item;
	});
});

const handleClick = (item) => {
	console.log(item);
};
</script>

<style scoped lang="scss">
.Banner {
	height: 420rpx;
}
swiper {
	height: 420rpx;
}
.lunbo_words {
	background-color: rgb(48, 46, 46, 0.6);
	width: 100%;
	height: 50rpx;
	position: absolute;
	bottom: 0;
	color: #ffffffdc;
	font-size: 33rpx;
	border-radius: 0 0 30rpx 30rpx;
}
</style>
