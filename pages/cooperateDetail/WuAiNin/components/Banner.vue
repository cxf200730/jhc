<template>
	<view class="Banner">
		<view class="lunbo">
			<swiper interval="3000" indicator-dots="{{false}}" indicator-color="#fff" autoplay="true" circular="true">
				<swiper-item wx:for="{{lunbo}}" wx:key="index">
					<navigator class="swiper-item" style="background-image: url({{item}});" url="/pages/index/pages?index={{lunboname[index][0]}}&&name={{lunboname[index][1]}}">
						<view class="lunbo_words">
							<view style="float: right; margin-right: 20rpx">133 0710 9619</view>
						</view>
					</navigator>
				</swiper-item>
			</swiper>
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
</script>

<style scoped lang="scss">
.Banner {
	.lunbo {
		width: 90%;
		height: 420rpx;
		margin-left: auto;
		margin-right: auto;
		background-color: teal;
		border-radius: 30rpx;
		margin-top: 20rpx;
	}
	swiper {
		width: 100%;
		height: calc(82vw * 1080 / 1580);
		/* display: flex; */
		/* height: cacl(750rpx * 327 / 491); */
	}
	.swiper-item {
		width: 100%;
		height: 100%;
		background-color: saddlebrown;
		margin: auto;
		border-radius: 30rpx;
		background-position: center;
		background-size: cover;
		background-repeat: no-repeat;
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
}
</style>
