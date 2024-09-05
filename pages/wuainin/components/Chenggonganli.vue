<template>
	<view class="Chenggonganli">
		<!-- 成功案例页面 -->
		<view class="main" style="flex-direction: column">
			<view class="anli-card" @click="toPage(item)" v-for="(item, index) in news" :key="index">
				<view class="card-left">
					<image v-if="item.cover" :src="baseURL + item.cover" mode="aspectFill" style="width: 100rpx; height: 100rpx" />
				</view>
				<view class="card-right" style="overflow-x: hidden">
					{{ item.title }}
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
import { getAllNews } from '@/api/cooperate';
import { ref } from 'vue';
const baseURL = uni.getStorageSync('baseURL');
getAllNews().then((res) => {
	news.value = res;
});
const news = ref([]);
const toPage = (item) => {
	uni.navigateTo({
		url: '/pages/wuainin/chenggonganliDetail?id=' + item._id
	});
};
</script>

<style scoped lang="scss">
.Chenggonganli {
	height: 100vh;
	max-height: 100vh;
	width: 100%;
	margin: auto;
	display: flex;
	/* background-color: blue; */
	background-color: #d0cbc1;
	flex-direction: column;
	.main {
		margin: 0;
		padding: 0;
		width: 100%;
		min-height: 100%;
		display: flex;
		/* background-color: chartreuse; */
		overflow: auto;
		background-color: #d0cbc1;
	}
	.anli-card {
		width: 90%;
		height: 100rpx;
		background-color: #ffffff;
		margin-left: auto;
		margin-right: auto;
		padding-top: 20rpx;
		padding-bottom: 20rpx;
		padding-left: 20rpx;
		margin-top: 20rpx;
		display: flex;
		justify-content: space-around;
	}
	.card-left {
		width: 100rpx;
		height: 100rpx;
		/* background-color: blueviolet; */
	}
	.card-right {
		width: 70%;
		height: 100rpx;
		/* background-color: sienna; */
		font-size: 30rpx;
		line-height: 100rpx;
	}

	.left {
		height: 100%;
		width: 120rpx;
		background-color: #ffffff;
		text-align: center;
	}
	.left-item {
		height: 100rpx;
		width: 100%;

		display: flex;
		border-bottom: black 2rpx solid;
	}
	.right {
		height: 100%;
		width: calc(100% - 120rpx);
		/* background-color: aquamarine; */
		display: flex;
		overflow-y: auto;
	}
	.teacher {
		width: 100%;
		min-height: 100rpx;
		display: flex;
		flex-direction: column;
		/* background-color: darkolivegreen; */
		flex-shrink: 0; /*去除flex子元素宽度均分问题*/
	}
	.teacher-title {
		width: 100%;
		height: 70rpx;
		margin-left: auto;
		margin-right: auto;
		/* background-color: rgb(102, 136, 69); */
		color: blueviolet;
		display: flex;
		line-height: 70rpx;
		font-size: 35rpx;
		letter-spacing: 7rpx;
	}
	.teacher-title:before,
	.teacher-title:after {
		margin: auto;
		background: #ccc;
		content: '';
		height: 3rpx;
		width: 30%;
	}
	.teacher-main {
		width: 100%;
		min-height: 100rpx;
		/* display: flex;
	  flex-direction: column; */
		/* height: 0; */
		/* flex-wrap: wrap; */
		/* background-color: blueviolet; */
	}
	.teacher-item {
		width: 90%;
		min-height: 100rpx;
		/* margin-left: auto; */
		margin-right: auto;
		margin-top: 30rpx;
		margin-bottom: 30rpx;
		/* background-color: burlywood; */
		display: flex;
		justify-content: space-around;
		/* flex-wrap: wrap;
	  flex-shrink: 0; */
	}
	.main-left {
		width: 150rpx;
		display: flex;
		flex-direction: column;
		/* background-color: cyan; */
	}
	.main-right {
		width: 150rpx;
		/* background-color: cyan; */
	}
	.zuopin {
		width: 100%;
		height: auto;
		border: 30rpx solid;
		padding: 10rpx;
		border-image: url(http://schy75281.hd-bkt.clouddn.com/icon/border.png) 20 round;
		box-shadow: 10rpx 15rpx 15rpx 3rpx rgba(0, 0, 0, 0.2);
	}
	.zuopin2 {
		width: 210rpx;
		height: 210rpx;
		height: auto;
		/* border: 30rpx solid; */
		padding: 10rpx;
		/* border-image: url(http://rvkh9dz0s.bkt.clouddn.com/border10.png) 20 round; */
		/* box-shadow: 10rpx 15rpx 15rpx 3rpx rgba(0, 0, 0, .2); */
		box-shadow: 15rpx 14rpx 8rpx -4rpx rgba(0, 0, 0, 0.1);
	}
	.test {
		/* /* width: 200px; */
		border: 20rpx solid;
		padding: 10px;
		border-image: url(http://rvkh9dz0s.bkt.clouddn.com/border6.png) 20 round;
	}

	.card {
		background-color: #ffffff;
		margin-top: 30rpx;
		border: rgba(0, 0, 0, 0.2) 5rpx solid;
		box-shadow: 5rpx 5rpx 30rpx 3rpx rgba(0, 0, 0, 0.2);
		width: 100%;
		min-height: 200rpx;
		position: relative;
	}
	.card-words {
		width: 100%;
		height: auto;
		text-align: center;
		/* background-color: chartreuse; */
		display: flex;
	}
	.card-words-main {
		/* background-color: cadetblue; */
		width: 80%;
		padding-top: 20rpx;
		padding-bottom: 20rpx;
		margin: auto;
		font-size: 35rpx;
		letter-spacing: 2rpx;
	}

	.main-card {
		/* background-color: aqua; */
		width: 90%;
		margin-left: auto;
		margin-right: auto;
		display: flex;
		flex-direction: column;
	}
	.card-main {
		width: 100%;
		height: 200rpx;
		background-color: #e4e2db;
		border-radius: 30rpx;
		margin-top: 40rpx;
		display: flex;
		border: #9b805c 4rpx solid;
	}

	.vv {
		margin-left: auto;
		margin-right: auto;
		width: 80%;
		display: flex;
		flex-direction: column;
	}

	/* 小图标 */
	.img1 {
		width: 36rpx;
		height: 28rpx;
		margin-top: 30rpx;
	}

	/* 标题文字 */
	.text {
		font-size: 28rpx;
		color: #585858;
		margin-left: 10rpx;
	}

	/* 视频 */
	.video {
		width: 100%;
		height: 450rpx;
		margin-top: 20rpx;
		border-bottom-left-radius: 15rpx;
		border-bottom-right-radius: 15rpx;
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

	/* 底部盒子 */
	.bottom {
		width: 40rpx;
		height: 40rpx;
	}

	.lunbo {
		width: 100%;
		height: 420rpx;
		margin-left: auto;
		margin-right: auto;
		background-color: #e4e2db;
		border-radius: 30rpx;
		margin-top: 20rpx;
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
}
</style>
