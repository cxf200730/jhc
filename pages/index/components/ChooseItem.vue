<template>
	<view class="ChooseItem">
		<view class="item" v-for="i in 2">
			<view class="img" :style="{ backgroundImage: `url('${menuList[(i - 1) * i]?.bg}')` }">
				<span>{{ menuList[(i - 1) * i]?.name }}</span>
			</view>
			<view class="img" :style="{ backgroundImage: `url('${menuList[(i - 1) * i + 1]?.bg}')` }">
				<span>{{ menuList[(i - 1) * i + 1]?.name }}</span>
			</view>
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
	let i = 0;
	menuList.value = menuList.value.map((item) => {
		return {
			...item,
			name: ++i
		};
	});
});
// menuList.value = [
// 	{ name: '1234', bg: 'https://pica.zhimg.com/v2-6219604e8069cb3c598aa27363ac1511_r.jpg?source=1940ef5c' },
// 	{ name: '4567', bg: 'https://pica.zhimg.com/v2-6219604e8069cb3c598aa27363ac1511_r.jpg?source=1940ef5c' },
// 	{ name: '8910', bg: 'https://pica.zhimg.com/v2-6219604e8069cb3c598aa27363ac1511_r.jpg?source=1940ef5c' },
// 	{ name: '1112', bg: 'https://pica.zhimg.com/v2-6219604e8069cb3c598aa27363ac1511_r.jpg?source=1940ef5c' }
// ];
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
			span {
				margin: auto;
			}
		}
	}
}
</style>
