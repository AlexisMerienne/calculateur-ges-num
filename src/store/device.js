import scenario from "@/data/scenario.json";

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
                temps : [0],
                dette_fabrication : 0,
            })
        },
        SET_VALUE_DEVICE (state,device){
            let index_device = state.devices.findIndex(a=>a.id===device.id)
            state.devices[index_device].temps =  device.temps;
            state.devices[index_device].dette_fabrication =  device.dette_fabrication;

            state.devices[index_device].label==='laptop' ? scenario.laptop.temps[0] = device.temps: null
            state.devices[index_device].label==='laptop' ? scenario.laptop.dette_fabrication = device.dette_fabrication: null

            state.devices[index_device].label==='smartphone' ? scenario.smartphone.temps[0] = device.temps : null;
            state.devices[index_device].label==='smartphone' ? scenario.smartphone.dette_fabrication = device.dette_fabrication : null;

            state.devices[index_device].label==='tele' ? scenario.tele.temps[0] = device.temps : null;
            state.devices[index_device].label==='tele' ? scenario.tele.dette_fabrication = device.dette_fabrication : null;

            state.devices[index_device].label==='ordinateurfixe' ? scenario.ordinateurfixe.temps[0] = device.temps : null;
            state.devices[index_device].label==='ordinateurfixe' ? scenario.ordinateurfixe.dette_fabrication = device.dette_fabrication : null;
        },
        DELETE_DEVICE (state,id) {
            let index_device = state.devices.findIndex(d => d.id === id)

            scenario[state.devices[index_device].label].temps[0] = 0
            scenario[state.devices[index_device].label].dette_fabrication = 0

            state.devices.splice(state.devices.findIndex(d => d.id === id), 1);

        }
    }
}

