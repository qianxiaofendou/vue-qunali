<template>
    <div>
        <div class="banner">
            <img  @click="showSlide" class="banner-img" src="http://img1.qunarzz.com/sight/p0/1607/7c/7cda8b6782dabd80b4.img.jpg_600x330_8572a930.jpg" alt="">
            <div class="banner-info">上海迪士尼乐园</div>
            <div class="banner-icon"><span class="iconfont pic-icon">&#xe612;</span>{{list.length}}</div>
        </div>
        <fade-transition>
            <div class="gallary" v-show="showGallary" @click="hideSlide">
                <div class="wrapper" v-show="showGallary">
                    <slide :sliderOptions="sliderOptions" v-if="list.length" ref='slide'>
                        <div v-for="(item, index) in list" :key="index">
                            <img class="swiper-img" :src="item" />
                        </div>
                    </slide>
                </div>
            </div>
        </fade-transition>
    </div>
</template>

<script>
import Slide from 'common/slide/slide'
import FadeTransition from 'common/transition/FadeTransition'
export default {
    name: 'DetailBanner',
    props: {
        list: {
            type: Array,
            defaultValue: []
        }
    },
    components: {
        FadeTransition,
        Slide
    },
    data () {
        return {
            sliderOptions: {
                autoPlay: false,
                paginationType: 'fraction'
            },
            showGallary: false
        }
    },
    methods: {
        showSlide () {
            this.showGallary = true
        },
        hideSlide () {
            this.showGallary = false
        }
    },
    watch: {
        showGallary () {
            // 当轮播重新展示的时候，重新计算容器宽度进行初始化
            if (this.showGallary === true) {
                this.$refs.slide.update()
            }
        }
    }
}
</script>

<style lang="stylus" scoped>
    .gallary >>> .swiper-container
        overflow: inherit
    .gallary >>> .pagination-footer
        bottom: -1rem !important
    .banner
        position: relative
        font-size: .38rem
        color: #fff
        .banner-img
            width: 100%
        .banner-info
            position: absolute
            right: .2rem
            bottom: .36rem
            left: .2rem
            min-height: .4rem
        .banner-icon
            position: absolute
            left: .2rem
            bottom: .86rem
            width: 1.2rem
            height: .4rem
            background: rgba(0, 0, 0, .5)
            font-size: .24rem
            color: #fff
            line-height: .4rem
            text-align: center
            .pic-icon
                font-size: .28rem
                margin-right: .18rem
    .gallary
        position: fixed
        top: 0
        left: 0
        right: 0
        bottom: 0
        display: flex
        flex-direction: column
        justify-content: center
        text-align: center
        background: #000
        z-index: 50
        .wrapper
            .swiper-img
                width: 100%
</style>
