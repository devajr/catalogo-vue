<template>
  <header>
    <div class="collapse bg-dark" :class="{show }" id="navbarHeader">
      <div class="container">
        <div class="row">
          <div class="col-sm-8 col-md-7 py-4">
            <h4 class="text-white">Sobre</h4>
            <p class="text-muted">Devair Barbosa Junior </p>
          </div>
          <div class="col-sm-4 offset-md-1 py-4">
            <h4 class="text-white">Contato</h4>
            <ul class="list-unstyled">
              <li><a href="#" class="text-white">Cel: (15) 98103-0404</a></li>
              <li><a href="#" class="text-white">E-mail devair.junior.db@gmail.com</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="navbar navbar-dark bg-dark shadow-sm">
      <div class="container d-flex justify-content-between">
        <a href="#" class="navbar-brand d-flex align-items-center">
          <!-- <img href="https://burh.com.br/img/brand/burh-imagotipo.svg" width="20" height="20" fill="none" ></img> -->
          <img src="https://burh.com.br//img/brand/burh-imagotipo.svg" width="70" height="30" class="navbar-brand-img navbar-brand-img--full">
          <p>&nbsp;&nbsp;&nbsp;</p><strong>Teste - Dev Front-End</strong>
        </a>
        <button  class="navbar-toggler" type="button"  data-toggle="collapse" data-target="#navbarHeader" v-on:click="show = !show" aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>
    </div>
    <Search/>
  </header>  
</template>
<script>
import Search from '@/components/Search.vue'
export default {
     data() {
         return{
            show: false
         }
    
  },
   components: {
    Search
  }
}
</script>
<style scoped>
.jumbotron {
  padding-top: 3rem;
  padding-bottom: 3rem;
  margin-bottom: 0;
  background-color: #fff;
}
@media (min-width: 768px) {
  .jumbotron {
    padding-top: 6rem;
    padding-bottom: 6rem;
  }
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
.text-muted{
    color:#fff !important;
    font-size:20px;
}

</style>