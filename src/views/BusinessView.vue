<script setup>
import BaseView from "./BaseView.vue";
</script>

<script>
import axios from "axios";

export default {
  name: "App",
  data() {
    return {
      businessArticles: {},
    };
  },
  methods: {
    async getBusinessArticles() {
      const { data } = await axios.get(
        "http://journal-post-backend-8tbbg7yg6-miikisalminen.vercel.app/api/articles/?category=business"
      );
      this.businessArticles = data;
      console.log(data);
    },
  },
  beforeMount() {
    this.getBusinessArticles();
  },
};
</script>

<template>
  <div class="business">
    <BaseView :articles="businessArticles" />
  </div>
</template>
