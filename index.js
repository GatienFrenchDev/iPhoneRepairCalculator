const form = window.location.search
const urlParams = new URLSearchParams(form)
const data = {
    "prix_revente": {
        "5S": 35,
        "6G": 60,
        "6S": 80,
        "6SP": 85,
        "7G": 100,
        "7P": 115,
        "8G": 150,
        "8P": 170
    },
    "prix_batterie": {
        "5S": 15.99,
        "6G": 12.19,
        "6S": 12.19,
        "6SP": 16.9,
        "7G": 12.99,
        "7P": 16.9,
        "8G": 18.5,
        "8P": 22.99
    },
    "prix_ecran": {
        "5S": 22.9,
        "6G": 20.2,
        "6S": 24.99,
        "6SP": 37.99,
        "7G": 24.99,
        "7P": 27.99,
        "8G": 24.64,
        "8P": 33.99
    },
    "prix_back": {
        "5S": 16,
        "6G": 16.5,
        "6S": 16.9,
        "6SP": 20.7,
        "7G": 15.52,
        "7P": 35.9,
        "8G": 22.86,
        "8P": 29.29
    }
}

const modele = urlParams.get('modele')
const back = urlParams.get('back') == 'on' ? true : false
const front = urlParams.get('front') == 'on' ? true : false
const batterie = urlParams.get('batterie') == 'on' ? true : false
const prix = parseInt(urlParams.get('prix'))

let marge = -prix


if (back) {
    marge = marge - data.prix_back[modele]
}

if (front) {
    marge = marge - data.prix_ecran[modele]
}

if (batterie) {
    marge = marge - data.prix_batterie[modele]
}

marge = marge + data.prix_revente[modele]

document.getElementById('reponse').innerText = `Marge estimé : ${marge} €`