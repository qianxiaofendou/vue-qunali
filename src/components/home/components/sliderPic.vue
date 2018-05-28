<template>
    <div class="wrapper">
        <!-- <swiper :options="swiperOption" v-if="showSwiper" ref="swiperWrap">
            <swiper-slide v-for="item of list" :key="item.id">
                <img class="swiper-img" :src="item.imgUrl" />
            </swiper-slide>
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper> -->
        <div class="content">
            <slide v-if="showSwiper" ref="swiperWrap" :sliderOptions="sliderOptions">
                <div v-for="item of list" :key="item.id">
                    <img class="swiper-img" :src="item.imgUrl" >
                </div>
            </slide>
        </div>
    </div>
</template>

<script>
import Slide from 'common/slide/slide'
export default {
    name: 'HomeSliderPic',
    props: {
        list: {
            type: Array
        }
    },
    components: {
        Slide
    },
    data () {
        return {
            swiperOption: {
                pagination: '.swiper-pagination',
                autoplay: 2000,
                loop: true,
                observeParents: true,
                observer: true
            },
            sliderOptions: {
                interval: 2000
            }
        }
    },
    mounted () {
        // console.log(this.list)
    },
    actived () {
        // if (this.swiper) {
        //     this.swiper.update()
        // }
    },
    deactivated () {
        // if (this.swiper) {
        //     this.swiper.stopAutoplay()
        // }
    },
    computed: {
        showSwiper () {
            return this.list.length
        }
        // swiper () {
        //     return this.$refs.swiperWrap
        // }
    }
}
</script>

<style lang="stylus" scoped>
    .wrapper >>> .swiper-pagination-bullet-active
        background: #fff
    .wrapper
        height: 0
        width: 100%
        overflow: hidden
        background: #ccc
        padding-bottom: 31.25%
        position: relative
        .swiper-img
            width: 100%
</style>
