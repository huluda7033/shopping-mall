<template>
    <div>
        <div class="header">
            <div class="right">
                <div class="right2"></div>
            </div>
            <div class="stick1"></div>
            <div class="stick2"></div>
            <div class="stick3"></div>
        </div>
        <div class="portrait">
            <img src="../assets/image/qq.jpg" alt="">
            <span class="name">{{account.nickname}}</span>
            <div class="card">
                <span class="iconfont iconwode"></span>
                <span class="name1">已实名</span>
            </div>
        </div>
        <div class="integral">
            <div class="integral-item">
                <span class="number">11458.00</span><br>
                <span class="name">积分</span>
            </div>
            <div class="integral-item">
                <span class="number">2388ml</span><br>
                <span class="name">酒池</span>
            </div>
        </div>
        <div class="order">
            <ul class="items">
                <li class="item1">我的订单</li>
                <li class="item2"></li>
                <li class="item3">查看我的订单 &gt;</li>
            </ul>
            <div class="orderBottom">
                <div class="evaluate" v-for="order in orders" :key="order.name">
                    <svg class="icon" aria-hidden="true">
                        <use :xlink:href="order.picture"></use>
                    </svg>
                    <div>
                        <span>{{ order.name }}</span>
                    </div>
                </div>
            </div>

        </div>
        <div class="img">
            <img src="../assets/image/share.png" alt="">
        </div>
        <div class="coupon">
            <div class="items">
                <div class="item" v-for="coupon in coupons" :key="coupon.name">
                    <span :class="coupon.picture"></span>
                    <div>
                        <span>{{ coupon.name }}</span>
                    </div>
                </div>



            </div>


        </div>
        <div class="function">
            <div class="title">
                <ul>
                    <li>常用功能</li>
                </ul>
            </div>
            <div class="functionButtom">
                <div class="functions" v-for="item in functions" :key="item.name">
                    <svg class="icon" aria-hidden="true">
                        <use :xlink:href="item.picture"></use>
                    </svg>
                    <div>
                        <span>{{ item.name }}</span>
                    </div>
                </div>
            </div>


        </div>

    </div>
</template>

<script>
export default {
    name: 'Me',
    data() {
        return {
            account: {
                wine: 11111,
                point: 20000,
                nickname: '手可宅星辰',
                isVerified: true
            },

            orders: [
                {
                    name: '待评价',
                    picture: '#iconhuabanfuben',
                },
                {
                    name: '待发货',
                    picture: '#icondaifukuan',
                },
                {
                    name: '已发货',
                    picture: '#iconyifahuo1',
                },
                {
                    name: '售后服务',
                    picture: '#icondingdan',
                }
            ],
            coupons: [
                {
                    name: ' 优惠卷',
                    picture: 'iconfont iconyouhuiquan2'
                },
                {
                    name: '已购卡卷',
                    picture: 'iconfont iconyouhuiquan1'
                },
                {
                    name: '邀请收益',
                    picture: 'iconfont iconshouyi'
                },
                {
                    name: '邀请人数',
                    picture: 'iconfont iconyaoqing'
                },
            ],
            functions: [
                {
                    name: '邀请有礼',
                    picture: '#iconrenshu',
                },
                {
                    name: '联系客服',
                    picture: '#iconkefu',
                },
            ]


        }
    },
    mounted() {
        document.title = '个人中心'
    },

}
</script>

<style lang="scss" scoped>
.header {
    width: 100%;
    height: 156px;
    background: #F1CCBD;
    position: relative;
    overflow: hidden;

    .title {
        font-size: 17px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: #000;
        text-align: center;
        margin-top: 20px;
        position: relative;
        z-index: 10;
    }

    .stick1 {
        width: 122px;
        height: 11px;
        background: #F1CCBD;
        box-shadow: 0px 0px 5px 0px rgba(251, 81, 56, 0.2800);
        position: absolute;
        top: 20px;
        right: 106px;
    }

    .right {
        width: 140px;
        height: 140px;
        background: #F1CCBD;
        box-shadow: -9px 5px 19px 1px rgba(251, 81, 56, 0.0800);
        border-radius: 50%;
        position: absolute;
        top: -24px;
        right: -23px;
        z-index: 9;

        .right2 {
            width: 110px;
            height: 110px;
            background: #F1CCBD;
            box-shadow: -9px 5px 19px 1px rgba(251, 81, 56, 0.0800);
            border-radius: 50%;
            position: absolute;
            top: 0;
            right: 0;

        }


    }
}

.portrait {
    position: relative;

    img {
        width: 75px;
        height: 75px;
        border-radius: 50%;
        position: absolute;
        top: -34px;
        left: 0;
    }

    .name {
        font-size: 17px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: #333333;
        position: absolute;
        top: -30px;
        left: 90px;
    }

    .card {
        height: 25px;
        background: #3997FF;
        border-radius: 11px;
        position: absolute;
        top: 5px;
        left: 90px;

        .iconwode {
            padding: 0 55px 0 5px;
            color: white;
        }

        .name1 {

            color: white;
            position: absolute;
            top: 3px;
            left: 30px;

        }
    }

}

.integral {
    width: calc(100% - 20px);
    height: 70px;
    margin: 0 auto;
    background: #FFFFFF;
    box-shadow: 0px 11px 18px 0px rgba(0, 0, 0, 0.1200);
    border-radius: 10px;
    margin-top: 50px;
    display: flex;

    .integral-item {
        width: 50%;
        text-align: center;
        margin-top: 16px;

        .number {
            font-size: 17px;
            font-family: Microsoft YaHei;
            font-weight: 400;
            color: #F53A1B;

        }

        .name {
            width: 38px;
            height: 17px;
            font-size: 17px;
            font-family: Microsoft YaHei;
            font-weight: 400;
            color: #333333;
        }



    }







}

.order {
    width: calc(100% - 20px);
    height: 117px;
    margin: 0 auto;
    background: #FFFFFF;
    box-shadow: 0px 11px 18px 0px rgba(0, 0, 0, 0.1200);
    border-radius: 10px;
    margin-top: 12px;

    .items {
        display: flex;

        .item1 {
            margin-top: 12px;
            margin-left: 12px;
            font-size: 17px;
            font-family: Microsoft YaHei;
            font-weight: 400;
            color: #333333;
        }

        .item2 {
            flex: 1;
            margin-top: 12px;
        }

        .item3 {
            margin-top: 12px;
            margin-right: 12px;
            font-size: 15px;
            font-family: Microsoft YaHei;
            font-weight: 400;
            color: #333333;
        }
    }

    .orderBottom {
        display: flex;
        margin-top: 10px;

        .evaluate {
            width: 25%;
            text-align: center;
        }
    }
}

.img {
    margin-top: 12px;

    img {
        width: 100%;
        height: 107px;
    }
}

.coupon {
    width: calc(100% - 20px);
    height: 84px;
    margin: 0 auto;
    background: #FFFFFF;
    box-shadow: 0px 11px 18px 0px rgba(0, 0, 0, 0.1200);
    border-radius: 10px;
    margin-top: 12px;

    .items {
        width: 100%;
        display: flex;

        .item {
            margin-top: 12px;
            width: 25%;
            position: relative;
            text-align: center;

            .iconfont {
                font-size: 35px;
            }

        }
    }
}

.function {
    width: calc(100% - 20px);
    height: 117px;
    margin: 0 auto;
    margin-bottom: 80px;
    margin-top: 12px;
    background: #FFFFFF;
    box-shadow: 0px 11px 18px 0px rgba(0, 0, 0, 0.1200);
    border-radius: 10px;

    .title {
        ul {
            display: flex;

            li {
                font-size: 17px;
                font-family: Microsoft YaHei;
                font-weight: 400;
                color: #333333;
                margin-top: 16px;
                margin-left: 12px;
            }

        }

    }

    .functionButtom {
        display: flex;
        text-align: center;

        .functions {
            margin-left: 16px;
        }
    }

}
</style>