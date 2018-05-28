<template>
    <div class="header">
        <router-link tag="div" to="/" class="header-left">
            <div class="iconfont back-icon">&#xe670;</div>
        </router-link>
        <div class="header-middle">
            城市选择
        </div>
    </div>
</template>

<script>
export default {
    name: 'CityHeader'
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
            text-align: center
            height: .64rem
            line-height: .64rem
            margin: .12rem .5rem 0 0
            padding-left: .2rem
            color: #fff
</style>
