<template>
	<view class="LoginView">
		<view class="inputView">
			<view class="titlt">姓名</view>
			<view class="input">
				<uni-easyinput v-model="name" trim="all" :styles="styles" placeholder="输入您的真实姓名"></uni-easyinput>
			</view>
		</view>
		<view class="inputView">
			<view class="titlt">手机号</view>
			<view class="input">
				<uni-easyinput type="number" trim="all" v-model="phone" :styles="styles" placeholder="输入您的手机号"></uni-easyinput>
			</view>
		</view>
		<view class="btnView">
			<view class="btn" @click="toLogin">登录</view>
			<view class="agree">
				<view>
					<uni-data-checkbox v-model="agree" multiple :localdata="hobbys" selectedColor="#007aff" selectedTextColor="#86949e" />
				</view>
				<view>
					<text style="color: #2a82e4">《用户服务协议》</text>
					和
					<text style="color: #2a82e4">《用户隐私政策》</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
import { ref } from 'vue';
const agree = ref([1]);
const name = ref('');
const phone = ref('');
const hobbys = [{ text: '已阅读并同意', value: 1 }];
const styles = {
	color: '#000'
};
const toLogin = () => {
	let errMsg = '';
	if (name.value.length < 2) errMsg = '姓名有误';
	else if (phone.value.length !== 11) errMsg = '手机号有误';
	else if (agree.value.length === 0) errMsg = '请同意隐私政策';
	if (errMsg.length > 0) {
		uni.showToast({
			title: errMsg,
			icon: 'error',
			duration: 2000
		});
	} else {
		const query = {
			name: name.value,
			phone: phone.value
		};
		console.log(query);
	}
};
</script>

<style scoped lang="scss">
.LoginView {
	width: 100%;
	height: 447px;
	background-color: #fff;
	display: flex;
	flex-direction: column;
	border-radius: 30rpx 30rpx 0 0;
	padding: 0 70rpx;
	box-sizing: border-box;
	.inputView {
		display: flex;
		flex-direction: column;
		margin-top: 60rpx;
		.titlt {
			font-size: 48rpx;
			font-weight: bold;
			margin-bottom: 30rpx;
		}
		.input {
			width: 100%;
			height: 80rpx;
			background-color: rgb(229, 229, 229);
			border-radius: 16rpx;
		}
	}
	.btnView {
		margin-top: 100rpx;
		display: flex;
		flex-direction: column;
		text-align: center;
		.btn {
			margin: 0 auto;
			width: 400rpx;
			border-radius: 22rpx;
			height: 80rpx;
			background-color: rgba(0, 122, 255, 0.7);
			text-align: center;
			line-height: 80rpx;
			color: #fff;
			font-size: 40rpx;
		}
		.agree {
			margin: 20rpx 0;
			font-size: 24rpx;
			display: flex;
			align-items: center;
			justify-content: center;
			color: #86949e;
		}
	}
}
</style>
