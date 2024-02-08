<script>
import { store } from "../store.js"; //state management
import axios from "axios"; //importo Axios

export default {
  name: "AppComponent",
  data() {
    return {
      store,
    };
  },
  mounted() {
    //this.getEventList();
  },
  // methods: {
  //   getEventList() {
  //     let url = this.store.apiUrl + this.store.apiEndPoint;
  //     axios.get(url).then((risultato) => {
  //         if (risultato.status === 200 && risultato.data.success) {
  //           console.log(risultato.data.payload);
  //           this.store.eventList = risultato.data.payload;
  //         } else {
  //           // controllare statusCode, presenza e veridicità di data.success
  //           console.error("Something Went Wrong");
  //         }
  //       }).catch((errore) => {
  //         console.error(errore);
  //       });
  //   },
  // },
};
</script>

<template>
  <!-- <div class="container">
    <div>
        <h1 class="text-center fw-bold">Eventi</h1>
        <div class="row">
            <div class="col-6" v-for=" event in this.store.eventList ">                
              <div class="card" style="width: 18rem">
                  <img src={{ this.event.poster }} class="card-img-top" alt="event.artist" /> -->
                  <!-- <div class="card-body">
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
                  </div> -->
              <!-- </div>
            </div>
        </div>
    </div>
  </div> -->
</template>
<style scoped lang="scss">
// importo variabili
// @use './styles/partials/variables' as *;

// ...qui eventuale SCSS di AppComponent
</style>
