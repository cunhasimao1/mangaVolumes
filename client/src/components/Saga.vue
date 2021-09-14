<template>
  <div class="saga-entry">
    <img :src="saga.volumes[0].image" :alt="saga.name" />
    <router-link :to="`/manga/${saga._id}`">
      <h2>
        {{ saga.name }}
      </h2>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "Saga",
  props: ["saga"],
};
</script>

<style lang="scss" scoped>
.saga-entry {
  position: relative;
}
img {
  width: 100%;
  max-width: 400px;
}
</style>
