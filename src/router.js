import { createRouter, createWebHistory } from 'vue-router';
import EventHome from './components/pages/EventHome.vue';
import EventList from './components/pages/EventList.vue';
import EventDetails from './components/pages/EventDetails.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
      
        {
            path: '/',
            name: 'home',
            component: EventHome
        },
        {
            path: '/eventi',
            name: 'events',
            component: EventList
        },
        {
            path: '/eventi/:id',
            name: 'details',
            component: EventDetails,
            props : true
        },
       
    ]
});
export { router };