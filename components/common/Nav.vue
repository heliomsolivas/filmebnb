<template>
  <nav class="bg-gray-600 mb-4">
    <div class="container">
      <NuxtLink to="/home">Inicio</NuxtLink>
      <NuxtLink to="/movies">Filmes</NuxtLink>
      <NuxtLink to="/series">Séries</NuxtLink>
      <NuxtLink to="/tv">TV</NuxtLink>
      <NuxtLink to="/listas">Listas</NuxtLink>
      <NuxtLink to="/artistas">Artistas</NuxtLink>
      <NuxtLink to="/users">Usuários</NuxtLink>
      <NuxtLink to="/news">Notícias</NuxtLink>
      <NuxtLink to="/groups">Grupos</NuxtLink>
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
  height: 45px;
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
