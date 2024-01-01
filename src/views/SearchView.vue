<script setup lang="ts">
import ListArticle from "../components/ListArticle.vue";
</script>

<script lang="ts">
import axios from "axios";

interface Article {
	id: number;
	title: string;
	image_url: string;
	category: string;
	published: string;
}

export default {
	name: "App",
	data() {
		return {
			searchTerm: "",
			currentSearchTerm: "",
			searchedArticles: [] as Article[],
			next: "",
			previous: "",
			page: 1,
			count: 0,
			notFound: false,
			searching: false,
		};
	},
	methods: {
		async searchArticles() {
			const apiUrl =
				"https://journal-post-backend.vercel.app/api/search/?page=" +
				this.page +
				"&query=" +
				this.currentSearchTerm;
			const { data } = await axios.get(apiUrl);
			this.searchedArticles = data.results;
			this.next = data.next;
			this.previous = data.previous;
			this.count = data.count;

			if (data.results.length > 0) {
				this.notFound = false;
			} else {
				this.notFound = true;
			}

			this.searching = false;
		},

		submitSearch() {
			this.searching = true;
			this.notFound = false;
			this.searchedArticles = [];
			this.page = 1;
			this.currentSearchTerm = this.searchTerm;
			this.searchArticles();
		},

		incrementPage() {
			this.page++;
			this.searchedArticles = [];
			this.searchArticles();
		},
		decrementPage() {
			if (this.previous) {
				this.page--;
				this.searchedArticles = [];
				this.searchArticles();
			}
		},
	},
	computed: {
		isLastPage() {
			return !this.next;
		},
		isFirstPage() {
			return !this.previous;
		},
		isValidSearchTerm() {
			return this.searchTerm.length > 2;
		},
	},
};
</script>

<template>
	<div class="container">
		<h1>Looking for something specific?</h1>
		<div class="description">
			<p class="description">
				We archive all articles published on our platform.
				Use the search engine below to find the article
				you're looking for.
			</p>
			<p v-if="count > 0">Found {{ count }} articles</p>
		</div>

		<input
			class="search-bar"
			:value="searchTerm"
			@input="(e: Event) => (searchTerm = (e.target as HTMLInputElement)?.value || '')"
			placeholder="Search..."
		/>

		<button
			class="search-button"
			@click="submitSearch"
			:disabled="!isValidSearchTerm"
		>
			Search
		</button>
		<p v-if="notFound">
			Looks like we didnt find anything. Try using another
			search term.
		</p>
		<p v-if="searching">Searching...</p>
		<div
			v-for="article in searchedArticles"
			:key="article.id"
		>
			<ListArticle
				:title="article.title"
				:published="article.published"
				:id="article.id"
			/>
		</div>
		<div
			class="pagination-buttons"
			v-if="searchedArticles.length > 0"
		>
			<button
				class="pagination-button next"
				@click="incrementPage"
				:disabled="isLastPage"
			>
				Next»
			</button>
			<button
				class="pagination-button previous"
				@click="decrementPage"
				:disabled="isFirstPage"
			>
				«Previous
			</button>
		</div>
	</div>
</template>

<style scoped>
.container {
	width: 80%;
	margin: auto;
}

h1 {
	font-family: Lato;
	color: #0077ff;
}

.description {
	font-family: Lato;
}
.search-bar {
	font-size: 24px;
	width: 80%;
	height: 50px;
	padding-left: 20px;
	border-radius: 10px;
}

.search-button {
	width: 10%;
	height: 50px;
	margin-left: 10px;
	background-color: #0077ff;
	border: none;
	border-radius: 10px;
	color: white;
	font-size: 16px;
	cursor: pointer;
	transition: 0.5s;
}

.search-button:disabled {
	background-color: gray;
	cursor: default;
}

.pagination-button {
	background-color: transparent;
	border: none;
	color: #0077ff;
	font-size: 16px;
	cursor: pointer;
	margin-bottom: 20px;
}

.pagination-button:disabled {
	color: gray;
}

.next {
	float: right;
}

.previous {
	float: left;
}
</style>
