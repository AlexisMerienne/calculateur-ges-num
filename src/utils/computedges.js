const scenario = require('../data/scenario.json')
const data = require('../data/data.json')

exports.getGESAction = () => {

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

    return [roundDecimal(ges_mail),roundDecimal(ges_video),roundDecimal(ges_insta)];
}

function roundDecimal(x){
    return Math.round(x*100)/100
}