<script setup>
import BaseView from "./BaseView.vue";
</script>

<script>
import axios from "axios";

export default {
  name: "App",
  data() {
    return {
      scienceArticles: {},
    };
  },
  methods: {
    async getScienceArticles() {
      const { data } = await axios.get(
        "https://journal-post-backend.vercel.app/api/articles/?category=science"
      );
      this.scienceArticles = data;
      console.log(data);
    },
  },
  beforeMount() {
    this.getScienceArticles();
  },
};
</script>

<template>
  <div class="science">
    <BaseView :articles="scienceArticles" />
  </div>
</template>
