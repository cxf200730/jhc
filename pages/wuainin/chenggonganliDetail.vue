<template>
	<view class="bg">
		<view class="title" style="line-height: 45rpx; font-size: 38rpx">
			<view class="title_bg">{{ news.title }}</view>
			<view v-if="isSpecial" style="font-size: 30rpx; text-align: start; margin-top: 20rpx; letter-spacing: 1rpx; line-height: 35rpx">
				<view>主办单位：“出彩老玩童”文化艺术节组委会</view>
				<view>支持单位：武汉市江汉区文化馆</view>
				<view>
					<span style="opacity: 0">支持单位：</span>
					武汉市武昌区文化馆
				</view>
				<view>赞助单位：武汉江海潮商贸有限公司</view>
				<view>承办单位：吾爱您(武汉)文化传媒有限公司</view>
				<view>协办单位：各艺术团队</view>
				<view style="text-indent: 70rpx; margin-top: 20rpx">
					为贯彻学习党的二十大精神，弘扬中国传统文化，丰富群众文艺生活，打造群艺文化服务品牌，加强文艺人才培养力度，建设德艺双馨的文艺队伍，促进、活跃、助力英雄城武汉文化事业的发展，提升文艺创作水平，发掘并选送优秀作品。是我们本次活动的宗旨。
				</view>
				<view style="text-indent: 70rpx">
					金风送爽，天高云淡，在这个花果飘香的季节里，我们欢聚在武汉市江汉区文化馆青鸟剧场，共同庆祝文化艺术品牌“出彩老玩童”文化艺术节。让我们一起记住2023年11月3日，让爱洋溢在你甜蜜的生活中。
				</view>
				<view style="text-indent: 70rpx">出彩中国人，出彩老玩童。在这喜庆的日子里，“出彩老玩童”文化艺术品牌创始人、策划人汪淑茹女士上台发表热情洋溢的讲话。</view>
				<view style="text-indent: 70rpx">
					充满活力、充满创造力的文艺盛会在武汉吾爱您群星合唱团枫叶红艺术团大合唱《龙的传人》《黄鹤楼》中隆重拉开2023中国·武汉首届“出彩老玩童”文化艺术节序幕。
				</view>
			</view>

			<view class="lunbo" v-if="isSpecial">
				<swiper interval="3000" :indicator-dots="false" indicator-color="#fff" :autoplay="true" :circular="true">
					<swiper-item v-for="(item, index) in lunbo" :key="index">
						<navigator class="swiper-item" :style="{ 'background-image': `url(${baseURL + item})` }"></navigator>
						<!-- url="/pages/info/page?index1={{indexarr[index][0]}}&&index2={{indexarr[index][1]}}" -->
					</swiper-item>
				</swiper>
			</view>

			<view class="video" v-if="isSpecial" style="display: flex; flex-direction: column; margin-bottom: 50rpx">
				<view v-for="(item, index) in videos" :key="index" style="width: 100%; display: flex; flex-direction: column; margin-bottom: 30rpx">
					<view style="width: 100%; align-items: center; text-align: center; font-size: 40rpx; line-height: 60rpx; margin-top: 40rpx; color: #af7529; font-weight: 500">
						{{ item.title }}
					</view>
					<view style="width: 100%; align-items: center; text-align: center; font-size: 35rpx; margin-bottom: 20rpx">
						<text :decode="true">{{ item.autor }}</text>
					</view>
					<video :src="baseURL + item.url" :id="'Video' + index" style="width: 90%; margin: auto" @play="videoPlay" />
				</view>
			</view>

			<view class="video" v-if="!isSpecial">
				<view v-for="(item, index) in news.detail" :key="index" style="margin: auto; width: 90%">
					<video
						style="width: 100%"
						:id="'Video' + index"
						:src="baseURL + item.video"
						:autoplay="false"
						controls
						:poster="baseURL + item.cover"
						@play="videoPlay"
					></video>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
import { onLoad } from '@dcloudio/uni-app';
import { getOneNew } from '@/api/cooperate';
import { ref } from 'vue';
const baseURL = ref(uni.getStorageSync('baseURL'));
const news = ref({});
const isSpecial = ref(false);
const playID = ref('');
onLoad((options) => {
	const query = {
		_id: options.id
	};
	getOneNew(query).then((res) => {
		news.value = res[0];
		if (news.value._id === '66d6b183f2949ce0c71f9374') {
			isSpecial.value = true;
		}
	});
});
const videoPlay = function (e) {
	// //停止正在播放的视频
	var videoContextPrev = wx.createVideoContext(playID.value);
	videoContextPrev.stop();
	playID.value = e.currentTarget.id;
	setTimeout(function () {
		//将点击视频进行播放
		var videoContext = wx.createVideoContext(playID.value);
		videoContext.play();
	}, 500);
};
const videos = ref([]);
const lunbo = ref([]);
videos.value = [
	{
		url: 'wuainin/2_3_chenggonganli/chucai/video/-1.mp4',
		title: '“出彩老玩童”文化艺术节活动视频',
		autor: '录像：卢国明&emsp;&emsp;制作：楚玉'
	},
	{
		url: 'wuainin/2_3_chenggonganli/chucai/video/-2.mp4',
		title: '我们是英雄城“出彩老玩童”幸福生活共缔造',
		autor: '录像：老来乐&emsp;&emsp;制作：楚玉'
	},
	{
		url: 'wuainin/2_3_chenggonganli/chucai/video/100.mp4',
		title: '一、合唱《龙的传人》《黄鹤楼》',
		autor: '演出团队：武汉吾爱您群星合唱团枫叶红艺术团\n&emsp;&emsp;录制：老来乐'
	},
	{
		url: 'wuainin/2_3_chenggonganli/chucai/video/2.mp4',
		title: '二、舞蹈《领航》',
		autor: '演出团队：武汉文工团&emsp;&emsp;录制：老来乐'
	},
	{
		url: 'wuainin/2_3_chenggonganli/chucai/video/3.mp4',
		title: '三、情景走秀《书香满中华》',
		autor: '演出团队：凤月舞秀艺术团&emsp;&emsp;录制：老来乐'
	},
	{
		url: 'wuainin/2_3_chenggonganli/chucai/video/4.mp4',
		title: '四、古典舞《七秀坊》',
		autor: '演出团队：济生社区京剧综艺学习班\n&emsp;&emsp;录制：老来乐'
	},
	{
		url: 'wuainin/2_3_chenggonganli/chucai/video/5.mp4',
		title: '五、葫芦丝演奏《情歌赛过春江水》',
		autor: '演出团队：武昌区吾爱您声乐班\n&emsp;&emsp;录制：老来乐'
	},
	{
		url: 'wuainin/2_3_chenggonganli/chucai/video/6.mp4',
		title: '六、新疆舞《沙雅麦西来甫》',
		autor: '演出团队：顶琇模特舞蹈艺术团舞悅金秋二队\n&emsp;&emsp;录制：老来乐'
	},
	{
		url: 'wuainin/2_3_chenggonganli/chucai/video/7.mp4',
		title: '七、时装旗袍秀《水墨中国》',
		autor: '演出团队：武汉木子艺术团&emsp;&emsp;录制：老来乐'
	},
	{
		url: 'wuainin/2_3_chenggonganli/chucai/video/8.mp4',
		title: '八、花鼓戏《刘海砍樵》',
		autor: '演出团队：武昌吾爱您声乐班&emsp;&emsp;录制：老来乐'
	},
	{
		url: 'wuainin/2_3_chenggonganli/chucai/video/9.mp4',
		title: '九、《花鼓灯》',
		autor: '演出团队：武汉文工团&emsp;&emsp;录制：老来乐'
	},
	{
		url: 'wuainin/2_3_chenggonganli/chucai/video/10.mp4',
		title: '十、模特秀《渔光曲》',
		autor: '演出团队：芳菲艺木团&emsp;&emsp;录制：老来乐'
	},
	{
		url: 'wuainin/2_3_chenggonganli/chucai/video/11.mp4',
		title: '十一、古典舞《知否知否》',
		autor: '演出团队：中国爱情诗刊湖北分会综合艺术团\n&emsp;&emsp;录制：老来乐'
	},
	{
		url: 'wuainin/2_3_chenggonganli/chucai/video/12.mp4',
		title: '十二、情景走秀 《小城故事》',
		autor: '演出团队：凤月舞秀艺术团&emsp;&emsp;录制：老来乐'
	},
	{
		url: 'wuainin/2_3_chenggonganli/chucai/video/13.mp4',
		title: '十三、表演唱《英雄赞歌》',
		autor: '演出团队：武汉红歌艺术团&emsp;&emsp;录制：老来乐'
	}
];

let arr = [];
for (let i = 1; i < 42; i++) {
	let temp = 'wuainin/2_3_chenggonganli/chucai/img/L' + i + '.jpg';
	arr.push(temp);
}
for (let i = 1; i < 26; i++) {
	let temp = 'wuainin/2_3_chenggonganli/chucai/img/LGM' + i + '.jpg';
	arr.push(temp);
}
lunbo.value = arr;
</script>

<style scoped lang="scss">
.bg {
	min-height: 100vh;
	width: 100%;
	margin: auto;
	display: flex;
	background-color: #f2f3f6;
	flex-direction: column;
	overflow-x: hidden;
}
.title {
	width: 80%;
	/* background-color: aqua; */
	margin-left: auto;
	margin-right: auto;
	font-size: 40rpx;
	margin-top: 30rpx;
	margin-bottom: 30rpx;
	letter-spacing: 7rpx;
	text-align: center;
	line-height: 70rpx;
}
.video {
	width: 100%;
	margin-top: 30rpx;
}
.videoPlay {
	position: absolute;
	/* top: 200rpx;
  left: 300rpx; */
	width: 100rpx;
	height: 100rpx;
	margin-top: -250rpx;
	/* align-items: center; */
	/* background-color: #FFFFFF; */
	padding-left: 250rpx;
	z-index: 100;
}
.lunbo {
	width: 90%;
	height: 420rpx;
	margin-left: auto;
	margin-right: auto;
	background-color: teal;
	border-radius: 30rpx;
	margin-top: 20rpx;
}
swiper {
	width: 100%;
	height: calc(82vw * 1080 / 1580);
	/* display: flex; */
	/* height: cacl(750rpx * 327 / 491); */
}
.swiper-item {
	width: 100%;
	height: 100%;
	background-color: saddlebrown;
	margin: auto;
	border-radius: 30rpx;
	background-position: center;
	background-size: cover;
	background-repeat: no-repeat;
}
.lunbo_words {
	background-color: rgb(48, 46, 46, 0.6);
	width: 100%;
	height: 50rpx;
	position: absolute;
	bottom: 0;
	color: #ffffffdc;
	font-size: 33rpx;
	border-radius: 0 0 30rpx 30rpx;
}
.title_bg {
	background-image: linear-gradient(to right, #c43125, #76170f);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	font-weight: 550;
}
</style>
