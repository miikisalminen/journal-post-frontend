<script setup>
import BaseView from "./BaseView.vue";
</script>

<script>
import axios from "axios";

export default {
  name: "App",
  data() {
    return {
      techArticles: {},
    };
  },
  methods: {
    async getTechArticles() {
      const { data } = await axios.get(
        "https://journal-post-backend.vercel.app/api/articles/?category=tech"
      );
      this.techArticles = data;
      console.log(data);
    },
  },
  beforeMount() {
    this.getTechArticles();
  },
};
</script>

<template>
  <div class="tech">
    <BaseView :articles="techArticles" />
  </div>
</template>
