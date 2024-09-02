<template>
	<view class="cooperate" :style="{ 'background-image': `url(${bgURL})` }">
		<view class="item" v-for="(item, index) in list" :key="index" @click="toPage(item)">
			<view>
				<view class="title">
					{{ item.title }}
				</view>
				<view class="zhuying">
					{{ item.info }}
				</view>
				<view class="dianhua">
					{{ item.user }}
				</view>
			</view>
		</view>
		<view style="position: absolute; bottom: 50rpx; left: 50rpx; font-size: 33rpx" @click="lookAd">访问人数：{{ openNum }}</view>
	</view>
</template>

<script setup>
import { ref } from 'vue';
import { getAllCooperate } from '/api/cooperate';
import { getNums, editUser } from '/api/visit';
const baseURL = uni.getStorageSync('baseURL');
const bgURL = baseURL + 'integral/rulebg.jpg';
const list = ref();
const openNum = ref(0);

let videoAd = null;
getAllCooperate().then((res) => {
	list.value = res;
});
getNums().then((res) => {
	openNum.value = res[0].visitedNums + 1;
	const query = {
		id: res[0]._id,
		visitedNums: res[0].visitedNums + 2
	};
	editUser(query);
});
const lookAd = () => {
	if (videoAd) {
		videoAd.show().catch(() => {
			// 失败重试
			videoAd
				.load()
				.then(() => videoAd.show())
				.catch((err) => {
					console.error('激励视频 广告显示失败', err);
				});
		});
	}
};
if (wx.createRewardedVideoAd) {
	videoAd = wx.createRewardedVideoAd({
		adUnitId: 'adunit-6a324b65090f0b46'
	});
	videoAd.onLoad(() => {});
	videoAd.onError((err) => {
		console.error('激励视频光告加载失败', err);
	});
	videoAd.onClose((res) => {});
}

const toPage = (item) => {
	uni.navigateTo({
		url: `/pages/cooperateDetail/cooperateDetail?id=${item._id}`
	});
};
</script>

<style scoped lang="scss">
.cooperate {
	height: 100vh;
	width: 100%;
	font-size: 40rpx;
	margin: auto;
	background-repeat: no-repeat;
	background-size: 100% 100%;
	background-position: bottom right;
	position: relative;
}
.item {
	background-color: #e4e2da;
	border: #9b805c 4rpx solid;
	width: 80%;
	min-height: 200rpx;
	margin-left: auto;
	margin-right: auto;
	padding: 20rpx;
	margin-bottom: 30rpx;
}
.title {
	text-align: center;
	align-items: center;
	font-size: 50rpx;
	line-height: 80rpx;
}
.zhuying {
	line-height: 60rpx;
	font-size: 35rpx;
}
.dianhua {
	line-height: 60rpx;
	font-size: 35rpx;
}
</style>
