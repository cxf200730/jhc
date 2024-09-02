<template>
	<view class="bg">
		<WuAiNin v-if="company._id === '66d52f7cce5ec98eaadb3450'" :company="company" />
	</view>
</template>

<script setup>
import { onLoad } from '@dcloudio/uni-app';
import { ref } from 'vue';
import { getAllCooperate } from '/api/cooperate';
import WuAiNin from './WuAiNin/WuAiNin.vue';
const company = ref({});
onLoad((options) => {
	getAllCooperate().then((res) => {
		company.value = res.filter((item) => item._id === options.id)[0];
	});
});
</script>

<style scoped lang="scss">
.bg {
	width: 100%;
	height: 100vh;
	display: flex;
	flex-direction: column;
}
</style>
