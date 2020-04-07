<template>
  <div id="header">
    <router-link active-class="active" tag="a" :to="{ name: 'home'}" class="linkHome">
        AnimesWatch
    </router-link>
  </div>
</template>

<script>
export default {
    name: 'Header'
}
</script>

<style>
#header {
    background-color: #6986d1;
}
.linkHome {
    margin-left: 10px;
    font-size: 1.8em;
    text-decoration: none;
    color: white;
}
.linkHome:hover {
    text-decoration: none;
    color: white;
}
</style>