

export const resumeModule = {
    namespaced : false,
    state : {
        items : [{
            key: 99,
            value : ['Total', 0, 'une voiture diesel roulant 2m']
        }],
        total : 0,
        colspan : 3,
        key : 0,
    },
    getters : {
        getItems(state){
            return state.items
        },
        getColspan(state){
            return state.colspan
        }
    },
    mutations : {
        ADD_ROW (state,data)  {
            state.key++;
            const index = state.items.findIndex(elm => elm.value[0] === data.rowlabel);
            if (index==-1) {
                state.items.splice(state.items.length - 1, 0, {
                    key: state.key,
                    value: [data.rowlabel, data.totalTab + " gCO2e", computeEquiv(data.totalTab)]
                })
                const sizeitems = state.items.length
                state.items[sizeitems-1].value[1] = (Math.round((data.totalTab+state.items[sizeitems-1].value[1])*100)/100)
                state.items[sizeitems-1].value[2] = computeEquiv(state.items[sizeitems-1].value[1])
            }
        },
        SET_NEW_RESUME_VALUE (state,data) {
            state.key++;
            const index = state.items.findIndex(elm => elm.value[0] === data.rowlabel);
            if (index!=-1) {
                const preValu = parseFloat(state.items[index].value[1])
                console.log(preValu)
                state.items[index].value = [data.rowlabel,data.totalTab + " gCO2e",computeEquiv(data.totalTab)]
                const sizeitems = state.items.length
                state.items[sizeitems-1].value[1] = (Math.round(((data.totalTab-preValu)+state.items[sizeitems-1].value[1])*100)/100)
                state.items[sizeitems-1].value[2] = computeEquiv(state.items[sizeitems-1].value[1])
            }
        },
        DELETE_ROWS (state) {
            state.items = [{
                key: 99,
                value : ['Total', 0, 'une voiture diesel roulant 2m']
            }]
            state.key=0;
        }
    }

}

function computeEquiv(consoges) {
    const consodiesel = 0.293;
    const consodistance = (parseFloat(consoges) / consodiesel)
    const consodistancediesel = Math.round(consodistance*100)/100

    return "une voiture diesel roulant " +  consodistancediesel.toString() + " m";

}