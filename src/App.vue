<script>
import { store } from "./store.js"; //state management
import AppHeader from "./components/AppHeader.vue";
import { router } from "./router";

export default {
	components: {	
		AppHeader,
	},
	data() {
        return {
            store,
        };
    },
    mounted() {
    },
    methods: {},
};
</script>

<template>
	<header>
		<AppHeader />	
	</header>
	
	<main>
		<router-view></router-view>
	</main>
</template>

<style lang="scss">
// importo il foglio di stile generale dell'applicazione, non-scoped
@use "./styles/general.scss";
</style>

<style scoped lang="scss">
// importo variabili
// @use './styles/partials/variables' as *;

// ...qui eventuale SCSS di App.vue


main {
	padding: 1rem;
}

</style>
