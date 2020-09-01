<template>
    <section class="row jumbotron">
        <div class=" col-sm-12 ">
                    <a v-on:click.prevent="openModal"  href="#" class="btn btn-primary lista"><svg width="1em" height="2em" viewBox="0 0 16 16" class="bi bi-list-stars" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5z"/>
                    <path d="M2.242 2.194a.27.27 0 0 1 .516 0l.162.53c.035.115.14.194.258.194h.551c.259 0 .37.333.164.493l-.468.363a.277.277 0 0 0-.094.3l.173.569c.078.256-.213.462-.423.3l-.417-.324a.267.267 0 0 0-.328 0l-.417.323c-.21.163-.5-.043-.423-.299l.173-.57a.277.277 0 0 0-.094-.299l-.468-.363c-.206-.16-.095-.493.164-.493h.55a.271.271 0 0 0 .259-.194l.162-.53zm0 4a.27.27 0 0 1 .516 0l.162.53c.035.115.14.194.258.194h.551c.259 0 .37.333.164.493l-.468.363a.277.277 0 0 0-.094.3l.173.569c.078.255-.213.462-.423.3l-.417-.324a.267.267 0 0 0-.328 0l-.417.323c-.21.163-.5-.043-.423-.299l.173-.57a.277.277 0 0 0-.094-.299l-.468-.363c-.206-.16-.095-.493.164-.493h.55a.271.271 0 0 0 .259-.194l.162-.53zm0 4a.27.27 0 0 1 .516 0l.162.53c.035.115.14.194.258.194h.551c.259 0 .37.333.164.493l-.468.363a.277.277 0 0 0-.094.3l.173.569c.078.255-.213.462-.423.3l-.417-.324a.267.267 0 0 0-.328 0l-.417.323c-.21.163-.5-.043-.423-.299l.173-.57a.277.277 0 0 0-.094-.299l-.468-.363c-.206-.16-.095-.493.164-.493h.55a.271.271 0 0 0 .259-.194l.162-.53z"/>
                    </svg> Minha Lista</a>
        </div>
        <div class="container text-center  col-sm-12 ">
            <div class=" ">
                <div class="titulo-cat"><h1>Catálogo de Filmes</h1></div>
                <form class=" row" >
                    <div class="col-md-10">
                        <input class="form-control " type="text" placeholder="Search" v-model="pesquisa" aria-label="Digite o nome filme ou série">
                    </div>
                    <div class="col-md-2">
                        <button v-on:click.prevent="pesquisar"  class=" search btn btn-outline-primary form-control " type="submit">Pesquisar</button>
                    </div>
                </form>
            </div>
        </div>
  </section>

</template>
<script>
import router from '@/router'
export default {
     data(){
        return{
            pesquisa:"",
           
        }
    },
     methods:{
         pesquisar() {
            if (this.pesquisa === '') {
                router.push({ name: 'results', params: { query:  "no query" }})
            } else {
                router.push({ name: 'results', params: { query:  this.pesquisa }})
            }
            this.pesquisa = ''
        }

    }
}
</script>
<style scoped>
@media only screen and (max-width: 600px) {
   

    .jumbotron {
        text-align: center;
        padding: 2rem;
    }
    .poster{
        border-radius: 5px;
    }
     .cards{
        padding-right: 90px!important;
         padding-left: 90px!important;
    }
}
 .titulo-cat{
     text-align: center;
     margin:0px !important;
     font-size: 25px;

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
    /* padding-top: 3rem; */
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

</style>