<template>
	<view class="MyCard" :style="{ top: height + 'rpx' }" @click="toLoginPage">
		<view class="top">
			<image :src="isLogin ? headIcon[1] : headIcon[0]" class="headIcon"></image>
			<view class="name">{{ isLogin ? userInfo.name : '未登录，点击登录' }}</view>
		</view>
		<view class="main">
			<view class="item">
				<view class="value">0</view>
				<view class="name">余额(元)</view>
			</view>
			<view class="item">
				<view class="value">0</view>
				<view class="name">优惠卷</view>
			</view>
			<view class="item">
				<view class="value">0</view>
				<view class="name">积分</view>
			</view>
		</view>
	</view>
</template>

<script setup>
import { ref } from 'vue';
import { onShow } from '@dcloudio/uni-app';
const height = ref(uni.getWindowInfo().statusBarHeight * 2 + 120);
const headIcon = [
	'https://hbimg.huabanimg.com/79e75e5d00341d770a89d081d2f11617e2be3577eda-VrL3fb_fw236',
	'https://img.zcool.cn/community/01cfd95d145660a8012051cdb52093.png?x-oss-process=image/auto-orient,1/resize,m_lfit,w_1280,limit_1/sharpen,100',
	'https://img.aigexing.com/uploads/4/1253/1007356329/91532791989/63581644.jpg'
];
let userInfo = ref(uni.getStorageSync('userInfo'));
const isLogin = ref(false);

const toLoginPage = () => {
	if (!isLogin.value) {
		uni.navigateTo({
			url: '/pages/login/login'
		});
	}
};
onShow(() => {
	userInfo = ref(uni.getStorageSync('userInfo'));
	if (userInfo.value) {
		isLogin.value = true;
	} else {
		isLogin.value = false;
	}
});
</script>

<style scoped lang="scss">
.MyCard {
	width: 670rpx;
	height: 350rpx;
	background-color: #fff;
	padding: 30rpx 20rpx;
	box-sizing: border-box;
	border-radius: 20rpx;
	box-shadow: 0 2rpx 10rpx 4rpx rgba(202, 204, 204, 0.2);
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	position: absolute;
	left: 40rpx;

	.top {
		width: 100%;
		display: flex;
		height: 140rpx;
		.headIcon {
			width: 140rpx;
			height: 140rpx;
			border-radius: 50%;
		}
		.name {
			font-size: 40rpx;
			font-weight: blod;
			margin: auto 0 auto 24rpx;
		}
	}
	.main {
		width: 100%;
		flex-grow: 1;
		display: flex;
		.item {
			flex: 1;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			.value {
				font-size: 36rpx;
				color: #000;
			}
			.name {
				font-size: 26rpx;
				color: #b2b2b2;
				margin-top: 10rpx;
			}

			&::after {
				content: '';
				height: 50%;
				border: 1rpx soild #000;
				position: absolute;
				right: 0;
			}
		}
	}
}
</style>
