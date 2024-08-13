<template>
	<view class="bg">
		<view class="topview">
			<view class="sco" style="width: 100%; height: 100%; background-color: saddlebrown; border-radius: 24rpx">
				<Banner />
			</view>
		</view>
		<view class="topmain">
			<view class="tuijian">
				<text>正品保障</text>
				<text>品牌直供</text>
				<text>售后无忧</text>
				<text>教练推荐</text>
			</view>
			<view class="serch">
				<uni-easyinput
					v-model="value"
					placeholder="请输入内容查找"
					prefixIcon="search"
					:inputBorder="false"
					placeholderStyle="font-size: 28rpx;
					line-height: 60rpx;"
				></uni-easyinput>
			</view>
			<view class="sousuo">
				<text style="font-weight: bold; color: #fff">热门搜索:</text>
				<text v-for="(item, index) in hotserch" :key="index">{{ item }}</text>
			</view>
		</view>
		<view class="content">
			<view class="newcommodity">
				<view class="title">
					<text>新品上市</text>
					<text>查看全部 ></text>
				</view>
				<view class="newcommodity-main">
					<view class="newshow">
						<view class="newshow-item">
							<!-- <image src="../../static/newitem1.png" mode="aspectFill"></image> -->
							<text class="newshow-item-title">肌肉科技白金支链氨基酸氨基酸</text>
							<text class="newshow-item-money">¥199</text>
							<text class="newshow-item-remarks">七天无理由</text>
						</view>
						<view class="newshow-item">
							<!-- <image src="../../static/newitem2.png" mode="aspectFill"></image> -->
							<text class="newshow-item-title">肌肉科技白金支链氨基酸氨基酸</text>
							<text class="newshow-item-money">¥199</text>
							<text class="newshow-item-remarks">七天无理由</text>
						</view>
						<view class="newshow-item">
							<!-- <image src="../../static/newitem3.png" mode="aspectFill"></image> -->
							<text class="newshow-item-title">肌肉科技白金支链氨基酸氨基酸</text>
							<text class="newshow-item-money">¥199</text>
							<text class="newshow-item-remarks">七天无理由</text>
						</view>
					</view>
					<view class="refresh">
						<!-- <image src="../../static/newcommodity-refresh.png" mode="aspectFill"></image> -->
						<text>换一批</text>
					</view>
				</view>
			</view>

			<!--<view class="limitedTime">
				<view class="limitedTime-title">
					<view class="limitedTime-title-left">
						<text class="bigtitlt">限时秒杀</text>
						<uni-countdown :font-size="fontSize" :day="3" :hour="2" :minute="30" :second="0" color="#FFFFFF" background-color="#EE0C0C" />
					</view>
					<text>查看全部 ></text>
				</view>
				<view class="limitedTime-main">
					<view class="newshow">
						<view class="newshow-item">
							<image src="../../static/indext/ime1.png" mode="aspectFill"></image>
							<text class="newshow-item-title">肌肉科技白金支链氨基酸氨基酸</text>
							<text class="newshow-item-money">¥199</text>
							<text class="newshow-item-remarks">1233人已枪</text>
						</view>
						<view class="newshow-item">
							<image src="../../static/indextime2.png" mode="aspectFill"></image>
							<text class="newshow-item-title">肌肉科技白金支链氨基酸氨基酸</text>
							<text class="newshow-item-money">¥199</text>
							<text class="newshow-item-remarks">剩余100件</text>
						</view>
						<view class="newshow-item">
							<image src="../../static/indextime3.png" mode="aspectFill"></image> 
							<text class="newshow-item-title">肌肉科技白金支链氨基酸氨基酸</text>
							<text class="newshow-item-money">¥199</text>
							<text class="newshow-item-remarks">剩余200件</text>
						</view>
					</view>
				</view>
			</view>

			<view class="newcommodity" style="margin-top: 60rpx">
				<view class="title">
					<text>一周严选</text>
					<text>查看全部 ></text>
				</view>
				<view class="newcommodity-main">
					<view class="newshow">
						<view class="newshow-item">
							<image src="../../static/newitem1.png" mode="aspectFill"></image>
							<text class="newshow-item-title">肌肉科技白金支链氨基酸氨基酸</text>
							<text class="newshow-item-money">¥199</text>
							<text class="newshow-item-remarks">1321人加购</text>
						</view>
						<view class="newshow-item">
							<image src="../../static/indexweek2.png" mode="aspectFill"></image>
							<text class="newshow-item-title">肌肉科技白金支链氨基酸氨基酸</text>
							<text class="newshow-item-money">¥199</text>
							<text class="newshow-item-remarks">1321人付款</text>
						</view>
						<view class="newshow-item">
							<image src="../../static/newitem2.png" mode="aspectFill"></image>
							<text class="newshow-item-title">肌肉科技白金支链氨基酸氨基酸</text>
							<text class="newshow-item-money">¥199</text>
							<text class="newshow-item-remarks">1321人喜欢</text>
						</view>
					</view>
					<view class="refresh">
						<image src="../../static/newcommodity-refresh.png" mode="aspectFill"></image>
						<text>换一批</text>
					</view>
				</view>
			</view>

			<view class="activity">
				<image src="../../static/index-huodong1.png" mode="aspectFill"></image>
				<image src="../../static/index-huodong1.png" mode="aspectFill"></image>
			</view>

			<view class="gold-recommendation">
				<view class="title">
					<text>金牌推荐</text>
					<text>查看全部 ></text>
				</view>
				<view class="gold-item" v-for="(item, index) in goldlist" :key="index">
					<view class="gold-item-top">
						<view class="gold-item-top-left">
							<image src="../../static/index-head1.png" mode="aspectFill"></image>
							<view class="gold-item-user">
								<text>王哲</text>
								<text>三界健美大赛冠军</text>
							</view>
						</view>
						<view class="gold-item-top-right">
							<image src="../../static/index-add.png" mode="aspectFill"></image>
							<text>关注</text>
						</view>
					</view>
					<view class="gold-line"></view>
					<view class="gold-item-bottom">
						<image :src="item" mode="aspectFill"></image>
						<view class="gold-info">
							<view class="text1">
								<text>YEAA纯享乳清蛋白粉25磅</text>
							</view>
							<view class="text2">
								<text>销量:12621</text>
								<text>好评:12589</text>
							</view>
							<view class="text1">
								<text style="color: #ee0c0c">¥199</text>
							</view>
							<view class="text2 star">
								<text>推荐指数：</text>
								<image src="../../static/index-star.png" mode="aspectFill" v-for="i in 5" :key="i"></image>
							</view>
						</view>
					</view>
				</view>
			</view>
			-->

			<view class="more">
				<view class="more-top">品牌推荐</view>
				<view class="more-main">
					<view class="more-item" v-for="(item, index) in pinpailist" :key="index">
						<image :src="item" mode="aspectFill"></image>
						<view class="more-name">肌肉科技氨基酸</view>
						<view class="more-price">¥199</view>
						<view class="more-bottom">1321人加购</view>
						<view class="addbtn">
							<!-- <image src="../../static/buycar-add.png" mode="aspectFit"></image> -->
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
import Banner from './compontes/Banner.vue';
</script>

<style scoped lang="scss">
.bg {
	width: 100%;
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	.topview {
		width: 100%;
		display: flex;
		flex-direction: column;
		padding: 0 30rpx;
		background-color: rgba(27, 164, 240, 1);
		height: 437rpx;
		box-sizing: border-box;
	}

	.topmain {
		height: 220rpx;
		display: flex;
		flex-direction: column;
		background-color: rgba(27, 164, 240, 1);
		box-sizing: border-box;
		padding: 20rpx 30rpx 30rpx 30rpx;
		justify-content: space-between;

		.tuijian {
			width: 100%;
			padding: 0 40rpx;
			box-sizing: border-box;
			display: flex;
			justify-content: space-between;
			font-size: 20rpx;
			color: rgba(255, 255, 255, 0.7);
		}
		.serch {
			border-radius: 44rpx;
			width: 100%;
			height: 60rpx;
			background-color: #ffffff;
			// padding: 0 30rpx;
			box-sizing: border-box;
			display: flex;
			:deep(.uni-easyinput__content) {
				width: 100%;
				height: 60rpx;
				border-radius: 44rpx;
				font-size: 28rpx;
			}
			:deep(.uni-easyinput__content-input) {
				height: 60rpx;
				font-size: 28rpx;
				line-height: 60rpx;
			}
		}
		.sousuo {
			height: 30rpx;
			width: 90%;
			display: flex;
			justify-content: space-between;
			line-height: 30rpx;
			font-size: 28rpx;
			color: #fdfbfb;
		}
	}

	.content {
		width: 100%;
		background-color: #f5f5f5;
		display: flex;
		flex-direction: column;
		box-sizing: border-box;
		border-radius: 32rpx 32rpx 0 0;
		padding: 30rpx;

		.newcommodity {
			display: flex;
			flex-direction: column;
			width: 100%;
			height: 564rpx;
			justify-content: space-between;

			.title {
				display: flex;
				justify-content: space-between;
				font-size: 24rpx;
				color: #333333;
				line-height: 30rpx;
				> text:first-child {
					font-size: 30rpx;
					font-weight: bold;
					color: #333333;
				}
			}

			.newcommodity-main {
				width: 100%;
				height: 504rpx;
				background-color: #ffffff;
				border-radius: 28rpx;
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				padding: 30rpx 30rpx 20rpx 30rpx;
				box-sizing: border-box;
				.newshow {
					width: 100%;
					height: 376rpx;
					display: flex;
					justify-content: space-between;
					.newshow-item {
						width: 188rpx;
						height: 376rpx;
						display: flex;
						flex-direction: column;
						justify-content: space-between;
						> image {
							width: 190rpx;
							height: 190rpx;
							border-radius: 16rpx;
						}
						.newshow-item-title {
							font-size: 30rpx;
							color: #333333;
							overflow: hidden;
							word-break: break-all;
							white-space: normal;
							text-overflow: ellipsis;
							display: -webkit-box;
							-webkit-box-orient: vertical;
							-webkit-line-clamp: 2; /* 2行后省略号 */
						}
						.newshow-item-money {
							font-size: 30rpx;
							color: #ee0c0c;
							line-height: 30rpx;
						}
						.newshow-item-remarks {
							font-size: 24rpx;
							color: #333333;
							line-height: 24rpx;
						}
					}
				}
				.refresh {
					width: 100%;
					display: flex;
					justify-content: center;
					height: 30rpx;
					> image {
						height: 24rpx;
						width: 24rpx;
						margin: auto 0;
					}
					> text {
						color: #1ba4f0;
						font-size: 30rpx;
						line-height: 30rpx;
						margin-left: 20rpx;
					}
				}
			}
		}

		.limitedTime {
			width: 100%;
			margin-top: 60rpx;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			height: 494rpx;
			.limitedTime-title {
				width: 100%;
				display: flex;
				justify-content: space-between;
				height: 30rpx;
				.limitedTime-title-left {
					display: flex;
					align-items: center;
					.bigtitlt {
						font-size: 30rpx;
						line-height: 30rpx;
						font-weight: bold;
						margin-right: 22rpx;
					}
				}

				> text {
					font-size: 24rpx;
					color: #333333;
					line-height: 30rpx;
				}
			}
			.limitedTime-main {
				width: 100%;
				height: 434rpx;
				background-color: #ffffff;
				border-radius: 28rpx;
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				padding: 30rpx;
				box-sizing: border-box;
				.newshow {
					width: 100%;
					height: 376rpx;
					display: flex;
					justify-content: space-between;
					.newshow-item {
						width: 188rpx;
						height: 376rpx;
						display: flex;
						flex-direction: column;
						justify-content: space-between;
						> image {
							width: 190rpx;
							height: 190rpx;
							border-radius: 16rpx;
						}
						.newshow-item-title {
							font-size: 30rpx;
							color: #333333;
							// line-height: 30rpx;
							overflow: hidden;
							word-break: break-all;
							white-space: normal;
							text-overflow: ellipsis;
							display: -webkit-box;
							-webkit-box-orient: vertical;
							-webkit-line-clamp: 2; /* 2行后省略号 */
						}
						.newshow-item-money {
							font-size: 30rpx;
							color: #ee0c0c;
							line-height: 30rpx;
						}
						.newshow-item-remarks {
							font-size: 24rpx;
							color: #333333;
							line-height: 24rpx;
						}
					}
				}
			}
		}

		.activity {
			width: 100%;
			margin: 30rpx 0;
			height: 220rpx;
			display: flex;
			overflow-x: auto;
			flex-wrap: nowrap;
			> image {
				flex: none;
				width: 660rpx;
				height: 220rpx;
				border-radius: 12rpx;
			}
			:not(:first-child) {
				margin-left: 20rpx;
			}
		}

		.gold-recommendation {
			margin: 30rpx 0;
			width: 100%;
			display: flex;
			flex-direction: column;
			.title {
				display: flex;
				justify-content: space-between;
				font-size: 24rpx;
				color: #333333;
				line-height: 30rpx;
				> text:first-child {
					font-size: 30rpx;
					font-weight: bold;
					color: #333333;
				}
			}
			.gold-item {
				width: 100%;
				height: 400rpx;
				margin-top: 30rpx;
				background-color: #ffffff;
				border-radius: 24rpx;
				padding: 30rpx;
				box-sizing: border-box;
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				.gold-item-top {
					display: flex;
					justify-content: space-between;
					.gold-item-top-left {
						display: flex;

						> image {
							height: 96rpx;
							width: 96rpx;
							border-radius: 50%;
							margin-right: 30rpx;
						}
						.gold-item-user {
							height: 100%;
							display: flex;
							flex-direction: column;
							justify-content: space-evenly;
							font-size: 30rpx;
							line-height: 30rpx;
							color: #333333;
							> text:not(:first-child) {
								color: #f0ad16;
								font-size: 24rpx;
							}
						}
					}

					.gold-item-top-right {
						height: 60rpx;
						border-radius: 44rpx;
						color: #1ba4f0;
						border: 1rpx #1ba4f0 solid;
						// line-height: 60rpx;
						font-size: 30rpx;
						padding: 0 30rpx;
						box-sizing: border-box;
						margin: auto 0;
						display: flex;
						> text {
							margin: auto;
							margin-left: 10rpx;
						}
						> image {
							width: 24rpx;
							height: 24rpx;
							margin: auto;
						}
					}
				}
				.gold-line {
					border: 1rpx #e6e6e6 solid;
				}
				.gold-item-bottom {
					width: 100%;
					height: 180rpx;
					display: flex;
					> image {
						width: 180rpx;
						height: 180rpx;
						margin-right: 30rpx;
					}

					.gold-info {
						height: 100%;
						display: flex;
						flex-direction: column;
						justify-content: space-between;

						.text1 {
							font-size: 30rpx;
							line-height: 30rpx;
						}
						.text2 {
							font-size: 24rpx;
							line-height: 24rpx;
							display: flex;
							justify-content: space-between;
						}
						.star {
							display: flex;
							justify-content: flex-start;
							align-items: flex-end;
							> image {
								width: 20rpx;
								height: 20rpx;
								margin-right: 2rpx;
							}
						}
					}
				}
			}
		}

		.more {
			width: 100%;

			margin-top: 30rpx;
			.more-top {
				font-size: 30rpx;
				font-weight: bold;
			}
			.more-main {
				display: flex;
				width: 100%;
				justify-content: space-between;
				flex-wrap: wrap;
				.more-item {
					margin-top: 30rpx;
					width: 330rpx;
					height: 524rpx;
					background-color: #ffffff;
					border-radius: 24rpx;
					padding: 20rpx 20rpx 30rpx 20rpx;
					box-sizing: border-box;
					display: flex;
					flex-direction: column;
					justify-content: space-between;
					position: relative;
					> image {
						width: 290rpx;
						height: 290rpx;
						border-radius: 12rpx;
					}

					.more-name {
						width: 100%;
						font-size: 30rpx;
						// line-height: 30rpx;
						height: 60rpx;
						overflow: hidden;
						text-overflow: ellipsis;
						display: -webkit-box;
						-webkit-line-clamp: 2;
						-webkit-box-orient: vertical;
						/* 设置宽度和高度 */
					}
					.more-price {
						font-size: 30rpx;
						line-height: 30rpx;
						color: #ee0c0c;
					}
					.more-bottom {
						font-size: 24rpx;
						line-height: 24rpx;
					}

					.addbtn {
						width: 30rpx;
						height: 30rpx;
						position: absolute;
						bottom: 30rpx;
						right: 20rpx;

						> image {
							width: 100%;
							height: 100%;
						}
					}
				}
			}
		}
	}
}
</style>
