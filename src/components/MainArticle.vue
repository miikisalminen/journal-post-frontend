<script setup>
import placeholder from "../assets/placeholder_img.svg";
const props = defineProps({
  id: Number,
  title: String,
  category: String,
  imageUrl: String,
  published: String,
});

function setPlaceholderImg(e) {
  e.target.src = placeholder;
}
</script>

<template>
  <div class="image-div">
    <img :src="props.imageUrl" @error="setPlaceholderImg" />
  </div>
  <a :href="'/article/' + props.id"
    ><h1>{{ props.title }}</h1></a
  >
  <div class="blue-line">
    <p>{{ props.category }}<br />{{ props.published }}</p>
  </div>
  <hr />
</template>

<style scoped>
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
  margin: 0;
}

.blue-line {
  border-left: 3px solid #0077ff;
  font-family: Lato;
  color: #0077ff;
  text-transform: uppercase;
}

p {
  margin: 5px;
}
</style>
