const Sequelize = require("sequelize");

const sequelize = new Sequelize(
 'cartoon',
 'root',
 'Universum555-',
  {
    host: 'localhost',
    dialect: 'mysql'
  }
);

sequelize.authenticate().then(() => {
   console.log('Connection has been established successfully.');
}).catch((error) => {
   console.error('Unable to connect to the database: ', error);
});

const Personnage = sequelize.define("personnages", {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
 });


 const Score = sequelize.define("scores", {
    score: {
      type: DataTypes.STRING,
      allowNull: false
    }
 });

 const score_data = [ {score : "gauche"}, {score : "droite"}]

 const personnage_data = [
    {name : "Homer Simpson", scoreId: 1},
    {name : "Lisa Simpson", scoreId: 1},
    {name : "marie", scoreId: 2}
 ]

 Score.hasMany(Student)

sequelize.sync({ force: true }).then(() => {
   Grade.bulkCreate(score_data, { validate: true }).then(() => {
       Student.bulkCreate(personnage_data, { validate: true }).then(() => {
           Grade.findAll({
               where: {
                   grade: "gauche"
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