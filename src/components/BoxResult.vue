<template>
    <div class="container ">
        <div id ="results" class=" row">
            <div class="col-md-12 col-sm12">
                <p v-if="this.errorMessage != ''" class="results-err">{{ errorMessage }}</p>
                <p v-else-if="this.numOfResults === 0" class="results-err">Sua pesquisa retornou {{ numOfResults }} resultados. 
                    Verifique a ortografia e tente pesquisar novamente.</p>
            
            </div>
            <div id="cards" v-for="filme in filmes"   v-bind:key="filme.imdbID" class=" cards col-md-3 ">
                <img class="bd-placeholder-img card-img-top poster" :src="`${filme.Poster}` == 'N/A' ? 'https://breakthrough.org/wp-content/uploads/2018/10/default-placeholder-image.png' : `${filme.Poster}`"  height="350"/>
                <div :id ="`${filme.imdbID}`" class="card-body">
                    <p class="card-text" :src="`${filme.Poster}`"><span>Título: </span>{{filme.Title}}</p>
                    <p class="card-text" ><span>Tipo: </span>{{filme.Type}}</p>
                    <p class="card-text" ><span>Ano: </span>{{filme.Year}}</p>

                    <div class="d-flex justify-content-between align-items-center">
                        <div class="btn-group">
                            <button @click="$router.push({ name: 'movie', params: { id:  filme.imdbID  }})" type="button" class="fav btn btn-sm btn-primary">Detalhes</button>
                            <button type="button" class="fav btn btn-sm btn-warning"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-plus" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M8 3.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5H4a.5.5 0 0 1 0-1h3.5V4a.5.5 0 0 1 .5-.5z"/>
                                <path fill-rule="evenodd" d="M7.5 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0V8z"/>
                                </svg> Minha Lista
                            </button>
                        </div>
                    </div>
                 </div>
            </div>
        </div>
    </div>

  
</template>
<script>
import Api from '../service/api'
export default {
    // el:"#cards",
    data(){
        return{
            filmes:[],
           pesquisa:"",
            numOfResults: 0,
            errorMessage: ''
        }
    },
     methods: {
                async pesquisar(query) {
                    if (query === "no query") {
                        this.errorMessage = 'Nenhum resultado encontrado'
                    } else {
                    await Api.listar("s",query).then(filmes=>{
                            this.filmes=filmes.data.Search
                            this.numOfResults=filmes.data.totalResults
                            }).catch(e=>{
                                console.log(e)
                            })
                    }
                }, 
            },
            created() {
                   
                    if (this.$route.name === "results") {
                        this.pesquisar(this.$route.params.query)
                         console.log("chaveeeeee")
                        console.log(this.$route.params.query)
                    } else if (this.$route.name === "genre") {
                        this.getGenreResults(this.$route.params.id)
                    }   
            },
          
        

       
  
    
}
 
</script>
<style>
@media only screen and (max-width: 600px) {
    
    .results-err{
         text-align: center;
    }
   
    .poster{
        border-radius: 5px;
    }
     .cards{
        padding-right: 90px!important;
         padding-left: 90px!important;
    }
}
    .results-num, .results-err {
       text-align: center;
        padding-bottom: 15px;
    }
    .fav{
        margin-right:5px;
    }
    .cards{
        padding: 20px;
    }
    .search{
        margin-left:0px;
        vertical-align:unset!important;
    }
    .lista{
        margin-top: 1rem;
        margin-bottom: 1rem;
        margin-right: 1rem;
        float:right;
    }
    .card-text{
        margin:0px !important;
        padding: 0px !important;
        font-size: 15px !important;
    }

    .jumbotron {
    padding-top: 3rem;
    padding-bottom: 3rem;
    margin-bottom: 0;
    background-color: #fff;
    }
    

    .jumbotron p:last-child {
    margin-bottom: 0;
    }

    .jumbotron h1 {
    font-weight: 300;
    }

    .jumbotron .container {
    max-width: 40rem;
    }

    footer {
    padding-top: 3rem;
    padding-bottom: 3rem;
    }

    footer p {
    margin-bottom: .25rem;
    }

</style>