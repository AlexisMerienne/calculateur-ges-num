exports.setTextDevice = (device) => {
    switch(device){
        case 'smartphone' :
            return "J'utilise mon <strong> smartpone </strong> pendant "
        case 'laptop' :
            return "J'utilise mon <strong> laptop </strong> pendant "
        case 'tele' :
            return "J'utilise ma <strong> télé </strong> pendant "
        case 'ordinateurfixe' :
            return "J'utilise mon <strong> ordinateur fixe </strong> pendant "
        default :
            return "Appareil non reconnu"
    }
}