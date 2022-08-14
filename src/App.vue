<template>
	<div id="app">
		<!-- 顶部 -->
		<van-nav-bar title="标题" left-text="返回" right-text="按钮" left-arrow @click-left="onClickLeft"
			@click-right="onClickRight" />
		<!-- 轮播 -->
		<van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
			<van-swipe-item>1</van-swipe-item>
			<van-swipe-item>2</van-swipe-item>
			<van-swipe-item>3</van-swipe-item>
			<van-swipe-item>4</van-swipe-item>
		</van-swipe>
		<!-- 选项卡 -->
		<van-tabs v-model="active" animated>
			<van-tab v-for="index in 4" :title="'选项 ' + index" :key="index">
				内容 {{ index }}
				<img alt="Vue logo" src="./assets/logo.png">
			</van-tab>
		</van-tabs>
		<!-- <img alt="Vue logo" src="./assets/logo.png"> -->
		<!-- 底部确认区 -->
		<van-goods-action>
			<van-goods-action-icon icon="chat-o" text="客服" dot />
			<van-goods-action-icon icon="cart-o" text="购物车" :badge="cartTotal" />
			<van-goods-action-icon icon="shop-o" text="店铺" badge="12" />
			<van-goods-action-button type="warning" text="加入购物车" />
			<van-goods-action-button type="danger" text="立即购买" />
		</van-goods-action>
		<input v-model="msg">
		<br/>
		{{msg}}
	</div>
</template>

<script>


export default {
	name: 'App',
	data() {
		return {
			cartTotal: 50,
			active: 0,
			msg: ''
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
		console.log(1213)
		setTimeout(()=> {
			this.active = 2
		}, 5000)
	}
}
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	/* margin-top: 60px; */
}

.my-swipe .van-swipe-item {
	color: #fff;
	font-size: 20px;
	line-height: 150px;
	text-align: center;
	background-color: #39a9ed;
}
</style>
