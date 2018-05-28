<template>
    <div class="wrapper">
        <ul class="list">
            <li v-for="(item, index) in letters" :key="item" :ref="item" :data-index="index" v-text="item" class="item" @click="chooseCity"
                @touchstart.prevent="touchStart" @touchmove="touchMove" @touchend="touchEnd"></li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'CityAlphabet',
    props: {
        cities: Object
    },
    data () {
        return {
            touchStatus: false,
            touch: [],
            timer: null
        }
    },
    methods: {
        chooseCity (e) {
            this.$emit('change', e.target.innerText)
        },
        touchStart (e) {
            this.touchStatus = true
            let _startIndex = e.target.getAttribute('data-index')
            this.touch.startIndex = _startIndex
            this.touch.startY = e.touches[0].pageY
            this.$emit('change', this.letters[_startIndex])
        },
        touchMove (e) {
            if (this.touchStatus) {
                let _currentIndex = ((e.touches[0].pageY - this.touch.startY) / 19 | 0) + parseInt(this.touch.startIndex)
                if (_currentIndex >= 0 && _currentIndex < this.letters.length) {
                    this.$emit('change', this.letters[_currentIndex])
                }
            }
        },
        touchEnd () {
            this.touchStatus = false
        }
    },
    computed: {
        letters () {
            let letters = []
            for (let i in this.cities) {
                letters.push(i)
            }
            return letters
        }
    }
}
</script>

<style lang="stylus" scoped>
    @import '~style/varibles.styl'
    .wrapper
        position: absolute
        display: flex
        top: 1.58rem
        right: 0
        bottom: 0
        flex-direction: column
        justify-content: center
        width: .4rem
        .list
            background: rgba(0, 0, 0, 0.3)
            border-radius: 8px
            padding: .25rem 0;
            .item
                height: .4rem
                line-height: .4rem
                color: #fff
                text-align: center
</style>
