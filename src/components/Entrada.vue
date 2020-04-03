<template>
  <div class="hello">
    <div>
      <h1>Bem vindo ao anime-watch!</h1>
      <h3>Aqui você pode adicionar animes que você já assistiu, está assistindo e droppou!</h3>
      <h4>Basta clicar no botão abaixo para começar a usar nosso sistema! (>‿◠)✌</h4>
      <router-link id="btnEntrar" active-class="active" tag="button" :to="{ name: 'home'}" class="btn btn-outline-primary btn-lg">
      Começar a usar!
    </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Entrada',
  props: {}
}
</script>

<style>
#btnEntrar {
  margin-top: 150px;
}
</style>
