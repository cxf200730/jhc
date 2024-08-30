<template>
	<view class="bg">
		<uni-search-bar class="uni-mt-10" radius="5" placeholder="请输入搜索内容" clearButton="auto" cancelButton="none" @input="search" />

		<view class="main">
			<scroll-view class="left" scroll-y>
				<view v-for="(item, index) in goodsList" :key="index" :class="tabCur === index ? 'goodsTitle active' : 'goodsTitle'" @click="chooseMenu(item)">
					{{ item.name }}
				</view>
			</scroll-view>
			<scroll-view class="right" scroll-y scroll-with-animation :scroll-into-view="`scroll-${rightCur}`" @scroll="scrollLink">
				<view v-for="(item, index) in goodsList" :key="index" class="goodsItem" :id="`scroll-${index}`">
					<view>{{ item.name }}</view>
					<template v-for="(itemName, idx) in item.list" :key="idx">
						<view class="listItem">
							<image :src="baseURL + itemName.cover" class="img"></image>
							<view class="name">{{ itemName.name }}</view>
							<view class="sell">{{ itemName.dushu }}</view>
							<view class="danjia">{{ itemName.danjia }}￥</view>
						</view>
					</template>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script setup>
import { ref } from 'vue';
import { getGoods } from '/api/index';
import { typeName } from '/utils/publicData.js';

const baseURL = uni.getStorageSync('baseURL');
const search = (e) => {
	console.log(e);
};
const tabCur = ref(0); //当前项
const rightCur = ref(0); // 用于实现左边联动右边
const scrollTop = ref();
const index = ref();
const goodsList = ref([]);

const chooseMenu = (e) => {
	tabCur.value = e.id;
	rightCur.value = e.id;
};
const scrollLink = (e) => {
	let list = goodsList.value;
	let itemHeight = 0;
	for (let i = 0; i < list.length; i++) {
		//拿到每个元素
		let els = wx.createSelectorQuery().select('#scroll-' + i);
		els.fields(
			{
				size: true
			},
			function (res) {
				list[i].top = itemHeight;
				itemHeight += res.height;
				list[i].bottom = itemHeight;
			}
		).exec();
	}

	// // 拿到滚动的高度
	let scrollTop = e.detail.scrollTop;
	for (let i = 0; i < list.length; i++) {
		if (scrollTop > list[i].top && scrollTop < list[i].bottom) {
			tabCur.value = i;
			return false;
		}
	}
};
getGoods().then((res) => {
	let count = 0;
	const output = res.reduce((accumulator, currentValue) => {
		// 检查累加器中是否已经存在当前类型的键
		if (!accumulator[currentValue.goodsType]) {
			// 如果不存在，则创建一个新条目，并将当前data放入list数组中
			accumulator[currentValue.goodsType] = { goodsType: currentValue.goodsType, list: [currentValue.data], id: count };
			count++;
		} else {
			// 如果已存在，则将当前data添加到对应goodsType的list数组中
			accumulator[currentValue.goodsType].list.push(currentValue.data);
		}
		// 返回累加器以供下一次迭代使用
		return accumulator;
	}, {});
	// 由于reduce返回的是一个对象，我们需要将其值转换为数组格式
	let finalOutput = Object.values(output);
	finalOutput = finalOutput.map((item) => {
		const name = typeName.filter((it) => it.id === item.goodsType)[0]?.value;
		return { ...item, name };
	});
	// finalOutput = finalOutput.filter(item => item.goodsType !== "activity")
	goodsList.value = finalOutput;
});
</script>

<style scoped lang="scss">
.bg {
	width: 100%;
	height: 100vh;
	display: flex;
	flex-direction: column;
	.main {
		width: 100%;
		flex-grow: 1;
		display: flex;
		.left {
			float: left;
			width: 260rpx;
			background-color: #eeeeee;
			height: 100vh;
		}
		.left .goodsTitle {
			line-height: 100rpx;
			text-align: center;
		}
		.active {
			background-color: #fff;
		}
		.right {
			height: 100vh;
		}
		.goodsItem {
			padding: 20rpx;
		}
		.goodsName {
			text-align: center;
		}

		.listItem {
			position: relative;
			height: 180rpx;
			margin: 20rpx 0;
			border-radius: 20rpx;
			overflow: hidden;
			box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.75);
		}
		.listItem .img {
			position: absolute;
			top: 0;
			left: 0;
			width: 180rpx;
			height: 180rpx;
			border-radius: 20rpx;
		}
		.listItem .add {
			position: absolute;
			right: 10rpx;
			bottom: 10rpx;
			width: 40rpx;
			height: 40rpx;
		}
		.listItem .name {
			position: absolute;
			top: 0;
			left: 220rpx;
			font-size: 32rpx;
			font-weight: blod;
			display: -webkit-box;
			-webkit-line-clamp: 2;
			-webkit-box-orient: vertical;
			overflow: hidden;
			text-overflow: ellipsis;
		}
		.listItem .sell {
			position: absolute;
			top: 50%;
			left: 220rpx;
			color: #858687;
			font-size: 30rpx;
		}
		.listItem .danjia {
			position: absolute;
			bottom: 5rpx;
			left: 220rpx;
			color: #ff4a26;
			font-weight: 700;
		}
	}
}
</style>
