<template>
  <div>
    <Header/>
    <div class="hello">
      <h1>Animes adicionados</h1>
      <router-link id="btnAdd" active-class="active" tag="button" :to="{ name: 'addAnime'}" class="btn btn-outline-primary btn-lg">
        Adicionar novo anime
      </router-link>
      <div class="mesa">
        <div v-for="a in allAnimes" :key="a.id">
          <div class="card">
            <div class="card-body">
              <img v-bind:src="a.imagem" class="card-img-top" alt="imagem do anime">
              <h5 class="card-title">{{ a.nome }} <i @click="deleteAnime(a.id)" class="fas fa-trash-alt"></i></h5>
              <div>
                <span>Status:</span>
                <p class="card-text" v-if="a.status === 0"> Completo </p>
                <p class="card-text" v-else-if="a.status === 1"> Assistindo </p>
                <p class="card-text" v-else> Droppado </p>
              </div>
              <div>
                <span>Avaliação:</span>
                <span v-for="n in 5" :key="n">
                  <i class="fas fa-star" v-if="a.avaliacao >= n"></i> 
                </span>
              </div>
              <router-link tag="a" class="card-link" :to="{ name: 'animeInfo', params: { id: a.id } }"> Ver mais </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Header from './Header'

export default {
  name: 'Entrada',
  components: {Header},
  methods: {
    ...mapActions(["getAnimes", "deleteAnime"]),
  },
  computed: mapGetters(["allAnimes"]),
  created() {
    this.getAnimes();
  }
}
</script>

<style>
.hello{
  text-align: center;
}
.mesa {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.card {
  margin: 20px;
  display: flex;
  width: 280px;
}
</style>