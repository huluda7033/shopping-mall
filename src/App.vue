<template>
	<div id="app">
		<div class="home-header flex-row-center">
			<div class="location flex-row-center">
				<i class="iconfont icondingweiweizhi"></i>
				<span>{{location}}</span>
			</div>
			<div class="search-bar flex-row-center">
				<i class="iconfont iconsousuo"></i>
				<input type="text" v-model="searchText" :placeholder="placeholder">
			</div>
		</div>
		<div class="relative">
			<van-tabs v-model="active" swipeable animated>
						<van-tab v-for="(category, index) in categoryList" :title="category" :key="index" class="tab">
							{{ category }}
						</van-tab>
					</van-tabs>

					<van-swipe class="swipe" :autoplay="3000" indicator-color="white">
						<van-swipe-item>
							<img src="./assets/image/share.png" alt="">
						</van-swipe-item>
					</van-swipe>
		</div>
		
	</div>
</template>

<script>
export default {
	name: 'App',
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
			] 
		}
	},
	
	methods: {
		onClickLeft() {
			console.log('点击了返回')
		},
		onClickRight() {
			console.log('点击了确认')
		},
		onClickIcon() {
			console.log('点击了图标')
		},
		onClickButton() {
			console.log('点击了按钮')
		}
	},
	mounted() {
		document.title = '积分商城';
	}
}
</script>

<style lang="scss">
.home-header{
	height: 44px;
	margin: 20px 10px;
	.location{
		margin-right: 8px;
		.icondingweiweizhi{
			margin-right: 5px;
			color: red;
		}
	} 
	.search-bar{
		height: 44px;
		background: #F1F1F3;
		border: 1px solid #DBDBDB;
		border-radius: 15px;
		flex: 1;
		.iconsousuo{
			margin: 0 6px 0 18px;
		}
		input{
			border: none;
			background:transparent;
		}
	}
}

.tab{
	margin-top: 150px;
}

body .swipe{
	position: absolute;
	top: 60px;
	img{
		width: 100%;
	}
} 















#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	/* margin-top: 60px; */
}

.flex-row-center{
	display: flex;
	flex-direction: row;
	align-items: center;
}

.relative{
	position: relative;
}


.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
  font-size: 38px;
}
</style>
