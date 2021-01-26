<template>
  <div>
    <Header></Header>
    <Nav></Nav>
    <div class="container">
      <div class="mb-4">
        <h2 class="text-3xl mb-4">Filmes e séries mais populares no Filmow</h2>
        <div class="grid">
          <div
            class="grid__item text-left"
            v-for="m in popularMovies"
            :key="m.id"
          >
            <div
              class="grid__item__bg"
              :style="{ backgroundImage: 'url(' + m.thumb + ')' }"
            ></div>
            <div class="grid__item__details">
              <div class="flex items-center">
                <svg
                  class="mr-1"
                  viewBox="0 0 1000 1000"
                  role="presentation"
                  aria-hidden="true"
                  focusable="false"
                  style="height:14px;width:14px;fill:currentColor"
                >
                  <path
                    d="M972 380c9 28 2 50-20 67L725 619l87 280c11 39-18 75-54 75-12 0-23-4-33-12L499 790 273 962a58 58 0 0 1-78-12 50 50 0 0 1-8-51l86-278L46 447c-21-17-28-39-19-67 8-24 29-40 52-40h280l87-279c7-23 28-39 52-39 25 0 47 17 54 41l87 277h280c24 0 45 16 53 40z"
                  ></path>
                </svg>
                4,92
              </div>
              <p>{{ m.name }}</p>
            </div>
          </div>
        </div>
      </div>

      <h2 class="text-3xl mb-4">Estreias da Semana</h2>

      <div class="grid">
        <div
          class="grid__item text-left rounded"
          v-for="m in debutMovies"
          :key="m.id"
        >
          <img :src="m.thumb" alt="m.name" />
          {{ m.name }}
        </div>
      </div>

      <!-- <h2 class="text-3xl mb-4">Notícias: Cinema, Séries e Tv</h2>
      <div class="grid">
        <div class="grid__item text-left" v-for="m in movies" :key="m.id">
          <img :src="m.thumb" alt="m.name" />
          {{ m.name }}
        </div>
      </div>

      <h2 class="text-3xl mb-4">Filmes em cartaz nos cinemas</h2>

      <div class="grid">
        <div class="grid__item text-left" v-for="m in movies" :key="m.id">
          <img :src="m.thumb" alt="m.name" />
          {{ m.name }}
        </div>
      </div> -->
    </div>
  </div>
</template>

<script>
import api from "@/api/api.js";
import Header from "~/components/common/Header.vue";
import Nav from "~/components/common/Nav.vue";
export default {
  components: {
    Header,
    Nav
  },
  data() {
    return {
      popularMovies: [],
      debutMovies: []
    };
  },
  mounted() {
    this.getPopularMovies();
    this.getDebutMovies();
  },
  methods: {
    async getPopularMovies() {
      const { data } = await api.get("/popularMovies");
      this.popularMovies = data;
    },
    async getDebutMovies() {
      const { data } = await api.get("/debutMovies");
      this.debutMovies = data;
    }
  }
};
</script>

<style>
* {
  font-family: "Roboto", sans-serif;
  font-weight: 400 !important;
}
.container {
  max-width: 1280px;
  padding: 0 80px;
  margin: 0 auto;
}
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-gap: 16px;
}
.grid__item {
  background: #fff;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 1px 12px !important;
  background-size: cover;
  background-position: center center;

  border-radius: 10px;
}
.grid__item__bg {
  height: 320px;
  border-radius: 10px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}
.grid__item__details {
  padding: 10px 15px;
  display: flex;
  flex-direction: column;
}
</style>
