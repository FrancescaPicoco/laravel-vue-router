<script>
//import { store } from "../../store"; // State management
//import { router } from "../../router"; // Importa il router dal tuo file router.js
//import axios from "axios"; //importo Axios

export default {
	name: "EventDetails",
	props: ["id"],
};
</script>

<template>
  <div class="container">
        <div class="row">
            <h1 class="mb-3">Dettaglio evento {{ this.$route.params.id }}</h1>
            <p>Da qui posso leggere solo l'id.</p>
            <p>Oppure...</p>
        </div>
    </div>
</template>

<style scoped>
</style>
