<script setup>
const props = defineProps({
	title: String,
	published: String,
	id: Number,
});
</script>

<script></script>

<template>
	<div class="flex-container">
		<div class="text-div">
			<a :href="'/article/' + props.id">
				<h1>{{ props.title }}</h1>
			</a>
			<div class="details">
				<p>
					{{ props.published }}
				</p>
			</div>
		</div>
	</div>
	<hr />
</template>

<style scoped>
.flex-container {
	display: flex;
	padding-left: 10px;
}

img {
	width: 100%;
	height: 100%;
	object-fit: cover;
}
.text-div {
	width: 100%;
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

.details {
	font-family: Lato;
	font-size: 14px;
	color: #0077ff;
	text-transform: uppercase;
}

p {
	margin: 5px;
}
</style>
