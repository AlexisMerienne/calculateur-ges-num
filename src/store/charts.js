import data from "../data/data.json"
import scenario from "../data/scenario.json"
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
        progress : 1
    },
    getters : {
        getCurrentChartId (state) {return state.currentid;},
        getCurrentNarId (state) {return state.currentnarid;},
        getData (state) {return state.gesdata;},
        getChartData  (state) {
            const datages = chartData(state.gesdata,state.scenario,state.currentid)
            let data = {
                id : state.currentid,
                title : datages.title,
                focus : datages.focus,
                src : datages.src,
                total : datages.total,
                totalTab : datages.totalTab,
                addrow : datages.addrow,
                rowlabel : datages.rowlabel,
                chartdata : {
                    labels: datages.labels,
                    datasets: [
                        {
                            label: 'Emmission de GES des actions',
                            data: datages.data,
                            backgroundColor: datages.backgroundColor,
                        }
                    ]
                }
            };
            return data
        },
        getChartDataSpec : (state) => (id) =>{
            const datages = chartData(state.gesdata,state.scenario,id)
            let data = {
                id : id,
                title : datages.title,
                focus : datages.focus,
                src : datages.src,
                total : datages.total,
                totalTab : datages.totalTab,
                addrow : datages.addrow,
                rowlabel : datages.rowlabel,
                chartdata : {
                    labels: datages.labels,
                    datasets: [
                        {
                            label: 'Emmission de GES des actions',
                            data: datages.data,
                            backgroundColor: datages.backgroundColor,
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
        getConclusionData (state) {

            //source : https://climate.selectra.com/fr/empreinte-carbone/voiture
            const consodiesel = 293

            const consototale =  chartData(state.gesdata,state.scenario,'chart-gesutilisationproduction').total;
            const consodistance = ((parseFloat(consototale)*365.25) / consodiesel)
            const consodistancediesel = Math.round(consodistance*100)/100
            return "Pour conclure, aujourd'hui, en prenant en compte l'utilisation de vos appareils ainsi que leurs coûts carbones liés à la production, vous avez émis <strong>" + consototale.toString() + "</strong><br><br>Si votre utilisation du numérique est la même chaque jour de l'année, alors en 1 an vous aurez émis autant de CO2 qu'une voiture diesel parcourant <strong>"+consodistancediesel.toString()+"</strong> km"
        },
        getProgress (state) {
            return state.progress;
        }
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
        SET_PREVIOUS_CHART (state) {
            const indexChart = state.chartsids.findIndex(id => id === state.currentid);
            if (indexChart > 0){
                state.currentid  = state.chartsids[indexChart-1]
            }else{
                console.log('HERE')
                state.currentid= state.chartsids[state.chartsids.length-1]
            }
            console.log(state.currentid)

        },
        SET_PREVIOUS_NARID (state) {
            const indexNar = state.narids.findIndex(id => id === state.currentnarid);
            state.currentnarid = indexNar >0 ? state.narids[indexNar-1] : state.narids[state.narids.length-1]
        },
        SET_NARID_END (state) {
            state.currentnarid = "nar-gesdevice";
            state.currentid = "chart-gesdoubleutilisationproduction"
        },
        SET_iS_CHART (state,ischart) {
            state.isChart = ischart;
        },
        SET_PROGRESS (state,x){
            state.progress +=x
        }
    }
}