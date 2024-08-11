<template>
	<view class="bg">
		<view class="top" bindtap="toinfo">
		      <view class="top-main">
		        <view class="main-left">
		          <image :src="company.icon" mode="" style="height: 150rpx;width: 150rpx;"/>
		        </view>
		        <view class="main-right">
		          <view class="right-top">
		            {{ company.name }}
		          </view>
		          <view class="right-bottom">
		            {{ company.enName }}
		          </view>
		        </view>
		        
		      </view>
		    </view>
	</view>
</template>

<script setup>
	import { ref } from 'vue'
	import { getCompany } from "/api/index"
	const company = ref("")
	getCompany().then(res=>{
		company.value = res
		console.log(res);
	})
</script>

<style scoped lang="scss">
.bg{
  min-height: 100vh;
  width: 100%;
  /* background-color: #c4c6c9; */
  background-color: #faf7f3;
  font-size: 40rpx;
  margin: auto;
  padding-top: 30rpx;
}
.top{
  background-color: #FFFFFF;
  width: 87%;
  height: 150rpx;
  margin: auto;
  border-radius: 30rpx;
  margin-bottom: 30rpx;
  
}
.top-main{
  font-size: 40rpx;
  width: 100%;
  height: 100%;
  background-color: #FFFFFF;
  display: flex;
  justify-content: space-between;
  border-radius: 50rpx;
}
.main-left{
  width: 150rpx;
  height: 150rpx;
  /* background-color: skyblue; */
}
.main-right{
  /* width: calc(100% - 150rpx); */
  width: 70%;
  /* background-color: skyblue; */
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  font-size: 20rpx;
}
.right-top{
  font-size: 40rpx;
}
.right-bottom{
  margin-top: -20rpx;
  font-size: 25rpx;
}
</style>