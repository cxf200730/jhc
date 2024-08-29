<template>
	<view class="orderForm">
		<view>
			<view class="uni-padding-wrap uni-common-mt">
				<uni-segmented-control :current="current" :values="items" style-type="text" active-color="#007aff" @clickItem="onClickItem" />
			</view>
			<view class="content">
				<template v-for="(it, index) in 5" :key="index">
					<view v-if="current === index">
						<text class="content-text">
							{{ index }}
							{{ index === 4 }}
							<view class="" v-if="index === 4">444全部订单</view>
						</text>
					</view>
				</template>
			</view>
		</view>
	</view>
</template>

<script setup>
import { ref } from 'vue';
import { onLoad } from '@dcloudio/uni-app';
const items = ['待付款', '待收货', '待评价', '退款/售后', '全部订单'];
const current = ref(0);
const onClickItem = (e) => {
	if (current.value !== e.currentIndex) {
		current.value = e.currentIndex;
	}
};
onLoad((options) => {
	current.value = parseInt(options.current);
});
</script>

<style scoped lang="scss">
.orderForm {
	width: 100%;
	height: 100vh;
	display: flex;
	flex-direction: column;
}
</style>
