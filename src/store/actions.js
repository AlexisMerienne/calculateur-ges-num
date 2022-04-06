import scenario from '../data/scenario.json'

export const actionModule = {
    namespaced: false,
    state : {
        action : [{
            id : 0,
            label : 'mail',
            value_1 : 10,
            value_2 : 2,
        },{
            id : 1,
            label : 'video',
            value_1 : 2,
            value_2 : null,
        },{
            id : 2,
            label : 'insta',
            value_1 : 2,
            value_2 : null,
        }],
        count : 0
    },
    getters : {
        getActions (state) {return state.action;},
        getAction: (state) => (id) => {return state.action.find(d=>d.id===id)},
        getMail (state) {
            let indexmail = state.action.findIndex(a=>a.label==='mail')
            return indexmail !== -1 ? state.action[indexmail] : null;

        }
    },
    mutations: {
        CREATE_ACTION (state,action) {
            state.action.push({
                id : state.count++,
                label : action,
                value_1 : null,
                value_2 : null,
            })
        },
        SET_VALUE_ACTION (state,action) {
            let index_action = state.action.findIndex(a=>a.id===action.id)
            state.action[index_action].value_1 = action.value_1;state.action[index_action].value_2=action.value_2
            state.action[index_action].label==='mail' ? scenario.actions.mail.nbr_mail = Number(action.value_1) : null
            state.action[index_action].label==='mail' ? scenario.actions.mail.nbr_mail_pj = Number(action.value_2) : null;
            state.action[index_action].label==='video' ? scenario.actions.video.temps = Number(action.value_1)*60 : null;
            state.action[index_action].label==='insta' ? scenario.actions.insta.temps = Number(action.value_1)*60 : null;
        },
        DELETE_ACTION (state,id) {
            const indexaction = state.action.findIndex(d => d.id === id)

            if (state.action[indexaction].label==='mail'){
                scenario.actions.mail.nbr_mail=0
                scenario.actions.mail.nbr_mail_pj=0
            }else {
                scenario.actions[state.action[indexaction].label].temps = 0
            }
            state.action.splice(state.action.findIndex(d => d.id === id), 1);
        }
    }
}

