<script setup>
const props = defineProps({
  articles: Object,
  heading: String,
});
</script>

<template>
  <p>{{ props.heading }}</p>
  <ul class="news">
    <li v-for="article in props.articles" :key="article.id">
      <a :href="'/article/' + article.id">
        <div class="title">{{ article.title }}</div>
      </a>
    </li>
  </ul>
</template>

<style scoped>
a {
  text-decoration: none;
  color: #000000;
  transition: 0.2s;
}

a:visited {
  color: #000000;
}

a:hover {
  color: #0077ff;
}

p {
  margin-left: 50px;
  font-family: Lato;
  color: #0077ff;
  font-size: 24px;
}
ul.news {
  margin-left: 50px;
  padding-left: 15px;
  margin-top: -1px;
}
ul.news li {
  padding-left: 33px;
  margin-bottom: 2.5em;
  list-style: none;
}
.title {
  font-family: Averia Serif Libre;
  font-size: 1.2857em;
  font-weight: 300;
  display: inline;
  margin-right: 0.5em;
}

ul.news li {
  position: relative;
  margin-bottom: 0;
  padding-bottom: 2.5em;
}

ul.news li:after {
  content: url("../assets/bullet.svg");
  position: absolute;
  left: -24px;
  top: 0px;
}

ul.news li:before {
  content: "";
  position: absolute;
  left: -16px;
  border-left: 1px solid #b7b7b7;
  height: 100%;
  width: 1px;
}

ul.news li:first-child:before {
  top: 6px;
}

ul.news li:last-child:before {
  height: 6px;
}
</style>
