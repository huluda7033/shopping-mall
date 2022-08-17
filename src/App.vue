<template>
	<div>
		<router-view/> 
		
		<van-tabbar route>
				<van-tabbar-item icon="home-o" to="/">本地生活</van-tabbar-item>
				<van-tabbar-item icon="search" to="/cart">购物</van-tabbar-item>
				<van-tabbar-item icon="friends-o">订单</van-tabbar-item>
				<van-tabbar-item icon="setting-o" to="/me">我的</van-tabbar-item>
		</van-tabbar>

	</div>
</template>

<script>
export default {
	name: 'App',
	data() {
		return {
			
		}
	},

	methods: {

	},
	mounted() {
		document.title = '积分商城';
	}
}
</script>

<style lang="scss">
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
	/* margin-top: 60px; */
}

body .flex-row-center {
	display: flex;
	flex-direction: row;
	align-items: center;
}

.relative {
	position: relative;
}

.overflow-auto {
	overflow: auto;
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
