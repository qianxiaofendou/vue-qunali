<template>
    <div class="slide" ref="slide">
        <div class="slide-group" ref="slideGroup">
            <slot>
            </slot>
        </div>
        <div v-if="pagination" :class="paginationType" class="pagination-footer">
            <div v-if="paginationType === 'bullets'"><span class="dot" :class="{active: currentPageIndex === index }" v-for="(item, index) in dots" :key="index"></span></div>
            <div v-if="paginationType === 'fraction'"><span class="" v-text="currentPageIndex + 1" ></span><span> &nbsp;/&nbsp; </span><span v-text="dots.length"></span></div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
import BScroll from 'better-scroll'
function hasClass (el, className) {
    let reg = new RegExp('(^|\\s)' + className + '(\\s|$)')
    return reg.test(el.className)
}
function addClass (el, className) {
    if (hasClass(el, className)) {
        return
    }
    let newClass = el.className.split(' ')
    newClass.push(className)
    el.className = newClass.join(' ')
}
const COMPONENT_NAME = 'slide'
export default {
    name: COMPONENT_NAME,
    props: {
        sliderOptions: {
            type: Object
        }
    },
    /* eslint no-multi-spaces: ["error", { ignoreEOLComments: true }] */
    data () {
        return {
            dots: [],
            currentPageIndex: 0,                            // 当前页码
            autoPlay: this.sliderOptions.autoPlay !== undefined ? this.sliderOptions.autoPlay : true,  // 是否自动播放，默认开启
            interval: this.sliderOptions.interval || 4000,  // 轮播间隔
            pagination: this.sliderOptions.pagination !== undefined ? this.sliderOptions.pagination : true, // 是否开启分页器，默认开启
            threshold: this.sliderOptions.threshold !== undefined ? this.sliderOptions.threshold : 0.3,
            speed: this.sliderOptions.speed !== undefined ? this.sliderOptions.speed : 400,   // 轮播速度
            click: this.sliderOptions.click !== undefined ? this.sliderOptions.click : true,  // 是否启用点击，默认开启
            loop: this.sliderOptions.loop !== undefined ? this.sliderOptions.loop : true,    // 是否无限循环，默认开启
            paginationType: this.sliderOptions.paginationType !== undefined ? this.sliderOptions.paginationType : 'bullets'  // 分页类型，目前支持两种 bulleets:圆点  fraction: 分页
        }
    },
    mounted () {
        this.update()
        window.addEventListener('resize', () => {
            if (!this.slide || !this.slide.enabled) {
                return
            }
            clearTimeout(this.resizeTimer)
            this.resizeTimer = setTimeout(() => {
                if (this.slide.isInTransition) {
                    this._onScrollEnd()
                } else {
                    if (this.autoPlay) {
                        this._play()
                    }
                }
                this.refresh()
            }, 60)
        })
    },
    activated () {
        if (!this.slide) {
            return
        }
        this.slide.enable()
        let pageIndex = this.slide.getCurrentPage().pageX
        this.slide.goToPage(pageIndex, 0, 0)
        this.currentPageIndex = pageIndex
        if (this.autoPlay) {
            this._play()
        }
    },
    deactivated () {
        this.slide.disable()
        clearTimeout(this.timer)
    },
    beforeDestroy () {
        this.slide.disable()
        clearTimeout(this.timer)
    },
    methods: {
        update () {
            if (this.slide) {
                this.slide.destroy()
            }
            this.$nextTick(() => {
                this.init()
            })
        },
        refresh () {
            this._setSlideWidth(true)
            this.slide.refresh()
        },
        prev () {
            this.slide.prev()
        },
        next () {
            this.slide.next()
        },
        init () {
            clearTimeout(this.timer)
            this.currentPageIndex = 0
            this._setSlideWidth()
            if (this.pagination) {
                this._initDots()
            }
            this._initSlide()
            if (this.autoPlay) {
                this._play()
            }
        },
        _setSlideWidth (isResize) {
            this.children = this.$refs.slideGroup.children
            let width = 0
            let slideWidth = this.$refs.slide.clientWidth
            for (let i = 0; i < this.children.length; i++) {
                let child = this.children[i]
                addClass(child, 'slide-item')
                child.style.width = slideWidth + 'px'
                width += slideWidth
            }
            if (this.loop && !isResize) {
                width += 2 * slideWidth
            }
            this.$refs.slideGroup.style.width = width + 'px'
        },
        _initSlide () {
            this.slide = new BScroll(this.$refs.slide, {
                scrollX: true,
                scrollY: false,
                momentum: false,
                snap: {
                    loop: this.loop,
                    threshold: this.threshold,
                    speed: this.speed
                },
                bounce: false,
                stopPropagation: true,
                click: this.click
            })
            this.slide.on('scrollEnd', this._onScrollEnd)
            this.slide.on('touchEnd', () => {
                if (this.autoPlay) {
                    this._play()
                }
            })
            this.slide.on('beforeScrollStart', () => {
                if (this.autoPlay) {
                    clearTimeout(this.timer)
                }
            })
        },
        _onScrollEnd () {
            let pageIndex = this.slide.getCurrentPage().pageX
            this.currentPageIndex = pageIndex
            if (this.autoPlay) {
                this._play()
            }
        },
        _initDots () {
            this.dots = new Array(this.children.length)
        },
        _play () {
            clearTimeout(this.timer)
            this.timer = setTimeout(() => {
                this.slide.next()
            }, this.interval)
        }
    },
    watch: {
        loop () {
            this.update()
        },
        autoPlay () {
            this.update()
        },
        speed () {
            this.update()
        },
        threshold () {
            this.update()
        }
    }
}
</script>

<style lang="stylus" scoped>
    .slide
        min-height: 1px
        position: relative
        .slide-group
            overflow: hidden
            white-space: nowrap
            .slide-item
                float: left
                box-sizing: border-box
                overflow: hidden
                text-align: center
                a
                    display: block
                    width: 100%
                    overflow: hidden
                    text-decoration: none
                img
                    display: block
                    width: 100%
        .bullets
            position: absolute
            right: 0
            left: 0
            bottom: 12px
            transform: translateZ(1px)
            text-align: center
            font-size: 0
            .dot
                display: inline-block
                margin: 0 4px
                width: 8px
                height: 8px
                border-radius: 50%
                background: #ccc
                &.active
                    // width: 20px
                    border-radius: 5px
                    background: #fff
        .fraction
            position: absolute
            right: 0
            left: 0
            bottom: 12px
            transform: translateZ(1px)
            text-align: center
            // font-size: 0
            span
                display: inline-block
                color: #fff
</style>
