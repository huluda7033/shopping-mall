<template>
    <div class="overflow-hidden">
        <van-nav-bar title="标题" left-text="返回" left-arrow @click-left="onClickLeft" fixed />

        <div class="image">
            <img src="../assets/image/paofu.webp" alt="">
            <div class="page">
            </div>
            <span>1/5</span>
        </div>

        <div class="information">
            <div class="integral">{{ information.integral }}积分</div>
            <div class="name">{{ information.name }}</div>
            <div class="redBackground">
                <img src="../assets/image/11.png">
                <span>过滤率{{ information.rate }}%</span>
            </div>
        </div>

        <div class="br"></div>

        <div class="commodity">
            <span class="details">商品详情</span>
            <span class="name">医用口罩</span>
        </div>

        <div class="commodity">
            <span class="details">单&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;位</span>
            <span class="name">盒</span>
        </div>

        <div class="br"></div>

        <div class="evaluate">
            <div>
                <ul>
                    <li>评 论</li>
                    <li>查看全部 &gt;</li>
                </ul>
            </div>
            <div class="buttom">
                <div class="item" v-for=" item in evaluate" :key="item.name">
                    <img :src="item.background">
                    <span>{{ item.name }}</span>
                </div>
            </div>
        </div>

        <hr class="hr">

        <div class="head-portrait">
            <img class="qq" src="../assets/image/qq.jpg">
            <span class="name">手可摘星辰</span>
            <img class="star" src="../assets/image/五角星.png" alt="">
        </div>

        <div class="speech">
            <p>密封性很好 正品无疑</p>
        </div>

        <div class="sample">
            <img src="../assets/image/paofu.webp" alt="">
            <img src="../assets/image/paofu.webp" alt="">
        </div>
        <div class="cart">
            <van-goods-action>
                <van-goods-action-icon icon="chat-o" text="客服" />
                <van-goods-action-icon icon="shop-o" text="店铺" />
                <van-goods-action-button color="#be99ff" type="warning" @click="addCart" text="加入购物车" />
                <van-goods-action-button color="#7232dd" type="danger" text="立即购买" />
            </van-goods-action>
        </div>

    </div>
</template>

<script>
export default {
    name: 'commodity',
    data() {
        return {
            information: {
                integral: 1000,
                name: '3M防护口罩 N95 一次性使用',
                rate: 98,
            },
            evaluate: [
                {
                    name: "全 部",
                    background: require('../assets/image/圆角矩形 2.png')
                },
                {
                    name: "好 评",
                    background: require('../assets/image/圆角矩形 2.png')
                },
                {
                    name: "差 评",
                    background: require('../assets/image/圆角矩形 2.png')
                },
            ],
            goodsInfo: {
                    goodsID: 3,
                    title: '大师级新鲜采摘水果蔬菜沙 拉调味料2',
                    pictureUrl: 'https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg',
                    isChecked: false,
                    number: 1,
                    unitPirce: 66
           }
        };
    },
    methods: {
        onClickLeft() {
            if (window.history.length <= 1) {

                this.$router.push({ path: '/' })

                return false

            } else {

                this.$router.go(-1)

            }
        },
        addCart() {
            const me = this;
           
            this.$toast.loading({
                message: '加载中...',
                forbidClick: true,
                duration: 3000,
                loadingType: 'spinner',
                onClose(){
                    // 获取商品列表
                    const cartList = localStorage.getItem('cartList') ? JSON.parse(localStorage.getItem('cartList')) : [];
                    // 寻找商品ID相同的商品
                    const findGoods = cartList?.find(n => n.goodsID == me.goodsInfo.goodsID);
                    if(findGoods){
                        // 找到数量就添加1个
                        findGoods.number ++;
                    }else{
                        // 没找到就添加本商品到购车数据中  并选中
                        cartList.push( {...me.goodsInfo, isChecked: true} );
                        // var t = me.goodsInfo
                        // var s = JSON.parse(JSON.stringify(me.goodsInfo))
                        // s.isChecked = true
                        // cartList.push(s)
                    }
                    // 更新
                    localStorage.setItem('cartList', JSON.stringify(cartList));

                    me.$toast.success('添加成功');
                }
            })
        }
    },
    mounted() {
        document.title = '商品详情';
        let id = this.$route.params.id;
        console.log('id是', id)
    }
}
</script>

<style lang="scss" scoped>
.image {
    position: relative;

    img {
        width: 100%;
        height: 320px;
    }

    .page {
        width: 32px;
        height: 15px;
        background-color: #000000;
        opacity: 0.4;
        border-radius: 8px;
        position: absolute;
        top: 300px;
        right: 23px;
    }

    span {
        font-size: 13px;
        font-family: Microsoft YaHei;
        font-weight: 300;
        color: #FFFFFF;
        position: absolute;
        top: 300px;
        right: 30px;
    }



}

.information {
    width: 100%;
    padding-left: 10px;

    .integral {
        margin-top: 10px;
        font-size: 21px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: #F53A1B;
    }

    .name {
        font-size: 16.5px;
        margin-top: 5px;
    }

    .redBackground {
        margin-top: 5px;
        position: relative;

        span {
            position: absolute;
            top: 0;
            left: 4px;
            font-size: 12px;
            font-family: Microsoft YaHei;
            font-weight: 400;
            color: #FFFFFF;
        }
    }
}

.br {
    width: 100%;
    height: 10px;
    background: #F4F4F4;
    margin-top: 10px;
}

.commodity {
    padding-left: 10px;
    margin-top: 10px;

    .details {
        font-size: 15px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: #858585;
    }

    .name {
        margin-left: 30px;
    }
}

.evaluate {
    padding-left: 10px;

    ul {
        margin-top: 5px;
        display: flex;

        :nth-child(1) {
            flex: 1;
        }

        :nth-child(2) {
            padding-right: 10px;
            font-size: 15px;
            font-family: Microsoft YaHei;
            font-weight: 400;
            color: #F53A1B;
        }

    }

    .buttom {
        margin-top: 10px;

        display: flex;

        .item {
            margin-right: 10px;
            position: relative;
        }

        span {
            position: absolute;
            top: 0;
            left: 10px;

        }
    }
}

.hr {
    width: calc(100% - 20px);
    height: 1;
    margin: 0 auto;
    margin-top: 10px;
}

.head-portrait {
    padding-left: 10px;
    position: relative;

    .qq {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        margin-top: 12px;

    }

    span {
        font-size: 15px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: #333333;
        line-height: 18px;
        position: absolute;
        top: 19px;
        left: 70px;
    }

    .star {
        position: absolute;
        left: 69px;
        bottom: 12px;
    }




}

.speech {
    padding-left: 10px;
    font-size: 15px;
    font-family: Microsoft YaHei;
    font-weight: 400;
    color: #333333;
    line-height: 18px;
}

.sample {
    padding-left: 10px;

    img {
        width: 99px;
        height: 99px;
        border-radius: 6px;
        margin-right: 20px;
    }
}

.cart {
    margin-bottom: 60px;

    .van-goods-action {
        z-index: 10;
    }

}
</style>