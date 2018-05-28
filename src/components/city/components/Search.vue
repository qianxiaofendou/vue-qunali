<template>
    <div>
        <div class="search" ref="search">
            <input class="search-input" v-model="keyword" type="text" placeholder="请输入城市名字或拼音">
        </div>
        <div class="search-content" v-show="keyword" ref="wrapper">
            <ul>
                <li v-for="item of list" class="search-item border-bottom" v-text="item.name" :key="item.id" @click="chooseCity(item.name)"></li>
                <li v-show="hasData" class="search-item border-bottom">没有查询到任何数据</li>
            </ul>
        </div>
    </div>
</template>

<script>
import { mapMutations } from 'vuex'
import Bscroll from 'better-scroll'
export default {
    name: 'CitySearch',
    props: {
        cities: {
            type: Object
        }
    },
    data () {
        return {
            keyword: '',
            list: [],
            timer: null
        }
    },
    computed: {
        hasData () {
            return !this.list.length
        }
    },
    activated () {
        // this.keyword = ''
        // this.list = []
    },
    methods: {
        chooseCity (city) {
            this.changeCity(city)
            this.$router.push('/')
        },
        ...mapMutations(['changeCity'])
    },
    mounted () {
        this.scroll = new Bscroll(this.$refs.wrapper)
    },
    watch: {
        keyword () {
            if (this.timer) {
                clearTimeout(this.timer)
            }
            if (!this.keyword) {
                this.list = []
                return
            }

            this.timer = setTimeout(() => {
                let result = []
                for (let i in this.cities) {
                    this.cities[i].forEach(item => {
                        if (item.spell.indexOf(this.keyword) > -1 || item.name.indexOf(this.keyword) > -1) {
                            result.push(item)
                        }
                    })
                }
                this.list = result
            }, 16)
        }
    }
}
</script>

<style lang="stylus" scoped>
  @import '~style/varibles.styl'
  .search
    height: .72rem
    padding: 0 .1rem
    background: $bgColor
    .search-input
      box-sizing: border-box
      width: 100%
      height: .62rem
      padding: 0 .1rem
      line-height: .62rem
      text-align: center
      border-radius: .06rem
      color: #666
  .search-content
    z-index: 1
    overflow: hidden
    position: absolute
    top: 1.58rem
    left: 0
    right: 0
    bottom: 0
    background: #eee
    .search-item
      line-height: .62rem
      padding-left: .2rem
      background: #fff
      color: #666
</style>
