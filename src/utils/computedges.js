exports.chartData = (data,scenario,id) => {
    switch (id) {
        case  'chart-gesaction' :
            return getGESAction(data,scenario);
        case 'chart-gesdevice' :
            return getGESDevice(data,scenario);
    }
}

function getGESAction(data,scenario){
    const nbr_mail_sans_pj = scenario.actions.mail.nbr_mail-scenario.actions.mail.nbr_mail_pj
    const nbr_mail_pj = scenario.actions.mail.nbr_mail_pj
    const nrj_mail  = data.utilisation.actions.mail.conso * (data.utilisation.actions.onebyte.wifi.energie_par_byte* Math.pow(10,6) +  (data.utilisation.actions.onebyte.datacenter.energie*Math.pow(10,6)))
    const nrj_mail_pj  = data.utilisation.actions.mail_piece_jointe.conso*(data.utilisation.actions.onebyte.wifi.energie_par_byte*Math.pow(10,6) +  (data.utilisation.actions.onebyte.datacenter.energie*Math.pow(10,6)))
    const ges_mail = (nbr_mail_sans_pj*nrj_mail + nbr_mail_pj*nrj_mail_pj)*data.ges_elec_france.valeur

    const mn_video = scenario.actions.video.temps
    const nrj_video  = data.utilisation.actions.video.conso * (data.utilisation.actions.onebyte.wifi.energie_par_byte* Math.pow(10,6) +  (data.utilisation.actions.onebyte.datacenter.energie*Math.pow(10,6)))
    const ges_video = mn_video*nrj_video*data.ges_elec_france.valeur

    const mn_insta = scenario.actions.insta.temps
    const nrj_insta  = data.utilisation.actions.insta.conso * (data.utilisation.actions.onebyte.wifi.energie_par_byte* Math.pow(10,6) +  (data.utilisation.actions.onebyte.datacenter.energie*Math.pow(10,6)))
    const ges_insta = mn_insta*nrj_insta*data.ges_elec_france.valeur

    const src = [{
        id : 0,
        src : 'base-carbone ADEME'
    },
        {
            id : 1,
            src : "Rapport The Shift Project numérique 2018"
        },
        {
            id : 2,
            src :"rapport CITIZEN : 'Empreinte carbone du numérique en France : des politiques publiques suffisantes pour faire face à l’accroissement des usages ? ' - juin 2020"
        }]

    return {
        'data' : [roundDecimal(ges_mail), roundDecimal(ges_video), roundDecimal(ges_insta)],
        'labels' : ['mail','video','insta'],
        'title': 'Emmission de GES des actions numérique',
        'focus' : 'Pour chaque action, on calcule le nombre de données necessaires à sa réalisation. Ensuite, on calcule le coût carbone de ses données dans le réseux + le coût carbone lié aux centres de données',
        'src' : src
    };
}

function getGESDevice(data,scenario){
    const temps_smartphone = getTempsTotalUtilisation(scenario,"smartphone")
    const nrj_smartphone_daily = (data.utilisation.equipement.smartphone.energie / (365.25 * 24))*temps_smartphone
    const ges_smarpthone = nrj_smartphone_daily*data.ges_elec_france.valeur

    const temps_laptop = getTempsTotalUtilisation(scenario,"laptop")
    const nrj_laptop_daily = (data.utilisation.equipement.laptop.energie / (365.25 * 24))*temps_laptop
    const ges_laptop= (nrj_laptop_daily*data.ges_elec_france.valeur)

    const temps_tele = getTempsTotalUtilisation(scenario,"tele")
    const nrj_tele_daily = (data.utilisation.equipement.tele.energie / (365.25 * 24))*temps_tele
    const ges_tele=(nrj_tele_daily*data.ges_elec_france.valeur)

    const src = [{
        id : 0,
        src : 'base-carbone ADEME'
    },
        {
            id : 1,
            src : "Rapport The Shift Project numérique 2018"
        },
        {
            id : 2,
            src :"rapport CITIZEN : 'Empreinte carbone du numérique en France : des politiques publiques suffisantes pour faire face à l’accroissement des usages ? ' - juin 2020"
        }]
    return {
        'data' : [roundDecimal(ges_smarpthone), roundDecimal(ges_laptop), roundDecimal(ges_tele)],
        'labels' : ['smartphone','laptop','tele'],
        'title': "Emmission de GES de l'utilisation des appareils numérique",
        'focus' : "Pour chaque appareil, on calcule la consommation en accord avec le temps d'utilisation que l'on mutliplie avec l'intensité énergétique de la France",
        'src' : src
    };
}

function roundDecimal(x){
    return Math.round(x*100)/100
}

function getTempsTotalUtilisation(scenario,str_device){
    return scenario[str_device].temps[0]
}

