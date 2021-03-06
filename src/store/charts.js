import data from "../data/data.json"
import scenario from "../data/scenario.json"
import {chartData} from "@/utils/computedges";

export const chartsModule = {
    namespaced:false,
    state: {
        gesdata : data,
        scenario : scenario,
        chartsids : ['chart-gesdevice','chart-gesaction','chart-gesproduction','chart-gesutilisationproduction','chart-gesdoubleutilisationproduction'],
        currentid : 'chart-gesdoubleutilisationproduction',
        narids : ['nar-gesdevice','nar-gesaction','nar-gesproduction','nar-gesutilisationproduction','nar-sobrieteproduction'],
        currentnarid : 'nar-gesdevice',
        isChart : false,
        progress : 1,
        showBilan : true,
        consoTotale : 0
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
                isEquation : datages.isEquation,
                src_equation : datages.src_equation,
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
        getConsoTotal(state){
            state.consoTotale = parseFloat(chartData(state.gesdata,state.scenario,'chart-gesutilisationproduction').total)
            return state.consoTotale;
        },

        /**
         * Cette méthode calcule plusieurs valeurs :
         *  les émissions total en GES du scénario établit
         *  les émissions total en GES en prenant l'hypothèse que l'utilisateur se trouve en Allemagne
         *
         *  -
         * @param state
         * @returns {string}
         */
        getBilanData (state) {

            //source : https://climate.selectra.com/fr/empreinte-carbone/voiture
            const consodiesel = 293

            const chartdata = chartData(state.gesdata,state.scenario,'chart-gesutilisationproduction')



            const consototale =  chartdata.total;
            state.consoTotale = parseFloat(consototale)


            let consoyear = (parseFloat(consototale)*365.25)
            const consodistance = (consoyear / consodiesel)
            const consodistancediesel = Math.round(consodistance*100)/100
            consoyear = Math.round(consoyear*0.1)/100





            let partgestot = (((parseFloat(consototale)*365.25)/1000000) / data.empreinte_carbone_fr.valeur)*100
            partgestot = Math.round(partgestot*100)/100
            let partgestot2050 = (((parseFloat(consototale)*365.25)/1000000) / data.empreinte_carbone_fr_2050.valeur)*100
            partgestot2050 = Math.round(partgestot2050*100)/100

            return "Aujourd'hui, votre bilan carbone numérique est : <strong style='color:#6887ff'>" + consototale.toString() + "</strong>. Cette valeur comprend les émissions en gaz à effet de serre des terminaux, du réseau et des datacenters.<br><br>" +
                "Si votre utilisation du numérique est la même chaque jour de l'année, alors en une année vous aurez émis  <strong style='color:#6887ff'>"+consoyear+" kgCO2e</strong>, soit autant qu'une voiture diesel parcourant <strong style='color:#6887ff'>"+consodistancediesel.toString()+"  km</strong>."+
                "<br><br>Si vos émissions en CO2e sont égales à la moyenne française, votre utilisation du numérique représente <strong style='color:#6887ff'>"+partgestot+"%</strong> de votre empreinte carbone sur une année. Cependant, si votre empreinte carbone répond à l'<a href='https://datagir.ademe.fr/blog/budget-empreinte-carbone-c-est-quoi/'>objectif</a> dicté par la COP21, alors vos émissions de carbone liés au numérique représente <strong style='color:#6887ff'>"+partgestot2050+"%</strong> de cet objectif.<br>"
        },
        /**
         * Cette méthode calcule plusieurs valeurs :
         *  les émissions totales en GES du scénario établit
         *  les émissions totales en GES en prenant l'hypothèse que l'utilisateur se trouve en Allemagne
         *
         *  -
         * @param state
         * @returns {string}
         */
        getConclusionData (state) {

            //source : https://climate.selectra.com/fr/empreinte-carbone/voiture
            const consodiesel = 293

            const chartdata = chartData(state.gesdata,state.scenario,'chart-gesutilisationproduction')



            const consototale =  chartdata.total;
            const consoutil = chartdata.data[0];
            const consoproduction = chartdata.data[1]
            let consoyear = (parseFloat(consototale)*365.25)
            const consodistance = (consoyear / consodiesel)
            const consodistancediesel = Math.round(consodistance*100)/100
            consoyear = Math.round(consoyear*0.1)/100

            const intenscarbonefr = data.ges_elec_france.valeur;
            const intenscarbinede = data.ges_elec_allemagne.valeur;

            let consode = consoutil*(intenscarbinede/intenscarbonefr) + consoproduction
            consode = Math.round(consode*100)/100
            let consodiff = Math.round((consode-parseFloat(consototale))*100)/100


            let partgestot = (((parseFloat(consototale)*365.25)/1000000) / data.empreinte_carbone_fr.valeur)*100
            partgestot = Math.round(partgestot*100)/100
            let partgestot2050 = (((parseFloat(consototale)*365.25)/1000000) / data.empreinte_carbone_fr_2050.valeur)*100
            partgestot2050 = Math.round(partgestot2050*100)/100

            return "<h5 style='display: flex;justify-content: center;margin-bottom: 2em'><strong>-- Pour Conclure --</strong></h5>Aujourd'hui, en prenant en compte l'utilisation de vos appareils ainsi que leurs coûts carbones liés à la production, vous avez émis <strong style='color:#6887ff'>" + consototale.toString() + "</strong><br><br>" +
                "<br>Cet impact carbone dépend du mix énergétique du pays dans lequel on se trouve. Par exemple, en Allemagne, 50% de la production d'éléctricité provient d'énergies renouvelables, mais il reste beaucoup de charbone dans le mix énergétique, ce qui fait que l'intensité carbone est supérieur d'un facteur 10 par rapport à celui de la France. Ainsi, si vous étiez en Allemagne, votre impact carbone serait de : <strong style='color:#6887ff'>"+consode.toString()+" gC02e</strong>. Soit une différence de <strong style='color:#6887ff'>"+(consodiff).toString()+" gCO2e.</strong><br><br> "+
                "<h5 style='display: flex;justify-content: center;margin-bottom: 2em'><strong>-- Bilan sur <span style='color:#6887ff'>1</span> an --</strong></h5>Si votre utilisation du numérique est la même chaque jour de l'année, alors en une année vous aurez émis <strong style='color:#6887ff'>"+consoyear+" CO2e</strong>, soit autant qu'une voiture diesel parcourant <strong style='color:#6887ff'>"+consodistancediesel.toString()+"  km</strong>."+
                "<br><br>Si vos émissions en CO2e sont égales à la moyenne française, votre utilisation du numérique représente <strong style='color:#6887ff'>"+partgestot+"%</strong> de votre empreinte carbone sur une année. Cependant, si votre empreinte carbone répond à l'<a href='https://datagir.ademe.fr/blog/budget-empreinte-carbone-c-est-quoi/'>objectif</a> dicté par la COP21, alors vos émissions de carbone liées au numérique représentent <strong style='color:#6887ff'>"+partgestot2050+"% </strong>de cet objectif.<br><br>"
        },
        getProgress (state) {
            return state.progress;
        },
        getShowBilan(state){
            return state.showBilan;
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
                state.currentid= state.chartsids[state.chartsids.length-1]
            }


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
        },
        SET_SHOW_BILAN(state,bool){
            state.showBilan=bool;
        }
    }
}
