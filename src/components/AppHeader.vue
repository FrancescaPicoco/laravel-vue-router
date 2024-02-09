<script>
import { router } from "../router.js";
import { store } from "../store.js";

export default {
  name: "AppHeader",
  components: router,
  data() {
		return {
			store,
			menuItems: [
				{
					routeName: "home",
					label: "Homepage",
				},
				{
					routeName: "events",
					label: "Eventi",
				},
				{
					routeName: "details",
					label: "Dettagli",
				},
			],
		};
	},
}
</script>

<template>
    <div class="p-3 Myheader">
		<img src="../../public/logo3.png" class="logo" />
		<div class="d-flex justify-content-around">
			<!-- <h3 v-for="(item, index) in menuItems" :key="index" class="d-inline">
			    <router-link :to = "{name: item.routeName}" class="nav-link">
			    	{{item.label}}
			    </router-link>
		    </h3> -->
			<h3 v-for="(item, index) in menuItems" :key="index" class="d-inline">
				<router-link :to="{ name: item.routeName, params: { id:index} }" class="nav-link">
					{{ item.label }}
				</router-link>
			</h3>
		</div>
	</div>
</template>

<style scoped>
.Myheader {
	background-color: black;
	top: 0;
    left: 0;
	position: fixed;
	width: 100%;
	z-index: 1000;
	/* position: relative; */
	height: 70px;
}
.logo {
	position: absolute;
	left: 10px;
	width: 20%;
	z-index: 1;
}
h3 {
	color: goldenrod;
}
</style>