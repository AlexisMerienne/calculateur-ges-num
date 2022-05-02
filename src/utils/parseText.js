exports.setTextDevice = (device,temps) => {
    switch(device){
        case 'smartphone' :
            return "L'écran de mon <strong> smartphone </strong> est allumé pendant <strong style='color: #2852f9;'>"+temps+"h</strong> dans une journée"
        case 'laptop' :
            return "J'utilise mon <strong> laptop </strong> pendant <strong style='color: #2852f9;'>"+temps+"h</strong> dans une journée"
        case 'tele' :
            return "Ma <strong> télé </strong> est allumée pendant <strong style='color: #2852f9;'>"+temps+"h</strong> dans une journée"
        case 'ordinateurfixe' :
            return "J'utilise mon <strong> ordinateur fixe </strong> pendant <strong style='color: #2852f9;'>"+temps+"h</strong> dans une journée"
        default :
            return "Appareil non reconnu"
    }
}