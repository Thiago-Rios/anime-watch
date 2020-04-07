<template>
  <div>
    <Header/>
    <div class="info">
      <h1>Página do anime</h1>
      <div>
        <h1>{{ animeById(id).nome }}</h1>
        <img :src="animeById(id).imagem" id="imgInfo" alt="imagem do anime">
        <h4>Avalição:</h4>
        <span v-for="n in 5" :key="n">
          <i class="fas fa-star" v-if="animeById(id).avaliacao >= n"></i> 
        </span>
        <h4>Status:</h4>
        <p v-if="animeById(id).status === 0"> Completo </p>
        <p v-else-if="animeById(id).status === 1"> Assistindo </p>
        <p v-else> Droppado </p>
        <div id="divSinopse">
          <h4>Sinopse:</h4>
          <p class="descricao">{{ animeById(id).sinopse }}</p>
        </div>
        <router-link tag="button" class="btn btn-outline-primary btn-lg" :to="{ name: 'home'}">
          Voltar
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Header from './Header'

export default {
  name: 'AnimeInfo',
  components: {Header},
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
.info {
  text-align: -webkit-center;
}
#divSinopse{ 
  width: 50%;
}
#imgInfo {
  width: 700px;
  height: 350px;
}
</style>