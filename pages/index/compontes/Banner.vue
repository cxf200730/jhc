<template>
	<view class="bg">
		<!-- {{BannerList}} -->
	</view>
</template>

<script setup>
	import { getBannerList } from '/api/index'
	import { ref } from 'vue'
	const BannerList = ref([])
	getBannerList().then(res=>console.log(BannerList.value =  res.imgs))
</script>

<style scoped lang="scss">
</style>