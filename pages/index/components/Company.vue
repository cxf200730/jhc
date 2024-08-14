<template>
	<view class="Company">
		<view class="top" bindtap="toinfo">
			<view class="top-main">
				<view class="main-left">
					<image :src="company.icon" mode="" style="height: 150rpx; width: 150rpx" />
				</view>
				<view class="main-right">
					<view class="right-top">
						{{ company.name }}
					</view>
					<view class="right-bottom">
						{{ company.enName }}
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
import { ref } from 'vue';
import { getCompany } from '/api/index';
const company = ref('');
// getCompany().then((res) => {
// 	company.value = res;
// 	console.log(res);
// });
company.value = {
	name: '阿德黄金卡回到家啊电话',
	enName: 'abcjskldakl',
	icon: 'https://bpic.51yuansu.com/pic3/cover/04/05/50/6136732c56a42_610.jpg?x-oss-process=image/resize,w_260/sharpen,100'
};
</script>

<style scoped lang="scss">
.Company {
	width: 100%;
	height: 150rpx;
	margin: 20rpx 0 40rpx;
}
.top {
	background-color: #ffffff;
	width: 100%;
	height: 150rpx;
	border-radius: 30rpx;
}
.top-main {
	font-size: 40rpx;
	width: 100%;
	height: 100%;
	background-color: #ffffff;
	display: flex;
	justify-content: space-between;
	border-radius: 50rpx;
}
.main-left {
	width: 150rpx;
	height: 150rpx;
	/* background-color: skyblue; */
}
.main-right {
	width: 70%;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	font-size: 20rpx;
}
.right-top {
	font-size: 40rpx;
}
.right-bottom {
	font-size: 25rpx;
}
</style>
