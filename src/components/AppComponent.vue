<script>
import { store } from "../store.js" //state management
import register from "../debug" //per debuggare il componente da console
import axios from 'axios'; //importo Axios

export default {
    name: "AppComponent",
    data() {
        return {
            store
        }
    },
    // mounted() {
	// 	this.getEventList();
	// },
    // methods: {
    //     getEventList() {
	// 		//let url = this.store.apiUrl + this.store.apiEndPoint;

	// 	axios.get("url").then(risultato => {
	// 		if(risultato.status === 200 && risultato.data.success){
	// 			console.log(risultato.data.payload);
	// 			this.store.eventList = risultato.data.payload;
	// 		}else{
	// 			console.log("something went wrong")
	// 		}
	// 	}).catch(errore => {
	// 		console.error(errore);
	// 	});
	// 	}
    // }
}
</script>

<template>
    <div>
        <h1>Sono un componente!</h1>
    </div>
</template>

<style scoped lang="scss">
// importo variabili
// @use './styles/partials/variables' as *;

// ...qui eventuale SCSS di AppComponent
</style>