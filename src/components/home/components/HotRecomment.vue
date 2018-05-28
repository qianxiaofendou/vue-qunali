<template>
    <div class="wrapper">
        <div class="">
            <div class="title-wrapper"><img class="title-icon" src="http://img1.qunarzz.com/piao/fusion/1711/16/bfbb9874e8f11402.png"/><span class="title">本周热本推荐</span></div>
            <ul class="content">
                <router-link tag='li' :to="'/detail/' + item.id" class="content-item" v-for="item in list" :key="item.id">
                    <img class="item-img" :src="item.imgUrl">
                    <div class="item-name" v-text="item.title"></div>
                    <div class="item-price" v-show="item.price"><span>￥{{item.price}}</span>起</div>
                </router-link>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HotRecomment',
    props: {
        list: {
            type: Array,
            defaultValue: []
        }
    }
}
</script>

<style lang="stylus" scoped>
    .wrapper
        // margin-top: 1rem
        background: #fff
        .title-wrapper
            padding: .24rem 0 .26rem .2rem
            .title-icon
                display: inline-block
                overflow: hidden
                width: .3rem
                height: .3rem
                vertical-align: top
                margin-right: .08rem
            .title
                display: inline-block
                font-size: .32rem
                height: .44rem
                line-height: .44rem
                color: #212121
        .content
            padding-left: .2rem
            overflow-x: auto
            white-space: nowrap
            .content-item
                display: inline-block
                width: 2rem
                height: 3.1rem
                margin-right: .12rem
                text-align: center
                .item-img
                    width: 100%
                .item-name
                    line-height: .32rem
                    margin-top: .12rem
                    font-size: .24rem
                .item-price
                    line-height: .36rem
                    font-size: .24rem
                    span
                        color: #ff8300
                        font-size: .28rem
</style>
