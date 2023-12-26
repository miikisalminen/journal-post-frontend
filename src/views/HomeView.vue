<script setup lang="ts">
import MainArticle from "../components/MainArticle.vue";
import SecondaryArticle from "../components/SecondaryArticle.vue";
import LatestNews from "../components/LatestNews.vue";
import ListenCard from "../components/ListenCard.vue";
</script>

<script lang="ts">
import axios from "axios";

export default {
  name: "App",
  data() {
    return {
      articles: {},
      businessArticles: {},
      entertainmentArticles: {},
    };
  },
  methods: {
    async getArticles() {
      const { data } = await axios.get(
        "http://journal-post-backend-8tbbg7yg6-miikisalminen.vercel.app/api/articles/"
      );
      this.articles = data;
    },
    async getBusinessArticles() {
      const { data } = await axios.get(
        "http://journal-post-backend-8tbbg7yg6-miikisalminen.vercel.app/api/articles/?category=business"
      );
      this.businessArticles = data;
    },
    async getEntertainmentArticles() {
      const { data } = await axios.get(
        "http://journal-post-backend-8tbbg7yg6-miikisalminen.vercel.app/api/articles/?category=entertainment"
      );
      this.entertainmentArticles = data;
    },
  },
  beforeMount() {
    this.getArticles();
    this.getBusinessArticles();
    this.getEntertainmentArticles();
  },
};
</script>

<template>
  <div class="container">
    <div class="home-left">
      <MainArticle
        :id="articles.at(0).id"
        :title="articles.at(0).title"
        :imageUrl="articles.at(0).image_url"
        :category="articles.at(0).category"
        :published="articles.at(0).published"
      />
      <SecondaryArticle
        v-for="article in articles.slice(1, 11)"
        :key="article.id"
        :id="article.id"
        :title="article.title"
        :imageUrl="article.image_url"
        :category="article.category"
        :published="article.published"
      />
      <MainArticle
        :id="articles.at(12).id"
        :title="articles.at(12).title"
        :imageUrl="articles.at(12).image_url"
        :category="articles.at(12).category"
        :published="articles.at(12).published"
      />
      <SecondaryArticle
        v-for="article in articles.slice(13, 23)"
        :key="article.id"
        :id="article.id"
        :title="article.title"
        :imageUrl="article.image_url"
        :category="article.category"
        :published="article.published"
      />
    </div>
    <div class="home-right">
      <LatestNews :articles="articles.slice(24, 34)" heading="Latest news" />
      <ListenCard :articles="articles.slice(35, 38)" />
      <LatestNews :articles="businessArticles.slice(0, 9)" heading="Business" />
      <LatestNews
        :articles="entertainmentArticles.slice(0, 9)"
        heading="Entertainment"
      />
    </div>
  </div>
</template>

<style scoped>
/* Small devices such as large phones (360px and up) */
@media only screen and (min-width: 360px) {
  .container {
    display: flex;
    justify-content: center;
  }
  .home-left {
    float: left;
    width: 90%;
    margin-top: 10px;
  }

  .home-right {
    display: none;
    float: left;
    width: 20%;
  }
}

/* Medium devices such as tablets (768px and up) */
@media only screen and (min-width: 48em) {
  .home-left {
    width: 60%;
  }
  .home-right {
    display: block;
    width: 30%;
  }
}

/* Large devices such as laptops (1024px and up) */
@media only screen and (min-width: 64em) {
  .home-left {
    width: 60%;
  }
  .home-right {
    width: 30%;
  }
}

/* Larger devices such as desktops (1920px and up) */
@media only screen and (min-width: 1920px) {
  .home-left {
    width: 40%;
  }
  .home-right {
    width: 20%;
  }
}
</style>
