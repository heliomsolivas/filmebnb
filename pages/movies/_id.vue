<template>
  <div>
    <div class="container">
      <div class="p-4">
        <div class="default__columns">
          <div>
            <h2 class="text-2xl mb-4">
              {{ movie.name }}
            </h2>
            <p>{{ movie.originalTitle }}</p>
            <p>Dirigido por: {{ movie.director }}</p>
            <p>{{ movie.description }}</p>
          </div>
          <div class="movie__box">
            <div class="flex">
              <img :src="movie.thumb" />
              <div class="badges">
                <div class="badge badge__black">
                  +18
                </div>
              </div>
            </div>
            <div>
              <p>Média geral: {{ movie.average }}</p>
              <p>Baseado em {{ movie.votes }} votos</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import api from "@/api/api.js";
export default {
  data() {
    return {
      movie: {}
    };
  },
  created() {
    this.getMovieById(Number(this.$route.params.id));
  },
  methods: {
    async getMovieById(id) {
      const { data } = await api.get(`/movies/${id}`);
      this.movie = data;
    }
  }
};
</script>

<style scoped>
.default__columns {
  display: grid;
  grid-template-columns: 58.333333333333336% 33.33333333333333%;
  grid-gap: 8.333333333333332%;
}
.movie__box {
  border: 1px solid rgb(221, 221, 221);
  border-radius: 12px;
  padding: 24px;
  box-shadow: rgb(0 0 0 / 12%) 0px 6px 16px;
  display: flex;
  justify-content: center;
  flex-direction: column;
}
.badges {
  display: flex;
  flex-direction: column;
  width: 100%;
}
.badge {
  background: #000;
  height: 28px;
  color: white;
  font-size: 14px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
}
</style>
