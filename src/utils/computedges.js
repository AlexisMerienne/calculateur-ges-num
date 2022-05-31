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
        case 'chart-gesdoubleutilisationproduction':
            return getGESProdUtilisationDoubleDureeDeVie(data,scenario)
    }
}

/**
 *
 * @param data
 * @param scenario
 * @returns {{total: string, backgroundColor: string[], rowlabel: string, data: *[], isEquation: boolean, src: [{src: string, link: *, id: number},{src: string, link: *, id: number},{src: string, link: *, id: number},{src: string, link: *, id: number}], totalTab: *, focus: string, title: string, src_equation: string, labels: string[], addrow: boolean}}
 *
 * Méthode qui calcule la consommaton des services numériques.
 * Il faut prendre en compte le coût carbone du réseau et des data centres
 */
function getGESAction(data,scenario){

    //On récupère le nbr de mails avec et sans pièce jointe envoyés
    const nbr_mail_sans_pj = scenario.actions.mail.nbr_mail-scenario.actions.mail.nbr_mail_pj
    const nbr_mail_pj = scenario.actions.mail.nbr_mail_pj

    /*
    data.utilisation.actions.mail.conso -> la taille en Mo d'un mail envoyé
    data.utilisation.actions.onebyte.wifi.energie_par_byte -> le coût énergétique en Kwh d'un 1 byte dans le réseau
    data.utilisation.actions.onebyte.datacenter.energie -> le coût énergétique en Kwh d'un byte dans le centre de donnée
     */
    const nrj_mail  = data.utilisation.actions.mail.conso * (data.utilisation.actions.onebyte.wifi.energie_par_byte* Math.pow(10,6) +  (data.utilisation.actions.onebyte.datacenter.energie*Math.pow(10,6)))
    const nrj_mail_pj  = data.utilisation.actions.mail_piece_jointe.conso*(data.utilisation.actions.onebyte.wifi.energie_par_byte*Math.pow(10,6) +  (data.utilisation.actions.onebyte.datacenter.energie*Math.pow(10,6)))
    /*
    On émet l'hypothèse que le réseau et le centre de donnée se situent en France

    data.ges_elec_france.valeur -> l'intensité carbone en France
     */
    const ges_mail = (nbr_mail_sans_pj*nrj_mail + nbr_mail_pj*nrj_mail_pj)*data.ges_elec_france.valeur

    //mêmes principes de calcule que pour les mails
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
        'title': 'Emission de GES des actions numériques (en gCO2eq)',
        'focus' : "Pour chaque action, on calcule le nombre de données necessaires à sa réalisation. Ensuite, on calcule le coût carbone de ses données dans le réseau auquel on additionne le coût carbone lié aux centres de données. Pour les mails ainsi que les vidéos, nous avons pris l'hypothèse que l'utilisateur est sur un réseau wi-fi. Pour les réseaux sociaux, l'utilisateur est en 4G.",
        'src' : src,
        'addrow' : true,
        'rowlabel' : 'utilisation services num',
        'backgroundColor' : [getColors().actionsColors[0],getColors().actionsColors[1],getColors().actionsColors[2],getColors().actionsColors[3],getColors().actionsColors[4],getColors().actionsColors[5]],
        'isEquation' :true,
        'src_equation' : 'formuleconsoservicenum.png'

    };
}

/**
 *
 * @param data
 * @param scenario
 * @returns {{total: string, backgroundColor: *[], rowlabel: string, data: *[], isEquation: boolean, src: [{src: string, link: *, id: number},{src: string, link: *, id: number},{src: string, link: *, id: number},{src: string, link: *, id: number}], totalTab: *, focus: string, title: string, src_equation: string, labels: string[], addrow: boolean}}
 *
 * Méthode qui calcule l'empreinte carbone (EC) des terminaux
 * On calcule l'énergie consommée par les appareils selon le scénario établit par l'utilisateur
 * On multiplie cette énergie par l'intensité carbone française pour obtenir l'EC
 */
function getGESDevice(data,scenario){

    /*
    On récupère le temps
     */
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

    const temps_tablette = getTempsTotalUtilisation(scenario,"tablette")
    const nrj_tablette_daily = (data.utilisation.equipement.tablette.energie / (365.25 * 24))*temps_tablette
    const ges_tablette=(nrj_tablette_daily*data.ges_elec_france.valeur)

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
        'data' : [roundDecimal(ges_smarpthone), roundDecimal(ges_laptop), roundDecimal(ges_tele),roundDecimal(ges_ordifixe),roundDecimal(ges_tablette)],
        'total' : roundDecimal(ges_total).toString() + ' gCo2e',
        'totalTab' : roundDecimal(ges_total),
        'labels' : ['smartphone','laptop','tele','ordinateur fixe','tablette'],
        'title': "Emission de GES de l'utilisation des appareils numériques",
        'focus' : "Pour chaque appareil, on calcule la consommation en accord avec le temps d'utilisation que l'on mutliplie avec l'intensité énergétique de la France",
        'src' : src,
        'addrow' : true,
        'rowlabel' : 'utilisation appareils',
        'backgroundColor' : [getColors().elecColor[0],getColors().elecColor[1],getColors().elecColor[2],getColors().elecColor[3],getColors().elecColor[4],getColors().elecColor[5],getColors().elecColor[6]],
        'isEquation' :true,
        'src_equation' : 'formuleconsodevice.png'

    };
}

/**
 *
 * @param data
 * @param scenario
 * @returns Les gaz à effet de serre émis lors de la phase de production des appareils;
 */
function getGESProduction(data,scenario){

    //On renvoie seulement le coût carbone des appareils qui ont été utilisé dans le scénario établit par l'utilisateur
    const ges_smartphone_daily_prod = getTempsTotalUtilisation(scenario,"smartphone")!=0 ? data.production.GES.smartphone : 0

    const ges_laptop_daily = getTempsTotalUtilisation(scenario,"laptop")!=0 ?data.production.GES.laptop : 0

    const ges_tele_daily = getTempsTotalUtilisation(scenario,"tele")!=0 ? data.production.GES.tele_connectee : 0

    const ges_ordifix_daily = getTempsTotalUtilisation(scenario,"ordinateurfixe") !=0 ? data.production.GES.ordinateurfixe : 0

    const ges_tablette_daily = getTempsTotalUtilisation(scenario,"tablette") !=0 ? data.production.GES.tablette : 0


    const initialValue=0;
    const ges_total = [roundDecimal(ges_smartphone_daily_prod), roundDecimal(ges_laptop_daily), roundDecimal(ges_tele_daily),roundDecimal(ges_ordifix_daily),roundDecimal(ges_tablette_daily)].reduce(
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
        'data' : [roundDecimal(ges_smartphone_daily_prod), roundDecimal(ges_laptop_daily), roundDecimal(ges_tele_daily),roundDecimal(ges_ordifix_daily),roundDecimal(ges_tablette_daily)],
        'total' : roundDecimal(ges_total).toString() + ' kgCo2e',
        'totalTab' : roundDecimal(ges_total),
        'labels' : ['smartphone','laptop','tele','ordinateur fixe','tablette'],
        'title': "Emission de GES de la production des appareils",
        'focus' : "Ce graphique présente la quantité de gaz à effet de serre émis lors de la production de chaque appareil",
        'src' : src,
        'addrow' : false,
        'rowlabel' : '',
        'backgroundColor' : [getColors().prodColors[0],getColors().prodColors[1],getColors().prodColors[2],getColors().prodColors[3],getColors().prodColors[4],getColors().prodColors[5],getColors().prodColors[6]],
        'isEquation' :false,
        'src_equation' : ''
    };
}

/**
 *
 * @param data
 * @param scenario
 * @returns Calcule le rapport entre les émissions de GES des utilisation avec la production des appareils
 *
 * Pour pouvoir comparer ces deux grandeurs, il faut ramener le cout carbone de la production à une unité temporelle
 * On divise donc le coût carbone lié à la production par l'âge de l'appareil
 */

function getGESProdUtilisation(data,scenario){


    const initialValue_1 = 0;const initialValue_2 = 0;

    //On récupère les emmissions en GES de l'utilisation du num sur une journée des actions num et de
    //la conso elec des appareils
    const ges_utilisation = getGESAction(data,scenario).data.reduce(
        (previousValue, currentValue) => previousValue + currentValue,
        initialValue_1
    ) + getGESDevice(data,scenario).data.reduce(
            (previousValue, currentValue) => previousValue + currentValue,
            initialValue_2
    );

    //On récupère le coût carbone de la production des appareils utilisé pendant la journée
    //On divise ce coût carbone par l'âge de l'appareil (âge == dette carbone)
    let ges_production = 0;
    ges_production += getTempsTotalUtilisation(scenario,"smartphone")!=0?data.production.GES.smartphone * Math.pow(10,3) / (getDetteDevices(scenario,data).smartphone * 365.25) : 0
    ges_production+= getTempsTotalUtilisation(scenario,"laptop")!=0?data.production.GES.laptop * Math.pow(10,3) / (getDetteDevices(scenario,data).laptop * 365.25) : 0
    ges_production+= getTempsTotalUtilisation(scenario,"tele")!=0?data.production.GES.tele_connectee*Math.pow(10,3) / (getDetteDevices(scenario,data).tele * 365.25) : 0
    ges_production+= getTempsTotalUtilisation(scenario,"ordinateurfixe")!=0?data.production.GES.ordinateurfixe*Math.pow(10,3) / (getDetteDevices(scenario,data).ordinateurfixe * 365.25) : 0
    ges_production+= getTempsTotalUtilisation(scenario,"tablette")!=0?data.production.GES.tablette*Math.pow(10,3) / (getDetteDevices(scenario,data).tablette * 365.25) : 0

    //calcule les ges total émis sur une journée
    const initialValue=0;
    const ges_total = [roundDecimal(ges_utilisation), roundDecimal(ges_production)].reduce(
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
        'data' : [roundDecimal(ges_utilisation), roundDecimal(ges_production)],
        'total' : roundDecimal(ges_total).toString() + ' gCo2e',
        'totalTab' : roundDecimal(ges_production),
        'labels' : ['utilisation','production'],
        'title': "Comparaison entre la part d'émissions provenant de la production et de l'utilisation",
        'focus' : "On fait la somme des émissions de GES des actions et de l'utilisation des appareils numérique que l'on compare à la dette carbone des appareils liée à leur production",
        'src' : src,
        'addrow' : true,
        'rowlabel' : 'production',
        'backgroundColor' : [getColors().actionsColors[1],getColors().prodColors[1]],
        'isEquation' :true,
        'src_equation' : 'dettecarbone.png'
    };
}


/**
 *
 * @param data
 * @param scenario
 * @return On calcule le rapport entre la phase de production et la phase d'utilisation des appareils
 * Seulement ici, on double l'âge des appareils renseigné par l'utilisateur
 */
function getGESProdUtilisationDoubleDureeDeVie(data,scenario){


    const initialValue_1 = 0;const initialValue_2 = 0;
    const ges_utilisation_action = getGESAction(data,scenario).data.reduce(
        (previousValue, currentValue) => previousValue + currentValue,
        initialValue_1
    ) + getGESDevice(data,scenario).data.reduce(
        (previousValue, currentValue) => previousValue + currentValue,
        initialValue_2
    );

    //Pour chaque appareil, on mutliplie par 2 l'âge des appareils
    let ges_production = 0;
    ges_production += getTempsTotalUtilisation(scenario,"smartphone")!=0?data.production.GES.smartphone * Math.pow(10,3) / (2*getDetteDevices(scenario,data).smartphone * 365.25) : 0
    ges_production+= getTempsTotalUtilisation(scenario,"laptop")!=0?data.production.GES.laptop * Math.pow(10,3) / (2*getDetteDevices(scenario,data).laptop * 365.25) : 0
    ges_production+= getTempsTotalUtilisation(scenario,"tele")!=0?data.production.GES.tele_connectee*Math.pow(10,3) / (2*getDetteDevices(scenario,data).tele * 365.25) : 0
    ges_production+= getTempsTotalUtilisation(scenario,"ordinateurfixe")!=0?data.production.GES.ordinateurfixe*Math.pow(10,3) / (2*getDetteDevices(scenario,data).ordinateurfixe * 365.25) : 0
    ges_production+= getTempsTotalUtilisation(scenario,"tablette")!=0?data.production.GES.tablette*Math.pow(10,3) / (getDetteDevices(scenario,data).tablette * 365.25) : 0

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
        'title': "Comparaison entre la part d'émissions provenant de la production et de l'utilisation en doublant la durée de vie des appareils",
        'focus' : "On fait la somme des émissions de GES des actions et de l'utilisation des appareils numérique que l'on compare à la dette carbone des appareils liée à leur production divisée par deux",
        'src' : src,
        'addrow' : false,
        'rowlabel' : '',
        'backgroundColor' : [getColors().actionsColors[1],getColors().prodColors[1]],
        'isEquation' :true,
        'src_equation' : 'dettecarbonesobriete.png'
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
    let ddv_tablette = scenario.tablette.dette_fabrication != 0 ? scenario.tablette.dette_fabrication : data.production.duree_de_vie.tablette


    return {
        "smartphone" : ddv_smartphone,
        "laptop" : ddv_laptop,
        "tele": ddv_tele,
        "ordinateurfixe" : ddv_ordinateurfixe,
        "tablette" : ddv_tablette,
    }
}

