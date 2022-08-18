<template>
    <div class="container">
        <div class="header content flex-row-center">
            <div class="header-icon">
                <i class="iconfont icondizhi"></i>
            </div>
            <div class="header-address">苏州永旺梦乐城</div>
            <div class="header-edit">编辑</div>
        </div>
        <div class="content">
            <ul class="goods-list flex-column">
                <van-swipe-cell  v-for="(goods, index) in cartList" :key="index">
                    <li class="flex-row">
                        <van-icon class="flex-row-center" :class="{ checked: goods.isChecked }"
                            :name="goods.isChecked ? 'checked' : 'circle'" @click="toggle(goods)" />


                        <van-image class="image" width="100" height="100" radius="10" :src="goods.pictureUrl" />

                        <div class="goods-info">
                            <div class="goods-title">
                                {{ goods.title }}
                            </div>
                            <div class="goods-total-price">
                                <span class="total">总金额:￥{{ goods.unitPirce * goods.number }}</span>
                                <span class="border" @click="minus(goods)">-</span>
                                <span class="border">{{ goods.number }}</span>
                                <span class="border" @click="add(goods)">+</span>
                            </div>
                        </div>
                        <div class="unit-price">
                            <span class="unit">￥{{ goods.unitPirce }}</span>
                            <span class="number">x{{ goods.number }}</span>
                        </div>
                    </li>
                    <template #right>
                        <van-button square text="删除" type="danger" class="delete-button" />
                    </template>
                </van-swipe-cell>
            </ul>
        </div>
        <van-submit-bar :price="total" button-text="提交订单" @submit="onSubmit" :disabled="total == 0">
            <van-checkbox v-model="checkedAll" @click="toggleAll">全选</van-checkbox>
        </van-submit-bar>
    </div>
</template>

<script>

export default {
    name: 'Cart',
    data() {
        return {
            cartList: [],
            checkedAll: false
        }
    },
    methods: {
        init() {
            this.cartList = localStorage.getItem('cartList') ? JSON.parse(localStorage.getItem('cartList')) : [
                {
                    goodsID: 1,
                    title: '大师级新鲜采摘水果蔬菜沙 拉调味料',
                    pictureUrl: 'https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg',
                    isChecked: false,
                    number: 1,
                    unitPirce: 98
                },
                {
                    goodsID: 2,
                    title: '大师级新鲜采摘水果蔬菜沙 拉调味料1',
                    pictureUrl: 'https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg',
                    isChecked: false,
                    number: 1,
                    unitPirce: 18
                }
            ];
            localStorage.setItem('cartList', JSON.stringify(this.cartList));
        },
        minus(goods) {
            if (goods.number > 1) {
                goods.number--;
            }
        },
        add(goods) {
            if (goods.number < 99) {
                goods.number++;
            }
        },
        toggle(goods) {
            goods.isChecked = !goods.isChecked;
            // 去找列表里有没有没选中的  如果找到了说明没被全选   如果没有找到

            this.checkedAll = !this.cartList.find(n => !n.isChecked)
        },
        onSubmit() {

        },
        toggleAll() {
            this.cartList.forEach(n => {
                n.isChecked = this.checkedAll;
            })
        }
    },
    computed: {
        total() {
            let total = 0;
            this.cartList.forEach(n => {
                if (n.isChecked) {
                    total += n.unitPirce * n.number
                }
            })
            return total * 100;
        }
    },
    mounted() {
        document.title = '购物车';
        this.init()

    },
}
</script>

<style lang="scss" scoped>
.container {
    background-color: #f0f2f5;
    min-height: 100vh;
    padding-bottom: 66px;
}

.content {
    margin-left: 10px;
    margin-right: 10px;
}

.header {
    height: 32px;
    padding-top: 10px;

    .header-address {
        flex: 1;
        font-size: 12.5px;
        margin-left: 6px;
    }

    .header-edit {
        font-size: 15px;
        margin-right: 12px;
    }
}

.goods-list {
    li {
        background-color: #fff;
        box-shadow: 0px 0px 5px 0px rgba(154, 154, 154, 0.06);
        border-radius: 10px;
        margin-top: 14px;
        padding: 12px;
        box-sizing: border-box;
        position: relative;

        .image {
            margin-left: 8px;
        }

        .checked {
            color: red;
        }

        .goods-info {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            flex: 1;

            .goods-title {
                width: 150px;
                font-size: 12.5px;
                margin-left: 10px;
            }

            .goods-total-price {
                display: flex;

                .total {
                    margin-right: 20px;
                    color: #EE2222;
                    flex: 1;
                    text-align: right;
                }

                .border {
                    width: 22px;
                    height: 21px;
                    box-sizing: border-box;
                    border: 1px solid #ccc;
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                }
            }

        }

        .unit-price {
            position: absolute;
            right: 18px;
            top: 16px;
            display: flex;
            flex-direction: column;
            align-items: flex-end;

            .unit {
                color: #333333;
                font-size: 14px;
                font-weight: Regular;
            }

            .number {
                color: #858585;
                font-size: 10px;
            }
        }
    }

}

.flex-column {
    display: flex;
    flex-direction: column;
}

.flex-row {
    display: flex;
    flex-direction: row;
}
</style>