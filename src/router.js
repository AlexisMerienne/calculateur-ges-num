import Vue from "vue";
import Router from "vue-router";


Vue.use(Router);

export default new Router({
    mode: "history",
    routes: [
        {
            path: "/",
            name: "home",
            component: () => import("./components/views/Devices.vue")
        },
        {
            path: "/actions",
            name: "actions",
            component: () => import("./components/views/Actions.vue")
        },
        {
            path: "/charts",
            name: "charts",
            component: () => import("./components/views/Charts.vue")
        },
    ]
});