import data from "../data/data.json"

export const chartsModule = {
    namespaced:false,
    state: {
        gesdata : data
    },
    getters : {
        getData (state) {return state.gesdata;},
        getActionGes (state) {
            let data = {
                labels: ['mail','video','insta'],
                datasets: [
                    {
                        label: 'Emmission de GES des actions',
                        data: [],
                        backgroundColor: [],
                    }
                ]
            };
        }
    }

}