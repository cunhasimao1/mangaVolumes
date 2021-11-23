<template>
  <div id="app">
    <Header />
    <router-view v-if="hasLoadedData" />
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
  data() {
    return {
      hasLoadedData: false,
    };
  },
  async created() {
    await this.fetchSagas();
    this.hasLoadedData = true;
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
