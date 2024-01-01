<script setup>
import MainArticle from "../components/MainArticle.vue";
import SecondaryArticle from "../components/SecondaryArticle.vue";
import LatestNews from "../components/LatestNews.vue";
import ListenCard from "../components/ListenCard.vue";

import FetchingArticles from "../components/svg/FetchingArticles.vue";

const props = defineProps({
	articles: Object,
});
</script>

<template>
	<FetchingArticles
		v-if="Object.keys(props.articles).length == 0"
	/>
	<div
		class="container"
		v-if="Object.keys(props.articles).length > 0"
	>
		<div class="home-left">
			<MainArticle
				:id="props.articles.at(0).id"
				:title="props.articles.at(0).title"
				:imageUrl="props.articles.at(0).image_url"
				:category="props.articles.at(0).category"
				:published="props.articles.at(0).published"
			/>
			<SecondaryArticle
				v-for="article in props.articles.slice(1, 11)"
				:key="article.id"
				:id="article.id"
				:title="article.title"
				:imageUrl="article.image_url"
				:category="article.category"
				:published="article.published"
			/>
			<MainArticle
				:id="props.articles.at(12).id"
				:title="props.articles.at(12).title"
				:imageUrl="props.articles.at(12).image_url"
				:category="props.articles.at(12).category"
				:published="props.articles.at(12).published"
			/>

			<SecondaryArticle
				v-for="article in props.articles.slice(13, 23)"
				:key="article.id"
				:id="article.id"
				:title="article.title"
				:imageUrl="article.image_url"
				:category="article.category"
				:published="article.published"
			/>
		</div>
		<div class="home-right">
			<LatestNews
				:articles="props.articles.slice(24, 34)"
				heading="Latest news"
			/>
			<ListenCard
				:articles="props.articles.slice(35, 38)"
			/>
			<LatestNews
				:articles="props.articles.slice(39, 49)"
				heading=""
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
