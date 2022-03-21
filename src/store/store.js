import Vue from 'vue';
import Vuex from 'vuex';
import {deviceModule} from "@/store/device";
import {actionModule} from "@/store/actions";
import {chartsModule} from "@/store/charts";


Vue.use(Vuex);

export default new Vuex.Store( {
    namespaced: false,
    state : {
        views : ['home','actions','charts'],
        currentview : 'home',
        update_charts : false,
        is_mobile : false
    },
    getters : {
        getCurrentView (state) {
            let crtview = state.currentview;
            return crtview;
        },
        getNextView (state) {
            const strmobile = state.is_mobile ? 'mobile' : ''
            const current_index = state.views.findIndex(elmt => elmt+strmobile === state.currentview);
            return current_index <= 2 ? state.views[current_index+1]+strmobile : state.views[0]+strmobile
        },
        getPrevView (state) {
            const strmobile = state.is_mobile ? 'mobile' : ''
            const current_index = state.views.findIndex(elmt => elmt+strmobile === state.currentview);
            return current_index > 0 ? state.views[current_index-1]+strmobile : state.views[state.views.length - 1]+strmobile
        },
        getIsMobile (state) {
            return state.is_mobile;
        }
    },
    mutations : {
        SET_VIEW (state) {
            const strmobile = state.is_mobile ? 'mobile' : '';
            const current_index = state.views.findIndex(elmt => elmt+strmobile === state.currentview);
            state.currentview = current_index <= 2 ? state.views[current_index+1]+strmobile : state.views[0]+strmobile

        },
        SET_VIEW_PREV (state) {
            const strmobile = state.is_mobile ? 'mobile' : '';
            const current_index = state.views.findIndex(elmt => elmt+strmobile === state.currentview);
            state.currentview = current_index > 0 ? state.views[current_index-1]+strmobile : state.views[state.views.length - 1]+strmobile
        },
        SET_CURRENT_VIEW (state,currentview) {
            state.currentview = currentview;
        },
        SET_IS_MOBILE (state,ismobile) {
            state.is_mobile = ismobile
        },
    },
    modules: {
        deviceModule: deviceModule,
        actionModule : actionModule,
        chartsModule : chartsModule
    }

})