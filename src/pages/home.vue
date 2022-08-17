<template>
	<div>
		<div class="home-header flex-row-center">
			<div class="location flex-row-center">
				<i class="iconfont icondingweiweizhi"></i>
				<span>{{ location }}</span>
			</div>
			<div class="search-bar flex-row-center">
				<i class="iconfont iconsousuo"></i>
				<input type="text" v-model="searchText" :placeholder="placeholder">
			</div>
		</div>
		<div class="relative">
			<van-tabs v-model="active" animated>
				<van-tab v-for="(category, index) in categoryList" :title="category" :key="index" class="tab">
					<ul class="flex-row-center">
						<li>
							<svg class="icon" aria-hidden="true">
								<use xlink:href="#iconyinliao1"></use>
							</svg>
							<span>快速餐食</span>
						</li>
						<li>
							<svg class="icon" aria-hidden="true">
								<use xlink:href="#iconcantingtuijian"></use>
							</svg>
							<span>网红餐厅</span>
						</li>
						<li>
							<svg class="icon" aria-hidden="true">
								<use xlink:href="#iconrestaurant"></use>
							</svg>
							<span>精致西餐</span>
						</li>
						<li>
							<svg class="icon" aria-hidden="true">
								<use xlink:href="#iconhuoguo"></use>
							</svg>
							<span>地域特色</span>
						</li>
						<li>
							<svg class="icon" aria-hidden="true">
								<use xlink:href="#iconyinliao"></use>
							</svg>
							<span>人气饮品</span>
						</li>
					</ul>
					<div class="card">
						<p>热门推荐</p>
						<div class="flex-row-center overflow-auto card-content">
							<div class="store" v-for="goods in recommendList" :key="goods.name">
								<img :src="goods.pictureUrl" alt="">
								<div class="goods-info">
									<span class="goods-name">{{goods.name}}</span> 
									<span> {{ transferMile(goods.distance)   }} </span> 
								</div>
								<span class="price">人均¥{{goods.price}}</span>
							</div>
							
						</div>
					</div>
					<div class="merchant-list">
						<div class="flex-row-center">
							<span class="title">商品列表</span>
							<span class="sort">默认排序</span>
						</div>

						<van-grid :column-num="2" :border="false">
							<van-grid-item v-for="goods in goodsList" :key="goods.name">
								<div class="item">
									<img :src="goods.pictureUrl">
									<p>{{goods.name}}</p>
									<span class="price">人均¥{{goods.price}}</span>
									<span class="distance">{{ transferMile(goods.distance)}}</span>
								</div>
							</van-grid-item>
						</van-grid>
					</div>
				</van-tab>
			</van-tabs>

			<van-swipe class="swipe" :autoplay="3000" indicator-color="white">
				<van-swipe-item>
					<img src="../assets/image/share.png">
				</van-swipe-item>
			</van-swipe>
			<!-- 底部 -->
			
			
		</div>
		<!-- <van-tabbar >
				<van-tabbar-item icon="home-o">本地生活</van-tabbar-item>
				<van-tabbar-item icon="search">购物</van-tabbar-item>
				<van-tabbar-item icon="friends-o">订单</van-tabbar-item>
				<van-tabbar-item icon="setting-o">我的</van-tabbar-item>
		</van-tabbar> -->

	</div>
</template>

<script>
export default {
	name: 'Home',
	data() {
		return {
			searchText: '',
			location: '苏州',
			placeholder: '请输入搜索内容',

			active: 0,
			categoryList: [
				'美食餐饮',
				'休闲娱乐',
				'本地旅游',
				'服务'
			],
			// 推荐列表
			recommendList: [
				{
					name: '新石器烤肉',
					distance: 800,
					price: 125,
					pictureUrl: require('../assets/image/xinshiqi.webp')
				},
				{
					name: '新石器烤肉1',
					distance: 1600,
					price: 125,
					pictureUrl: require('../assets/image/xinshiqi.webp')
				},
				{
					name: '新石器烤肉2',
					distance: 5800,
					price: 125,
					pictureUrl: require('../assets/image/xinshiqi.webp')
				},

			],
			goodsList: [
				{
					name:'西树泡芙',
					price:33,
					distance:800,
					pictureUrl: require('../assets/image/paofu.webp')
				},
				{
					name:'西树泡芙1',
					price:33,
					distance:800,
					pictureUrl: require('../assets/image/paofu.webp'),
				},
				{
					name:'西树泡芙2',
					price:33,
					distance:800,
					pictureUrl: require('../assets/image/paofu.webp'),
				},
				{
					name:'西树泡芙3',
					price:33,
					distance:800,
					pictureUrl: require('../assets/image/paofu.webp'),
				},
			]
		}
	},

	methods: {

		transferMile(distance){
			if(!distance || distance < 1000){
				return '<1km'
			}else{
				return Math.round(distance/1000) + 'km'
			}
		}
	},
	mounted() {
		document.title = '积分商城';
	}
}
</script>

<style lang="scss" scoped>
.home-header {
	height: 44px;
	margin: 20px 10px;

	.location {
		margin-right: 8px;

		.icondingweiweizhi {
			margin-right: 5px;
			color: red;
		}
	}

	.search-bar {
		height: 44px;
		background: #F1F1F3;
		border: 1px solid #DBDBDB;
		border-radius: 15px;
		flex: 1;

		.iconsousuo {
			margin: 0 6px 0 18px;
		}

		input {
			border: none;
			background: transparent;
		}
	}
}


.tab {
	margin-top: 150px;

	ul {
		span {
			font-size: 12px;
			margin-left: 12px;
		}
	}

	.icon {
		font-size: 36px;
		margin-left: 18px;
		margin-right: 18px;
	}

	.card {
		width: calc(100% - 20px);
		background: #FFFFFF;
		box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.0700);
		border-radius: 20px;
		margin: 10px auto;
		overflow: hidden;


		p {
			margin-left: 20px;
			font-size: 17px;
			font-family: Microsoft YaHei;
			font-weight: 400;
			color: #D42216;
		}

		.card-content{
			   &::-webkit-scrollbar { display: none; }
			   -webkit-overflow-scrolling: touch;
		}

		.store {
			width: 40%;
			display: flex;
			flex-direction: column;
			align-items: center;
			flex-shrink: 0; // flex 布局 设置width 不生效的时候 需要设置这个属性 不然内容超出宽度会被压缩
			padding: 0 20px;
			box-sizing: border-box; //内容会被 padding撑开时 设置这个属性可以不被撑开

			img {
				width: 100px;
				height: 93px;
			}

			.goods-info{
				width: 100%;
				display: flex;
				align-items: center;
				justify-content: space-between;
			}

			span {
				font-size: 13px;
				font-family: Microsoft YaHei;
				font-weight: 400;
				color: #333333;

				i {
					font-size: 12px;
					font-style: normal;
				}
			}

			.price {
				font-size: 13px;
				font-family: Microsoft YaHei;
				font-weight: 400;
				color: #F53A1B;
				display: flex;
				margin-top: 10px;
				width: 100%; // 和父元素一样宽 
				// padding: 0 12px; // 保持一定间距
				box-sizing: border-box; // 不被padding 撑开
				margin-bottom: 10px;
			}
		}
	}

	.merchant-list {
		width: calc(100% - 20px);
		background: #FFFFFF;
		box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.0700);
		border-radius: 20px;
		margin-top: 31px;
		margin-left: 10px;

		.title {
			font-size: 17px;
			font-family: Microsoft YaHei;
			font-weight: 400;
			color: #D42216;
			display: inline-block;
			margin-left: 19px;
		}

		.sort {
			font-size: 13px;
			font-family: Microsoft YaHei;
			font-weight: 600;
			color: #333333;
			display: inline-block;
			padding-left: 190px;
		}

		.items {
			display: flex;
			flex-wrap: wrap;
		}

		.item {
			margin-left: 20px;

			img {
				width: 146px;
				height: 146px;
				border-radius: 10px;
			}

			p {
				height: 0;
				font-size: 17px;
				font-family: Microsoft YaHei;
				font-weight: 400;
				color: #333333;
				margin-top: 5px;
			}

			span {
				margin-top: 10px;
				display: inline-block;
			}

			.price {
				font-size: 13px;
				font-family: Microsoft YaHei;
				font-weight: 300;
				color: #F53A1B;
			}

			.distance {
				margin-left: 53px;
				font-size: 13px;
				font-family: Microsoft YaHei;
				font-weight: 300;
				color: #333333;
			}
		}




	}
	
	





}
.relative{
		margin-bottom: 75px;
	}

body .swipe {
	position: absolute;
	top: 60px;

	img {
		width: 100%;
	}
}
</style>
