<script setup>
import LargeLogoIcon from "./svg/LargeLogoIcon.vue";
import MagnifyingIcon from "./svg/MagnifyingIcon.vue";
</script>

<template>
	<nav>
		<a href="/"
			><LargeLogoIcon class="large-logo-icon"
		/></a>
		<div class="right-side">
			<a href="/search"
				><MagnifyingIcon class="magnifying-icon"
			/></a>
		</div>
		<hr />
		<div class="router-links">
			<router-link to="/business">Business</router-link>
			<router-link to="/entertainment"
				>Entertainment</router-link
			>
			<router-link to="/health">Health</router-link>
			<router-link to="/science">Science</router-link>
			<router-link to="/sports">Sports</router-link>
			<router-link to="/tech">Tech</router-link>
		</div>
	</nav>
</template>

<style scoped>
/* Small devices such as large phones (360px and up) */
@media only screen and (min-width: 360px) {
	nav {
		position: fixed;
		top: 0;
		z-index: 3;
		width: 100vw;
		height: 110px;
		background-color: #ffff;
		filter: drop-shadow(5px 5px 10px rgba(0, 0, 0, 0.25));
	}

	.large-logo-icon {
		width: 300px;
		height: auto;
		padding-top: 10px;
		transition: 0.2s;
	}

	.large-logo-icon:hover {
		opacity: 0.7;
	}

	.right-side {
		float: right;
		margin: 30px 5% 0 0;
		display: flex;
		justify-content: space-between;
	}

	.magnifying-icon {
		width: 20px;
		height: auto;
		transition: 0.2s;
	}
	.magnifying-icon:hover {
		opacity: 0.7;
	}

	.router-links {
		overflow: scroll;
	}

	hr {
		border-top: 1px solid #ccc;
		margin: 0;
		padding: 0;
	}

	.router-links * {
		margin: 5px;
		padding: 0px 10px;
		text-decoration: none;
		color: #000;
		font-size: 20px;
		font-family: "Lato";
	}

	.router-links *:hover {
		color: #0077ff;
	}
}

/* Medium devices such as tablets (768px and up) */
@media only screen and (min-width: 48em) {
	.router-links {
		overflow: hidden;
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin: 0 10%;
	}
	.large-logo-icon {
		margin-left: 10%;
	}

	.right-side {
		margin: 30px 10% 0 0;
	}
}

/* Large devices such as laptops (1024px and up) */
@media only screen and (min-width: 64em) {
	.router-links {
		margin: 0 20%;
	}
	.large-logo-icon {
		margin-left: 20%;
	}
	.right-side {
		margin: 30px 20% 0 0;
	}
}
</style>
