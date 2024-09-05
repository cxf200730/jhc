<template>
	<view class="bg">
		<Chenggonganli v-if="showPage === 'chenggonganli'" />
		<Actor v-if="showPage === 'actor'" />
	</view>
</template>

<script setup>
import { onLoad } from '@dcloudio/uni-app';
import { ref } from 'vue';
import Chenggonganli from './components/Chenggonganli';
import Actor from './components/Actor';
onLoad((options) => {
	showPage.value = options.name;
});
const showPage = ref('');
</script>

<style scoped lang="scss">
.bg {
	width: 100%;
	height: 100vh;
	display: flex;
	flex-direction: column;
}
</style>
