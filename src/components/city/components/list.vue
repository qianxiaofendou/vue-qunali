<template>
    <div class="list" ref="wrapper">
        <div>
            <div class="area">
                <h2 class="area-title">热门城市</h2>
                <ul class="area-content hot-content">
                    <li v-for="(item, index) in hotCities" class="area-item" :class="{'border-right':(index + 1 ) % 3 !== 0}" v-text="item.name" :key="item.id" @click="chooseCity(item.name)"></li>
                </ul>
            </div>
            <div class="area" v-for="(item, key) of cities" :key="key" :ref="key">
                <h2 class="area-title" v-text="key"></h2>
                <ul class="area-content all-content" >
                    <li v-for="(c, index) of item" class="area-item" :class="{'border-right':(index + 1 ) % 4 !== 0}" v-text="c.name" :key="c.id" @click="chooseCity(c.name)"></li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import Bscroll from 'better-scroll'
import { mapState, mapMutations } from 'vuex'
export default {
    name: 'CityList',
    props: {
        hotCities: Array,
        cities: Object,
        letter: String
    },
    mounted () {
        this.scroll = new Bscroll(this.$refs.wrapper)
    },
    methods: {
        chooseCity (city) {
            this.changeCity(city)
            this.$router.push('/')
        },
        ...mapMutations(['changeCity'])
    },
    computed: {
        ...mapState({
            city: 'city'
        })
    },
    watch: {
        letter () {
            if (this.letter) {
                const element = this.$refs[this.letter][0]
                this.scroll.scrollToElement(element)
            }
        }
    }
}
</script>

<style lang="stylus" scoped>
    .border-right
        &:before
            border-color: #ddd
    .list
        position: absolute
        top: 1.58rem
        left: 0
        right: 0
        bottom: 0
        overflow: hidden
        .area
            .area-title
                height: .7rem
                line-height: .7rem
                background: #f5f5f5
                padding-left: .3rem
                font-size: .24rem
            .area-content
                z-index: 0
                position: relative
                overflow: hidden
                // &:before
                //     content: ' '
                //     position: absolute
                //     width: 25%
                //     height: 100%
                //     left: 25%
                //     border-left: .02rem solid #ddd
                //     border-right: .02rem solid #ddd
                // &:after
                //     content: ' '
                //     position: absolute
                //     width: 10%
                //     height: 100%
                //     left: 75%
                //     border-left: .02rem solid #ddd
                //     border-right: 0
                .area-item
                    z-index: 200
                    width: 33.33%
                    height: .9rem
                    line-height: .9rem
                    text-align: center
                    border-bottom: .0005rem solid #ddd
                    margin-bottom: -1px
                    float: left
            .hot-content
                // &:before
                //     width: 33.33%
                //     left: 33.33%
                // &:after
                //     border: 0
            .all-content
                .area-item
                    width: 25%
                    z-index: 200
</style>
