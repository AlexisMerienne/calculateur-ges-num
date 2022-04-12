const {getColors} = require("./colors");


exports.chartData = (data,scenario,id) => {
    switch (id) {
        case  'chart-gesaction' :
            return getGESAction(data,scenario);
        case 'chart-gesdevice' :
            return getGESDevice(data,scenario);
        case 'chart-gesproduction' :
            return getGESProduction(data,scenario);
        case 'chart-gesutilisationproduction' :
            return getGESProdUtilisation(data,scenario);
        case 'chart-gesbrique':
            return getBrique(data,scenario);
        case 'chart-gesdoubleutilisationproduction':
            return getGESProdUtilisationDoubleDureeDeVie(data,scenario)
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
    const nrj_insta  = data.utilisation.actions.insta.conso * ((data.utilisation.actions.onebyte.wifi.energie_par_byte+data.utilisation.actions.onebyte.mobile.quatreG.energie_par_byte)* Math.pow(10,6) +  (data.utilisation.actions.onebyte.datacenter.energie*Math.pow(10,6)))
    const ges_insta = mn_insta*nrj_insta*data.ges_elec_france.valeur

    const src = [{
            id : 0,
            src : 'base-carbone ADEME',
            link : data.links.base_carbone
        },
        {
            id : 1,
            src : "Rapport The Shift Project numérique 2018",
            link: data.links.shift_project_rapport_2018
        },
        {
            id : 2,
            src :"rapport CITIZEN : 'Empreinte carbone du numérique en France : des politiques publiques suffisantes pour faire face à l’accroissement des usages ? ' - juin 2020",
            link : data.links.rapport_citizen
        },
        {
            id : 3,
            src :"Rapport RTE Co2 2019 : https://assets.rte-france.com/prod/public/2020-07/Note_Bilan_CO2_2019.pdf,\n[2] CITIZING : 'Empreinte carbone du numérique en France : des politiques publiques suffisantes pour faire face à l’accroissement des usages ? '",
            link : data.links.RTE_2019
        }
    ]
    const initialValue=0;
    const ges_total = [roundDecimal(ges_mail), roundDecimal(ges_video), roundDecimal(ges_insta)].reduce(
        (previousValue, currentValue) => previousValue + currentValue,
        initialValue);

    return {
        'data' : [roundDecimal(ges_mail), roundDecimal(ges_video), roundDecimal(ges_insta)],
        'total' : roundDecimal(ges_total).toString() + ' gCo2e',
        'totalTab' : roundDecimal(ges_total),
        'labels' : ['mail','video','réseaux sociaux'],
        'title': 'Emmission de GES des actions numériques (en gCO2e)',
        'focus' : "Pour chaque action, on calcule le nombre de données necessaires à sa réalisation. Ensuite, on calcule le coût carbone de ses données dans le réseux auquel on additionne le coût carbone lié aux centres de données. Pour les mails ainsi que les vidéos, nous avons pris l'hypothèse que l'utilisateur est sur un réseua wi-fi. Pour les réseaux sociaux, l'utilisateur est en 4G.",
        'src' : src,
        'addrow' : true,
        'rowlabel' : 'utilisation services num',
        'backgroundColor' : [getColors().actionsColors[0],getColors().actionsColors[1],getColors().actionsColors[2],getColors().actionsColors[3],getColors().actionsColors[4],getColors().actionsColors[5]],

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

    const temps_ordifixe = getTempsTotalUtilisation(scenario,"ordinateurfixe")
    const nrj_ordifixe_daily = (data.utilisation.equipement.ordinateurfixe.energie / (365.25 * 24))*temps_ordifixe
    const ges_ordifixe=(nrj_ordifixe_daily*data.ges_elec_france.valeur)

    const src = [{
            id : 0,
            src : 'base-carbone ADEME',
            link : data.links.base_carbone
        },
        {
            id : 1,
            src : "Rapport The Shift Project numérique 2018",
            link: data.links.shift_project_rapport_2018
        },
        {
            id : 2,
            src :"rapport CITIZEN : 'Empreinte carbone du numérique en France : des politiques publiques suffisantes pour faire face à l’accroissement des usages ? ' - juin 2020",
            link : data.links.rapport_citizen
        },
        {
            id : 3,
            src :"Rapport RTE Co2 2019 : https://assets.rte-france.com/prod/public/2020-07/Note_Bilan_CO2_2019.pdf,\n[2] CITIZING : 'Empreinte carbone du numérique en France : des politiques publiques suffisantes pour faire face à l’accroissement des usages ? '",
            link : data.links.RTE_2019
        }]

    const initialValue=0;
    const ges_total = [roundDecimal(ges_smarpthone), roundDecimal(ges_laptop), roundDecimal(ges_tele),roundDecimal(ges_ordifixe)].reduce(
        (previousValue, currentValue) => previousValue + currentValue,
        initialValue);

    return {
        'data' : [roundDecimal(ges_smarpthone), roundDecimal(ges_laptop), roundDecimal(ges_tele),roundDecimal(ges_ordifixe)],
        'total' : roundDecimal(ges_total).toString() + ' gCo2e',
        'totalTab' : roundDecimal(ges_total),
        'labels' : ['smartphone','laptop','tele','ordinateur fixe'],
        'title': "Emmission de GES de l'utilisation des appareils numérique",
        'focus' : "Pour chaque appareil, on calcule la consommation en accord avec le temps d'utilisation que l'on mutliplie avec l'intensité énergétique de la France",
        'src' : src,
        'addrow' : true,
        'rowlabel' : 'utilisation appareils',
        'backgroundColor' : [getColors().elecColor[0],getColors().elecColor[1],getColors().elecColor[2],getColors().elecColor[3],getColors().elecColor[4],getColors().elecColor[5]]

    };
}

function getGESProduction(data,scenario){

    const ges_smartphone_daily_prod = getTempsTotalUtilisation(scenario,"smartphone")!=0 ? data.production.GES.smartphone : 0


    const ges_laptop_daily = getTempsTotalUtilisation(scenario,"laptop")!=0 ?data.production.GES.laptop : 0

    const ges_tele_daily = getTempsTotalUtilisation(scenario,"tele")!=0 ? data.production.GES.tele_connectee : 0

    const ges_ordifix_daily = getTempsTotalUtilisation(scenario,"ordinateurfixe") !=0 ? data.production.GES.ordinateurfixe : 0



    const initialValue=0;
    const ges_total = [roundDecimal(ges_smartphone_daily_prod), roundDecimal(ges_laptop_daily), roundDecimal(ges_tele_daily),roundDecimal(ges_ordifix_daily)].reduce(
        (previousValue, currentValue) => previousValue + currentValue,
        initialValue);


    const src = [{
            id : 0,
            src : 'base-carbone ADEME',
            link : data.links.base_carbone
        },
        {
            id:1,
            src : 'LEAN ICT Materials - Le Shift Project',
            link: data.links.Lean_ICT_Materials
        },
        {
            id : 2,
            src :"rapport CITIZEN : 'Empreinte carbone du numérique en France : des politiques publiques suffisantes pour faire face à l’accroissement des usages ? ' - juin 2020",
            link : data.links.rapport_citizen
        }
        ]
    return {
        'data' : [roundDecimal(ges_smartphone_daily_prod), roundDecimal(ges_laptop_daily), roundDecimal(ges_tele_daily),roundDecimal(ges_ordifix_daily)],
        'total' : roundDecimal(ges_total).toString() + ' kgCo2e',
        'totalTab' : roundDecimal(ges_total),
        'labels' : ['smartphone','laptop','tele','ordinateur fixe'],
        'title': "Emmission de GES de la production des appareils",
        'focus' : "Pour chaque appareil, on calcule le coût carbone de production que l'on divise par la durée d'utilisation moyenne",
        'src' : src,
        'addrow' : false,
        'rowlabel' : '',
        'backgroundColor' : [getColors().prodColors[0],getColors().prodColors[1],getColors().prodColors[2],getColors().prodColors[3],getColors().prodColors[4],getColors().prodColors[5]]
    };
}

function getGESProdUtilisation(data,scenario){


    const initialValue_1 = 0;const initialValue_2 = 0;
    const ges_utilisation_action = getGESAction(data,scenario).data.reduce(
        (previousValue, currentValue) => previousValue + currentValue,
        initialValue_1
    ) + getGESDevice(data,scenario).data.reduce(
            (previousValue, currentValue) => previousValue + currentValue,
            initialValue_2
    );

    let ges_production = 0;
    ges_production += getTempsTotalUtilisation(scenario,"smartphone")!=0?data.production.GES.smartphone * Math.pow(10,3) / (getDetteDevices(scenario,data).smartphone * 365.25) : 0
    ges_production+= getTempsTotalUtilisation(scenario,"laptop")!=0?data.production.GES.laptop * Math.pow(10,3) / (getDetteDevices(scenario,data).laptop * 365.25) : 0
    ges_production+= getTempsTotalUtilisation(scenario,"tele")!=0?data.production.GES.tele_connectee*Math.pow(10,3) / (getDetteDevices(scenario,data).tele * 365.25) : 0
    ges_production+= getTempsTotalUtilisation(scenario,"ordinateurfixe")!=0?data.production.GES.ordinateurfixe*Math.pow(10,3) / (getDetteDevices(scenario,data).ordinateurfixe * 365.25) : 0


    const initialValue=0;
    const ges_total = [roundDecimal(ges_utilisation_action), roundDecimal(ges_production)].reduce(
        (previousValue, currentValue) => previousValue + currentValue,
        initialValue);

    const src = [{
            id : 0,
            src : 'base-carbone ADEME',
            link : data.links.base_carbone
        },
        {
            id : 1,
            src : "Rapport The Shift Project numérique 2018",
            link: data.links.shift_project_rapport_2018
        },
        {
            id : 2,
            src :"rapport CITIZEN : 'Empreinte carbone du numérique en France : des politiques publiques suffisantes pour faire face à l’accroissement des usages ? ' - juin 2020",
            link : data.links.rapport_citizen
        },
        {
            id : 3,
            src :"Rapport RTE Co2 2019 : https://assets.rte-france.com/prod/public/2020-07/Note_Bilan_CO2_2019.pdf,\n[2] CITIZING : 'Empreinte carbone du numérique en France : des politiques publiques suffisantes pour faire face à l’accroissement des usages ? '",
            link : data.links.RTE_2019
        },
        {
            id:4,
            src : 'LEAN ICT Materials - Le Shift Project',
            link: data.links.Lean_ICT_Materials
        }]
    return {
        'data' : [roundDecimal(ges_utilisation_action), roundDecimal(ges_production)],
        'total' : roundDecimal(ges_total).toString() + ' gCo2e',
        'totalTab' : roundDecimal(ges_production),
        'labels' : ['utilisation','production'],
        'title': "Comparaison entre la part d'émission provenant de la production et de l'utilisation",
        'focus' : "On fait la somme des émissions de GES des actions et de l'utilisation des appareils numérique que l'on compare à la dette carbone des appareils liée à leur production",
        'src' : src,
        'addrow' : true,
        'rowlabel' : 'production',
        'backgroundColor' : [getColors().actionsColors[1],getColors().prodColors[1]]
    };
}

function getGESProdUtilisationDoubleDureeDeVie(data,scenario){


    const initialValue_1 = 0;const initialValue_2 = 0;
    const ges_utilisation_action = getGESAction(data,scenario).data.reduce(
        (previousValue, currentValue) => previousValue + currentValue,
        initialValue_1
    ) + getGESDevice(data,scenario).data.reduce(
        (previousValue, currentValue) => previousValue + currentValue,
        initialValue_2
    );

    let ges_production = 0;
    ges_production += getTempsTotalUtilisation(scenario,"smartphone")!=0?data.production.GES.smartphone * Math.pow(10,3) / (2*getDetteDevices(scenario,data).smartphone * 365.25) : 0
    ges_production+= getTempsTotalUtilisation(scenario,"laptop")!=0?data.production.GES.laptop * Math.pow(10,3) / (2*getDetteDevices(scenario,data).laptop * 365.25) : 0
    ges_production+= getTempsTotalUtilisation(scenario,"tele")!=0?data.production.GES.tele_connectee*Math.pow(10,3) / (2*getDetteDevices(scenario,data).tele * 365.25) : 0
    ges_production+= getTempsTotalUtilisation(scenario,"ordinateurfixe")!=0?data.production.GES.ordinateurfixe*Math.pow(10,3) / (2*getDetteDevices(scenario,data).ordinateurfixe * 365.25) : 0

    const initialValue=0;
    const ges_total = [roundDecimal(ges_utilisation_action), roundDecimal(ges_production)].reduce(
        (previousValue, currentValue) => previousValue + currentValue,
        initialValue);

    const src = [{
            id : 0,
            src : 'base-carbone ADEME',
            link : data.links.base_carbone
        },
        {
            id : 1,
            src : "Rapport The Shift Project numérique 2018",
            link: data.links.shift_project_rapport_2018
        },
        {
            id : 2,
            src :"rapport CITIZEN : 'Empreinte carbone du numérique en France : des politiques publiques suffisantes pour faire face à l’accroissement des usages ? ' - juin 2020",
            link : data.links.rapport_citizen
        },
        {
            id : 3,
            src :"Rapport RTE Co2 2019 : https://assets.rte-france.com/prod/public/2020-07/Note_Bilan_CO2_2019.pdf,\n[2] CITIZING : 'Empreinte carbone du numérique en France : des politiques publiques suffisantes pour faire face à l’accroissement des usages ? '",
            link : data.links.RTE_2019
        },
        {
            id:4,
            src : 'LEAN ICT Materials - Le Shift Project',
            link: data.links.Lean_ICT_Materials
        }]
    return {
        'data' : [roundDecimal(ges_utilisation_action), roundDecimal(ges_production)],
        'total' : roundDecimal(ges_total).toString() + ' gCo2e',
        'totalTab' : roundDecimal(ges_total),
        'labels' : ['utilisation','production'],
        'title': "Comparaison entre la part d'émission provenant de la production et de l'utilisation",
        'focus' : "On fait la somme des émissions de GES des actions et de l'utilisation des appareils numérique que l'on compare à la dette carbone des appareils liée à leur production divisée par deux",
        'src' : src,
        'addrow' : false,
        'rowlabel' : '',
        'backgroundColor' : [getColors().actionsColors[1],getColors().prodColors[1]]
    };
}



function getBrique(data,scenario){
    let ges_terminaux=0
    let ges_resaux=0
    let ges_datacenter=0

    const nbr_mail_sans_pj = scenario.actions.mail.nbr_mail-scenario.actions.mail.nbr_mail_pj;
    const nbr_mail_pj = scenario.actions.mail.nbr_mail_pj;
    const nrj_mail_res = data.utilisation.actions.mail.conso *  (data.utilisation.actions.onebyte.wifi.energie_par_byte*Math.pow(10,6));
    const nrj_mail_dc  = data.utilisation.actions.mail.conso *  (data.utilisation.actions.onebyte.datacenter.energie*Math.pow(10,6));
    const nrj_mail_pj_res = data.utilisation.actions.mail_piece_jointe.conso * data.utilisation.actions.onebyte.wifi.energie_par_byte*Math.pow(10,6);
    const nrj_mail_pj_dc = data.utilisation.actions.mail_piece_jointe.conso *(data.utilisation.actions.onebyte.datacenter.energie*Math.pow(10,6))
    const nrj_mail_daily_res = nbr_mail_sans_pj*nrj_mail_res + nbr_mail_pj*nrj_mail_pj_res;
    const nrj_mail_daily_dc = nbr_mail_sans_pj*nrj_mail_dc + nbr_mail_pj*nrj_mail_pj_dc;
    ges_resaux+=roundDecimal(nrj_mail_daily_res*data.ges_elec_france.valeur)
    ges_datacenter+=roundDecimal(nrj_mail_daily_dc*data.ges_elec_france.valeur)

    const mn_video = scenario.actions.video.temps
    const nrj_video_mn_res = data.utilisation.actions.video.conso *  (data.utilisation.actions.onebyte.wifi.energie_par_byte*Math.pow(10,6));
    const nrj_video_mn_dc = data.utilisation.actions.video.conso * (data.utilisation.actions.onebyte.datacenter.energie*Math.pow(10,6));
    const nrj_video_daily_res=mn_video*nrj_video_mn_res;
    const nrj_video_daily_dc = mn_video*nrj_video_mn_dc;
    ges_resaux+=roundDecimal(nrj_video_daily_res*data.ges_elec_france.valeur)
    ges_datacenter+=roundDecimal(nrj_video_daily_dc*data.ges_elec_france.valeur)

    const initialValue_1 = 0
    ges_terminaux += getGESProdUtilisation(data,scenario).data.reduce(
        (previousValue, currentValue) => previousValue + currentValue,
        initialValue_1)

    const initialValue=0;
    const ges_total = [roundDecimal(ges_terminaux), roundDecimal(ges_resaux), roundDecimal(ges_datacenter)].reduce(
        (previousValue, currentValue) => previousValue + currentValue,
        initialValue);

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
        'data' : [roundDecimal(ges_terminaux), roundDecimal(ges_resaux), roundDecimal(ges_datacenter)],
        'total' : roundDecimal(ges_total).toString() + ' gCo2e',
        'totalTab' : roundDecimal(ges_total),
        'labels' : ['terminaux','réseaux','datacenter'],
        'title': "GES par 'brique numérique'",
        'focus' : "On calcule les émissions de GES par brique numérique",
        'src' : src,
        'addrow' : false,
        'rowlabel' : ''
    };
}




function roundDecimal(x){
    return Math.round(x*100)/100
}

function getTempsTotalUtilisation(scenario,str_device){
    return scenario[str_device].temps[0]
}

/**
 *
 * @param scenario définit par l'utilisateur
 * @param data
 * @returns Si le nombre d'année que l'utilisateur possède l'appareil n'est pas renseigné, alors le durée de vie et la durée de vie moyenne de l'appareil
 */
function getDetteDevices(scenario,data){


    let ddv_smartphone = scenario.smartphone.dette_fabrication != 0 ? scenario.smartphone.dette_fabrication : data.production.duree_de_vie.smartphone
    let ddv_laptop = scenario.laptop.dette_fabrication != 0 ? scenario.laptop.dette_fabrication : data.production.duree_de_vie.laptop
    let ddv_tele = scenario.tele.dette_fabrication != 0 ? scenario.tele.dette_fabrication : data.production.duree_de_vie.ordinateurfixe
    let ddv_ordinateurfixe = scenario.ordinateurfixe.dette_fabrication != 0 ? scenario.ordinateurfixe.dette_fabrication : data.production.duree_de_vie.ordinateurfixe

    return {
        "smartphone" : ddv_smartphone,
        "laptop" : ddv_laptop,
        "tele": ddv_tele,
        "ordinateurfixe" : ddv_ordinateurfixe
    }
}
