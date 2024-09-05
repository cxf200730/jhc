<template>
	<view class="WuAiNin">
		<CompanyInfo :company="company" />
		<Banner :company="company" />
		<MoreNews />
	</view>
</template>

<script setup>
import CompanyInfo from './components/CompanyInfo.vue';
import Banner from './components/Banner.vue';
import MoreNews from './components/MoreNews.vue';
import { defineProps } from 'vue';
const props = defineProps({
	company: {
		default: ''
	}
});
</script>

<style scoped lang="scss">
.WuAiNin {
	min-height: 100vh;
	width: 100%;
	background-color: #d2cbc1;
	font-size: 40rpx;
	display: flex;
	flex-direction: column;
}
</style>
