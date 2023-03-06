const Personnage = require("./models/personnage.model");
const Score = require("./models/score.model")

 const score_data = [ {score : "gauche"}, {score : "droite"}]

 const personnage_data = [
    {name : "Homer Simpson", scoreId: 1},
    {name : "Lisa Simpson", scoreId: 1},
    {name : "marie", scoreId: 2},
    {name : "Homer Simpson", scoreId: 2}
 ]

Score.hasMany(Personnage);
Personnage.belongsTo(Score);

sequelize.sync({ force: true }).then(() => {
   Score.bulkCreate(score_data, { validate: true }).then(() => {
       Personnage.bulkCreate(personnage_data, { validate: true }).then(() => {
           Score.findAll({
               where: {
                   score: "gauche"
               },
               include: [{
                   model: Personnage
               }]
           }).then(result => {
               console.dir(result, { depth: 5 });
           }).catch((error) => {
               console.error('Failed to retrieve data : ', error);
           });
       }).catch((err) => { console.log(err); });
   }).catch((err) => { console.log(err); });
}).catch((error) => {
   console.error('Unable to create table : ', error);
});