<template>
	<view class="content">{{ a }}</view>
</template>

<script setup>
import { getCompany, getBannerList, getIndexMenu, getWine } from '/api/index';
import { ref } from 'vue';
import { onLoad } from '@dcloudio/uni-app';
// const baseURL = uni.getStorageSync('baseURL');
// const company = ref([]);
// const getCompanyData = async () => {
// 	const res = await getCompany();
// 	company.value = res;
// 	imgurl.value = baseURL + res[0].icon;
// };
// const imgurl = ref('');
// onLoad(() => {
// 	getCompanyData();
// });
const a = ref('0');
// getBannerList().then((res) => (a.value = res));

// const initData = async () => {
// 	a.value = await getBannerList();
// };
// async function initData() {
// 	a.value = await getWine();
// 	console.log(a.value);
// }
// initData();
</script>

<style scoped lang="scss">
.content {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}

.logo {
	height: 200rpx;
	width: 200rpx;
	margin-top: 200rpx;
	margin-left: auto;
	margin-right: auto;
	margin-bottom: 50rpx;
}

.text-area {
	display: flex;
	justify-content: center;
}

.title {
	font-size: 36rpx;
	color: #8f8f94;
}
</style>
