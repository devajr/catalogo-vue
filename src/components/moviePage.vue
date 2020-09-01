<template>
    <div>
        <div v-if="!movieData.Title">
            <h1 class="loading">Loading...</h1>
        </div>
        <div v-else id="movie-container">
            <movie-details :movieData="movieData"></movie-details>
        </div>
    </div>
</template>

<script>
import movieDetails from '@/components/movieDetails.vue'
import Api from '../service/api'

export default {
    components: {
        'movie-details': movieDetails,
    },
    data () {
        return {
            movieData: {},
        }
    },
    methods: {
        getDetalhes() {
            return Api.listar("i",this.$route.params.id)
       },
     
        async getMovieData() {
                const [movieData] = await Promise.all([this.getDetalhes()])
                this.movieData = movieData.data
               
        }
    },
    created() {
        this.getMovieData()
    },
    beforeDestroy() {
        this.$root.$emit('changeBackground', '', '')
    }
}
</script>

<style scoped>


#movie-container {
    padding: 0 5%;
    width: 90%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
}

#movie {
    display: flex;
    flex-direction: row;
    height: 45vh;
    margin-top: 30px;
    margin-bottom: 25px;
}

@media only screen and (max-width:600px) {
    #movie {
        flex-direction: column;
        height: auto;
        text-align: center;
    }
}

</style>

