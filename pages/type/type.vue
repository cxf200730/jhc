<template>
	<view class="bg">
		<Serch v-model="searchText" />
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
							<view class="price">{{ itemName.danjia }}￥</view>
						</view>
					</template>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script setup>
import Serch from './components/Serch';
import { ref, watchEffect } from 'vue';
import { getGoods } from '/api/index';
import { typeName } from './jsonData';
const searchText = ref('');
watchEffect(() => {
	console.log(searchText.value);
});
const baseURL = uni.getStorageSync('baseURL');
const tabCur = ref(0); //当前项
const rightCur = ref(0); // 用于实现左边联动右边
const scrollTop = ref();
const index = ref();
const goodsList = ref([
	{
		title: '碳酸类型',
		id: 0,
		list: [
			{
				name: '可口可乐',
				img: 'https://img2.baidu.com/it/u=3616759465,2727399041&fm=253&fmt=auto&app=138&f=JPEG?w=375&h=500',
				sell: '月售：108',
				price: '4.8'
			},
			{
				name: '雪碧',
				img: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic.51yuansu.com%2Fpic3%2Fcover%2F01%2F93%2F00%2F5982eed63cc27_610.jpg&refer=http%3A%2F%2Fpic.51yuansu.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1662339581&t=8bbd7f16e03512ff0e8c32100bbcfc86',
				sell: '月售：88',
				price: '4.8'
			},
			{
				name: '可口可乐',
				img: 'https://img2.baidu.com/it/u=3616759465,2727399041&fm=253&fmt=auto&app=138&f=JPEG?w=375&h=500',
				sell: '月售：108',
				price: '4.8'
			},
			{
				name: '雪碧',
				img: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic.51yuansu.com%2Fpic3%2Fcover%2F01%2F93%2F00%2F5982eed63cc27_610.jpg&refer=http%3A%2F%2Fpic.51yuansu.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1662339581&t=8bbd7f16e03512ff0e8c32100bbcfc86',
				sell: '月售：88',
				price: '4.8'
			},
			{
				name: '可口可乐',
				img: 'https://img2.baidu.com/it/u=3616759465,2727399041&fm=253&fmt=auto&app=138&f=JPEG?w=375&h=500',
				sell: '月售：108',
				price: '4.8'
			},
			{
				name: '雪碧',
				img: 'https://img2.baidu.com/it/u=3616759465,2727399041&fm=253&fmt=auto&app=138&f=JPEG?w=375&h=500',
				sell: '月售：88',
				price: '4.8'
			}
		]
	},
	{
		title: '奶茶类型',
		id: 1,
		list: [
			{
				name: '阿萨姆奶茶',
				img: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fcbu01.alicdn.com%2Fimg%2Fibank%2FO1CN01SHPIlm2GVfaCwHCfx_%21%212211349499021-0-cib.jpg&refer=http%3A%2F%2Fcbu01.alicdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1662285715&t=c575199b747c342d0844a1d8ab593a04',
				sell: '月售：108',
				price: '4.8'
			},
			{
				name: '香飘飘奶茶',
				img: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fcbu01.alicdn.com%2Fimg%2Fibank%2FO1CN01SHPIlm2GVfaCwHCfx_%21%212211349499021-0-cib.jpg&refer=http%3A%2F%2Fcbu01.alicdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1662285715&t=c575199b747c342d0844a1d8ab593a04',
				sell: '月售：108',
				price: '4.8'
			},
			{
				name: '阿萨姆奶茶',
				img: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fcbu01.alicdn.com%2Fimg%2Fibank%2FO1CN01SHPIlm2GVfaCwHCfx_%21%212211349499021-0-cib.jpg&refer=http%3A%2F%2Fcbu01.alicdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1662285715&t=c575199b747c342d0844a1d8ab593a04',
				sell: '月售：108',
				price: '4.8'
			},
			{
				name: '香飘飘奶茶',
				img: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fcbu01.alicdn.com%2Fimg%2Fibank%2FO1CN01SHPIlm2GVfaCwHCfx_%21%212211349499021-0-cib.jpg&refer=http%3A%2F%2Fcbu01.alicdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1662285715&t=c575199b747c342d0844a1d8ab593a04',
				sell: '月售：108',
				price: '4.8'
			},
			{
				name: '阿萨姆奶茶',
				img: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fcbu01.alicdn.com%2Fimg%2Fibank%2FO1CN01SHPIlm2GVfaCwHCfx_%21%212211349499021-0-cib.jpg&refer=http%3A%2F%2Fcbu01.alicdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1662285715&t=c575199b747c342d0844a1d8ab593a04',
				sell: '月售：108',
				price: '4.8'
			},
			{
				name: '香飘飘奶茶',
				img: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fcbu01.alicdn.com%2Fimg%2Fibank%2FO1CN01SHPIlm2GVfaCwHCfx_%21%212211349499021-0-cib.jpg&refer=http%3A%2F%2Fcbu01.alicdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1662285715&t=c575199b747c342d0844a1d8ab593a04',
				sell: '月售：108',
				price: '4.8'
			}
		]
	},
	{
		title: '矿泉水',
		id: 2,
		list: [
			{
				name: '农夫山泉',
				img: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.defanli.com%2Fi4%2F792547767%2FO1CN01HuwT1T27FKjNjeyQO_%21%21792547767.jpg_q90.jpg&refer=http%3A%2F%2Fimg.defanli.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1662285923&t=29d7244212e15dc78bb5bdf1d617a45f',
				sell: '月售：108',
				price: '4.8'
			},
			{
				name: '怡宝',
				img: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.yzcdn.cn%2Fupload_files%2F2018%2F11%2F05%2FFonL0_5VwTfHmiwQiAlBtIZiy3sq.jpg%3FimageView2%2F2%2Fw%2F580%2Fh%2F580%2Fq%2F75%2Fformat%2Fjpg&refer=http%3A%2F%2Fimg.yzcdn.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1662339509&t=e1988f3159060384664ce3de18e45aaf',
				sell: '月售：108',
				price: '4.8'
			},
			{
				name: '农夫山泉',
				img: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.defanli.com%2Fi4%2F792547767%2FO1CN01HuwT1T27FKjNjeyQO_%21%21792547767.jpg_q90.jpg&refer=http%3A%2F%2Fimg.defanli.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1662285923&t=29d7244212e15dc78bb5bdf1d617a45f',
				sell: '月售：108',
				price: '4.8'
			},
			{
				name: '怡宝',
				img: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.yzcdn.cn%2Fupload_files%2F2018%2F11%2F05%2FFonL0_5VwTfHmiwQiAlBtIZiy3sq.jpg%3FimageView2%2F2%2Fw%2F580%2Fh%2F580%2Fq%2F75%2Fformat%2Fjpg&refer=http%3A%2F%2Fimg.yzcdn.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1662339509&t=e1988f3159060384664ce3de18e45aaf',
				sell: '月售：108',
				price: '4.8'
			},
			{
				name: '农夫山泉',
				img: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.defanli.com%2Fi4%2F792547767%2FO1CN01HuwT1T27FKjNjeyQO_%21%21792547767.jpg_q90.jpg&refer=http%3A%2F%2Fimg.defanli.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1662285923&t=29d7244212e15dc78bb5bdf1d617a45f',
				sell: '月售：108',
				price: '4.8'
			},
			{
				name: '怡宝',
				img: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.yzcdn.cn%2Fupload_files%2F2018%2F11%2F05%2FFonL0_5VwTfHmiwQiAlBtIZiy3sq.jpg%3FimageView2%2F2%2Fw%2F580%2Fh%2F580%2Fq%2F75%2Fformat%2Fjpg&refer=http%3A%2F%2Fimg.yzcdn.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1662339509&t=e1988f3159060384664ce3de18e45aaf',
				sell: '月售：108',
				price: '4.8'
			}
		]
	}
]);

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
		els
			.fields(
				{
					size: true
				},
				function (res) {
					list[i].top = itemHeight;
					itemHeight += res.height;
					list[i].bottom = itemHeight;
				}
			)
			.exec();
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
	const output = res.reduce((accumulator, currentValue) => {
		// 检查累加器中是否已经存在当前类型的键
		if (!accumulator[currentValue.goodsType]) {
			// 如果不存在，则创建一个新条目，并将当前data放入list数组中
			accumulator[currentValue.goodsType] = { goodsType: currentValue.goodsType, list: [currentValue.data] };
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
			left: 190rpx;
			font-size: 36rpx;
			font-weight: 700;
		}
		.listItem .sell {
			position: absolute;
			top: 40%;
			left: 190rpx;
			color: #858687;
			font-size: 30rpx;
		}
		.listItem .price {
			position: absolute;
			bottom: 5rpx;
			left: 190rpx;
			color: #ff4a26;
			font-weight: 700;
		}
	}
}
</style>
