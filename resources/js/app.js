import Vue from 'vue'
import Router from 'vue-router';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

//Main pages
import App from './views/app.vue'
import AdminPage from './views/adminPage.vue'
import UserPage from './views/userPage.vue'

const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err);
};

Vue.use(Router);
const router = new Router({
    mode: 'history',
    routes: [
        { path: '/admin', component: AdminPage},
        { path: '/user', component: UserPage},
    ]
});

Vue.use(Vuetify);
const vuetify = new Vuetify();

const app = new Vue({
    router,
    vuetify,
    components: { App }
}).$mount('#app');