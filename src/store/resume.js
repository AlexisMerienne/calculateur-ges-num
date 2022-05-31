

export const resumeModule = {
    namespaced : false,
    state : {
        items : [{
            key: 99,
            value : ['Total des émissions de GES', 0, 'une voiture diesel roulant 2m']
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
        },
    },
    mutations : {
        ADD_ROW (state,data)  {
            state.key++;
            const index = state.items.findIndex(elm => elm.value[0] === data.data.rowlabel);
            if (index==-1) {
                const size = state.items.length;
                console.log(size)
                const percent = Math.round((data.data.totalTab/data.conso)*10000)/100
                state.items.splice(size-1,0,{
                    key: state.key,
                    value: [data.data.rowlabel, data.data.totalTab + " gCO2e<br><span style='color:#7993ff'>"+percent+"%</span>", computeEquiv(data.data.totalTab)]
                })
                state.items[size].value[1] = data.conso
                state.items[size].value[2] = computeEquiv(data.conso)
            }
        },
        SET_NEW_RESUME_VALUE (state,data) {
            state.key++;
            const index = state.items.findIndex(elm => elm.value[0] === data.data.rowlabel);
            if (index!=-1) {
                const percent = Math.round((data.data.totalTab/data.conso)*10000)/100
                state.items[index].value = [data.data.rowlabel,data.data.totalTab + " gCO2e<br><span style='color:#7993ff'>"+percent+"%</span>",computeEquiv(data.data.totalTab)]
                const size = state.items.length;
                state.items[size-1].value[1] = data.conso
                state.items[size-1].value[2] = computeEquiv(data.conso)
            }
        },
        DELETE_ROWS (state) {
            state.items = [{
                key: 99,
                value : ['Total des émissions de GES', 0, 'une voiture diesel roulant 2m']
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
