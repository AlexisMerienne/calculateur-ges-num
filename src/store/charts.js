import data from "../data/data.json"
import scenario from "../data/scenario.json"
import {getColors} from "@/utils/colors";
import {chartData} from "@/utils/computedges";

export const chartsModule = {
    namespaced:false,
    state: {
        gesdata : data,
        scenario : scenario,
        chartsids : ['chart-gesdevice','chart-gesaction','chart-gesproduction','chart-gesutilisationproduction','chart-gesdoubleutilisationproduction'],
        currentid : 'chart-gesbrique',
        narids : ['nar-gesdevice','nar-gesaction','nar-gesproduction','nar-gesutilisationproduction','nar-sobrieteproduction'],
        currentnarid : 'nar-gesdevice',
        isChart : false,
    },
    getters : {
        getCurrentChartId (state) {return state.chartsids;},
        getData (state) {return state.gesdata;},
        getChartData (state) {
            const datages = chartData(state.gesdata,state.scenario,state.currentid)
            let data = {
                title : datages.title,
                focus : datages.focus,
                src : datages.src,
                total : datages.total,
                chartdata : {
                    labels: datages.labels,
                    datasets: [
                        {
                            label: 'Emmission de GES des actions',
                            data: datages.data,
                            backgroundColor: [getColors().backgroundColor[0],getColors().backgroundColor[1],getColors().backgroundColor[4],getColors().backgroundColor[11]],
                        }
                    ]
                }
            };
            return data
        },
        getNarData (state) {
            return data.narratif[state.currentnarid];
        },
        getIsChart (state) {
            return state.isChart;
        },
    },
    mutations : {
        SET_NEXT_CHARTID (state) {
            const indexChart = state.chartsids.findIndex(id => id === state.currentid);
            state.currentid = indexChart < state.chartsids.length-1 ? state.chartsids[indexChart+1] : state.chartsids[0]
        },
        SET_NEXT_NARID (state) {
            const indexNar = state.narids.findIndex(id => id === state.currentnarid);
            state.currentnarid = indexNar < state.narids.length-1 ? state.narids[indexNar+1] : state.narids[0]
        },
        SET_iS_CHART (state,ischart) {
            state.isChart = ischart;
        }
    }

}