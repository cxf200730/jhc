<template>
	<view class="ChooseItem">
		<view class="item" v-for="i in 2" :key="i">
			<template v-if="menuList.length > 0">
				<view class="img" :style="{ backgroundImage: `url('${menuList[(i - 1) * i]?.bg}')` }" @click="toPage(menuList[(i - 1) * i]?.name)">
					<view class="span">{{ menuList[(i - 1) * i]?.name }}</view>
				</view>
				<view class="img" :style="{ backgroundImage: `url('${menuList[(i - 1) * i + 1]?.bg}')` }" @click="toPage(menuList[(i - 1) * i + 1]?.name)">
					<view class="span">{{ menuList[(i - 1) * i + 1]?.name }}</view>
				</view>
			</template>
		</view>
	</view>
</template>

<script setup>
import { getIndexMenu } from '/api/index';
import { ref } from 'vue';
const menuList = ref([]);
getIndexMenu().then((res) => {
	const result = res.list.map((item) => {
		return {
			...item,
			bg: uni.getStorageSync('baseURL') + item.bg
		};
	});
	menuList.value = result;
});
const toPage = (i) => {
	if (i === '会员中心') {
	} else if (i === '电子商城') {
		uni.switchTab({
			url: '/pages/type/type'
		});
	} else if (i === '积分兑换') {
		uni.navigateTo({
			url: '/pages/integral/integral'
		});
	}
};
</script>

<style scoped lang="scss">
.ChooseItem {
	width: 100%;
	height: 360rpx;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	.item {
		height: 173rpx;
		width: 100%;
		display: flex;
		justify-content: space-between;
		.img {
			display: flex;
			width: 48%;
			background-color: salmon;
			border-radius: 40rpx;
			background-size: cover;
			background-repeat: no-repeat;
			.span {
				margin: auto;
			}
		}
	}
}
</style>
