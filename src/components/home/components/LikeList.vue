<template>
    <div class="wrapper">
        <div class="">
            <div class="title-wrapper"><img class="title-icon" src="http://img1.qunarzz.com/piao/fusion/1711/16/bfbb9874e8f11402.png"/><span class="title">本周热本推荐</span></div>
            <ul class="content">
                <router-link tag='li' :to="'/detail/' + item.id" class="content-item border-bottom" v-for="item in list" :key="item.id">
                    <div class="item-container">
                        <div class="item-img"><img class="img-icon" :src="item.imgUrl" :alt="item.title"></div>
                        <div class="info">
                            <div class="info-name" v-text="item.title"></div>
                            <div class="info-comment iconfont"><span>&#xe601;</span><span>&#xe601;</span><span>&#xe601;</span><span>&#xe601;</span><span>&#xe601;</span></div>
                            <div class="info-price" v-show="item.price"><span>￥{{item.price}}</span>起</div>
                            <div class="info-feature" v-show="item.feature">{{item.feature}}</div>
                        </div>
                    </div>
                </router-link>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'LikeList',
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
        background: #fff
        // margin-top: 1rem
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
            .content-item
                // display: inline-block
                // width: 2rem
                // height: 3.1rem
                // margin-right: .12rem
                overflow: hidden
                padding: .2rem 0
                .item-container
                    display: block
                    width: 100%
                    height: 100%
                    .item-img
                        float: left
                        width: 2rem
                        .img-icon
                            display: inline-block
                            width: 100%
                    .info
                        display: inline-block
                        padding-left: .22rem
                        .info-name
                            line-height: .44rem
                            height: .44rem
                            margin-top: .26rem
                            font-size: .32rem
                        .info-comment
                            margin-top: .14rem
                            height: .34rem
                            color: #ffb436
                            span
                                display: inline-block
                                margin-left: -.06rem
                        .info-price
                            margin-top: .22rem
                            line-height: .4rem
                            font-size: .24rem
                            span
                                color: #ff8300
                                font-size: .28rem
                        .info-feature
                            display: inline-block
                            margin-top: .48rem
                            margin-right: .24rem
                            color: #f55
                            font-size: .24rem
                            line-height: .34rem
</style>
