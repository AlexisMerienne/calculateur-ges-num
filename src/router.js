import Vue from "vue";
import Router from "vue-router";


Vue.use(Router);

export default new Router({
    mode : "history",
    routes: [
        {
            path: "/",
            name: "home",
            component: () => import("./components/views/Devices.vue")
        },
        {
            path: "/",
            name: "homemobile",
            component: () => import("./components/views/mobile/DeviceMobile.vue")
        },
        {
            path: "/actions",
            name: "actions",
            component: () => import("./components/views/Actions.vue")
        },
        {
            path: "/actions",
            name: "actionsmobile",
            component: () => import("./components/views/mobile/ActionsMobile")
        },
        {
            path: "/charts",
            name: "charts",
            component: () => import("./components/views/Charts.vue")
        },
        {
            path: "/charts",
            name: "chartsmobile",
            component: () => import("./components/views/mobile/ChartsMobile")
        },
    ]
});