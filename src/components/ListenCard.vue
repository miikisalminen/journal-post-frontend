<script setup>
import PlayButton from "./svg/PlayButton.vue";
const props = defineProps({
  articles: Object,
});
</script>

<template>
  <div class="container">
    <p class="listen-to-journal-post">Listen to Journal Post</p>
    <div class="flex-container">
      <div
        class="listen-item"
        v-for="article in props.articles"
        :key="article.id"
      >
        <div class="content">
          <img :src="article.image_url" />
          <h1>{{ article.title.slice(0, 30) }}...</h1>
          <p class="desc">{{ article.body.slice(0, 60) }}...</p>
          <svg
            class="play-button"
            width="34"
            height="34"
            viewBox="0 0 34 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M16.562 33.3633C25.686 33.3633 33.0825 25.9668 33.0825 16.8428C33.0825 7.71875 25.686 0.322266 16.562 0.322266C7.43799 0.322266 0.0415039 7.71875 0.0415039 16.8428C0.0415039 25.9668 7.43799 33.3633 16.562 33.3633ZM12.141 24.4998L25.4033 16.8428L12.141 9.18576V24.4998Z"
              fill="#0077FF"
            />
          </svg>
          <p class="published">{{ article.published }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  background-color: #f6f6f6;
  border-radius: 10px;
  margin-left: 20px;
  filter: drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.25));
}
.listen-to-journal-post {
  font-family: Lato;
  font-size: 24px;
  color: #0077ff;
}
.flex-container {
  width: 100%;
  border-radius: 10px;
  overflow-x: scroll;
  overflow-y: hidden;
  -webkit-overflow-scrolling: touch;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.content {
  width: 300px;
  display: grid;
  grid-template-columns: 40% 60%;
  grid-template-rows: 30% 20% 0;
  gap: 30px;
  background-color: #e6e6e6;
  border-radius: 10px;
  margin: 10px;
  padding: 10px;
}

.content * {
  margin: 20px;
}
.play-button {
  width: 40px;
  height: auto;
}
img {
  width: 100%;
  height: 100px;
  border-radius: 10px;
  object-fit: cover;
}

.image-div {
  width: 100%;
  height: 300px;
  overflow: hidden;
}

.listen-item h1 {
  float: left;
  font-size: 20px;
  font-family: Averia Serif Libre;
}

.listen-item h1 {
  float: left;
  font-size: 20px;
  font-family: Averia Serif Libre;
}

.desc {
  grid-column: span 2;
  font-family: Averia Serif Libre;
}
.published {
  font-family: Lato;
  color: #000000;
}
</style>
