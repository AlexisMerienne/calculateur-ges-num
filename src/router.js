import Vue from "vue";
import Router from "vue-router";


Vue.use(Router);

export default new Router({
    mode : "history",
    routes: [
        {
            path: "./",
            name: "home",
            component: () => import("./components/views/Devices.vue")
        },
        {
            path: "./",
            name: "homemobile",
            component: () => import("./components/views/mobile/DeviceMobile.vue")
        },
        {
            path: "./actions",
            name: "actions",
            component: () => import("./components/views/Actions.vue")
        },
        {
            path: "./actions",
            name: "actionsmobile",
            component: () => import("./components/views/mobile/ActionsMobile")
        },
        {
            path: "./bilan",
            name: "bilan",
            component: () => import("./components/views/Charts.vue")
        },
        {
            path: "./bilan",
            name: "bilanmobile",
            component: () => import("./components/views/mobile/ChartsMobile")
        },
        {
            path: "./solution",
            name: "solution",
            component: () => import("./components/views/Solution")
        },
        {
            path: "./solution",
            name: "solutionmobile",
            component: () => import("./components/views/mobile/SolutionMobile")
        },
    ]
});