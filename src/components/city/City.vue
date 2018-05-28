<template>
    <div>
        <Header></Header>
        <search :cities="cities"></search>
        <city-list :hotCities="hotCities" :cities="cities" :letter="letter"></city-list>
        <city-alphabet :cities="cities" @change="getLetters"></city-alphabet>
    </div>
</template>

<script>
import axios from 'axios'
import Header from './components/Header'
import Search from './components/Search'
import CityList from './components/list'
import CityAlphabet from './components/Alphabet'
export default {
    name: 'City',
    data () {
        return {
            cities: {},
            hotCities: [],
            letter: ''
        }
    },
    components: {
        Header,
        Search,
        CityList,
        CityAlphabet
    },
    methods: {
        getData () {
            axios.get('/api/city.json').then(this.getCityInfo)
        },
        getCityInfo (res) {
            res = res.data
            if (res.ret && res.data) {
                const data = res.data
                this.cities = data.cities
                this.hotCities = data.hotCities
            }
        },
        getLetters (msg) {
            this.letter = msg
        }
    },
    mounted () {
        this.getData()
    }
}
</script>

<style scoped>

</style>
