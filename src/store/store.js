import Vue from 'vue';
import Vuex from 'vuex';
import {deviceModule} from "@/store/device";
import {actionModule} from "@/store/actions";


Vue.use(Vuex);

export default new Vuex.Store( {
    namespaced: false,
    state : {
        views : ['home','actions','charts'],
        currentview : 'home'
    },
    getters : {
        getCurrentView (state) {return state.currentview;},
        getNextView (state) {
            const current_index = state.views.findIndex(elmt => elmt === state.currentview);
            return current_index <= 2 ? state.views[current_index+1] : state.views[0]
        },
        getPrevView (state) {
            const current_index = state.views.findIndex(elmt => elmt === state.currentview);
            return current_index > 0 ? state.views[current_index-1] : state.views[state.views.length - 1]
        }
    },
    mutations : {
        SET_VIEW (state) {
            const current_index = state.views.findIndex(elmt => elmt === state.currentview);
            state.currentview = current_index <= 2 ? state.views[current_index+1] : state.views[0]
        },
        SET_VIEW_PREV (state) {
            const current_index = state.views.findIndex(elmt => elmt === state.currentview);
            state.currentview = current_index > 0 ? state.views[current_index-1] : state.views[state.views.length - 1]
        }
    },
    modules: {
        deviceModule: deviceModule,
        actionModule : actionModule
    }

})