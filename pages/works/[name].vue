<script setup lang="ts">
import { getAssets } from "~/src/model/constant";

interface Works {
  name: string;
  description: string;
  works: {
    extension: string;
  };
}

const works: Works[] = [
  {
    name: "table",
    description: "table",
    works: {
      extension: "mp4",
    },
  },
  {
    name: "chill-out",
    description: "chill-out",
    works: { extension: "mp4" },
  },
  {
    name: "fukakouryoku",
    description: "fukakouryoku",
    works: { extension: "mp4" },
  },
  {
    name: "hello",
    description: "hello",
    works: { extension: "mp4" },
  },
  {
    name: "light-saver",
    description: "light-saver",
    works: { extension: "mp4" },
  },
  {
    name: "m5stack",
    description: "m5stack",
    works: { extension: "mp4" },
  },
  {
    name: "manbou",
    description: "manbou",
    works: { extension: "mp4" },
  },
  {
    name: "manbou-typing",
    description: "manbou-typing",
    works: { extension: "mp4" },
  },
  {
    name: "suzannu",
    description: "suzannu",
    works: { extension: "mp4" },
  },
];

function findWorkByName(works: Works[], name: string): Works | undefined {
  return works.find((work) => work.name === name);
}

let name = ref<string>("hello");
onMounted(() => {
  name.value = window.location.pathname.split("/").pop()!;
});
const currentWork = findWorkByName(works, name.value)!;
const getTmbSrc = getAssets(`projects/${currentWork.name}/tmb.png`);
const getVideoSrc = getAssets(
  `projects/${currentWork.name}/works.${currentWork.works.extension}`
);
</script>

<template>
  {{ currentWork.name }}<br />
  <img :src="getTmbSrc" height="300px" /><br />
  <video :src="getVideoSrc" height="300px" controls></video>
</template>

<style scoped lang="scss">
h1 {
  background-color: aqua;
}

.date {
  background-color: gray;
}

.body {
  font-size: larger;
}
</style>
