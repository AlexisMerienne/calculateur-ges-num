import data from "../data/data.json"
import {getColors} from "@/utils/colors";
import {getGESAction} from "@/utils/computedges";

export const chartsModule = {
    namespaced:false,
    state: {
        gesdata : data
    },
    getters : {
        getData (state) {return state.gesdata;},
        getActionGes () {
            let data = {
                labels: ['mail','video','insta'],
                datasets: [
                    {
                        label: 'Emmission de GES des actions',
                        data: getGESAction(),
                        backgroundColor: [getColors().backgroundColor[0],getColors().backgroundColor[1],getColors().backgroundColor[4]],
                    }
                ]
            };
            return data;
        }
    }

}