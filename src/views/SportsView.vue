<script setup>
import BaseView from "./BaseView.vue";
</script>

<script>
import axios from "axios";

export default {
	name: "App",
	data() {
		return {
			sportsArticles: {},
		};
	},
	methods: {
		async getSportsArticles() {
			const { data } = await axios.get(
				"http://localhost:8000/api/articles/?category=sports"
			);
			this.sportsArticles = data;
			console.log(data);
		},
	},
	beforeMount() {
		this.getSportsArticles();
	},
};
</script>

<template>
	<div class="sports">
		<BaseView :articles="sportsArticles" />
	</div>
</template>
