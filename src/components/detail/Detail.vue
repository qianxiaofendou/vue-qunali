<template>
    <div>
        <banner :list="list"></banner>
        <Header></Header>
    </div>
</template>

<script>
import Banner from './components/Banner'
import Header from './components/Header'
import axios from 'axios'
export default {
    name: 'Detail',
    components: {
        Banner,
        Header
    },
    data () {
        return {
            list: []
        }
    },
    methods: {
        getData () {
            axios('/api/detail.json', {
                params: {
                    id: this.$route.params.id
                }
            }).then(this.getImgInfo)
        },
        getImgInfo (res) {
            let data = res.data || {}
            if (data.ret && data.data) {
                this.list = data.data.gallaryImgs || []
            }
        }
    },
    mounted () {
        this.getData()
    }
}
</script>

<style scoped>

</style>
