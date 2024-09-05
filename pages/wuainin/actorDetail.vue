<template>
	<view class="bg">
		<view class="item-info">
			<view style="width: 60%; display: flex" v-if="actor?.name?.length < 3 && actor?.shenfen?.length < 3">
				<view class="item-name .animate__animated .animate__rotateIn">{{ actor.name }}</view>
				<view class="item-shenfen">{{ actor.shenfen }}</view>
			</view>
			<view style="width: 80%; display: flex" wx:else>
				<view class="item-name .animate__animated .animate__rotateIn">{{ actor.name }}</view>
				<view class="item-shenfen">{{ actor.shenfen }}</view>
			</view>
			<view style="margin-top: 40rpx">
				<rich-text :nodes="actor.detail"></rich-text>
			</view>
		</view>
		<view class="lunbo">
			<swiper interval="3000" indicator-dots="true" indicator-color="#fff" autoplay="true" circular="true">
				<swiper-item v-for="(item, index) in actor.img" :key="index">
					<image :src="baseURL + item" mode="aspectFill" class="swiper-item" />
				</swiper-item>
			</swiper>
		</view>
		<view v-if="actor.name == '汪淑茹'" style="width: 90%; margin-left: auto; margin-right: auto; margin-top: 40rpx">
			<image :src="baseURL + 'wuainin/1_yanyuan/wangshuru/2.jpg'" mode="widthFix" style="width: 100%; margin-top: 30rpx" />
			<view>左：著名作词家佟文西老师</view>
			<view>中：文化馆馆长盛卫红老师</view>
			<view>右：金牌导演汪淑茹老师</view>
			<image :src="baseURL + 'wuainin/1_yanyuan/wangshuru/1.jpg'" mode="widthFix" style="width: 100%; margin-top: 30rpx" />
			<view>左：金牌导演汪淑茹</view>
			<view>中：文明办主任吴慧</view>
			<view>右：文明办潘科长</view>
			<image :src="baseURL + 'wuainin/1_yanyuan/wangshuru/0.jpg'" mode="widthFix" style="width: 100%; margin-top: 30rpx" />
			<view>左：金牌导演汪淑茹老师</view>
			<view>中：毛主席的扮演者之一李明义老师</view>
			<view>右：国家一级演员罗汉明老师</view>
		</view>
		<view style="display: flex; margin-top: 60rpx; width: 100%; margin-bottom: 60rpx; flex-direction: column">
			<view v-for="(item, index) in actor.video" :key="item.cover" style="margin: auto; width: 90%">
				<video style="width: 100%" :id="'Video' + index" :src="baseURL + item.movie" :autoplay="false" controls :poster="baseURL + item.cover" @play="videoPlay"></video>
			</view>
		</view>
	</view>
</template>

<script setup>
import { onLoad } from '@dcloudio/uni-app';
import { getOnePlayer } from '@/api/cooperate';
import { ref } from 'vue';
const baseURL = ref(uni.getStorageSync('baseURL'));
const actor = ref({});
const playID = ref('');
onLoad((options) => {
	const query = {
		_id: options.id
	};
	getOnePlayer(query).then((res) => {
		actor.value = res[0];
	});
});

const videoPlay = function (e) {
	// //停止正在播放的视频
	var videoContextPrev = wx.createVideoContext(playID.value);
	videoContextPrev.stop();
	playID.value = e.currentTarget.id;
	setTimeout(function () {
		//将点击视频进行播放
		var videoContext = wx.createVideoContext(playID.value);
		videoContext.play();
	}, 500);
};
</script>

<style scoped lang="scss">
.bg {
	min-height: 100vh;
	width: 100%;
	margin: auto;
	display: flex;
	background-color: #f2f3f6;
	flex-direction: column;
	overflow-x: hidden;
}
.videoPlay {
	position: absolute;
	/* top: 200rpx;
  left: 300rpx; */
	width: 100rpx;
	height: 100rpx;
	margin-top: -250rpx;
	/* align-items: center; */
	/* background-color: #FFFFFF; */
	padding-left: 250rpx;
	z-index: 100;
}
.card {
	width: 100%;
	height: 300rpx;
	background-color: #979771;
	/* margin-top: 30rpx; */
	border: black 4rpx solid;
	display: flex;
}
.card-main {
	/* background-color: tan; */
	height: 90%;
	width: 90%;
	margin: auto;
	display: flex;
	align-items: flex-start;
	justify-content: space-between;
}
.main-left {
	height: 100%;
	width: 200rpx;
	/* background-color: blueviolet; */
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}
.left-img {
	height: 200rpx;
	width: 180rpx;
}
.left-word {
	/* text-align: center; */
	width: 100%;
	/* background-color: blueviolet; */
	display: flex;
	margin-top: 10rpx;
	justify-content: space-evenly;
	align-items: center;
	font-size: 24rpx;
	line-height: 50rpx;
	letter-spacing: 1rpx;
}
.main-right {
	width: 100%;
	height: 100%;
	margin: auto;
	/* background-color: blueviolet; */
	display: flex;
}
.right-main {
	width: 90%;
	height: 90%;
	margin: auto;
	/* background-color: blueviolet; */
	border: #7d7465 10rpx solid;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	font-size: 30rpx;
	/* padding: 10rpx; */
}

.item-name {
	font-size: 80rpx;
	letter-spacing: 10rpx;
	margin-left: auto;
	margin-right: auto;
	margin-top: 30rpx;
}
.item-shenfen {
	font-size: 40rpx;
	letter-spacing: 10rpx;
	margin-left: auto;
	margin-right: auto;
	margin-top: 30rpx;
}
.item-info {
	width: 80%;
	height: 300rpx;
	overflow-y: auto;
	line-height: 62rpx;
	font-size: 40rpx;
	/* border: rgb(160, 160, 160) 2rpx solid; */
	margin-left: auto;
	margin-right: auto;
	margin-top: 50rpx;
	padding: 20rpx;
	/* box-shadow: 2rpx 12rpx 100rpx -5rpx rgba(0,0,0,0.1); */
	box-shadow: -36rpx 36rpx 0rpx -7rpx rgba(0, 0, 0, 0.4);
	border-radius: 30rpx 30rpx 30rpx 30rpx;
	background-color: #51aa38;
}
.lunbo {
	width: 90%;
	height: 420rpx;
	margin-left: auto;
	margin-right: auto;
	background-color: teal;
	border-radius: 30rpx;
	margin-top: 50rpx;
}
swiper {
	width: 100%;
	/* height: calc(82vw * 1080 /  1580); */
	/* display: flex; */
	/* height: cacl(750rpx * 327 / 491); */
	height: 100%;
}
.swiper-item {
	width: 100%;
	height: 100%;
	background-color: teal;
	margin: auto;
	border-radius: 30rpx;
	background-position: center;
	background-size: cover;
	background-repeat: no-repeat;
}
</style>
