<template>
  <nav class="bg-blue-500">
    <div class="container text-white">
      <NuxtLink class="font-normal" to="/home">Inicio</NuxtLink>
      <NuxtLink class="font-normal" to="/movies">Filmes</NuxtLink>
      <NuxtLink class="font-normal" to="/series">Séries</NuxtLink>
      <NuxtLink class="font-normal" to="/tv">TV</NuxtLink>
      <NuxtLink class="font-normal" to="/listas">Listas</NuxtLink>
      <NuxtLink class="font-normal" to="/artistas">Artistas</NuxtLink>
      <NuxtLink class="font-normal" to="/users">Usuários</NuxtLink>
      <NuxtLink class="font-normal" to="/news">Notícias</NuxtLink>
      <NuxtLink class="font-normal" to="/groups">Grupos</NuxtLink>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style scoped>
nav {
  height: 60px;
  display: flex;
  align-items: center;
}
nav a{
    min-width: 80px;
    margin-right: 8px;
    display: inline-block;
    text-align: center;
}
nav a:last-of-type{
    margin-right: 0;
}
</style>
