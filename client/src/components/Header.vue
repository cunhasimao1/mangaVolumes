<template>
  <header>
    <h1>Manga Volumes</h1>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/add">Add</router-link>
      <!-- <router-link to="/info">Info</router-link> -->
      <!-- <router-link to="/about">About</router-link> -->
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style lang="scss" scoped>
header {
  text-align: center;
  background-color: #363;
}
h1 {
  padding: 25px 0;
}

nav {
  border-top: 2px solid #000;
  display: flex;
  align-items: center;
  justify-content: center;
}

a {
  padding: 10px 15px;
  text-decoration: none;
}
</style>
