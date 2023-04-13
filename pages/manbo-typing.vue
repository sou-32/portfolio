<script setup lang="ts">
const number = ref<number>(0);
const increment = () => number.value++;

const newsList: { date: string; body: string }[] = [
    {
        date: "04/02",
        body: "にゅーーーーーす"
    },
    {
        date: "04/04",
        body: "にゅーーーーーす"
    },
    {
        date: "04/06",
        body: "にゅーーーーーす"
    }
]

</script>

<template>
    <h1>まんぼう</h1>
    <p>訪問者数: {{ number }}</p>
    <button @click="increment">増か！</button>

    <div v-for="news in newsList">
        <p class="date">
            {{ news.date }}
        </p>
        <p class="body">
            {{ news.body }}
        </p>
    </div>
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