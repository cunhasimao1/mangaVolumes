<template>
  <div class="view home grid">
    <Saga v-for="saga in sagas" :key="saga._id" :saga="saga" />
  </div>
</template>

<script>
import Saga from "@/components/Saga.vue";
import { mapGetters } from "vuex";
export default {
  name: "Home",
  computed: mapGetters(["sagas"]),
  components: {
    Saga,
  },
};
</script>

<style lang="scss" scoped>
.home {
  padding: 20px 50px;
}
img {
  width: 100%;
}
.grid {
  margin: 20px 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, 200px);
  justify-content: space-between;
  grid-gap: 30px;
}
</style>
