<template>
	<view class="Actor">
		<view class="card" v-for="(item, index) in actor" :key="index" @click="toPage(item)">
			<view class="card-main">
				<view class="main-left">
					<image class="left-img" :src="baseURL + item.cover" mode="aspectFit" />
					<view class="left-word">
						<view>{{ item.name }}</view>
						<view>{{ item.shenfen }}</view>
					</view>
				</view>
				<view class="main-right">
					<view class="right-main">
						<view style="padding: 20rpx; text-indent: 60rpx">
							<view>
								<rich-text :nodes="item.info"></rich-text>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
import { ref } from 'vue';
import { getAllPlayers } from '@/api/cooperate';
const baseURL = uni.getStorageSync('baseURL');
const actor = ref([]);
getAllPlayers().then((res) => {
	actor.value = res;
});
const toPage = (item) => {
	uni.navigateTo({
		url: '/pages/wuainin/actorDetail?id=' + item._id
	});
};
</script>

<style scoped lang="scss">
.Actor {
	min-height: 100vh;
	width: 100%;
	margin: auto;
	display: flex;
	background-color: #f2f3f6;
	flex-direction: column;
	overflow-x: hidden;
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
		width: 110%;
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
		letter-spacing: 30rpx;
		margin-left: auto;
		margin-right: auto;
		margin-top: 30rpx;
	}
	.item-info {
		width: 80%;
		min-height: 40rpx;
		line-height: 80rpx;
		font-size: 40rpx;
		border: rgb(160, 160, 160) 2rpx solid;
		margin-left: auto;
		margin-right: auto;
		margin-top: 50rpx;
		padding: 20rpx;
		box-shadow: 2rpx 12rpx 100rpx -5rpx rgba(0, 0, 0, 0.1);
	}
}
</style>
