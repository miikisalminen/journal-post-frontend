<script setup>
import BaseView from "./BaseView.vue";
</script>

<script>
import axios from "axios";

export default {
  name: "App",
  data() {
    return {
      entertainmentArticles: {},
    };
  },
  methods: {
    async getEntertainmentArticles() {
      const { data } = await axios.get(
        "http://journal-post-backend-8tbbg7yg6-miikisalminen.vercel.app/api/articles/?category=entertainment"
      );
      this.entertainmentArticles = data;
      console.log(data);
    },
  },
  beforeMount() {
    this.getEntertainmentArticles();
  },
};
</script>

<template>
  <div class="entertainment">
    <BaseView :articles="entertainmentArticles" />
  </div>
</template>
