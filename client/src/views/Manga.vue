<template>
  <div class="view manga">
    <h1>{{ manga.name }}</h1>
    <div class="manga-info" v-if="manga.info">
      {{manga.info.publisher}}
      {{manga.info.year}}
      <pre>{{manga.info.description}}</pre>
      {{manga.info.state}}
      {{manga.info.isUpdated}}
    </div>
    <div class="grid">
      <img v-for="volume in manga.volumes" :key="volume._id" :src="volume.image" :alt="volume.volume" />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Manga",
  computed: mapGetters(["manga"]),
  methods: mapActions(["getManga"]),
  async created() {
    this.getManga(this.$route.params.id);
  },
};
</script>

<style lang="scss" scoped>
.manga {
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
  align-items: center;
  grid-gap: 30px;
}
pre {
  white-space: pre-wrap;
  font-family: inherit;
}

</style>
