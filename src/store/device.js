
export const deviceModule = {
    namespaced: false,
    state : {
        devices : [],
        count : 0
    },
    getters : {
        getDevices (state) {return state.devices;},
        getDevice: (state) => (id) => {return state.devices.find(d=>d.id===id)}
    },
    mutations: {
        CREATE_DEVICE (state,device) {
            state.devices.push({
                id : state.count++,
                label : device,
                temps : 3,
            })
        },
        DELETE_DEVICE (state,id) {
            state.devices.splice(state.devices.findIndex(d => d.id === id), 1);
        }

    }
}

