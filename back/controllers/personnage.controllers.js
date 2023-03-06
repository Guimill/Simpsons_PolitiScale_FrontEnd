const Personnage = require("./models/personnage.models.js");

const addEntry = () => {
Personnage.create({
       name: /* personnage de l'url */ nonSense,
       scoreId: /* Id du bouton clicqué */ nonSense,
    }).then(res => {
       console.log(res)
    }).catch((error) => {
       console.error('Failed to create a new record : ', error);
})};

exports.addEntry = addEntry;