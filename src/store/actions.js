
export const actionModule = {
    namespaced: false,
    state : {
        action : [],
        count : 0
    },
    getters : {
        getActions (state) {return state.action;},
        getAction: (state) => (id) => {return state.action.find(d=>d.id===id)}
    },
    mutations: {
        CREATE_ACTION (state,action) {
            state.action.push({
                id : state.count++,
                label : action,
                temps : 3,
            })
        },
        DELETE_ACTION (state,id) {
            state.action.splice(state.action.findIndex(d => d.id === id), 1);
        }

    }
}

