import data from "../data/data.json"
import scenario from "../data/scenario.json"
import {getColors} from "@/utils/colors";
import {chartData} from "@/utils/computedges";

export const chartsModule = {
    namespaced:false,
    state: {
        gesdata : data,
        scenario : scenario,
        chartsids : ['chart-gesaction','chart-gesdevice'],
        currentid : 'chart-gesaction'
    },
    getters : {
        getCurrentChartId (state) {return state.chartsids;},
        getData (state) {return state.gesdata;},
        getChartData (state) {
            console.log(state.currentid);
            const datages = chartData(state.gesdata,state.scenario,state.currentid)
            let data = {
                title : datages.title,
                focus : datages.focus,
                src : datages.src,
                chartdata : {
                    labels: datages.labels,
                    datasets: [
                        {
                            label: 'Emmission de GES des actions',
                            data: datages.data,
                            backgroundColor: [getColors().backgroundColor[0],getColors().backgroundColor[1],getColors().backgroundColor[4]],
                        }
                    ]
                }
            };
            return data
        }
    },
    mutations : {
        SET_NEXT_CHARTID (state) {
            const indexChart = state.chartsids.findIndex(id => id === state.currentid);
            state.currentid = indexChart < state.chartsids.length-1 ? state.chartsids[indexChart+1] : state.chartsids[0]
        }
    }

}