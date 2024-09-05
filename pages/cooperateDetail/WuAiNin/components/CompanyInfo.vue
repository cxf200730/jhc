<template>
	<view class="CompanyInfo">
		<view class="gongsi">
			<view class="gongsi-item" @click="gongsiinfo">
				<view class="gongsi-item-title">
					<rich-text style="line-height: 80rpx; font-size: 37rpx" :nodes="`<b>${infoName}</b>`"></rich-text>
				</view>
				<view class="gongsi-item-main" style="color: red">
					<rich-text nodes="<b>承办各类文艺演出活动</b>"></rich-text>
					<rich-text nodes="<b>策划、导演、组织、实施</b>"></rich-text>
				</view>
			</view>

			<view class="yanyuan">
				<view class="yanyuan-main">
					<view class="yanyuan-item-main" @click="toPage">
						<view class="yanyuan-item" v-for="(item, index) in company.actorIndex" :key="index">
							<image :src="baseURL + item.cover" mode="aspectFit" style="width: 100%" />
							<view style="width: 100%; height: 50rpx; text-align: center; margin-top: auto; letter-spacing: 2rpx; line-height: 70rpx">
								{{ item.name }}
							</view>
						</view>
						<view class="yanyuan-item" @click="actorinfo">
							<image class="us-img" :src="moreImg" mode="aspectFill" style="width: 100%" />
							<view style="width: 100%; height: 50rpx; text-align: center; margin-top: auto; letter-spacing: 2rpx; line-height: 70rpx">更多</view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
import { ref, defineProps } from 'vue';
const props = defineProps({
	company: {
		default: ''
	}
});
const baseURL = ref(uni.getStorageSync('baseURL'));
const moreImg = ref('/static/more.png');
const infoName = ref('吾爱您（武汉）文化传媒有限公司');
const toPage = () => {
	uni.navigateTo({
		url: '/pages/wuainin/wuainin?name=actor'
	});
};
</script>

<style scoped lang="scss">
.CompanyInfo {
	width: 90%;
	height: 350rpx;
	background-color: #ffffff;
	margin-left: auto;
	margin-right: auto;
	margin-top: 30rpx;
	border-radius: 20rpx;
	font-size: 30rpx;
	display: flex;
	flex-direction: column;
	.gongsi-item {
		padding: 20rpx;
		letter-spacing: 2rpx;
	}
	.gongsi-item-title {
		font-size: 30rpx;
	}
	.gongsi-item-main {
		opacity: 0.7;
		font-size: 25rpx;
	}
	.yanyuan {
		width: 100%;
		background-color: #ffffff;
		margin-left: auto;
		margin-right: auto;
		border-radius: 0 0 20rpx 20rpx;
	}
	.yanyuan-main {
		padding: 30rpx 30rpx 0rpx 30rpx;
		display: flex;
		flex-direction: column;
	}
	.yanyuan-item-title {
		letter-spacing: 2rpx;
		font-size: 35rpx;
		margin-top: -40rpx;
	}
	.yanyuan-item-main {
		margin-top: -30rpx;
		width: 100%;
		height: 160rpx;
		display: flex;
		overflow-x: hidden;
		overflow-y: hidden;
	}
	.yanyuan-item {
		height: 150rpx;
		margin-right: 8rpx;
		flex-basis: 100rpx;
		flex-shrink: 0;
		white-space: nowrap;
		background-repeat: space;
		background-size: 100rpx 100rpx;
		display: flex;
		flex-direction: column;
		font-size: 25rpx;
		background-repeat: no-repeat;
	}
}
</style>
