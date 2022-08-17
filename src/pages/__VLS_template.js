export default (await import('vue')).defineComponent({
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
name: '西树泡芙',
price: 33,
distance: 800,
pictureUrl: require('../assets/image/paofu.webp')
},
{
name: '西树泡芙1',
price: 33,
distance: 800,
pictureUrl: require('../assets/image/paofu.webp'),
},
{
name: '西树泡芙2',
price: 33,
distance: 800,
pictureUrl: require('../assets/image/paofu.webp'),
},
{
name: '西树泡芙3',
price: 33,
distance: 800,
pictureUrl: require('../assets/image/paofu.webp'),
},
]
};
},

methods: {
transferMile(distance) {
if (!distance || distance < 1000) {
return '<1km';
} else {
return Math.round(distance / 1000) + 'km';
}
}
},
mounted() {
document.title = '积分商城';
}
});
const __VLS_template = () => ({});
