<template>
	<view class="bg">
		<view class="img">
			<image v-if="good.cover" :src="baseURL + good.cover" mode="aspectFit" style="width: 100%; height: 100%"></image>
		</view>
		<view style="background-color: rgb(255, 255, 255); border-radius: 50rpx 50rpx 0 0; margin-bottom: 150rpx">
			<view style="font-size: 50rpx; margin: 30rpx; color: red">
				<span v-if="good.price2">{{ good.price2 }}元+</span>
				{{ good.price }}积分
			</view>
			<view style="font-size: 50rpx; margin: 30rpx; color: black">
				{{ good.name }}
			</view>

			<view
				style="
					width: 95%;
					height: 320rpx;
					background-color: #e6e3e6;
					margin-left: auto;
					margin-right: auto;
					border-radius: 20rpx;
					font-size: 30rpx;
					line-height: 35rpx;
					padding-top: 20rpx;
					display: flex;
				"
			>
				<view style="width: 95%; height: 100%; margin: auto">
					<text style="font-size: 28rpx">需要现金+积分兑换的商品请联系客服进行兑换！</text>
				</view>
			</view>
		</view>
		<view class="btn" @click="openUI">立即兑换</view>
		<view>
			<!-- 提示窗示例 -->
			<uni-popup ref="alertDialog" type="dialog">
				<uni-popup-dialog type="warn" cancelText="取消" confirmText="确认兑换" title="兑换商品" :content="content" @confirm="dialogConfirm"></uni-popup-dialog>
			</uni-popup>
		</view>
	</view>
</template>

<script setup>
import { onLoad } from '@dcloudio/uni-app';
import { ref } from 'vue';
import { getOneIntegral } from '/api/integral';
import { editUser } from '/api/user';
import { addLog } from '/api/log';
import { getNowTime } from '/utils/publicFn';
import orderFormVue from '../orderForm/orderForm.vue';
const baseURL = uni.getStorageSync('baseURL');
const userInfo = uni.getStorageSync('userInfo');
let good = ref({});
onLoad((options) => {
	getOneIntegral(options.id).then((res) => {
		good.value = res[0];
	});
});

const alertDialog = ref();
const openUI = () => {
	if (good.value.price2) {
		uni.showToast({
			title: '请联系客服兑换',
			icon: 'error',
			duration: 3000
		});
	} else {
		alertDialog.value.open();
		content.value = `商品所需积分：${good.value.price},您的积分是：${userInfo.point},确认兑换吗?`;
	}
};
let content = ref(`商品所需积分：${good.value.price},您的积分是：${userInfo.point},确认兑换吗?`);
const dialogConfirm = () => {
	const myScore = userInfo.point;
	const needScore = parseInt(good.value.price);
	if (needScore > myScore) {
		uni.showToast({
			title: '您的积分不足',
			icon: 'error',
			duration: 3000
		});
	} else {
		const query = {
			point: myScore - needScore
		};
		editUser(query).then((res) => {
			uni.showToast({
				title: '兑换成功',
				icon: 'success',
				duration: 3000
			});
			const params = {
				userId: userInfo._id,
				userName: userInfo.name,
				userPhone: userInfo.phone,
				exchangeId: good.value._id,
				exchangeName: good.value.name,
				exchangeImg: good.value.cover,
				exchangePrice: needScore,
				exchangeTime: getNowTime(),
				brforePoint: myScore,
				afterPoint: myScore - needScore
			};
			addLog(params).then((res) => {
				uni.navigateTo({
					url: '/pages/orderForm/orderForm?current=4'
				});
			});
		});
	}
};
</script>

<style scoped lang="scss">
.bg {
	width: 100%;
	height: 100vh;
	display: flex;
	flex-direction: column;
	.img {
		width: 100%;
		height: 500rpx;
		margin-bottom: 40rpx;
		border-bottom: 2rpx solid #969696;
	}
}
.btn {
	background-color: #ff0000;
	color: #fff;
	padding: 20rpx;
	text-align: center;
	width: 80%;
	position: fixed;
	bottom: 40rpx;
	left: 8%;
	font-weight: bold;
	letter-spacing: 2rpx;
	border-radius: 40rpx;
}
</style>
