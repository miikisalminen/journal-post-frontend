<script setup>
import BaseView from "./BaseView.vue";
</script>

<script>
import axios from "axios";

export default {
  name: "App",
  data() {
    return {
      healthArticles: {},
    };
  },
  methods: {
    async getHealthArticles() {
      const { data } = await axios.get(
        "https://journal-post-backend.vercel.app/api/articles/?category=health"
      );
      this.healthArticles = data;
      console.log(data);
    },
  },
  beforeMount() {
    this.getHealthArticles();
  },
};
</script>

<template>
  <div class="health">
    <BaseView :articles="healthArticles" />
  </div>
</template>
