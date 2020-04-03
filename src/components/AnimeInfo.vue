<template>
  <div class="hello">
    <h1>PAGINA DO ANIME</h1>
    <div>
      <h1>{{ animeById(id).nome }}</h1>
      <img :src="animeById(id).imagem" alt="cu">
      <h4>{{ animeById(id).avaliacao }}</h4>
      <h4>{{ animeById(id).status }}</h4>
      <p>{{ animeById(id).sinopse }}</p>
      <router-link tag="button" class="btn btn-outline-primary btn-lg" :to="{ name: 'home'}">
        Voltar
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: 'AnimeInfo',
  props: {},
  data: function(){
    return{ 
      id : this.$route.params.id  
    }
  },
  computed: {
    ...mapGetters(["animeById",])
  }
}
</script>

<style>
#btnEntrar {
  margin-top: 150px;
}
</style>