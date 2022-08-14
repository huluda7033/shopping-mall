<template>
    <div class="hello">
        <div>{{ goodsList.length }}</div>
        <div v-for="(goods, index) in goodsList" :key="index" class="goods">
            {{ goods.name }}
        </div>
    </div>
</template>

<script>
export default {
    name: 'GoodsList',
    props: {
        title: String,
        goodsList: []
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
    margin: 40px 0 0;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: inline-block;
    margin: 0 10px;
}

a {
    color: #42b983;
}
</style>