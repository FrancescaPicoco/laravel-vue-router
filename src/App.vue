<script>
import AppComponent from "./components/AppComponent.vue"

import axios from 'axios'; //importo Axios
import { store } from "./store.js" //state management

export default {
	components: {
		AppComponent
	},
	data() {
		return {
			store
		}
	},
	mounted() {
		this.getEventList();
	},
    methods: {
    getEventList() {
      let url = this.store.apiUrl + this.store.apiEndPoint;
      axios.get(url).then((risultato) => {
          if (risultato.status === 200 && risultato.data.success) {
            console.log(risultato.data);
            this.store.eventList = risultato.data.results; //usare results -->vedere eventcontroller/api laravel
          } else {
            // controllare statusCode, presenza e veridicità di data.success
            console.error("Something Went Wrong");
          }
        }).catch((errore) => {
          console.error(errore);
        });
    },
  },
};
</script>

<template>
	<main>
		<AppComponent />
		<div class="container">
    <div>
        <h1 class="text-center fw-bold">Eventi</h1>
        <div class="row">
            <div class="col-6" v-for=" event in store.eventList">                
              <div class="card" style="width: 18rem">
				<img :src="event.poster" class="card-img-top" :alt="event.artist" /> 
				<!--agg i : per richiamare array -->
                   <div class="card-body">
                      <h5 class="card-title">{{event.artist}}</h5> 
                      <h5 class="card-title">{{event.name}}</h5>
                      <div class="card-text">
                       <p>{{ event.location }}</p>
                       <p>{{ event.city }}</p>
                       <p>{{ event.date }}</p>
                       <p>{{ event.address }}</p>
                       <p>{{ event.tickets }}</p>
                      </div>
                      <a href="#" class="btn btn-primary">Go somewhere</a>
                  </div>
              </div>
            </div>
        </div>
    </div>
        </div>

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