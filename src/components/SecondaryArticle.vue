<script setup>
import placeholder from "../components/svg/PlaceholderImg.vue";
const props = defineProps({
  title: String,
  category: String,
  imageUrl: String,
  published: String,
  id: Number,
});

// On error, swap the image of the article with the journal-post placeholder
function setPlaceholderImg(e) {
  e.target.src = placeholder;
}
</script>

<script></script>

<template>
  <div class="flex-container">
    <div class="text-div">
      <a :href="'/article/' + props.id">
        <h1>{{ props.title }}</h1>
      </a>
      <div class="blue-line">
        <p>{{ props.category }}<br />{{ props.published }}</p>
      </div>
    </div>
    <div class="image-div">
      <img :src="props.imageUrl" @error="setPlaceholderImg" />
    </div>
  </div>
  <hr />
</template>

<style scoped>
.flex-container {
  display: flex;
  border-left: 5px solid #0077ff;
  padding-left: 10px;
}

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.text-div {
  width: 70%;
}

.image-div {
  width: 30%;
  height: 125px;
  overflow: hidden;
  float: right;
  margin-left: 10px;
}

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
h1 {
  font-family: Averia Serif Libre;
  font-size: 24px;
  margin: 0;
}

.blue-line {
  border-left: 3px solid #0077ff;
  font-family: Lato;
  font-size: 14px;
  color: #0077ff;
  text-transform: uppercase;
}

p {
  margin: 5px;
}
</style>
