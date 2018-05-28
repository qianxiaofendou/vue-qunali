<template>
    <div>
        <router-link tag='div' to='/' class="back" v-show="showBack"><span class="iconfont back-icon">&#xe670;</span></router-link>
        <div class="header" v-show="!showBack" :style="opacityObj">
            <router-link tag="div" to="/" class="header-left">
                <div class="iconfont back-icon">&#xe670;</div>
            </router-link>
            <div class="header-middle">
                上海迪士尼乐园
            </div>
        </div>
        <div style="height:800px"></div>
    </div>
</template>

<script>
export default {
    name: 'DetailHeader',
    data () {
        return {
            showBack: true,
            opacityObj: {
                opacity: 0
            }
        }
    },
    methods: {
        dealScroll (e) {
            let top = document.documentElement.scrollTop
            if (top > 60) {
                let opacity = top / 100
                opacity = opacity > 1 ? 1 : opacity
                this.opacityObj = { opacity }
                this.showBack = false
            } else {
                this.showBack = true
            }
        }
    },
    mounted () {
        window.addEventListener('scroll', this.dealScroll)
    },
    destroyed () {
        window.removeEventListener('scroll', this.dealScroll)
    }
}
</script>

<style lang="stylus" scoped>
    @import '~style/varibles.styl'
    .back
        position: absolute
        top: .2rem
        left: .1rem
        width: .72rem
        height: .72rem
        line-height: .72rem
        text-align: center
        background: rgba(0, 0, 0, .5)
        color: #ffffff
        border-radius: 50%
        span
            font-size: .36rem
    .header
        position: fixed
        top: 0
        left: 0
        right: 0
        line-height: $headerHeight
        background: $bgColor
        display: flex
        color: #fff
        .header-left
            width: .64rem
            text-align: center
            .back-icon
                font-size: .4rem
        .header-middle
            flex: 1
            text-align: center
            height: .64rem
            line-height: .64rem
            margin: .12rem .5rem 0 0
            padding-left: .2rem
            color: #fff
</style>
