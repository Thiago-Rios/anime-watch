<template>
  <div>
    <Header/>
    <div class="hello">
        <h2>Adicionar Anime</h2>
        <div>
        <form @submit.prevent="onSubmit">
            <h4>Nome:</h4>
            <input type="text" v-model="add_anime.nome" placeholder="Ex: Dragon Ball Z" required>
            <h4>Imagem:</h4>
            <input type="text" v-model="add_anime.imagem" placeholder="Link da imagem" required>
            <h4>Avaliação:</h4>
            <input type="number" v-model="add_anime.avalicao" max="5" min="1" required>
            <h4>Status:</h4>
            <select v-model="add_anime.status" required>
                <option value="0">Completo</option>
                <option value="1">Assistindo</option>
                <option value="2">Droppado</option>
            </select>
            <h4>Sinopse:</h4>
            <textarea name="sinopse" id="sinopse" v-model="add_anime.sinopse" cols="50" rows="5" required>Escreva a sinopse aqui</textarea>
            <div>
                <input type="submit" id="btnAdd" class="btn btn-outline-primary btn-lg" value="Adicionar">
                <router-link active-class="active" id="btnVoltar" tag="button" :to="{ name: 'home'}" class="btn btn-outline-primary btn-lg">
                  Voltar
                </router-link>
            </div>
        </form>
        </div>
    </div>
  </div>    
</template>

<script>
import { mapActions } from "vuex";
import Header from './Header'

export default {
  name: "AddAnime",
  components: {Header},
  data() {
    return {
      add_anime :{
        imagem: "",
        nome: "",
        avalicao: "",
        status: "",
        sinopse: ""
      }
    };
  },
  methods: {
    ...mapActions(["addAnime"]),
    onSubmit() {
      this.addAnime(this.add_anime);
    }
  }
}
</script>

<style>
.hello{
  text-align: center;
}
#btnAdd {
    margin: 5px;
}
#btnVoltar {
    margin: 5px;
}
</style>