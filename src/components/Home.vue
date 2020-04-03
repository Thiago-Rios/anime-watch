<template>
  <div class="hello">
    <h1>PAGINA DE PRINCIPAL</h1>
    <div class="hhh">
      <div v-for="a in allAnimes" :key="a.id">
        <div class="card">
          <img v-bind:src="a.imagem" class="card-img-top" alt="imagem do anime">
          <div class="card-body">
            <h5 class="card-title">{{ a.nome }}</h5>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">{{ a.status }}</li>
            <li class="list-group-item">{{ a.avaliacao }}</li>
          </ul>
          <div class="card-body">
            <router-link tag="a" class="card-link" :to="{ name: 'animeInfo', params: { id: a.id } }"> Ver mais </router-link>
            <i @click="deleteAnime(a.id)" class="fas fa-trash-alt"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: 'Entrada',
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
.hhh {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.card {
  margin: 20px;
  display: flex;
  justify-content: space-between;
  width: 280px;
  height: 95%;
}
</style>