<template>
  <div id="app">
    <Header />
    <router-view />
  </div>
</template>

<script>
import Header from "@/components/Header";
import { mapActions } from "vuex";

export default {
  components: {
    Header,
  },
  methods: {
    ...mapActions(["fetchSagas"]),
  },
  async created() {
    this.fetchSagas();
  },
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  color: #fff;
}

body {
  background-color: #000;
  height: 100vh;
}

.view {
  position: relative;
  text-align: center;
  height: 100%;
}
</style>
