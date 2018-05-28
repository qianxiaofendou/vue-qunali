<template>
    <div class="icons">
        <slide v-if="pages.length" ref="swiperWrap" :sliderOptions="sliderOptions">
            <div v-for="(page, index) of pages" :key="index">
                <div class="icon" v-for="item of page" :key="item.id" >
                    <router-link tag='div' :to="'/detail/' + item.id" class="icon-img">
                        <img class='icon-img-wrapper' :src='item.imgUrl' />
                    </router-link>
                    <p class="icon-desc">{{item.desc}}</p>
                </div>
            </div>
        </slide>
        <!-- <swiper :options="swiperOption">
            <swiper-slide v-for="(page, index) of pages" :key="index">
            </swiper-slide>
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper> -->
    </div>
</template>

<script>
import Slide from 'common/slide/slide'
export default {
    name: 'HomeIcons',
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
                pagination: '.swiper-pagination'
            },
            sliderOptions: {
                autoPlay: false
            }
        }
    },
    computed: {
        pages () {
            const pages = []
            this.list.forEach((item, index) => {
                const page = Math.floor(index / 8)
                if (!pages[page]) {
                    pages[page] = []
                }
                pages[page].push(item)
            })
            return pages
        }
    }
}
</script>

<style lang="stylus" scoped>
    // .icons >>> .swiper-pagination
    //     width: 100%
    //     margin-bottom: -.85rem
    //     .swiper-pagination-bullet
    //         margin-right: .05rem
    //     .swiper-pagination-bullet-active
    //         background: rgba(0,175,190,.8)
    .icons >>> .pagination-footer
        bottom: -.5rem !important
        .active
            background: rgba(0,175,190,.8) !important
    .icons
        background: #fff
        height: 4.3rem
        // padding-bottom: 50%
        .swiper-container
            overflow: inherit
        .icon
            // display: inline-block
            float: left
            width: 25%
            height: 25%
            // padding-bottom: 25%
            text-align: center
            .icon-img
                .icon-img-wrapper
                    width: 1.1rem
                    height: 1.1rem
                    margin-top: .3rem
            .icon-desc
                margin-top: .2rem
</style>
