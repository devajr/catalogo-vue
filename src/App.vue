<template>
 <div id="app" >
      <div id="outer-container" >
          <router-view :key="$route.fullPath"></router-view>
        
      </div> 
  </div>
</template>
<script>

export default {
  name: 'App',
  components: {
 
  },

}
</script>

<style>

.jumbotron {
  padding-bottom: 3rem;
  margin-bottom: 0;
  background-color: #fff;
}
.col-md-10 , .col-md-2 {
  padding-right: 5px !important;
  padding-left: 5px !important;
}
@media (min-width: 768px) {
  .jumbotron {
    /* padding-top: 6rem; */
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

</style>
