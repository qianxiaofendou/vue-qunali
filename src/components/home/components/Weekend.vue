<template>
    <div>
        <div class="title">周末去哪儿</div>
        <ul>
            <router-link tag='li' :to='"/detail/" + item.id'
              class="item border-bottom"
              v-for="item of list"
              :key="item.id"
            >
                <div class="item-img-wrapper">
                    <img class="item-img" :src="item.imgUrl" :alt="item.title" />
                </div>
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                </div>
            </router-link>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'HomeWeekend',
    props: {
        list: Array
    }
}
</script>

<style lang="stylus" scoped>
    @import '~style/mixins.styl'
    .title
        line-height: .8rem
        // background: #eee
        color: #212121
        text-indent: .2rem
    .item-img-wrapper
        overflow: hidden
        height: 0
        padding-bottom: 37.09%
        .item-img
            width: 100%
    .item
        background: #fff
        margin-bottom: .1rem
        .item-info
            padding: .2rem
            .item-title
                line-height: .54rem
                font-size: .28rem
                ellipsis()
            .item-desc
                font-size: .24rem
                line-height: .4rem
                color: #616161
                ellipsis()
</style>
