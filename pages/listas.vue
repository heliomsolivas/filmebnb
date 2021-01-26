<template>
  <div>
    <Header></Header>
    <Nav></Nav>
    <div class="container">
      <div>
        <h2 class="text-3xl mb-4">Listas de filmes e série</h2>
        <div class="grid">
          <div class="grid__item text-left" v-for="m in movies" :key="m.id">
            <img :src="m.thumb" alt="m.name" />
            {{ m.name }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "~/components/common/Header.vue";
import Nav from "~/components/common/Nav.vue";
export default {
  components: {
    Header,
    Nav
  },
  data() {
    return {
      movies: [
        {
          id: 0,
          name: "Soul",
          thumb:
            "https://media.fstatic.com/3lGWmvgHKOAXw8dK7h0BPk4Lce0=/268x386/smart/media/movies/covers/2020/10/soul.jpg"
        },
        {
          id: 1,
          name: "Euphoria",
          thumb:
            "https://media.fstatic.com/3lGWmvgHKOAXw8dK7h0BPk4Lce0=/268x386/smart/media/movies/covers/2020/10/soul.jpg"
        },
        {
          id: 2,
          name: "Belo Vigança",
          thumb:
            "https://media.fstatic.com/3lGWmvgHKOAXw8dK7h0BPk4Lce0=/268x386/smart/media/movies/covers/2020/10/soul.jpg"
        },
        {
          id: 3,
          name: "Lupin",
          thumb:
            "https://media.fstatic.com/3lGWmvgHKOAXw8dK7h0BPk4Lce0=/268x386/smart/media/movies/covers/2020/10/soul.jpg"
        },
        {
          id: 4,
          name: "O Tigre branco",
          thumb:
            "https://media.fstatic.com/3lGWmvgHKOAXw8dK7h0BPk4Lce0=/268x386/smart/media/movies/covers/2020/10/soul.jpg"
        }
      ]
    };
  }
};
</script>

<style>
.container {
  max-width: 1280px;
  padding: 0 80px;
}
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-gap: 16px;
}
</style>
