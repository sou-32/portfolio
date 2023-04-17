<script setup lang="ts">
import { getAssets } from "~/src/model/constant";
interface News {
  date: number[];
  title: string;
}

const newsList: News[] = [
  {
    date: [2022, 4, 17],
    title: "AviutlページにHelloのプロジェクトファイルを追加!",
  },
  {
    date: [2022, 4, 17],
    title: "ウェブページをレシポンシブデザインに変更!",
  },
  {
    date: [2022, 4, 23],
    title:
      "Aviutlページのプロジェクトファイルが絶対パスだったのを相対パスに変更!",
  },
  {
    date: [2022, 6, 3],
    title: "ロゴが下からフェードインする動作を追加しました",
  },
  {
    date: [2022, 10, 1],
    title: "動画を新たに1つ追加し、adobeの項目を制作しました",
  },
];

const logo = getAssets("img/logo.png");
</script>

<template>
  <h2>最新情報</h2>
  <div class="news-container">
    <div v-for="news in newsList" class="news">
      <p class="date">
        {{ news.date.join("/") }}
      </p>
      <p class="body">
        {{ news.title }}
      </p>
    </div>
  </div>
  <img :src="logo" height="300px" />
</template>

<style scoped lang="scss">
.news-container {
  height: 200px;
  width: fit-content;
  margin: 0 auto;
  overflow-y: scroll;
  background-color: white;
  color: black;
}
</style>
