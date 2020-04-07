<template>
  <div class="hello">
    <h1>Bem vindo ao AnimesWatch!</h1>
    <h3>Aqui você pode adicionar animes que você já assistiu, está assistindo e droppou!</h3>
    <h4>Basta clicar no botão abaixo para começar a usar nosso sistema! (>‿◠)✌</h4>
    <router-link id="btnEntrar" active-class="active" tag="button" :to="{ name: 'home'}" class="btn btn-outline-primary btn-lg">
      Começar a usar!
    </router-link>
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
  margin-top: 60px;
}
.hello{
  margin-top: 60px;
  text-align: center;
}
</style>
