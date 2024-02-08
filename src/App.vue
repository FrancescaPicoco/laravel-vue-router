<script>
import { store } from "./store.js" //state management
import AppEventList from "./components/AppEventList.vue";
import { router } from "./router";

export default {
	components: {
    AppEventList,
    router
},
	data() {
		return {
			store,
			menuItems: [
				{
					routeName: "home",
					label:"Homepage"
				},
				{
					routeName: "events",
					label:"Eventi"
				},
				{
					routeName: "details",
					label:"dettagli"
				},

			]
		}
	},
// 	mounted() {
// 		this.getEventList();
// 	},
//     methods: {
//     getEventList() {
//       let url = this.store.apiUrl + this.store.apiEndPoint;
//       axios.get(url).then((risultato) => {
//           if (risultato.status === 200 && risultato.data.success) {
//             console.log(risultato.data);
//             this.store.eventList = risultato.data.results; //usare results -->vedere eventcontroller/api laravel
//           } else {
//             // controllare statusCode, presenza e veridicità di data.success
//             console.error("Something Went Wrong");
//           }
//         }).catch((errore) => {
//           console.error(errore);
//         });
//     },
//   },
};
</script>

<template>
	<header>
		<span v-for="(item, index) in menuItems" :key="index">
			<router-link :to = "{name: item.route params: { id: eventId }}" class="nav-link">
				{{item.label}}
			</router-link>
		</span>
	</header>
	<router-view></router-view>
	<main>
		<AppEventList />
		<button class="btn btn-primary">
			<font-awesome-icon icon="fa-solid fa-home" class="me-1" />
			<span>Primary button</span>
		</button>
	</main>
</template>

<style lang="scss">
// importo il foglio di stile generale dell'applicazione, non-scoped
@use './styles/general.scss';
</style>

<style scoped lang="scss">
// importo variabili
// @use './styles/partials/variables' as *;

// ...qui eventuale SCSS di App.vue
main {
	padding: 1rem;
}
</style>