<template>
    <div class="container">
        <Header></Header>
        <slider-pic :list="swiperList"></slider-pic>
        <icons :list="iconList"></icons>
        <hot-recomment :list="recommendList"></hot-recomment>
        <like-list :list="likeList"></like-list>
        <home-weekend :list="weekendList"></home-weekend>
    </div>
</template>

<script>
import Header from './components/Header'
import SliderPic from './components/sliderPic'
import Icons from './components/icons'
import HotRecomment from './components/HotRecomment'
import LikeList from './components/LikeList'
import HomeWeekend from './components/Weekend'
import axios from 'axios'
export default {
    name: 'Home',
    data () {
        return {
            swiperList: [],
            iconList: [],
            recommendList: [],
            likeList: [],
            weekendList: []
        }
    },
    components: {
        Header,
        SliderPic,
        Icons,
        HotRecomment,
        LikeList,
        HomeWeekend
    },
    methods: {
        getData () {
            axios.get('/api/index.json').then(this.getHomeInfo)
        },
        getHomeInfo (res) {
            if (res && res.data && res.data) {
                let data = res.data.data
                this.swiperList = data.swiperList
                this.iconList = data.iconList
                this.recommendList = data.recommendList
                this.likeList = data.likeList
                this.weekendList = data.weekendList
            }
        }
    },
    mounted () {
        this.getData()
        // console.log(this.swiperList)
    }
}
</script>

<style lang="stylus" scoped>
    .container
        background: #f5f5f5
</style>
