<script setup lang="ts">
const headerList: { name: string; path: string }[] = [
  { name: "Home", path: "/" },
  { name: "まんぼうタイピング", path: "/manbo-typing" },
  { name: "movie", path: "/movie" },
  { name: "blender", path: "/blender" },
  { name: "adobe", path: "/adobe" },
];
</script>

<template>
  <div>
    <nav class="header-container">
      <div v-for="header in headerList" class="header">
        <a :href="header.path">{{ header.name }}</a>
      </div>
    </nav>
    <div class="slot-container">
      <slot />
    </div>
  </div>
</template>

<style scoped lang="scss">
.slot-container {
  height: calc(100vh - 80px);
  background: linear-gradient(to right, red, blue);
  padding: 10px;
  text-align: center;
  color: white;
}

.header-container {
  background-color: #8394a3;
  padding: 10px;
  display: flex;
  margin: 0 auto;
  justify-content: center;

  a {
    color: white;
    text-decoration: none;

    &:hover {
      color: black;
    }
  }

  .header {
    margin: 0 10px;
  }
}
</style>
