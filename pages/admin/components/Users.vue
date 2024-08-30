<template>
	<view class="Users">
		<view class="item" v-for="(item, index) in userList" :key="item._id">
			<view class="content">
				<text>ID：</text>
				{{ item._id }}
			</view>
			<view class="content">
				<text>昵称：</text>
				{{ item.name }}
			</view>
			<view class="content">
				<text>手机号：</text>
				{{ item.phone }}
			</view>
			<view class="content">
				<text>VIP：</text>
				{{ item.level }}
			</view>
			<view class="content">
				<text>积分：</text>
				{{ item.point }}
			</view>
			<view class="content">
				<text>身份：</text>
				{{ item.identity === 0 ? '普通用户' : '管理员' }}
			</view>
			<view class="content">
				<button size="mini" @click="setIdentity(item)">{{ item.identity === 0 ? '设置为管理员' : '取消管理员身份' }}</button>
			</view>
		</view>
	</view>
</template>

<script setup>
import { getAllUser, editOtherUser } from '/api/user';
import { ref, onMounted } from 'vue';
const userInfo = uni.getStorageSync('userInfo');
const userList = ref([]);
onMounted(() => {
	getAllUser().then((res) => {
		userList.value = res;
	});
});
const setIdentity = (item) => {
	const query = {
		id: item._id,
		identity: item.identity === 0 ? 1 : 0
	};
	editOtherUser(query).then((res) => {
		getAllUser().then((res) => {
			userList.value = res;
		});
		uni.showToast({
			title: '修改成功',
			icon: 'success'
		});
	});
};
</script>

<style scoped lang="scss">
.Users {
	width: 100%;
	height: 100vh;
	display: flex;
	flex-direction: column;
	.item {
		margin-bottom: 30rpx;
		background-color: #c7c7c7;
		box-sizing: border-box;
		padding: 10rpx 20rpx;
		.content {
			display: flex;
			text {
				width: 140rpx;
			}
		}
	}
}
</style>
