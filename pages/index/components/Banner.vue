<template>
	<view class="Banner">
		<swiper :autoplay="true" :circular="true" interval="3000">
			<block v-for="(item, index) in BannerList" :key="index">
				<swiper-item>
					<image :src="item" mode="aspectFill" style="width: 100%; border-radius: 24rpx; height: 100%" @click="handleClick(item)"></image>
					<view class="lunbo_words">
						<view style="float: right; margin-right: 20rpx">123 456 7890</view>
					</view>
				</swiper-item>
			</block>
		</swiper>
	</view>
</template>

<script setup>
import { getBannerList } from '/api/index';
import { ref } from 'vue';
const BannerList = ref([]);
// getBannerList().then((res) => {
// 	BannerList.value = res.imgs.map((item) => {
// 		return wx.getStorageSync('baseURL') + item;
// 	});
// });
BannerList.value.push('https://pica.zhimg.com/v2-6219604e8069cb3c598aa27363ac1511_r.jpg?source=1940ef5c');
BannerList.value.push('https://imgs.aixifan.com/content/2020_2_11/1.581392857619612E9.jpeg');
BannerList.value.push('https://img2.baidu.com/it/u=3315703865,3448197827&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=281');
BannerList.value.push('https://pic4.zhimg.com/v2-13ffb1145bc38d6754c8128014876c23_r.jpg');

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
