<template>
  <div id="movie">
    <img v-if="movieData.Poster === null" id="no-poster"  alt="no poster found">
    <img
      v-else
      :src="movieData.Poster"
      :alt="movieData.Title"
    >
    <div class=" row">
      <div class="col-sm-12">
        <h1>{{ movieData.Title }} ({{ movieData.Released }})</h1>
        <!-- <h4>{{ movieData.tagline }}</h4> -->
      </div>
      <div class="col-sm-12">
        <p>
          <strong>Duração</strong>
          <br>
          <span v-if="movieData.Runtime === null">N/A</span>
          <span v-else>{{ movieData.Runtime }} minutos</span>
        </p>
        <div id="movie-genres" class="col-sm-12">
          <p>
            <strong>Genero</strong>
            <br>
            <span >
             {{ movieData.Genre }}
            </span>
          </p>
        </div>
      </div>
      <div class="col-sm-12">
        <p>
          <strong>Sinopse</strong>
          <br>
          {{ movieData.Plot }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    movieData: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      // noPhoto,
    }
  },
  methods: {},
  created() {},
}
</script>

<style scoped>
.col-sm-12{
    padding-right: 0px;
    padding-left: 0px;
}
img {
  height: 100%;
  margin-right: 30px;
  border-radius: 10px;
  border: 1px solid #ffffff;
}

.movie-info {
  display: flex;
  flex-wrap: wrap;
}
  .movie-info--headline {
    flex-basis: 100%;
    margin-bottom: -5vh;
  }

  .movie-info--details {
    flex-basis: 30%;
  }

  .movie-info--plot {
    flex-basis: 70%;
  }


a {
  color: "green";
}

a:hover {
  text-decoration: none;
}

a:active {
  color: #ffffff;
}

a:visited {
  color: #f1f1f1;
}
@media only screen and (max-width: 600px) {

  img {
      width: 100%;
      height: auto;
      margin-right: 0;
    }

  .movie-info, .movie-info--headline, .movie-info--headline, .movie-info--plot {
      margin: 0 auto;
      flex-basis: 100%;
    }
  
}

</style>


