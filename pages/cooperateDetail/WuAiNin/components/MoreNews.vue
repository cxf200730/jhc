<template>
	<view class="MoreNews">
		<view class="bottom">
			<view class="bottom-top" @click="toPage">
				<view style="font-size: 40rpx">
					<rich-text nodes="<b>最新动态</b>"></rich-text>
				</view>
				<view style="opacity: 0.5; font-size: 34rpx">更多></view>
			</view>

			<view class="bottom-main">
				<view class="item" @click="toPage" v-for="(item, index) in news" :key="index">
					<view class="item-left">
						<view style="height: 200rpx">
							{{ item.title }}
						</view>
						<view class="data">
							{{ item.data }}
						</view>
					</view>
					<view class="item-right">
						<image v-if="item.cover" :src="baseURL + item.cover" mode="aspectFill" style="width: 100%; height: 100%" />
					</view>
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
	console.log(res);
	news.value = res;
});
const news = ref([]);
const toPage = () => {
	uni.navigateTo({
		url: `/pages/wuainin/wuainin?name=chenggonganli`
	});
};
</script>

<style scoped lang="scss">
.MoreNews {
	// width: 100%;
	// height: 100vh;
	// display: flex;
	// flex-direction: column;
	/* 最新动态 */
	.bottom {
		width: 90%;
		/* min-height: 500rpx; */
		height: 450rpx;
		margin: 40rpx auto 40rpx auto;
		background-color: #ffffff;
		border-radius: 20rpx;
		display: flex;
		flex-direction: column;
		padding-bottom: 25rpx;
		overflow-y: auto;
	}
	.bottom-top {
		margin-left: auto;
		margin-right: auto;
		padding: 10rpx;
		width: 90%;
		height: 100rpx;
		/* background-color: salmon; */
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.bottom-main {
		width: 90%;
		min-height: 300rpx;
		margin: auto;
		/* background-color: seagreen; */
		padding: 10rpx;
		padding-top: 0;
	}
	.item {
		display: flex;
		height: 200rpx;
		width: 100%;
		/* background-color: slateblue; */
		margin-bottom: 20rpx;
	}
	.item-left {
		flex: 4;
		/* background-color: sandybrown; */
		width: 100%;
		height: 100%;
		letter-spacing: 2rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		border-bottom: #e0e2e6 2rpx solid;
		flex-direction: column;
		align-items: flex-start;
		justify-content: space-evenly;
		font-size: 30rpx;
	}
	.item-right {
		flex: 2;
		background-color: #66dc79;
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.data {
		opacity: 0.7;
		font-size: 24rpx;
	}
}
</style>
