<template>
  <header>
    <div class="container">
      <div class="p-4">
        <div class="flex justify-between">
          <h1 class="text-3xl">FilmeBNB: os filmes mais brabos</h1>

          <div class="flex items-center">
            <notification-bar class="mr-2"></notification-bar>
            <menu-bar></menu-bar>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import NotificationBar from "~/components/common/NotificationBar.vue";
import MenuBar from "~/components/common/MenuBar.vue";
export default {
  components: { NotificationBar, MenuBar },
  data() {
    return {};
  }
};
</script>

<style scoped>
header {
  height: 80px;
  background: #fff;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 1px 12px !important;
  display: flex;
  align-items: center;
}
</style>
