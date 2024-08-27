<template>
	<view class="Serch">
		<uni-easyinput trim="all" v-model="searchText" placeholder="请输入搜索内容" @input="input"></uni-easyinput>
	</view>
</template>

<script setup>
import { ref, defineProps, defineEmits } from 'vue';
const props = defineProps({
	modelValue: {
		type: String
	}
});
const emits = defineEmits(['update:modelValue']); // 定义一个或多个自定义事件
const input = (e) => {
	emits('update:modelValue', e);
};
</script>

<style scoped lang="scss">
.Serch {
	width: 100%;
	background-color: #59a0ff;
	box-sizing: border-box;
	padding: 20rpx;
}
</style>
