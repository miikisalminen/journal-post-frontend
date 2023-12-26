<script setup>
import placeholder from "../components/svg/PlaceholderImg.vue";
function setPlaceholderImg(e) {
  e.target.src = placeholder;
}
</script>

<script>
import axios from "axios";

export default {
  name: "App",
  data() {
    return {
      article: {},
    };
  },
  methods: {
    async getArticles() {
      const apiUrl =
        "http://journal-post-backend.vercel.app/api/article_by_id/?id=" +
        this.$route.params.id;
      const { data } = await axios.get(apiUrl);
      this.article = data;
    },
  },
  beforeMount() {
    this.getArticles();
  },
};
</script>

<template>
  <div class="container">
    <div class="image-div">
      <img :src="article.image_url" @error="setPlaceholderImg" />
    </div>
    <h1>{{ article.title }}</h1>
    <h2>{{ article.author }}</h2>
    <div class="article-body">
      <p>
        {{ article.body }} Sint sint quis eu magna ullamco. Veniam amet magna
        cillum est in. Ut eiusmod voluptate non consequat ullamco incididunt
        deserunt qui eiusmod cupidatat aliqua et tempor occaecat. Adipisicing
        culpa mollit nulla proident. Id ea excepteur aute ad sit. Laboris magna
        Lorem proident eiusmod ex minim esse consequat sunt. Nisi culpa id
        excepteur pariatur commodo adipisicing minim in ex.
      </p>
      <p>
        Commodo aliquip non elit nostrud ea deserunt voluptate aliquip. Laboris
        pariatur velit mollit ullamco ex ex irure aute id culpa qui irure nulla.
        Mollit excepteur in non cupidatat excepteur sit velit id excepteur
        veniam eiusmod ea. Labore laborum nulla reprehenderit duis quis aliquip
        aliquip eu laborum aute voluptate do. Fugiat ipsum eu non aliquip anim
        cupidatat mollit dolore excepteur. Aliquip laborum est veniam deserunt
        ea quis. Do in sit exercitation do fugiat minim officia qui consectetur.
        Non fugiat occaecat reprehenderit sit eu irure ea non minim duis elit
        nulla. Amet sit ea sit occaecat nostrud tempor aliquip ipsum et id sunt
        non. Consectetur culpa occaecat adipisicing elit qui dolore cupidatat.
        Ea adipisicing irure anim est incididunt ex commodo. Ea amet anim
        ullamco officia Lorem enim do duis minim aliqua ex consequat ad.
        Consectetur aliqua ut veniam duis esse. Incididunt in dolore minim
        cupidatat duis labore reprehenderit Lorem sit pariatur aliquip mollit.
        Quis ea ipsum elit anim ea labore proident. Ullamco dolore eu veniam
        cillum consequat do.
      </p>
      <p>
        Qui elit nisi labore commodo elit occaecat nulla sint. Sunt velit
        reprehenderit enim velit. Irure sunt id ex veniam anim sint veniam
        ipsum. Duis pariatur irure quis laborum ut proident exercitation mollit
        aliqua sit. Veniam deserunt eiusmod adipisicing do sint aute sunt fugiat
        consectetur exercitation anim minim.
      </p>
      <div class="sources">
        <p>Written by {{ article.author }}</p>
        <p>Published {{ article.published }}</p>
        <a :href="article.origin_url">Original source</a>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Small devices such as large phones (360px and up) */
@media only screen and (min-width: 360px) {
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .image-div {
    width: 100%;
    height: 300px;
    overflow: hidden;
  }

  h1 {
    text-align: center;
    font-size: 20px;
    width: 90%;
    margin: auto;
    font-family: Averia Serif Libre;
  }

  h2 {
    text-align: center;
    font-family: Lato;
    font-size: 18px;
  }

  .article-body {
    font-size: 14px;
    width: 80%;
    margin: auto;
    font-family: Averia Serif Libre;
  }

  .sources {
    font-family: Lato;
    color: #0077ff;
  }
}

/* Medium devices such as tablets (768px and up) */
@media only screen and (min-width: 48em) {
  .article-body {
    font-size: 16px;
  }
  h1 {
    font-size: 24px;
  }

  h2 {
    font-size: 20px;
  }
}
</style>
