<template>
    <div class="header">
        <div class="header-left">
            <div class="iconfont back-icon">&#xe670;</div>
        </div>
        <div class="header-middle">
            <span class="iconfont">&#xe632;</span>
            <input class="header-input" placeholder="输入城市/景点/游玩主题"/>
        </div>
        <router-link to='/city'>
            <div class="header-right">
                {{city}}
                <span class="iconfont arrow-icon">&#xe6aa;</span>
            </div>
        </router-link>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    name: 'HomeHeader',
    computed: {
        ...mapState(['city'])
    }
}
</script>

<style lang="stylus" scoped>
    @import '~style/varibles.styl'
    .header
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
            height: .64rem
            line-height: .64rem
            margin: .12rem .2rem 0 .2rem
            padding-left: .2rem
            border-radius: .1rem
            color: #ccc
            background: #fff
            .header-input
                border: none
                margin-bottom: .1rem
                width: 90%
        .header-right
            min-width: 1.04rem
            text-align: center
            padding-right: .1rem
            color: #fff
            .arrow-icon
                font-size: .24rem
</style>
