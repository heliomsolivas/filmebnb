<template>
  <div class="container">
    <h1 class="text-3xl py-4">Movies</h1>

    <div class="movies">
      <div v-for="i in movies" :key="i" class="movie">
        <div class="movie-image rounded-sm flex justify-center">
          <img class="rounded-md shadow-sm" :src="i.thumb" alt="" />
        </div>
        <p class="flex items-center font-normal text-sm pt-1">
          <svg
            viewBox="0 0 24 24"
            width="16"
            height="16"
            stroke="currentColor"
            stroke-width="1"
            fill="red"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="css-i6dzq1"
          >
            <path
              d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
            ></path>
          </svg>
          <span class="ml-1">5.00 (300)</span>
        </p>
        <p class="text-lg font-medium">{{ i.name }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      movies: [
        {
          id: 0,
          name: "Soul",
          thumb:
            "https://media.fstatic.com/7P3Wn-WPOobiTFQLYBcek4Ogpt4=/268x386/smart/media/movies/covers/2020/09/queens_gambit.jpg"
        },
        {
          id: 1,
          name: "Euphoria",
          thumb:
            "https://media.fstatic.com/7P3Wn-WPOobiTFQLYBcek4Ogpt4=/268x386/smart/media/movies/covers/2020/09/queens_gambit.jpg"
        },
        {
          id: 2,
          name: "Belo Vigança",
          thumb:
            "https://media.fstatic.com/7P3Wn-WPOobiTFQLYBcek4Ogpt4=/268x386/smart/media/movies/covers/2020/09/queens_gambit.jpg"
        },
        {
          id: 3,
          name: "Lupin",
          thumb:
            "https://media.fstatic.com/7P3Wn-WPOobiTFQLYBcek4Ogpt4=/268x386/smart/media/movies/covers/2020/09/queens_gambit.jpg"
        },
        {
          id: 4,
          name: "O Tigre branco",
          thumb:
            "https://media.fstatic.com/7P3Wn-WPOobiTFQLYBcek4Ogpt4=/268x386/smart/media/movies/covers/2020/09/queens_gambit.jpg"
        }
      ]
    };
  }
};
</script>

<style scoped>
.container {
  max-width: 1280px;
  padding: 0 80px;
}

.movies {
  display: grid;
  grid-template-columns: auto auto auto auto auto;
  grid-gap: 20px;
  justify-content: space-around;
}
.movie {
}
.movie-image {
  width: 100%;
}
img {
  width: 175px;
  height: 252px;
}
</style>
