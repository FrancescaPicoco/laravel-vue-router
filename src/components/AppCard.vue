<script>
import { store } from "../store.js"; //state management
import axios from "axios"; //importo Axios

export default {
	name: "AppEventList",
	data() {
		return {
			store,
		};
	},
	mounted() {
		this.getEventList();
	},
	methods: {
		getEventList() {
			let url = this.store.apiUrl + this.store.apiEndPoint;
			axios
				.get(url)
				.then((risultato) => {
					if (risultato.status === 200 && risultato.data.success) {
						console.log(risultato.data);
						this.store.eventList = risultato.data.results; //usare results -->vedere eventcontroller/api laravel
					} else {
						// controllare statusCode, presenza e veridicità di data.success
						console.error("Something Went Wrong");
					}
				})
				.catch((errore) => {
					console.error(errore);
				});
		},
	},
};
</script>

<template>

	<div class="d-flex flex-wrap">
		<div class="Mycard" v-for="event in store.eventList">
			<img :src="event.poster" class="card-img-top" :alt="event.artist" />
			<!--agg i : per richiamare array per img -->
			<div class="card-body">
				<h5 class="card-title">{{ event.artist }}</h5>
				<h5 class="card-title">{{ event.name }}</h5>
				<div class="card-text">
					<p>{{ event.location }}</p>
					<p>{{ event.city }}</p>
					<p>{{ event.date }}</p>
					<p>{{ event.address }}</p>
					<p>{{ event.tickets }}</p>
				</div>
				<a href="#" class="button-49 text-decoration-none" role="button">BUY TICKET</a>
				<div class="card-footer text-center">
					<router-link :to="{ name: 'details', params: { id: event.id } }">
						<span class="button-49 p-1">dettagli evento</span>
					</router-link>
				</div>
			</div>
		</div>
	</div>
	
</template>

<style scoped lang="scss">

.Mycard {
	width: calc((100% / 4) - 1rem);
	margin: 0.5rem;
}

a {
	padding: 1rem;
}

.button-49,
.button-49:after {
	width: 150px;
	height: 76px;
	line-height: 78px;
	font-size: 20px;
	font-family: "Bebas Neue", sans-serif;
	background: linear-gradient(45deg, transparent 5%, #ff013c 5%);
	border: 0;
	color: #fff;
	letter-spacing: 3px;
	box-shadow: 6px 0px 0px #00e6f6;
	outline: transparent;
	position: relative;
	user-select: none;
	-webkit-user-select: none;
	touch-action: manipulation;
}

.button-49:after {
	--slice-0: inset(50% 50% 50% 50%);
	--slice-1: inset(80% -6px 0 0);
	--slice-2: inset(50% -6px 30% 0);
	--slice-3: inset(10% -6px 85% 0);
	--slice-4: inset(40% -6px 43% 0);
	--slice-5: inset(80% -6px 5% 0);

	content: "ROCK";
	display: block;
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background: linear-gradient(
		45deg,
		transparent 3%,
		#00e6f6 3%,
		#00e6f6 5%,
		#ff013c 5%
	);
	text-shadow: -3px -3px 0px #f8f005, 3px 3px 0px #00e6f6;
	clip-path: var(--slice-0);
}

.button-49:hover:after {
	animation: 1s glitch;
	animation-timing-function: steps(2, end);
}

@keyframes glitch {
	0% {
		clip-path: var(--slice-1);
		transform: translate(-20px, -10px);
	}
	10% {
		clip-path: var(--slice-3);
		transform: translate(10px, 10px);
	}
	20% {
		clip-path: var(--slice-1);
		transform: translate(-10px, 10px);
	}
	30% {
		clip-path: var(--slice-3);
		transform: translate(0px, 5px);
	}
	40% {
		clip-path: var(--slice-2);
		transform: translate(-5px, 0px);
	}
	50% {
		clip-path: var(--slice-3);
		transform: translate(5px, 0px);
	}
	60% {
		clip-path: var(--slice-4);
		transform: translate(5px, 10px);
	}
	70% {
		clip-path: var(--slice-2);
		transform: translate(-10px, 10px);
	}
	80% {
		clip-path: var(--slice-5);
		transform: translate(20px, -10px);
	}
	90% {
		clip-path: var(--slice-1);
		transform: translate(-10px, 0px);
	}
	100% {
		clip-path: var(--slice-1);
		transform: translate(0);
	}
}

@media (min-width: 768px) {
	.button-49,
	.button-49:after {
		width: 200px;
		height: 86px;
		line-height: 88px;
	}
}
// importo variabili
// @use './styles/partials/variables' as *;

// ...qui eventuale SCSS di AppComponent
</style>
